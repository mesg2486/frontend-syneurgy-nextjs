"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React, { useState } from "react";
import { IoHome } from "react-icons/io5";
import { FiArrowLeftCircle } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { MdChat } from "react-icons/md";
import { Separator } from "@/components/ui/separator";
import MainTab from "@/components/meeting/MainTab";
import Highlights from "@/components/meeting/Highlights";
import Profile from "@/components/meeting/Profile";
import Data from "@/components/meeting/Data";
import Summary from "@/components/meeting/summary/Summary";
import AskSummary from "@/components/meeting/AskSummary";

export default function MeetingPage() {
  const [toggleTabs, setToggleTabs] = useState("data");
  const [toggleSyneurgy, setToggleSyneurgy] = useState(false);

  return (
    <div className="relative p-5 space-y-6">
      {/* Nav Section */}
      <div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                {" "}
                <IoHome />
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>Meeting Title</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex justify-between ">
        <div className="flex flex-row content-center gap-x-4">
          <FiArrowLeftCircle className="text-3xl" />
          <h2 className="text-xl font-light">Meeting Intro</h2>
        </div>
        <div className="flex flex-row space-x-8">
          <Button variant={"outline"} className="text-black gap-x-2 rounded-xl">
            All Participants
          </Button>
          <ul className="flex flex-row gap-x-4">
            <li
              className={`${toggleTabs === "data" ? "border-b-[1px] border-slate-50 opacity-100" : "opacity-60"} content-center  cursor-pointer`}
              onClick={() => setToggleTabs("data")}
            >
              DATA OVERVIEW
            </li>
            <li
              className={`${toggleTabs === "summary" ? "border-b-[1px] border-slate-50 opacity-100" : "opacity-60"} content-center cursor-pointer `}
              onClick={() => setToggleTabs("summary")}
            >
              SUMMARY
            </li>
            <li
              className={`${toggleTabs === "action" ? "border-b-[1px] border-slate-50 opacity-100" : "opacity-60"} content-center cursor-pointer `}
              onClick={() => setToggleTabs("action")}
            >
              ACTION
            </li>
          </ul>
          <Button
            variant={"outline"}
            className="text-black gap-x-2 rounded-xl"
            onClick={() => setToggleSyneurgy(true)}
          >
            <MdChat /> Ask Syneurgy
          </Button>
        </div>
        <div
          className={`${toggleSyneurgy === true ? "block" : "hidden"} max-w-xl h-full min-w-96 bg-slate-800 absolute top-0 right-0 z-50`}
        >
          <AskSummary setToggleSyneurgy={setToggleSyneurgy} />
        </div>
      </div>
      <Separator orientation="horizontal" className="bg-slate-50 opacity-30" />
      {/* Components section */}
      <div className="grid grid-cols-10 gap-x-5 divide-x-2 divide-slate-500 divide-opacity-25">
        <div className="col-span-6 space-y-4">
          {/* Tabs for video and details Component */}
          <MainTab />
          <Highlights />
        </div>
        {toggleTabs === "data" ? (
          <>
            <div className="col-span-2">
              <Data />
            </div>
            <div className="col-span-2">
              <Profile />
            </div>
          </>
        ) : toggleTabs === "summary" ? (
          <div className="col-span-4">
            <Summary />
          </div>
        ) : (
          <p>bye</p>
        )}
      </div>
    </div>
  );
}
