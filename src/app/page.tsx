
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1 flex items-center justify-center text-center px-4">
        <div className="relative max-w-3xl">
          <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold font-headline pb-4 text-foreground">
              NASA’s Astronomy Picture of the Day
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
              Journey through the cosmos with stunning images and expert explanations from NASA's Astronomy Picture of the Day.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="group">
                <Link href="/apod">
                  See Today's Picture
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
