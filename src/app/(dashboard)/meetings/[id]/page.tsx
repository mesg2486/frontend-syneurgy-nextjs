"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import MainTab from "@/components/meeting/MainTab";
import Highlights from "@/components/meeting/Highlights";
import Profile from "@/components/meeting/Profile";
import Data from "@/components/meeting/Data";
import { BsChatRightTextFill } from "react-icons/bs";
import { HiArrowLeft, HiHome } from "react-icons/hi";
import Link from "next/link";
import { graphql } from "@/services/gql";
import { useQuery } from "@tanstack/react-query";
import { gql } from "@/services/clients/graphql.client";
import AskSyneurgy from "@/components/meeting/AskSyneurgy";
import Summary from "@/components/meeting/summary/Summary";
import TeamDetails from "@/components/meeting/TeamDetails";

const GET_MEETING = graphql(`
  query getMeeting($id: ID!) {
    meeting: getMeeting(id: $id) {
      createdAt
      date
      dimensions
      highlights
      id
      name
      performance
      sentiment
      synchrony
      teamId
      thumbnail
      type
      updatedAt
      url
      userId
      summary {
        bullets
        start
        end
        summary
      }
    }
  }
`);

export default function MeetingPage({ params }: { params: { id: string } }) {
  const [toggleTabs, setToggleTabs] = useState("data");
  const [toggleSyneurgy, setToggleSyneurgy] = useState(false);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["meeting", params.id],
    queryFn: async () => {
      return await gql.request(GET_MEETING, {
        id: String(params.id),
      });
    },
  });

  return (
    <div className="pt-5 pb-32 space-y-6">
      {/* Nav Section */}
      <div>
        <Breadcrumb className="opacity-60">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard">
                <HiHome />
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/meetings">Meetings</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>{data?.meeting?.name}</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex justify-between ">
        <div className="flex items-center justify-between flex-1">
          <div className="flex items-center gap-x-4">
            <Link href="/meetings">
              <Button variant="outline" size="icon">
                <HiArrowLeft className="" />
              </Button>
            </Link>
            <h2 className="text-xl font-medium">{data?.meeting?.name}</h2>
          </div>
          <Button onClick={() => setToggleSyneurgy(true)} className="md:hidden">
            <BsChatRightTextFill /> Ask Syneurgy
          </Button>
        </div>
        <div className="flex-row hidden space-x-6 md:flex">
          <ul className="flex flex-row text-xs font-medium gap-x-3">
            <li
              className={`${toggleTabs === "data" ? "border-b-2 border-primary opacity-100" : "opacity-60"} content-center  cursor-pointer`}
              onClick={() => setToggleTabs("data")}
            >
              DATA OVERVIEW
            </li>
            <li
              className={`${toggleTabs === "summary" ? "border-b-2 border-primary opacity-100" : "opacity-60"} content-center cursor-pointer `}
              onClick={() => setToggleTabs("summary")}
            >
              SUMMARY
            </li>
            <li
              className={`${toggleTabs === "action" ? "border-b-2 border-primary opacity-100" : "opacity-60"} content-center cursor-pointer `}
              onClick={() => setToggleTabs("action")}
            >
              ACTION
            </li>
          </ul>
          <Button onClick={() => setToggleSyneurgy(true)}>
            <BsChatRightTextFill /> Ask Syneurgy
          </Button>
          {toggleSyneurgy && (
            <AskSyneurgy setToggleSyneurgy={setToggleSyneurgy} />
          )}
        </div>
      </div>
      <div className="grid grid-cols-10 md:gap-x-5">
        <div className="col-span-12 space-y-4 lg:col-span-6">
          <MainTab data={data || {}} />
          <Highlights />
        </div>
        {toggleTabs === "data" ? (
          <>
            <div className="col-span-12 py-6 lg:col-span-2 md:py-0">
              <Data />
            </div>
            <div className="flex flex-col col-span-12 space-y-4 lg:col-span-2">
              <Profile />
              <TeamDetails />
            </div>
          </>
        ) : toggleTabs === "summary" ? (
          <div className="col-span-12 lg:col-span-4">
            <Summary summary={data?.meeting?.summary as any} />
          </div>
        ) : (
          <p>NA</p>
        )}
      </div>
    </div>
  );
}
