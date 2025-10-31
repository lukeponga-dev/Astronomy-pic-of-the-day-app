
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { type ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type NavLinkProps = {
  href: string;
  children: ReactNode;
};

export function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Button
      variant={isActive ? 'secondary' : 'ghost'}
      asChild
      className={cn('transition-colors', {
        'hover:bg-secondary/80': isActive,
        'hover:bg-accent': !isActive,
      })}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
}
