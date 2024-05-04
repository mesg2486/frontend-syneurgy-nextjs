import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { IoReturnDownBackSharp } from "react-icons/io5";

export default function Verification() {
  return (
    <div className="container h-screen relative flex justify-center items-center">
      <Link
        href="/"
        className="font-mono text-lg font-medium absolute left-4 top-4 md:top-8 md:left-8"
      >{`Project{Code}`}</Link>
      <div className="lg:p-8 max-w-sm mx-auto pt-16 md:pt-0 flex justify-center flex-col gap-6 items-center">
        <h1 className="text-3xl font-medium">Verify your Email</h1>
        <p className="text-center text-sm opacity-80 leading-relaxed">
          Confirm your email to complete registration. Check your inbox for a
          verification link and unlock full access to our platform.
        </p>
        <Link href={`/auth/login`} className="">
          <Button className="gap-2">
            <IoReturnDownBackSharp />
            <span>Back to Login</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
