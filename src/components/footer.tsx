
'use client';

import { useState, useEffect } from 'react';
import { ThemeToggle } from './theme-toggle';

export function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="py-8 w-full shrink-0 border-t border-border/40 mt-12">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground gap-4">
        <div className="flex items-center gap-2">
             <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 text-primary"
            >
              <path d="M12 2a10 10 0 1 0 10 10 10 10 0 0 0-10-10z" />
              <path d="m3.5 10 2.3 2.3" />
              <path d="m10 3.5 2.3 2.3" />
              <path d="M14.5 10h-5" />
              <path d="m14.5 14.5-5-5" />
            </svg>
            <span className="font-headline text-base font-bold text-foreground">Cosmic<span className="text-primary">Canvas</span></span>
        </div>
        <div className="text-center sm:text-left">
          <p>
            &copy; {year} Cosmic Canvas. All rights reserved.
          </p>
          <p className="mt-1">
            Powered by NASA's APOD API.
          </p>
        </div>
        <ThemeToggle />
      </div>
    </footer>
  );
}
