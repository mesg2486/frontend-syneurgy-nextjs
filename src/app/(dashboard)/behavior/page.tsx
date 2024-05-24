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
      <div className="flex gap-2 items-center">
        <Avatar className="h-8 w-8">
          <AvatarImage src={session?.user.avatar || "/user.png"} />
        </Avatar>
        My Progress
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        <div className="bg-popover col-span-3 md:col-span-2 rounded-xl p-5">
          <div>
            <h3 className="flex items-center gap-2">
              <span className="p-2 bg-background text-foreground rounded-full">
                <TfiTarget />
              </span>
              Challenges Bank
            </h3>
            <div className="pt-4 text-sm divide-y divide-white/5">
              <div className="flex opacity-60 py-3">
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
        <div className="bg-popover col-span-3 md:col-span-1 rounded-xl p-5">
          <h3 className="flex items-center gap-2">
            <span className="p-2 bg-background text-foreground rounded-full">
              <BiCalendar />
            </span>
            Next Meetings
          </h3>
          <div className="divide-y py-2 divide-white/10">
            <div className="py-4">
              <p className="opacity-60 text-sm">5/25/2024 10:00 AM</p>
              <p>Attentiveness</p>
            </div>
            <div className="py-4">
              <p className="opacity-60 text-sm">5/26/2024 10:00 AM</p>
              <p>Clear Mind</p>
            </div>
            <div className="py-4">
              <p className="opacity-60 text-sm">5/26/2024 10:00 AM</p>
              <p>Empathy</p>
            </div>
          </div>
        </div>
      </div>
      <Separator className="my-4" />
      <div className="grid grid-cols-4 gap-5">
        <div className="bg-popover col-span-2 md:col-span-1 space-y-4 rounded-xl p-5">
          <div className="flex justify-between items-center">
            <h3 className="flex items-center gap-2">
              <span className="p-1 bg-[#BDB0FF] text-black rounded-full">
                <MdSupervisedUserCircle className="text-xl" />
              </span>
              Participation
            </h3>
            <CustomTooltip>Suggest a suitable hint</CustomTooltip>
          </div>
          <div className="flex items-center justify-between">
            <div className="">
              <span className="text-5xl font-bold">76</span>
              <span>%</span>
            </div>
            <img src="/assets/graph-up.png" alt="up" />
          </div>
        </div>
        <div className="bg-popover col-span-2 md:col-span-1 space-y-4 rounded-xl p-5">
          <div className="flex justify-between items-center">
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
            <img src="/assets/graph-up.png" alt="up" />
          </div>
        </div>
        <div className="bg-popover col-span-4 md:col-span-2 space-y-4 rounded-xl p-5">
          <div className="flex justify-between items-center">
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
      <div className="grid pb-6 grid-cols-2 py-2 gap-5">
        <div className="space-y-4 col-span-2 md:col-span-1">
          <h3 className="text-lg font-medium">Superpowers</h3>
          <div className="space-y-2">
            <div className="bg-popover p-4 py-5 flex justify-between items-center rounded-md">
              <p>Make smart questions</p>
              <span className="p-1 bg-white/10 rounded-full text-sm">💪</span>
            </div>
            <div className="bg-popover p-4 py-5 flex justify-between items-center rounded-md">
              <p>Think out of the box</p>
              <span className="p-1 bg-white/10 rounded-full text-sm">💪</span>
            </div>
            <div className="bg-popover p-4 py-5 flex justify-between items-center rounded-md">
              <p>Wise Listener</p>
              <span className="p-1 bg-white/10 rounded-full text-sm">💪</span>
            </div>
          </div>
        </div>
        <div className="space-y-4 col-span-2 md:col-span-1">
          <h3 className="text-lg font-medium">Challenges</h3>
          <div className="space-y-2">
            <div className="bg-popover p-4 py-5 flex justify-between items-center rounded-md">
              <p>Comunication</p>
              <span className="p-1 bg-[#FFA043] text-black rounded-full">
                <PiTarget />
              </span>
            </div>
            <div className="bg-popover p-4 py-5 flex justify-between items-center rounded-md">
              <p>Wise listener</p>
              <span className="p-1 bg-[#FFA043] text-black rounded-full">
                <PiTarget />
              </span>
            </div>
            <div className="bg-popover p-4 py-5 flex justify-between items-center rounded-md">
              <p>Non verbal Communication</p>
              <span className="p-1 bg-[#FFA043] text-black rounded-full">
                <PiTarget />
              </span>
            </div>
            <div className="bg-popover p-4 py-5 flex justify-between items-center rounded-md">
              <p>Open Ended Questions</p>
              <span className="p-1 bg-[#FFA043] text-black rounded-full">
                <PiTarget />
              </span>
            </div>
          </div>
        </div>
      </div>
      <Separator className="my-4" />
      <div className="space-y-5 pb-32">
        <h3 className="text-lg font-medium">Challenges</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
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
              <div className="col-span-5 py-40 flex justify-center items-center">
                No segments found!
              </div>
            )}
        </div>
      </div>
    </div>
  );
}
