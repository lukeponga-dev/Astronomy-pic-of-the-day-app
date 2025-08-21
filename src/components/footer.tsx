'use client';

import { useState, useEffect } from 'react';
import { ThemeToggle } from './theme-toggle';

export function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="py-8 w-full shrink-0 border-t border-border/40">
      <div className="container mx-auto flex justify-between items-center text-sm text-muted-foreground">
        <ThemeToggle />
        <div className="text-center">
          <p>
            &copy; {year} Cosmic Canvas. All rights reserved.
          </p>
          <p className="mt-1">
            Powered by NASA's APOD API.
          </p>
        </div>
        {/* Empty div for spacing */}
        <div /> 
      </div>
    </footer>
  );
}
