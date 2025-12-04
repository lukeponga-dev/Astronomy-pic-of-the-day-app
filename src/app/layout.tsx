import type {Metadata} from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from "@/components/ui/toaster"
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Space_Grotesk } from 'next/font/google';
// Removed @fontsource import as next/font/google will handle weights

export const metadata: Metadata = {
  title: 'Cosmic Canvas: NASA’s Astronomy Picture of the Day',
  description: 'Explore the universe, one day at a time, with Cosmic Canvas.',
};

const spaceGroteskBody = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400'], // Regular for body text
  variable: '--font-body',
});

const spaceGroteskHeadline = Space_Grotesk({
  subsets: ['latin'],
  weight: ['700'], // Bold for headlines
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
      <body className={`${spaceGroteskBody.variable} ${spaceGroteskHeadline.variable} font-body font-headline antialiased`}>
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
