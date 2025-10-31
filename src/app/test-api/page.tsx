
import { getApod } from '@/services/nasa';

export default async function TestApiPage() {
  let apodData;
  let error = null;
  
  try {
    apodData = await getApod();
  } catch (e: any) {
    error = e.message || 'An unknown error occurred.';
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold font-headline mb-8 text-center">
        NASA API Connection Test
      </h1>
      <div className="bg-card border border-border p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4 text-primary">API Response</h2>
        {error ? (
            <div className="bg-destructive/80 p-4 rounded-md text-destructive-foreground">
                <p className="font-bold">Error:</p>
                <p>{error}</p>
            </div>
        ) : (
            <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
                {JSON.stringify(apodData, null, 2)}
            </pre>
        )}
        <p className="text-muted-foreground mt-4 text-sm">
            This page attempts to fetch the latest data from the NASA APOD API. If you see JSON data above, the connection is successful. If you see an error, there might be an issue with the API key or the connection to NASA's servers.
        </p>
      </div>
    </div>
  );
}
