import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gpsworld-eg.com"),

  verification: {
    google: "AWOgcowOWabzJUJ9Q7VQHNdyVEa2M0IjGlFhMtZFKqU",
  },

  title: {
    default: "GPS World Egypt | أجهزة GPS وحلول التتبع في مصر",
    template: "%s | GPS World Egypt",
  },

  description:
    "GPS World Egypt متخصص في أجهزة GPS لتتبع السيارات والمركبات، حلول التتبع والمراقبة، برامج وسيرفرات GPS، وشحن نقاط السيرفرات مع دعم فني متكامل في مصر.",

  keywords: [
    "أجهزة GPS مصر",
    "جهاز تتبع سيارات",
    "GPS للسيارات",
    "أجهزة تتبع GPS",
    "جهاز GPS",
    "تتبع السيارات",
    "تتبع المركبات",
    "سيرفرات GPS",
    "برامج GPS",
    "شحن نقاط GPS",
    "GPS World Egypt",
  ],

  authors: [{ name: "GPS World Egypt" }],
  creator: "GPS World Egypt",
  publisher: "GPS World Egypt",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: "https://gpsworld-eg.com",
    siteName: "GPS World Egypt",
    title: "GPS World Egypt | أجهزة GPS وحلول التتبع في مصر",
    description:
      "أجهزة GPS لتتبع السيارات والمركبات، برامج وسيرفرات GPS، شحن نقاط ودعم فني متكامل في مصر.",
  },

  twitter: {
    card: "summary_large_image",
    title: "GPS World Egypt | أجهزة GPS وحلول التتبع في مصر",
    description:
      "أجهزة GPS لتتبع السيارات والمركبات وحلول التتبع والمراقبة في مصر.",
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}