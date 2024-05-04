import React from "react";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "@/styles/globals.css";
const inter = Inter({ subsets: ["latin"] });
import type { Metadata } from "next";
import AuthProvider from "@/components/providers/AuthProvider";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://syneurgy.com"),
  title: "Syneurgy",
  description: "",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: "Syneurgy",
    locale: "en_US",
    url: "https://www.syneurgy.com",
    siteName: "Landing Page",
    images: ["/og-image.png"],
    description: "",
  },
  twitter: {
    card: "summary_large_image",
    siteId: "example.com",
    site: "https://www.syneurgy.com",
    title: "Syneurgy",
    description: "",
    images: ["/og-image.png"],
  },
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={jakarta.className + " font-body bg-background"}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
