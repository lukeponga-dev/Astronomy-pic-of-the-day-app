
import Link from 'next/link';
import { GalleryVerticalEnd, Home, Image } from 'lucide-react';
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
              <path d="m3 2 2.1 2.1" />
              <path d="M13 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
              <path d="m2.1 21.9 2.1-2.1" />
              <path d="M18 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
              <path d="m21.9 2.1-2.1 2.1" />
              <path d="M9 2a7 7 0 0 1 10 10" />
            </svg>
            <span>Cosmic</span><span className="text-primary">Canvas</span>
        </Link>
        <div className="flex items-center gap-2">
          <NavLink href="/apod">
            <Image />
            <span className="hidden sm:inline">Today's Picture</span>
          </NavLink>
          <NavLink href="/gallery">
            <GalleryVerticalEnd />
            <span className="hidden sm:inline">Gallery</span>
          </NavLink>
          <SurpriseMeButton />
        </div>
      </div>
    </header>
  );
}
