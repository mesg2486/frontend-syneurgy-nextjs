"use client";

import React from "react";
import Sidebar from "@/components/layout/Sidebar";
import { SessionProvider } from "next-auth/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "@/components/ui/toaster";

export default function RootProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SessionProvider>
          <div className="flex bg-secondary text-secondary-foreground">
            <Sidebar />
            <Toaster />
            <main className="flex-1 bg-secondary text-secondary-foreground">
              {children}
            </main>
          </div>
          {/* <Footer /> */}
        </SessionProvider>
        <ReactQueryDevtools position="right" />
      </QueryClientProvider>
    </>
  );
}
