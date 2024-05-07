"use client";

import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import { useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <div className="bg-secondary py-4 md:py-5 w-full fixed top-0 left-0 right-0 border-b border-black/20">
      <div className="c-container w-full">
        <div className="flex justify-between gap-6 items-center ">
          <Link href="/">
            <img src="/logo.png" className="h-6" alt="logo" />
          </Link>
          <div className="md:flex hidden gap-5 font-semibold items-center">
            <Link href="#" className="text-white">
              Home
            </Link>
            <Link
              href="#"
              className="text-white/60 hover:text-white/80 transition-all"
            >
              The Science
            </Link>
            <Link
              href="#"
              className="text-white/60 hover:text-white/80 transition-all"
            >
              About Us
            </Link>
            <Link
              href="#"
              className="text-white/60 hover:text-white/80 transition-all"
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="text-white/60 hover:text-white/80 transition-all"
            >
              Blog
            </Link>
            <Link
              href="#"
              className="text-white/60 hover:text-white/80 transition-all"
            >
              Contact
            </Link>
            {session?.user.accessToken ? (
              <Link
                href={`/dashboard`}
                className="h-7 px-6 text-sm rounded-full font-semibold flex justify-center items-center bg-background text-[#1B212F]"
              >
                Dashboard
              </Link>
            ) : (
              <>
                <button className="h-7 px-6 text-sm rounded-full font-semibold bg-primary text-[#1B212F]">
                  Request Demo
                </button>
                <Link
                  href={`/auth/login`}
                  className="h-7 px-6 text-sm rounded-full font-semibold flex justify-center items-center bg-primary text-[#1B212F]"
                >
                  Login
                </Link>
              </>
            )}
          </div>
          <div className="md:hidden">
            <Menu />
          </div>
        </div>
      </div>
    </div>
  );
}
