import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import RootProvider from "@/components/providers/RootProvider";

const inter = Inter({ subsets: ["latin"] });

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
