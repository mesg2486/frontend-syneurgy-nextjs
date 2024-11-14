"use client";

import React, { useState } from "react";
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
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

import { BsChatRightTextFill } from "react-icons/bs";
import { HiHand } from "react-icons/hi";
import { useSession } from "next-auth/react";
import Dashmain from "../loaders/Dashmain.loader";
import { Team } from "@/services/gql/graphql";
import TeamPerformance from "../meeting/TeamPerformance";
import SynchronyGraph from "../meeting/SynchronyProgress";
import KPIEmotionsDisplay from "./KPIEmotion";
import TeamSentimentDisplay from "./TeamSentiment";

interface IDashMainProps {
  activeTeam: string;
  setActiveTeam: React.Dispatch<React.SetStateAction<string>>;
  defaultTeam?: string;
  teams?: Team[] | null;
  isTeamsLoading?: boolean;
  activeTeamData: Team | null | undefined;
}

export default function DashMain({
  isTeamsLoading,
  activeTeam,
  setActiveTeam,
  activeTeamData,
  defaultTeam,
  teams,
}: IDashMainProps) {
  const { data: session, status } = useSession();

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
                onValueChange={(value) => setActiveTeam(value)}
                value={activeTeam}
                defaultValue={defaultTeam}
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
        {/* <div className="flex justify-between p-4 py-2 rounded-md bg-tertiary">
          <p className="hidden leading-8 md:block">
            You have 35 minutes of 240 available in your plan
          </p>
          <p className="leading-8 md:hidden">Your plan is expiring</p>
          <Button
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            variant="outline"
          >
            Upgrade
          </Button>
        </div> */}
        <div className="grid grid-cols-1 p-8 rounded-md md:grid-cols-2 lg:grid-cols-4 md:justify-around bg-tertiary md:divide-x-2 divide-white/10">
          <div className="">
            <h2 className="text-lg font-medium">Global Synchrony</h2>
            <div className="flex flex-row  items-center py-6 divide-x-[1px] divide-white/10">
              <div className="flex-1 mr-4">
                <h4 className="text-5xl font-semibold">
                  {activeTeamData?.totalScore?.toFixed(0)}
                </h4>
                <span className="text-xl text-primary">
                  &#8599;
                  {activeTeamData?.diffTotalScore}%
                </span>
                <span>{activeTeamData?.prevTotalScore}</span>
              </div>
              <div className="flex-1">
                <KPIEmotionsDisplay activeTeamData={activeTeamData} />
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-medium md:pl-10">Dimensions</h2>
            <div className="w-full h-48 p-5 text-xs">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data1}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <Radar
                    name="Mike"
                    dataKey="A"
                    stroke="#8884d8"
                    fill="#8884d8"
                    fillOpacity={0.6}
                  />
                  <Radar
                    name="Lily"
                    dataKey="B"
                    stroke="#82ca9d"
                    fill="#82ca9d"
                    fillOpacity={0.6}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="font-medium md:pl-10">Global Performance</h2>
            <TeamPerformance activeTeamData={activeTeamData} />
          </div>
          <div>
            <h2 className="text-lg font-medium md:pl-10">Global Sentiment</h2>
            <TeamSentimentDisplay activeTeamData={activeTeamData} />
          </div>
        </div>
        {/* Line Chart  */}
        <div className="max-w-full ">
          <div className="max-w-full p-6 mx-auto rounded-md bg-tertiary">
            <h2 className="mb-5 text-lg font-medium md:pl-10">
              Global Progress
            </h2>
            <div className="w-full h-60 md:h-80">
              <SynchronyGraph data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const data1 = [
  {
    subject: "Trust",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "Participation",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Enjoyment",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Shared goal",
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "Engagement",
    A: 85,
    B: 90,
    fullMark: 150,
  },
];

const data = [
  { date: "2023-10-28", value: 5 },
  { date: "2023-10-29", value: 6 },
  { date: "2023-10-30", value: 5 },
  { date: "2023-10-31", value: 7 },
  { date: "2023-11-01", value: 10 },
  { date: "2023-11-02", value: 4 },
  { date: "2023-11-03", value: 9 },
];
