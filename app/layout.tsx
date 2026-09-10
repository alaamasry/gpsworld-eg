import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gpsworld-eg.com"),

  verification: {
    google: "AWOgcowOWabzJUJ9Q7VQHNdyVEa2M0IjGlFhMtZFKqU",
  },

  title: {
    default: "GPS World Egypt | أجهزة GPS وتتبع السيارات في مصر",
    template: "%s | GPS World Egypt",
  },

  description:
    "GPS World Egypt يوفر أجهزة GPS وأجهزة تتبع السيارات والمركبات والموتوسيكلات والتروسيكلات في مصر، مع أجهزة GPS 2G و4G وحلول GPS Tracking وبرامج وسيرفرات GPS والدعم الفني.",

  keywords: [
    "أجهزة GPS",
    "اجهزة GPS",
    "أجهزة جي بي اس",
    "اجهزة جي بي اس",
    "أجهزة جى بى اس",
    "اجهزة جى بى اس",
    "جهاز GPS",
    "أجهزة تتبع GPS",
    "جهاز تتبع سيارات",
    "جهاز تتبع سيارة",
    "أجهزة تتبع السيارات",
    "أجهزة تتبع المركبات",
    "تتبع السيارات",
    "GPS للسيارات",
    "GPS مصر",
    "أجهزة GPS مصر",
    "جهاز GPS للسيارات",
    "جهاز تتبع للسيارة",
    "جهاز تتبع موتوسيكلات",
    "جهاز GPS للموتوسيكل",
    "جهاز تتبع للتروسيكل",
    "جهاز GPS للتروسيكل",
    "جهاز تتبع 4G",
    "جهاز GPS 4G",
    "جهاز تتبع 2G",
    "جهاز GPS 2G",
    "GPS Tracker",
    "GPS Tracking",
    "GPS Tracker Egypt",
    "GPS Tracking Egypt",
    "GPS Devices",
    "GPS Devices Egypt",
    "Car GPS",
    "Car GPS Tracker",
    "Vehicle GPS Tracker",
    "GPS Tracking Device",
    "برامج GPS",
    "سيرفرات GPS",
    "شحن نقاط السيرفرات",
    "GPS World Egypt",
  ],

  alternates: {
    canonical: "https://www.gpsworld-eg.com",
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
      "أجهزة GPS وأجهزة تتبع السيارات والمركبات والموتوسيكلات والتروسيكلات في مصر، مع حلول GPS Tracking وأجهزة 2G و4G وبرامج وسيرفرات GPS والدعم الفني.",
    url: "https://www.gpsworld-eg.com",
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
      "أجهزة GPS وأجهزة تتبع السيارات والمركبات وحلول GPS Tracking والبرامج والسيرفرات في مصر.",
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