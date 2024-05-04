"use client";

import React from "react";
import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";
import { SessionProvider } from "next-auth/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "@/components/ui/toaster";
import { usePathname } from "next/navigation";
import LessonSidebar from "@/components/layout/LessonSidebar";

export default function RootProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();
  const pathname = usePathname();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SessionProvider>
          <Navbar />
          <div className="flex gap-6 pr-6">
            {pathname?.includes("lessons") ? <LessonSidebar /> : <Sidebar />}
            <Toaster />
            <main className="flex-1 max-w-6xl">{children}</main>
          </div>
          {/* <Footer /> */}
        </SessionProvider>
        <ReactQueryDevtools position="right" />
      </QueryClientProvider>
    </>
  );
}
