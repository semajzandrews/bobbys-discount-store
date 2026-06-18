import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SmoothScroll from "./components/SmoothScroll";
import "./globals.css";

const body = Inter({ variable: "--font-body", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bobby's Discount Store — The everything counter on Main St, Orange NJ",
  description:
    "A neighborhood variety store on Main Street in the City of Orange, NJ. Household goods, home essentials, and a little of everything, at honest discount prices. Open seven days. (973) 677-9777.",
  openGraph: {
    title: "Bobby's Discount Store · Orange NJ",
    description: "If you need it, it's probably here. The everything counter on Main St.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${body.variable} antialiased`}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@400,500,700,800,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-paper text-ink paper-grain min-h-screen">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
