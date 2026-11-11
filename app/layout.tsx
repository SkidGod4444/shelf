import type { Metadata } from "next";
import { Besley, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";

const sans = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-schibsted",
});

const serif = Besley({
  subsets: ["latin"],
  variable: "--font-besley",
});

const siteUrl = "https://lib.saidev.codes";
const siteTitle = "Saidev Dhal's Shelf";
const siteDescription =
  "Saidev's library of books, papers, videos and blogs that he reads and recommends.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteTitle}`,
  },
  description: siteDescription,
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
      url: siteUrl,
    },
  ],
  creator: `Saidev Dhal`,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: siteTitle,
      },
    ],
    siteName: siteTitle,
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
    title: siteTitle,
    card: "summary_large_image",
    description: siteDescription,
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: siteTitle,
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
    <html lang="en" className={`${sans.variable} ${serif.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
         <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            forcedTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <Analytics />
      </body>
    </html>
  );
}
