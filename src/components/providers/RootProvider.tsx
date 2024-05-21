"use client";

import React from "react";
import Sidebar from "@/components/layout/Sidebar";
import { SessionProvider } from "next-auth/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "@/components/ui/toaster";
import NextTopLoader from "nextjs-toploader";
import Dashnav from "../layout/Dashnav";
import Uploader from "../modals/Uploader";
import { AxiosUploadProvider } from "@/contexts/event.context";

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
          <NextTopLoader
            height={1}
            color="rgba(255,255,255,0.4)"
            shadow={false}
            showSpinner={false}
          />
          <AxiosUploadProvider>
            <Uploader />
            <div className="flex bg-secondary text-secondary-foreground">
              <Sidebar />
              <main className="flex-1 bg-secondary text-secondary-foreground">
                <Dashnav />
                <div className="px-8">{children}</div>
              </main>
              <Toaster />
            </div>
          </AxiosUploadProvider>
          {/* <Footer /> */}
        </SessionProvider>

        <ReactQueryDevtools position="right" />
      </QueryClientProvider>
    </>
  );
}
