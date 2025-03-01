import "./globals.css";
import "@upstash/claps/style.css";

import { ReactNode, Suspense } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";

import { SITE_URL } from "@/utils/const";
import cx from "@/utils/cx";

import { SegmentProvider } from "@/lib/segment/provider";

import Analytics from "@/components/Analytics";
import Footer from "@/components/master/footer";
import Header from "@/components/master/header";
import HeaderMobile from "@/components/master/header-mobile";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const interDisplay = localFont({
  variable: "--font-display",
  src: [
    {
      path: "./fonts/Inter-DisplayMedium.woff2",
      weight: "500",
    },
    {
      path: "./fonts/Inter-DisplaySemiBold.woff2",
      weight: "600",
    },
    {
      path: "./fonts/Inter-DisplayBold.woff2",
      weight: "700",
    },
  ],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={cx(
        inter.variable,
        interDisplay.variable,
        "min-h-screen scroll-smooth bg-zinc-950 text-sm text-zinc-50 antialiased md:text-base",
      )}
    >
      <body className="pt-20 md:pt-0">
        <Suspense>
          <Analytics />
        </Suspense>
        <SegmentProvider writeKey={process.env.NEXT_PUBLIC_SEGMENT_WRITE_KEY!}>
          <Header />
          <HeaderMobile />
          {children}
          <Footer />
        </SegmentProvider>

        {process.env.NODE_ENV !== "development" && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=G-QW5KRSTDM0`}
            />
            <Script
              id="ga"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: ` window.dataLayer = window.dataLayer || [];
                            function gtag(){ dataLayer.push(arguments); }
                            gtag('js', new Date());
                            gtag('config', 'G-QW5KRSTDM0');`,
              }}
            />
          </>
        )}
      </body>
    </html>
  );
}

const title = "Upstash: Serverless Data for Redis® and Kafka®";
const description =
  "Designed for the serverless with per-request pricing and Redis®/Kafka® API.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: `%s | Upstash`,
  },
  description,
  keywords: [
    "redis",
    "kafka",
    "qstash",
    "serverless database",
    "global database",
    "serverless kafka",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title,
    description,
    siteName: title,
    images: "/og-home.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    site: "@upstash",
    creator: "@upstash",
    images: "/og-home.jpg",
  },
  icons: {
    icon: "/icons/favicon-32x32.png",
    apple: "/icons/apple-touch-icon.png",
  },
  manifest: `${SITE_URL}/site.webmanifest`,
};
