import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { IoReturnDownBackSharp } from "react-icons/io5";
import { MdMarkunreadMailbox } from "react-icons/md";

export default function Verification() {
  return (
    <div className="h-screen relative flex justify-center items-center bg-secondary text-secondary-foreground">
      <div className="lg:p-8 max-w-sm mx-auto pt-16 md:pt-0 flex justify-center flex-col gap-6 items-center">
        <Link
          href={"/"}
          className="flex flex-row items-center pb-3 cursor-pointer"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="pr-2 w-6"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.15718 0.386739C8.10516 -0.128913 9.24989 -0.128913 10.1979 0.386739L15.6936 3.37615C16.7176 3.93315 17.355 5.0055 17.355 6.17117V11.8288C17.355 12.9945 16.7176 14.0669 15.6936 14.6238L10.1979 17.6133C9.24989 18.1289 8.10516 18.1289 7.15718 17.6133L1.66141 14.6238C0.637428 14.0669 0 12.9945 0 11.8288L0 6.17117C0 5.0055 0.637427 3.93315 1.66141 3.37615L7.15718 0.386739Z"
              fill="#FBFAFC"
            ></path>
            <circle cx="8.67826" cy="8.814" r="3.30521" fill="#1B212F"></circle>
          </svg>
          <p className="font-bold text-lg">Syneurgy</p>
        </Link>
        <h1 className="text-3xl font-medium">Verify your Email</h1>
        <p className="text-center text-sm opacity-80 leading-relaxed">
          Confirm your email to complete registration. Check your inbox for a
          verification link and unlock full access to our platform.
        </p>
        <div className="flex gap-4">
          <a href="mailto:">
            <Button className="bg-white hover:bg-white/90 rounded-full gap-2">
              <MdMarkunreadMailbox />
              <span>Open Inbox</span>
            </Button>
          </a>
          <Link href={`/auth/login`}>
            <Button
              variant="outline"
              className="rounded-full gap-2 bg-secondary hover:bg-white hover:text-foreground"
            >
              <IoReturnDownBackSharp />
              <span>Back to Login</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
