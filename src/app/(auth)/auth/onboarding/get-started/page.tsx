import GetStarted from "@/components/forms/GetStarted";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Onboarding() {
  return (
    <div className="bg-secondary h-screen flex justify-between items-center text-secondary-foreground relative">
      <Link
        href={"/"}
        className="flex flex-row gap-3 items-center pb-3 cursor-pointer absolute top-6 left-6"
      >
        <Image
          height={80}
          width={80}
          src="/logo-icon.png"
          alt="syneurgy"
          className="h-6 w-auto"
        />
        <p className="font-bold text-xl">Syneurgy</p>
      </Link>
      <div className="h-full flex-1 max-h-[800px] my-auto py-32 flex justify-end">
        <div className="space-y-4 h-full flex flex-col w-full max-w-sm">
          <h2 className="text-4xl font-medium max-w-sm">
            Welcome! Let&apos;s start working together
          </h2>
          <p>Create your meeting team</p>
          <GetStarted />
        </div>
      </div>
      <div className="flex-1 flex justify-end pl-20 h-full">
        <div className="bg-[#262E40] text-secondary-foreground h-full flex-1 max-w-lg flex flex-col justify-center p-16 gap-6 items-center">
          <img
            src="/assets/marc-benioff.png"
            alt="marc-benioff"
            className="h-60 w-60 object-cover"
          />
          <h3 className="font-italic text-lg text-center text-white/60">
            &quot;The best teams play together like a family who trust one
            another to have their back&quot;
          </h3>
          <div className="flex flex-col items-center pt-8">
            <h4 className="text-white">Marc Benioff</h4>
            <p className="text-white/60">CEO and Founder of Salesforce</p>
          </div>
        </div>
      </div>
    </div>
  );
}
