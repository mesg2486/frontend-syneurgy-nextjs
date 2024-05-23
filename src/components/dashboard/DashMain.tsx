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
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import { BsChatRightTextFill } from "react-icons/bs";
import { HiHand } from "react-icons/hi";
import { useSession } from "next-auth/react";
import CircleProgress from "../fragments/CircleProgressWithIcon";
import { FaFaceFrown, FaFaceMeh, FaFaceSmile } from "react-icons/fa6";

export default function DashMain() {
  const { data: session } = useSession();
  return (
    <div className="p-6 bg-secondary ">
      <div className="flex justify-between">
        <h2 className="text-xl font-light tracking-tight">
          Welcome <HiHand className="inline-block text-yellow-500 rotate-12" />
          <span className="font-semibold"> {session?.user.username}</span>
        </h2>
        <div className="flex flex-row gap-x-3">
          <Select>
            <SelectTrigger className="rounded-2xl bg-tertiary px-5 gap-1 border-0">
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
            <SelectTrigger className="rounded-2xl bg-tertiary px-5 gap-1 border-0">
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
      <Separator className="my-4" />
      <div className="flex flex-col space-y-6 ">
        <div className="flex justify-between bg-tertiary p-4 rounded-md">
          <p className="leading-8 ">
            You have 35 minutes of 240 available in your plan
          </p>
          <Button
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            variant="outline"
          >
            Upgrade
          </Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 justify-around p-8 rounded-md bg-tertiary divide-x-2 divide-white/10">
          <div className="">
            <h2 className="text-lg font-medium">Global Synchrony</h2>
            <div className="flex flex-row  items-center py-6 divide-x-[1px] divide-white/10">
              <div className="mr-4 flex-1">
                <h4 className="text-6xl font-semibold">56</h4>
                <span className="text-primary text-xl"> &#8599;5%</span>
              </div>
              <div className="flex-1">
                <ul className="flex flex-col space-y-2 ml-4">
                  <li className="text-xs">
                    Engagement: <span className="text-red-500"> &#8599;5%</span>
                  </li>
                  <li className="text-xs">
                    Alignment:<span className="text-red-500"> &#8599;5%</span>
                  </li>
                  <li className="text-xs">
                    Agency: <span className="text-red-500"> &#8599;5%</span>
                  </li>
                  <li className="text-xs">
                    Stress:<span className="text-red-500"> &#8599;5%</span>
                  </li>
                  <li className="text-xs">
                    Burnout:<span className="text-red-500"> &#8599;5%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-medium pl-10">Dimensions</h2>
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
          <div>
            <h2 className="text-lg font-medium pl-10">Global Performance</h2>
            <div className="w-full overflow-hidden flex flex-row justify-around  p-5 gap-4">
              <div className="flex justify-center items-center flex-col gap-3">
                <CircleProgress color="text-yellow-500">
                  <span className="text-xs">43</span>
                </CircleProgress>
                <p>Brain</p>
              </div>
              <div className="flex justify-center items-center flex-col gap-3">
                <CircleProgress color="text-emerald-500">
                  <span className="text-xs">43</span>
                </CircleProgress>
                <p>Body</p>
              </div>
              <div className="flex justify-center items-center flex-col gap-3">
                <CircleProgress color="text-blue-500">
                  <span className="text-xs">43</span>
                </CircleProgress>
                <p>Behavior</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-medium pl-10">Global Sentiment</h2>
            <div className="w-full overflow-hidden flex flex-row justify-around  p-5 gap-4">
              <div className="flex justify-center items-center flex-col gap-3">
                <CircleProgress color="text-red-500">
                  <span className="text-center text-xl">
                    <FaFaceFrown />
                  </span>
                </CircleProgress>
                <p>Negative</p>
              </div>
              <div className="flex justify-center items-center flex-col gap-3">
                <CircleProgress color="text-gray-300">
                  <span className="text-center text-xl">
                    <FaFaceMeh />
                  </span>
                </CircleProgress>
                <p>Neutral</p>
              </div>
              <div className="flex justify-center items-center flex-col gap-3">
                <CircleProgress color="text-green-500">
                  <span className="text-center text-xl">
                    <FaFaceSmile />
                  </span>
                </CircleProgress>
                <p>Positive</p>
              </div>
            </div>
          </div>
        </div>
        {/* Line Chart  */}
        <div className="max-w-full ">
          <div className="bg-tertiary p-6 rounded-md max-w-full mx-auto">
            <h2 className="text-lg font-medium pl-10 mb-5">Global Progress</h2>
            <div className="w-full h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data2}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
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

const data2 = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 4800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
