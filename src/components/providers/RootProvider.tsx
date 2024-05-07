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
          <div className="flex bg-secondary text-secondary-foreground">
            {pathname?.includes("lessons") ? <LessonSidebar /> : <Sidebar />}
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
