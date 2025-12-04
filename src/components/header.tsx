
import Link from 'next/link';
import { GalleryVerticalEnd, Image } from 'lucide-react';
import { SurpriseMeButton } from './surprise-me-button';
import { NavLink } from './nav-link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-5xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-headline text-lg font-bold">
           <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-primary"
            >
              <path d="M12 2a10 10 0 1 0 10 10 10 10 0 0 0-10-10z" />
              <path d="m3.5 10 2.3 2.3" />
              <path d="m10 3.5 2.3 2.3" />
              <path d="M14.5 10h-5" />
              <path d="m14.5 14.5-5-5" />
            </svg>
            <span>Cosmic</span><span className="text-primary">Canvas</span>
        </Link>
        <div className="flex items-center gap-2">
          <NavLink href="/apod">
            <Image />
            <span className="hidden sm:inline">Today's Picture</span>
          </NavLink>
          <NavLink href="/apod-gallery">
            <GalleryVerticalEnd />
            <span className="hidden sm:inline">APOD Gallery</span>
          </NavLink>
          <SurpriseMeButton />
        </div>
      </div>
    </header>
  );
}
