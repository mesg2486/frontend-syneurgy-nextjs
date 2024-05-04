"use client";
import { sidebarItems } from "@/config/sidebar.config";
import React from "react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Sidebar() {
  const pathname = usePathname();
  const { data: session } = useSession();

  return (
    <>
      <div className="w-80"></div>
      <div className="w-80 py-4 border-r bg-muted/40 fixed top-16 bottom-0 left-0 space-y-1 px-4"></div>
    </>
  );
}
