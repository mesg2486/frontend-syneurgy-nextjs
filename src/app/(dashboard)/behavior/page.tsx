"use client";

import MeetingCard from "@/components/cards/MeetingCard";
import { LIST_MEETINGS_BY_USERID } from "@/components/dashboard/Meetings";
import { CustomTooltip } from "@/components/fragments/Tooltip";
import TeamCardSkeleton from "@/components/placeholders/TeamCard.skeleton";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { gql } from "@/services/clients/graphql.client";
import { Meeting } from "@/services/gql/graphql";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { BiCalendar } from "react-icons/bi";
import { MdSupervisedUserCircle } from "react-icons/md";
import { PiFire, PiTarget } from "react-icons/pi";
import { TfiTarget } from "react-icons/tfi";

export default function Behavior() {
  const { data: session, status } = useSession();

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["meetings", session?.user.sub],
    queryFn: async () => {
      return await gql.request(LIST_MEETINGS_BY_USERID, {
        userId: String(session?.user.sub),
      });
    },
    enabled: !!session?.user,
  });

  return (
    <div className="pt-6 space-y-5">
      <h2 className="text-2xl">Behavior Engine</h2>
      <Separator className="my-4" />
      <div className="flex items-center gap-2">
        <Avatar className="w-8 h-8">
          <AvatarImage src={session?.user.avatar || "/user.png"} />
        </Avatar>
        My Progress
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        <div className="col-span-3 p-5 bg-popover md:col-span-2 rounded-xl">
          <div>
            <h3 className="flex items-center gap-2">
              <span className="p-2 rounded-full bg-background text-foreground">
                <TfiTarget />
              </span>
              Challenges Bank
            </h3>
            <div className="pt-4 text-sm divide-y divide-white/5">
              <div className="flex py-3 opacity-60">
                <h3 className="flex-1">Challenge</h3>
                <p className="flex-1">Count</p>
              </div>
              <div className="flex py-3">
                <h3 className="flex-1">Reflective Listening</h3>
                <p className="flex-1">2</p>
              </div>
              <div className="flex py-3">
                <h3 className="flex-1">Nonverbal Communication</h3>
                <p className="flex-1">2</p>
              </div>
              <div className="flex py-3">
                <h3 className="flex-1">Paraphrasing</h3>
                <p className="flex-1">2</p>
              </div>
              <div className="flex py-3">
                <h3 className="flex-1">Open-Ended Questions</h3>
                <p className="flex-1">2</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 p-5 bg-popover md:col-span-1 rounded-xl">
          <h3 className="flex items-center gap-2">
            <span className="p-2 rounded-full bg-background text-foreground">
              <BiCalendar />
            </span>
            Next Meetings
          </h3>
          <div className="py-2 divide-y divide-white/10">
            <div className="py-4 space-y-1">
              <p className="text-sm opacity-60">5/25/2024 10:00 AM</p>
              <p>Attentiveness</p>
            </div>
            <div className="py-4 space-y-1">
              <p className="text-sm opacity-60">5/26/2024 10:00 AM</p>
              <p>Clear Mind</p>
            </div>
            <div className="py-4 space-y-1">
              <p className="text-sm opacity-60">5/26/2024 10:00 AM</p>
              <p>Empathy</p>
            </div>
          </div>
        </div>
      </div>
      <Separator className="my-4" />
      <div className="grid grid-cols-4 gap-5">
        <div className="col-span-2 p-3 space-y-4 bg-popover md:col-span-1 rounded-xl sm:p-5">
          <div className="flex items-center justify-between">
            <h3 className="flex items-center gap-2">
              <span className="p-1 bg-[#BDB0FF] text-black rounded-full">
                <MdSupervisedUserCircle className="text-xl" />
              </span>
              Participation
            </h3>
            <CustomTooltip>Suggest a suitable hint</CustomTooltip>
          </div>
          <div className="flex items-center justify-between gap-2">
            <div className="">
              <span className="text-5xl font-bold">76</span>
              <span>%</span>
            </div>
            <img src="/assets/graph-up.png" alt="up" />
          </div>
        </div>
        <div className="col-span-2 p-3 space-y-4 bg-popover md:col-span-1 rounded-xl sm:p-5">
          <div className="flex items-center justify-between">
            <h3 className="flex items-center gap-2">
              <span className="p-1 bg-[#76FD3F] text-black rounded-full">
                <PiFire className="text-xl" />
              </span>
              Superpowers
            </h3>
            <CustomTooltip>Suggest a suitable hint</CustomTooltip>
          </div>
          <div className="flex items-center justify-between">
            <div className="">
              <span className="text-5xl font-bold">3</span>
            </div>
            {/* <img src="/assets/graph-up.png" alt="up" /> */}
          </div>
        </div>
        <div className="col-span-4 p-3 space-y-4 bg-popover md:col-span-2 rounded-xl sm:p-5">
          <div className="flex items-center justify-between">
            <h3 className="flex items-center gap-2">
              <span className="p-1 bg-[#FFA043] text-black rounded-full">
                <PiTarget className="text-xl" />
              </span>
              Challenges
            </h3>
            <CustomTooltip>Suggest a suitable hint</CustomTooltip>
          </div>
          <div className="flex items-center justify-between">
            <div className="">
              <span className="text-5xl font-bold">8</span>
            </div>
            <div>
              <Button className="h-16 px-12">Take action</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 py-2 pb-6">
        <div className="col-span-2 space-y-4 md:col-span-1">
          <h3 className="text-lg font-medium">Superpowers</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-4 py-5 rounded-md bg-popover">
              <p>Make smart questions</p>
              <span className="p-1 text-sm rounded-full bg-white/10">💪</span>
            </div>
            <div className="flex items-center justify-between p-4 py-5 rounded-md bg-popover">
              <p>Think out of the box</p>
              <span className="p-1 text-sm rounded-full bg-white/10">💪</span>
            </div>
            <div className="flex items-center justify-between p-4 py-5 rounded-md bg-popover">
              <p>Wise Listener</p>
              <span className="p-1 text-sm rounded-full bg-white/10">💪</span>
            </div>
          </div>
        </div>
        <div className="col-span-2 space-y-4 md:col-span-1">
          <h3 className="text-lg font-medium">Challenges</h3>
          <div className="space-y-2">
            <Link
              href={`/behavior/wizard`}
              className="flex items-center justify-between p-4 py-5 rounded-md bg-popover"
            >
              <span>Communication</span>
              <span className="p-1 bg-[#FFA043] text-black rounded-full">
                <PiTarget />
              </span>
            </Link>
            <Link
              href={`/behavior/wizard`}
              className="flex items-center justify-between p-4 py-5 rounded-md bg-popover"
            >
              <span>Wise listener</span>
              <span className="p-1 bg-[#FFA043] text-black rounded-full">
                <PiTarget />
              </span>
            </Link>
            <Link
              href={`/behavior/wizard`}
              className="flex items-center justify-between p-4 py-5 rounded-md bg-popover"
            >
              <span>Non verbal Communication</span>
              <span className="p-1 bg-[#FFA043] text-black rounded-full">
                <PiTarget />
              </span>
            </Link>
            <Link
              href={`/behavior/wizard`}
              className="flex items-center justify-between p-4 py-5 rounded-md bg-popover"
            >
              <span>Open Ended Questions</span>
              <span className="p-1 bg-[#FFA043] text-black rounded-full">
                <PiTarget />
              </span>
            </Link>
          </div>
        </div>
      </div>
      <Separator className="my-4" />
      <div className="pb-32 space-y-5">
        <h3 className="text-lg font-medium">Challenges</h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {(isLoading || status === "loading") &&
            Array.from(Array(10)).map((i) => <TeamCardSkeleton key={i} />)}
          {Number(data?.meetings?.items?.length) > 0 &&
            data?.meetings?.items
              ?.slice(8)
              .map((meeting) => (
                <MeetingCard meeting={meeting as Meeting} key={meeting?.id} />
              ))}
          {!(isLoading || status === "loading") &&
            Number(data?.meetings?.items?.length) === 0 && (
              <div className="flex items-center justify-center col-span-5 py-40">
                No segments found!
              </div>
            )}
        </div>
      </div>
    </div>
  );
}
