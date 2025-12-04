
'use client';

import { useRouter } from 'next/navigation';
import { Wand2 } from 'lucide-react';
import { Button } from './ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { format } from 'date-fns';

export function SurpriseMeButton() {
  const router = useRouter();

  const handleSurpriseMe = () => {
    const startDate = new Date('1995-06-16').getTime();
    const endDate = new Date().getTime();
    const randomTime = startDate + Math.random() * (endDate - startDate);
    const randomDate = new Date(randomTime);
    const formattedDate = format(randomDate, 'yyyy-MM-dd');
    router.push(`/apod?date=${formattedDate}`);
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
            onClick={handleSurpriseMe}
          >
            <Wand2 className="h-5 w-5 mr-2" />
            Surprise Me
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>View a random picture</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
