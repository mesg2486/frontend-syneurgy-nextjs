"use client";
import { sidebarItems } from "@/config/sidebar.config";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import {
  HiChevronDoubleDown,
  HiChevronDown,
  HiChevronRight,
} from "react-icons/hi";
import { FaCog } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { Drawer, DrawerContent } from "../ui/drawer";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false);
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <div
        className={`transition-all hidden md:block h-screen ${expanded ? "w-64" : "w-14"}`}
      ></div>
      <div
        className={`border-r hidden md:flex flex-col transition-all border-white/10 z-30 fixed top-0 bottom-0 left-0 space-y-1 ${expanded ? "w-64" : "w-14"}`}
      >
        <button
          onClick={() => setExpanded((v) => !v)}
          className="absolute top-10 right-0 z-20 flex justify-center indeterminate: text-white bg-tertiary border border-white/20 backdrop-blur-sm rounded-full translate-x-1/2 h-4 w-4 items-center"
        >
          <HiChevronRight
            className={`transition-all duration-500 ${expanded ? "rotate-180" : "rotate-0"}`}
          />
        </button>
        <Link
          href="/"
          className="hidden cursor-pointer md:flex justify-center items-center pt-4"
        >
          <span className="w-14 text-lg flex justify-center items-center">
            <img src="/logo-icon.png" className="h-5" alt="syneurgy" />
          </span>
          <span
            className={`${expanded ? "flex-1 opacity-60 text-sm flex whitespace-nowrap items-center" : "hidden"}`}
          >
            Syneurgy
          </span>
        </Link>
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
        <div className="w-full text-lg pb-6 space-y-6">
          <div onClick={() => signOut()}>
            <div className="flex justify-between items-center">
              <div className="w-14 text-lg h-12 flex justify-center items-center">
                <div className="w-14 flex justify-center items-center">
                  <FiLogOut />
                </div>
              </div>
              <div
                className={`${expanded ? "flex-1 opacity-60 text-sm flex whitespace-nowrap items-center h-12" : "hidden"}`}
              >
                Sign Out
              </div>
            </div>
          </div>
          <Link href={"/settings/account"}>
            <div className="flex justify-between items-center">
              <div className="w-14 text-lg h-12 flex justify-center items-center">
                <div className="w-14 flex justify-center items-center">
                  <FaCog />
                </div>
              </div>
              <div
                className={`${expanded ? "flex-1 opacity-60 text-sm flex whitespace-nowrap items-center h-12" : "hidden"}`}
              >
                Settings
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="fixed md:hidden z-50 border-t border-b bottom-0 right-0 left-0 flex justify-around items-center h-16 bg-tertiary">
        {sidebarItems
          ?.filter((i) => i.drawer)
          ?.map((tab) => (
            <Link
              href={tab.link}
              key={tab.label}
              className={`flex items-center ${(tab.exact ? pathname === tab.group : pathname?.includes(tab.group)) ? "opacity-100" : "opacity-60"}`}
            >
              <span>
                <tab.icon className="text-2xl" />
              </span>
            </Link>
          ))}
        <button onClick={() => setDrawerOpen(true)}>
          <HamburgerMenuIcon />
        </button>
      </div>
      <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
        <DrawerContent className="mt-0 md:hidden rounded-t-none bg-secondary text-secondary-foreground pb-8">
          <div className="relative">
            <button
              onClick={() => setDrawerOpen(false)}
              className="bg-white/20 absolute -top-2 backdrop-blur-lg right-4 h-5 w-5 flex justify-center items-center rounded-full"
            >
              <HiChevronDown />
            </button>
          </div>
          <div className={`flex w-full flex-col space-y-1`}>
            <div className="py-6 flex-1">
              {sidebarItems?.map((tab) => (
                <Link
                  href={tab.link}
                  key={tab.label}
                  className={`flex items-center ${(tab.exact ? pathname === tab.group : pathname?.includes(tab.group)) ? "opacity-100" : "opacity-60"}`}
                >
                  <div className="w-14 text-lg h-12 flex justify-center items-center">
                    <div className="w-14 flex justify-center items-center">
                      <tab.icon className="" />
                    </div>
                  </div>
                  <div
                    className={`flex-1 flex whitespace-nowrap items-center h-12`}
                  >
                    {tab.label}
                  </div>
                </Link>
              ))}
            </div>
            <div className="w-full text-lg pb-6 space-y-6">
              <button className="cursor-pointer" onClick={() => signOut()}>
                <span className="flex justify-between items-center">
                  <span className="w-14 text-lg h-12 flex justify-center items-center">
                    <span className="w-14 flex justify-center items-center">
                      <FiLogOut />
                    </span>
                  </span>
                  <span
                    className={`flex-1 opacity-60 text-sm flex whitespace-nowrap items-center h-12"}`}
                  >
                    Sign Out
                  </span>
                </span>
              </button>
              <Link href={"/settings/account"}>
                <div className="flex justify-between items-center">
                  <div className="w-14 text-lg h-12 flex justify-center items-center">
                    <div className="w-14 flex justify-center items-center">
                      <FaCog />
                    </div>
                  </div>
                  <div
                    className={`flex-1 opacity-60 text-sm flex whitespace-nowrap items-center h-12"}`}
                  >
                    Settings
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
