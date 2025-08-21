import type {Metadata} from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from "@/components/ui/toaster"
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Cosmic Canvas',
  description: 'Explore the universe, one day at a time.',
};

const bodyFont = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

const headlineFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-headline',
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      </head>
      <body className={`${bodyFont.variable} ${headlineFont.variable} font-body antialiased`}>
        <ThemeProvider>
          <div className="relative flex min-h-dvh flex-col bg-background">
            <Header />
            <main className="flex-1 flex flex-col">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
