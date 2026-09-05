import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://gpsworld-eg.com"),

  title: "GPS World Egypt | أجهزة GPS وحلول التتبع في مصر",

  description:
    "GPS World Egypt - أجهزة تتبع GPS للسيارات والمركبات، برامج وسيرفرات GPS، شحن نقاط السيرفرات والدعم الفني في مصر.",

  openGraph: {
    title: "GPS World Egypt | أجهزة GPS وحلول التتبع في مصر",

    description:
      "أجهزة GPS للسيارات والمركبات وحلول التتبع والمراقبة والبرامج والسيرفرات والدعم الفني.",

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

    title: "GPS World Egypt | أجهزة GPS وحلول التتبع في مصر",

    description:
      "أجهزة GPS للسيارات والمركبات وحلول التتبع والمراقبة والبرامج والسيرفرات.",

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