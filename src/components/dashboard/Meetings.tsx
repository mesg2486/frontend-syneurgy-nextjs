"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { HiOutlineSearch } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";
import MeetingCard from "../cards/MeetingCard";
import { useSession } from "next-auth/react";
import TeamCardSkeleton from "../placeholders/TeamCard.skeleton";
import { Meeting } from "@/services/gql/graphql";
import Dashmain from "../loaders/Dashmain.loader";
import { useMeetingContext } from "../providers/MeetingProvider";
import { graphql } from "@/services/gql";

export const LIST_MEETINGS_BY_USERID = graphql(`
  query listMeetingsByUserId($userId: ID!) {
    meetings: listMeetingsByUserId(userId: $userId) {
      items {
        date
        highlights
        id
        name
        createdAt
        updatedAt
        sentiment
        performance
        synchrony
        checkpoint
        errors {
          emotion
          participation
          extracting
          downloading
          resampling
          rppg
          scores
          heatmap
          audio
          transcript
          nlp
          speaker
        }
        teamId
        start
        finish
        duration
        started
        queued
        finished
        thumbnail
        type
        url
        userId
        totalScore
      }
    }
  }
`);

export default function Meetings() {
  const { data: session, status } = useSession();
  const { meetings, isMeetingsLoading: isLoading } = useMeetingContext();

  console.log({ meetings });

  if (isLoading || status === "loading") {
    return <Dashmain />;
  }

  return (
    <div className="w-full pt-6 pb-20 bg-secondary c-container">
      <Tabs defaultValue="meetings" className="w-full min-h-[600px]">
        <TabsList>
          <TabsTrigger value="meetings">Meetings</TabsTrigger>
          <TabsTrigger value="members">Members</TabsTrigger>
        </TabsList>
        <Separator className="mb-4" />
        <TabsContent value="meetings" className="py-5">
          <div className="flex justify-between">
            <h2 className="text-xl font-light">
              Meetings ({meetings?.length})
            </h2>
            <div className="flex flex-row gap-x-3">
              <div className="relative">
                <Input
                  placeholder="Search"
                  className="w-32 h-full px-6 border rounded-full md:w-40"
                />
                <div className="absolute -translate-y-1/2 right-6 top-1/2">
                  <HiOutlineSearch />
                </div>
              </div>
              <Select>
                <SelectTrigger className="hidden gap-1 px-5 border-0 rounded-2xl md:flex bg-tertiary">
                  <SelectValue placeholder="Meeting Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="week">Type</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="hidden gap-1 px-5 border-0 rounded-2xl md:flex bg-tertiary">
                  <SelectValue placeholder="All Dates" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="All Dates">All Dates</SelectItem>
                    <SelectItem value="week">A week</SelectItem>
                    <SelectItem value="month">A Month</SelectItem>
                    <SelectItem value="year">A Year</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Button className="">
                <AiOutlinePlus />
                <span className="hidden md:block">Add Meeting</span>
              </Button>
            </div>
          </div>
          <div className="pt-10 space-y-6">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
              {isLoading &&
                Array.from(Array(10)).map((_, index) => (
                  <TeamCardSkeleton key={index} />
                ))}
              {Number(meetings?.length) > 0
                ? meetings?.map((meeting) => (
                    <MeetingCard
                      meeting={meeting as Meeting}
                      key={meeting?.id}
                    />
                  ))
                : !isLoading && (
                    <div className="flex items-center justify-center col-span-5 py-40">
                      No meetings uploaded!
                    </div>
                  )}
            </div>

            <div className="flex items-center justify-between pt-6">
              <p className="opacity-70">Show 8 from 120 products</p>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="members"></TabsContent>
      </Tabs>
    </div>
  );
}
