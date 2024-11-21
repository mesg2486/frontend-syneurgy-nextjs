"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { BsChatRightTextFill } from "react-icons/bs";
import { HiHand } from "react-icons/hi";
import { useSession } from "next-auth/react";
import Dashmain from "../loaders/Dashmain.loader";
import TeamPerformance from "../meeting/TeamPerformance";
import SynchronyGraph from "../meeting/SynchronyProgress";
import KPIEmotionsDisplay from "./KPIEmotion";
import TeamSentimentDisplay from "./TeamSentiment";
import {
  LIST_MEETINGS_BY_TEAMID,
  useMeetingContext,
} from "../providers/MeetingProvider";
import { gql } from "@/services/clients/graphql.client";
import { useQuery } from "@tanstack/react-query";
import DimensionsRadar from "../meeting/Dimensions";

export default function DashMain() {
  const { data: session, status } = useSession();
  const { activeTeamId, setActiveTeamId, teams, activeTeam, isTeamsLoading } =
    useMeetingContext();

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["meetings", session?.user.sub],
    queryFn: async () => {
      return await gql.request(LIST_MEETINGS_BY_TEAMID, {
        teamId: activeTeamId || "",
      });
    },
    enabled: !!session?.user,
  });

  if (isTeamsLoading) {
    return <Dashmain />;
  }

  return (
    <div className="bg-secondary c-container">
      <div className="flex justify-between pt-4">
        <div className="flex items-center gap-2 text-xl font-light tracking-tight">
          Welcome <HiHand className="inline-block text-yellow-500 rotate-12" />
          {Number(teams?.length) === 0 ? (
            <div className="font-semibold"> {session?.user.username}</div>
          ) : (
            <div>
              <Select
                onValueChange={(value) => setActiveTeamId(value)}
                value={activeTeamId || ""}
                defaultValue={activeTeamId || ""}
              >
                <SelectTrigger className="hidden gap-1 px-5 border-0 rounded-2xl md:flex bg-tertiary">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {teams?.map((team: any) => (
                      <SelectItem key={team.id} value={team.id}>
                        {team.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* map teams here in a select box and the default value will be the first team */}
            </div>
          )}
        </div>
        <div className="flex flex-row gap-x-3">
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
          <Select>
            <SelectTrigger className="hidden gap-1 px-5 border-0 rounded-2xl md:flex bg-tertiary">
              <SelectValue placeholder="All Teams" />
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
          <Button>
            <BsChatRightTextFill />
            Ask Syneurgy
          </Button>
        </div>
      </div>
      <Separator className="my-2" />
      <div className="flex flex-col space-y-4">
        <div className="grid grid-cols-1 p-8 rounded-md md:grid-cols-2 lg:grid-cols-4 md:justify-around bg-tertiary md:divide-x-2 divide-white/10">
          <div className="">
            <h2 className="text-lg font-medium">Global Synchrony</h2>
            <div className="flex flex-row  items-center py-6 divide-x-[1px] divide-white/10">
              <div className="flex-1 mr-4">
                <h4 className="text-5xl font-semibold">
                  {activeTeam?.totalScore?.toFixed(0)}
                </h4>
                <span className="text-xl text-primary">
                  &#8599;
                  {activeTeam?.diffTotalScore}%
                </span>
                <span>{activeTeam?.prevTotalScore}</span>
              </div>
              <div className="flex-1">
                <KPIEmotionsDisplay activeTeamData={activeTeam} />
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-medium md:pl-10">Dimensions</h2>
            <div className="w-full px-4 h-60">
              <DimensionsRadar dimensions={(activeTeam as any)?.dimensions} />
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="font-medium md:pl-10">Global Performance</h2>
            <TeamPerformance activeTeamData={activeTeam} />
          </div>
          <div>
            <h2 className="text-lg font-medium md:pl-10">Global Sentiment</h2>
            <TeamSentimentDisplay activeTeamData={activeTeam} />
          </div>
        </div>
        {/* Line Chart  */}
        <div className="max-w-full ">
          <div className="max-w-full p-6 mx-auto rounded-md bg-tertiary">
            <h2 className="mb-5 text-lg font-medium md:pl-10">
              Global Progress
            </h2>
            <div className="w-full h-60 md:h-80">
              <SynchronyGraph
                data={data?.meetings?.items?.map((i: any) => ({
                  date: i.createdAt,
                  value: i.totalScore,
                }))}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
