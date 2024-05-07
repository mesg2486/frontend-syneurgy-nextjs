"use client";
import { sidebarItems } from "@/config/sidebar.config";
import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { AiOutlineArrowRight, AiOutlineExpand } from "react-icons/ai";
import { BiExpand } from "react-icons/bi";
import { FaCircleRight } from "react-icons/fa6";
import {
  HiArrowCircleRight,
  HiChevronRight,
  HiCog,
  HiLogout,
} from "react-icons/hi";
import { FaCog } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false);
  const pathname = usePathname();
  const { data: session } = useSession();

  return (
    <>
      <div
        className={`transition-all h-screen ${expanded ? "w-64" : "w-14"}`}
      ></div>
      <div
        className={`border-r flex flex-col transition-all border-white/10 z-30 fixed top-0 bottom-0 left-0 space-y-1 ${expanded ? "w-64" : "w-14"}`}
      >
        <button
          onClick={() => setExpanded((v) => !v)}
          className="absolute top-6 right-0 z-20 flex justify-center indeterminate: text-white bg-black/80 backdrop-blur-sm rounded-full translate-x-1/2 h-4 w-4"
        >
          <HiChevronRight
            className={`transition-all duration-500 ${expanded ? "rotate-180" : "rotate-0"}`}
          />
        </button>
        <div className="py-6 flex-1">
          {sidebarItems?.map((tab) => (
            <Link
              href={tab.link}
              key={tab.label}
              className={`flex items-center ${(tab.exact ? pathname === tab.group : pathname?.includes(tab.group)) ? "opacity-100" : "opacity-60"}`}
            >
              <div className="w-14 text-lg h-12 flex justify-center items-center">
                <div className="w-14 flex justify-center items-center">
                  <tab.icon />
                </div>
              </div>
              <div
                className={`${expanded ? "flex-1 flex whitespace-nowrap items-center h-12" : "hidden"}`}
              >
                {tab.label}
              </div>
            </Link>
          ))}
        </div>
        <div className="w-full text-lg flex flex-col justify-center items-center pb-6 gap-6">
          <button onClick={() => signOut()}>
            <FiLogOut />
          </button>
          <Link href={"/settings"}>
            <FaCog />
          </Link>
        </div>
      </div>
    </>
  );
}
