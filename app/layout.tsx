import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const font = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://shelf.devwtf.in/'),
  title: "Saidev Dhal's Shelf",
  description: "Saidev's library of books and papers.",
  keywords: [
    "Saidev Dhal's Shelf",
    "SkidGod",
    "Saidev Dhal Shelf",
    "Saidev Dhal Library",
    "Saidev Dhal Blogs",
    "saidevdhal's library",
    "shelf",
    "skidgod4444",
  ],
  authors: [
    {
      name: `Saidev Dhal`,
      url: 'https://shelf.devwtf.in/',
    },
  ],
  creator: `Saidev Dhal`,
  openGraph: {
    title: `Saidev Dhal`,
    description: "Saidev's library of books and papers.",
    url: 'https://shelf.devwtf.in/',
    images: [
      {
        url: '/preview.png',
      },
    ],
    siteName: `Saidev Dhal`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `Saidev Dhal`,
    card: "summary_large_image",
    site: 'https://shelf.devwtf.in/',
    creator: `Saidev Dhal`,
    description: "Saidev's library of books and papers.",
    images: [
      {
        url: '/preview.png',
        width: 1200,
        height: 630,
        alt: `Saidev Dhal`,
      },
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
         <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            forcedTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
