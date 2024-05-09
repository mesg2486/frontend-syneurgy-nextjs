"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { SessionProvider } from "next-auth/react";
import NextTopLoader from "nextjs-toploader";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <NextTopLoader
          height={1}
          color="rgba(255,255,255,0.4)"
          shadow={false}
          showSpinner={false}
        />
        {children}
        <Toaster />
      </SessionProvider>
    </QueryClientProvider>
  );
}
