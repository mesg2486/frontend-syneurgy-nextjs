"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Cross1Icon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  // const [isCalOpen, setisCalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <Drawer open={isOpen} onOpenChange={setIsOpen} direction="right" fixed>
        <DrawerTrigger>
          <HiOutlineMenuAlt3 className="w-6 text-white h-6" />
        </DrawerTrigger>
        <DrawerContent className="top-0 mt-0 text-white rounded-none backdrop-blur-sm bg-secondary">
          <DrawerHeader className="relative flex justify-between py-4">
            <Link href={"/"} className={`flex items-center gap-2`}>
              <Image
                height={50}
                width={50}
                src="/logo.png"
                alt="syneurgy"
                className="rounded-full h-5 w-auto"
              />
            </Link>
            <DrawerClose className="">
              <Cross1Icon className="w-5 h-5" />
            </DrawerClose>
          </DrawerHeader>
          <div className="flex-1 px-5 pt-16 items-end flex flex-col gap-4 font-medium">
            <MenuLink link="/" title="Home" />
            <MenuLink link="/" title="The Science" />
            <MenuLink link="/" title="About Us" />
            <MenuLink link="/" title="Pricing" />
            <MenuLink link="/" title="Blog" />
            <MenuLink link="/" title="Contact" />
            <button className="h-7 px-6 text-sm rounded-full font-semibold bg-primary text-[#1B212F]">
              Request Demo
            </button>
            <button className="h-7 px-6 text-sm rounded-full font-semibold bg-primary text-[#1B212F]">
              Login
            </button>
            {/* <MenuLink link="/#insights" title="Insights" /> */}
            {/* <DrawerClose>
              <div className="pt-8">
                <Button
                  onClick={() => {
                    setIsOpen(false);
                    setisCalOpen(true);
                  }}
                >
                  Schedule a Call
                </Button>
              </div>
            </DrawerClose> */}
          </div>
          {/* <DrawerFooter className="flex flex-row items-center justify-center gap-4">
            <a href={`https://twitter.com/aleganceX`} className="p-2">
              <FaTwitter className="text-2xl" />
            </a>
            <a href={`https://www.linkedin.com/company/alegance`} className="">
              <FaLinkedin className="text-2xl" />
            </a>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
      {/* <CalendlyModal isOpen={isOpen} setIsOpen={setIsOpen} /> */}
    </>
  );
}

function MenuLink({ link, title }: { link: string; title: string }) {
  const pathname = usePathname();
  return (
    <Link
      href={link}
      className={`text-xl block ${link === pathname ? "text-highlight" : ""}`}
    >
      {title}
    </Link>
  );
}
