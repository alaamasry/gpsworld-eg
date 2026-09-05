import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GPS World Egypt | أجهزة GPS وأنظمة التتبع",
  description:
    "GPS World Egypt - أجهزة GPS وأنظمة التتبع والسيرفرات والدعم الفني في مصر",

  openGraph: {
    title: "GPS World Egypt | أجهزة GPS وأنظمة التتبع",
    description:
      "أجهزة GPS وأنظمة التتبع والسيرفرات والدعم الفني في مصر",
    url: "https://gpsworld-eg.com",
    siteName: "GPS World Egypt",
    locale: "ar_EG",
    type: "website",
    images: [
      {
        url: "/images/logo-gps-world-egypt.png",
        width: 1200,
        height: 630,
        alt: "GPS World Egypt",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "GPS World Egypt | أجهزة GPS وأنظمة التتبع",
    description:
      "أجهزة GPS وأنظمة التتبع والسيرفرات والدعم الفني في مصر",
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