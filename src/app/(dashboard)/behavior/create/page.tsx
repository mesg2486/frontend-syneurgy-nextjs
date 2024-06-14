import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { FaGoogle } from "react-icons/fa6";
import { IoIosWarning } from "react-icons/io";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { PiMicrosoftOutlookLogoLight } from "react-icons/pi";

export default function page() {
  return (
    <div className="flex gap-12">
      <div className="border-r space-y-8 h-full min-h-dvh border-white/10 w-60 pt-8">
        <section className="relative">
          <div className="max-w-[200px] flex items-center gap-6 justify-center">
            <p className="flex-1 text-right">Recent Examples</p>
            <span className="p-1 bg-primary text-black rounded-full">
              <IoIosWarning className="text-xl" />
            </span>
            <div className="absolute h-2 w-2 bg-primary right-0 translate-x-1/2 rounded-full"></div>
          </div>
        </section>
        <section className="relative">
          <div className="max-w-[200px] flex items-center gap-6 justify-center">
            <Link href={"create"} className="flex-1 text-right ">
              Create Behavior
            </Link>
            <span className="p-1 bg-primary text-black rounded-full">
              <IoIosWarning className="text-xl" />
            </span>
            <div className="absolute h-2 w-2 bg-primary right-0 translate-x-1/2 rounded-full"></div>
          </div>
        </section>
      </div>
      <div className="pt-8 flex-1">
        <div className="flex justify-between">
          <div className="flex flex-row gap-x-3 items-center">
            <IoArrowBackCircleOutline size={40} />
            <h2 className="text-2xl">Create your behaviour</h2>
          </div>
          <Button>Done</Button>
        </div>
        <p className="opacity-80 text-sm pt-4">
          please choose the items you want to take action on and click on Next
          to continue
        </p>
        <div className="grid grid-cols-3 divide-x divide-white/5 pt-8">
          <div className="px-3">
            <h2 className="text-xl font-medium mb-4">Context</h2>
            <div className="space-y-3">
              <div className="bg-tertiary flex flex-row gap-x-3 rounded-md p-2">
                <input type="checkbox" id="Context" value="Context" />
                <p>After a team meeting</p>
              </div>
              <div className="bg-tertiary flex flex-row gap-x-3 rounded-md p-2">
                <input type="checkbox" id="Context" value="Context" />
                <p>After a team meeting</p>
              </div>
              <div className="bg-tertiary flex flex-row gap-x-3 rounded-md p-2">
                <input type="checkbox" id="Context" value="Context" />
                <p>After a team meeting</p>
              </div>
            </div>
          </div>
          <div className="px-3">
            <h2 className="text-xl font-medium mb-4">Action</h2>
            <div className="space-y-3">
              <div className="bg-tertiary flex flex-row gap-x-3 rounded-md p-2">
                <input type="checkbox" id="Action" value="Action" />
                <p>After a team meeting</p>
              </div>
              <div className="bg-tertiary flex flex-row gap-x-3 rounded-md p-2">
                <input type="checkbox" id="Action" value="Action" />
                <p>After a team meeting</p>
              </div>
              <div className="bg-tertiary flex flex-row gap-x-3 rounded-md p-2">
                <input type="checkbox" id="context" value="Action" />
                <p>After a team meeting</p>
              </div>
            </div>
          </div>
          <div className="px-3">
            <h2 className="text-xl font-medium mb-4">Schedule Time</h2>
            <div className="space-y-3">
              <div className="bg-tertiary flex flex-row gap-x-3 items-center rounded-md p-2">
                <FaGoogle />
                <p>Continue with google calender</p>
              </div>
              <div className="bg-tertiary flex flex-row gap-x-3 items-center rounded-md p-2">
                <PiMicrosoftOutlookLogoLight />
                <p>continue with Outlook</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
