/**
 * @fileoverview Service for interacting with the NASA APOD API.
 */
import { type ApodData } from '@/lib/types';
import { format, subDays } from 'date-fns';

const NASA_API_KEY = process.env.NASA_API_KEY;
const API_URL = 'https://api.nasa.gov/planetary/apod';

function getApiKey(): string {
  const apiKey = NASA_API_KEY || 'DEMO_KEY';
  if (!apiKey) {
    throw new Error('NASA_API_KEY environment variable is not set and no DEMO_KEY is available.');
  }
  return apiKey;
}

async function fetchApodAPI(url: string): Promise<any> {
  const res = await fetch(url, { next: { revalidate: 3600 } }); // Revalidate every hour

  if (!res.ok) {
    let errorMsg = 'Failed to fetch APOD data';
    try {
      const errorData = await res.json();
      errorMsg = errorData.msg || errorMsg;
    } catch (e) {
      // Ignore if response is not JSON
    }
    throw new Error(errorMsg);
  }

  const data = await res.json();
  
  // The API sometimes returns an error object with a 200 status code
  if (data.code && data.msg) {
    throw new Error(data.msg);
  }

  return data;
}

export async function getApod(date?: Date): Promise<ApodData> {
  const apiKey = getApiKey();
  const dateString = date ? format(date, 'yyyy-MM-dd') : '';
  const url = `${API_URL}?api_key=${apiKey}${dateString ? `&date=${dateString}` : ''}`;
  
  return fetchApodAPI(url);
}

export async function getRecentApods(count: number): Promise<ApodData[]> {
    const apiKey = getApiKey();
    const endDate = new Date();
    const startDate = subDays(endDate, count - 1);

    const startDateString = format(startDate, 'yyyy-MM-dd');
    const endDateString = format(endDate, 'yyyy-MM-dd');

    const url = `${API_URL}?api_key=${apiKey}&start_date=${startDateString}&end_date=${endDateString}`;

    const data = await fetchApodAPI(url);
    
    // The API returns images in chronological order, so we reverse it to get the most recent first.
    return Array.isArray(data) ? data.reverse() : [];
}
