import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// METADATA SECTION
export const metadata: Metadata = {
  metadataBase: new URL('https://hasanzahid.eu'),
  title: {
    default: "Hasan Zahid | Software Engineer",
    template: "%s | Hasan Zahid"
  },
  description: "Portfolio of Hasan Zahid (Zahid Hasan), a Software Engineering student at Chalmers | GU specializing in low-level programming, Agile, and IoT solutions.",
  keywords: [
    "Hasan Zahid",
    "Zahid Hasan",
    "HasanZahid",
    "hasanzahid.eu",
    "Software Engineer",
    "Chalmers",
    "Gothenburg",
    "Web Developer"
  ],
  authors: [{ name: "Hasan Zahid", url: "https://hasanzahid.eu" }],
  creator: "Hasan Zahid",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hasanzahid.eu",
    title: "Hasan Zahid | Software Engineer",
    description: "Portfolio of Hasan Zahid (Zahid Hasan). View my projects, skills, and experience in Software Engineering.",
    siteName: "Hasan Zahid Portfolio",
    images: [
      {
        url: "/Profile-Photo.jpg",
        width: 1200,
        height: 630,
        alt: "Hasan Zahid Profile",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
