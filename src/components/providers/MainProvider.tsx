"use client";
import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SessionProvider } from "next-auth/react";
import NextTopLoader from "nextjs-toploader";

export default function MainProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: any) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <NextTopLoader
          height={1}
          color="rgba(255,255,255,0.4)"
          shadow={false}
          showSpinner={false}
        />
        <Navbar />
        {children}
        <Footer />
        <Toaster />
      </SessionProvider>
    </QueryClientProvider>
  );
}
