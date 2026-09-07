import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://gpsworld-eg.com"),

  verification: {
    google: "AWOgcowOWabzJUJ9Q7VQHNdyVEa2M0IjGlFhMtZFKqU",
  },

  title: {
    default: "GPS World Egypt | أجهزة GPS وتتبع السيارات في مصر",
    template: "%s | GPS World Egypt",
  },

  description:
    "GPS World Egypt يوفر أجهزة GPS وتتبع السيارات والمركبات والموتوسيكلات والتروسيكلات في مصر، مع أجهزة 2G و4G وبرامج وسيرفرات GPS وشحن نقاط السيرفرات والدعم الفني.",

  keywords: [
    "أجهزة GPS",
    "جهاز GPS",
    "جهاز تتبع سيارات",
    "أجهزة تتبع GPS",
    "جهاز GPS للسيارات",
    "جهاز تتبع للسيارة",
    "GPS للسيارات",
    "GPS Tracker",
    "GPS Tracker مصر",
    "أجهزة GPS مصر",
    "أجهزة تتبع السيارات",
    "تتبع السيارات",
    "جهاز تتبع موتوسيكلات",
    "جهاز GPS للموتوسيكل",
    "جهاز تتبع للتروسيكل",
    "جهاز GPS للتروسيكل",
    "جهاز تتبع 4G",
    "جهاز GPS 4G",
    "جهاز تتبع 2G",
    "جهاز GPS 2G",
    "برامج GPS",
    "سيرفرات GPS",
    "شحن نقاط السيرفرات",
    "GPS World Egypt",
  ],

  alternates: {
    canonical: "https://gpsworld-eg.com",
  },

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
    title: "GPS World Egypt | أجهزة GPS وتتبع السيارات في مصر",

    description:
      "أجهزة GPS للسيارات والمركبات والموتوسيكلات والتروسيكلات، مع حلول التتبع والمراقبة وأجهزة 2G و4G وبرامج وسيرفرات GPS والدعم الفني.",

    url: "https://gpsworld-eg.com",

    siteName: "GPS World Egypt",

    locale: "ar_EG",

    type: "website",

    images: [
      {
        url: "/images/logo-gps-world-egypt.png",
        width: 1200,
        height: 630,
        alt: "GPS World Egypt - أجهزة GPS وتتبع السيارات",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "GPS World Egypt | أجهزة GPS وتتبع السيارات في مصر",

    description:
      "أجهزة GPS للسيارات والمركبات وحلول التتبع والمراقبة والبرامج والسيرفرات في مصر.",

    images: ["/images/logo-gps-world-egypt.png"],
  },

  icons: {
    icon: "/images/logo-gps-world-egypt.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}