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
import { Meeting } from "@/services/gql/graphql";

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
    }
  }
`);

export default function MeetingPage({ params }: { params: { id: string } }) {
  const [toggleTabs, setToggleTabs] = useState("data");

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["team", params.id],
    queryFn: async () => {
      return await gql.request(GET_MEETING, {
        id: String(params.id),
      });
    },
  });

  return (
    <div className="p-5 space-y-6">
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
        <div className="flex items-center gap-x-4">
          <Link href="/meetings">
            <Button variant="outline" size="icon">
              <HiArrowLeft className="" />
            </Button>
          </Link>
          <h2 className="text-xl font-medium">{data?.meeting?.name}</h2>
        </div>
        <div className="flex flex-row space-x-6">
          <Button variant="outline">All Participants</Button>
          <ul className="flex flex-row gap-x-3 text-xs font-medium">
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
          <Button>
            <BsChatRightTextFill /> Ask Syneurgy
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-10 gap-x-5">
        <div className="col-span-6 space-y-4">
          <MainTab meeting={data?.meeting as Meeting} />
          <Highlights />
        </div>
        <div className="col-span-2 border-l border-white/10">
          <Data />
        </div>
        <div className="col-span-2">
          <Profile />
        </div>
      </div>
    </div>
  );
}
