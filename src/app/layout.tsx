import type {Metadata} from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from "@/components/ui/toaster"
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Space_Grotesk } from 'next/font/google';
import '@fontsource/space-grotesk/700.css';

export const metadata: Metadata = {
  title: 'Cosmic Canvas: NASA’s Astronomy Picture of the Day',
  description: 'Explore the universe, one day at a time, with Cosmic Canvas.',
};

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-body',
});

const headlineFont = {
    variable: '--font-headline',
    className: 'font-headline'
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      </head>
      <body className={`${spaceGrotesk.variable} ${headlineFont.className} font-body antialiased`}>
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
