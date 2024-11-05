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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import CircleProgress from "../fragments/CircleProgressWithIcon";
import { MdOutlineSsidChart } from "react-icons/md";
import { Progress } from "../ui/progress";
import Dashmain from "../loaders/Dashmain.loader";
import { useSession } from "next-auth/react";

export default function DetailedData() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <Dashmain />;
  }

  return (
    <section className="py-8 c-container">
      <div className="flex justify-end w-full">
        <div className="w-max">
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
        </div>
      </div>
      <div className="py-10">
        <Tabs defaultValue="SPS" className="w-full">
          <TabsList className="grid grid-cols-3 gap-x-4">
            <TabsTrigger
              value="SPS"
              className="data-[state=active]:bg-background data-[state=active]:text-foreground rounded-md"
            >
              Status | Performance | Sentiment
            </TabsTrigger>
            <TabsTrigger
              value="DPS"
              className="data-[state=active]:bg-background data-[state=active]:text-foreground rounded-md"
            >
              Dimensions | Performance | Sentiment
            </TabsTrigger>
            <TabsTrigger
              value="SD"
              className="data-[state=active]:bg-background data-[state=active]:text-foreground rounded-md"
            >
              Status | Dimensions
            </TabsTrigger>
          </TabsList>
          <TabsContent value="SPS" className="py-5">
            <div className="space-y-2">
              <div className="grid grid-cols-12 gap-2 mb-1 text-xs">
                <div className="flex flex-col items-center">
                  <h3 className="flex justify-center w-full py-2 font-medium bg-tertiary rounded-t-xl">
                    Teams
                  </h3>
                  <h3 className="flex justify-center w-full py-3 font-medium text-white bg-gray-700 rounded-b-xl">
                    Name
                  </h3>
                </div>
                <div className="flex flex-col items-center">
                  <h3 className="flex justify-center w-full py-2 font-medium bg-tertiary rounded-t-xl">
                    Synchrony
                  </h3>
                  <h3 className="flex justify-center w-full py-3 font-medium text-white bg-gray-700 rounded-b-xl">
                    Global
                  </h3>
                </div>
                <div className="col-span-5">
                  <div className="flex flex-col items-center ">
                    <h3 className="flex justify-center w-full py-2 font-medium bg-tertiary rounded-t-xl">
                      Status
                    </h3>
                    <ul className="grid w-full grid-cols-5 gap-2 py-3 bg-gray-700 rounded-b-xl">
                      <li className="flex justify-center text-xs font-medium text-white">
                        Engage
                      </li>
                      <li className="flex justify-center text-xs font-medium text-white">
                        Alignment
                      </li>
                      <li className="flex justify-center text-xs font-medium text-white">
                        Agency
                      </li>
                      <li className="flex justify-center text-xs font-medium text-white">
                        Stress
                      </li>
                      <li className="flex justify-center text-xs font-medium text-white">
                        Burnout
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-span-5">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col items-center">
                      <h3 className="flex justify-center w-full py-2 text-xs font-medium bg-tertiary rounded-t-xl">
                        Performance
                      </h3>
                      <ul className="grid w-full grid-cols-3 gap-2 py-3 bg-gray-700 rounded-b-xl">
                        <li className="flex justify-center text-xs font-medium">
                          Brain
                        </li>
                        <li className="flex justify-center text-xs font-medium">
                          Body
                        </li>
                        <li className="flex justify-center text-xs font-medium">
                          Behaviour
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-center">
                      <h3 className="flex justify-center w-full py-2 text-xs font-medium bg-tertiary rounded-t-xl">
                        Sentiment
                      </h3>
                      <ul className="grid w-full grid-cols-3 gap-2 py-3 bg-gray-700 rounded-b-xl">
                        <li className="flex justify-center text-xs font-medium text-white">
                          Negative
                        </li>
                        <li className="flex justify-center text-xs font-medium text-white">
                          Neutral
                        </li>
                        <li className="flex justify-center text-xs font-medium text-white">
                          Positive
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-2 px-1 py-2 my-1 rounded-lg bg-tertiary">
                <h2 className="flex items-center justify-center w-full px-1 text-xs font-medium text-ellipsis overflow-style">
                  Devlopment Team
                </h2>
                <div className="flex items-center justify-center w-full text-xs font-medium bg-gray-700 rounded-xl">
                  <CircleProgress
                    color="text-yellow-500"
                    className="size-8"
                  ></CircleProgress>
                  <p className="flex">43.4%</p>
                </div>
                <div className="flex items-center col-span-5">
                  <ul className="grid w-full grid-cols-5 gap-2">
                    <li className="flex flex-row items-center justify-center py-3 text-xs font-medium bg-gray-700 gap-x-1 rounded-xl">
                      <MdOutlineSsidChart className="text-red-500" />
                      20.8%
                    </li>
                    <li className="flex flex-row items-center justify-center py-3 text-xs font-medium bg-gray-700 gap-x-1 rounded-xl">
                      <MdOutlineSsidChart className="text-red-500" />
                      83.23%
                    </li>
                    <li className="flex flex-row items-center justify-center py-3 text-xs font-medium bg-gray-700 gap-x-1 rounded-xl">
                      <MdOutlineSsidChart className="text-red-500" />
                      13.84%
                    </li>
                    <li className="flex flex-row items-center justify-center py-3 text-xs font-medium bg-gray-700 gap-x-1 rounded-xl">
                      <MdOutlineSsidChart className="text-red-500" />
                      208.24%
                    </li>
                    <li className="flex flex-row items-center justify-center py-3 text-xs font-medium bg-gray-700 gap-x-1 rounded-xl">
                      <MdOutlineSsidChart className="text-red-500" />
                      21.57%
                    </li>
                  </ul>
                </div>
                <div className="col-span-5">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col items-center justify-center">
                      <ul className="grid w-full grid-cols-3 gap-2 py-3 bg-gray-700 rounded-xl ">
                        <li className="flex flex-col justify-center px-2 text-xs font-medium text-center gap-y-1">
                          40.31
                          <Progress value={40} className="h-1 bg-white" />
                        </li>
                        <li className="flex flex-col justify-center px-2 text-xs font-medium text-center gap-y-1">
                          40.31
                          <Progress value={40} className="h-1 bg-white" />
                        </li>
                        <li className="flex flex-col justify-center px-2 text-xs font-medium text-center gap-y-1">
                          40.31
                          <Progress value={40} className="h-1 bg-white" />
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <ul className="grid w-full grid-cols-3 gap-2 py-3 bg-gray-700 rounded-xl ">
                        <li className="flex flex-col justify-center px-2 text-xs font-medium text-center gap-y-1">
                          40.31
                          <Progress value={40} className="h-1 bg-white" />
                        </li>
                        <li className="flex flex-col justify-center px-2 text-xs font-medium text-center gap-y-1">
                          40.31
                          <Progress value={40} className="h-1 bg-white" />
                        </li>
                        <li className="flex flex-col justify-center px-2 text-xs font-medium text-center gap-y-1">
                          40.31
                          <Progress value={40} className="h-1 bg-white" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-2 px-1 py-2 my-1 rounded-lg bg-tertiary">
                <h2 className="flex items-center justify-center w-full px-1 text-xs font-medium text-ellipsis overflow-style">
                  SNRG baseline
                </h2>
                <div className="flex items-center justify-center w-full text-xs font-medium bg-gray-700 rounded-xl">
                  <CircleProgress
                    color="text-yellow-500"
                    className="size-8"
                  ></CircleProgress>
                  <p>43.4%</p>
                </div>
                <div className="flex items-center col-span-5">
                  <ul className="grid w-full grid-cols-5 gap-2">
                    <li className="flex flex-row items-center justify-center py-3 text-xs font-medium bg-gray-700 gap-x-1 rounded-xl">
                      <MdOutlineSsidChart className="text-red-500" />
                      20.8%
                    </li>
                    <li className="flex flex-row items-center justify-center py-3 text-xs font-medium bg-gray-700 gap-x-1 rounded-xl">
                      <MdOutlineSsidChart className="text-red-500" />
                      83.23%
                    </li>
                    <li className="flex flex-row items-center justify-center py-3 text-xs font-medium bg-gray-700 gap-x-1 rounded-xl">
                      <MdOutlineSsidChart className="text-red-500" />
                      13.84%
                    </li>
                    <li className="flex flex-row items-center justify-center py-3 text-xs font-medium bg-gray-700 gap-x-1 rounded-xl">
                      <MdOutlineSsidChart className="text-red-500" />
                      208.24%
                    </li>
                    <li className="flex flex-row items-center justify-center py-3 text-xs font-medium bg-gray-700 gap-x-1 rounded-xl">
                      <MdOutlineSsidChart className="text-red-500" />
                      21.57%
                    </li>
                  </ul>
                </div>
                <div className="col-span-5">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col items-center justify-center">
                      <ul className="grid w-full grid-cols-3 gap-2 py-3 bg-gray-700 rounded-xl ">
                        <li className="flex flex-col justify-center px-2 text-xs font-medium text-center gap-y-1">
                          40.31
                          <Progress value={40} className="h-1 bg-white" />
                        </li>
                        <li className="flex flex-col justify-center px-2 text-xs font-medium text-center gap-y-1">
                          40.31
                          <Progress value={40} className="h-1 bg-white" />
                        </li>
                        <li className="flex flex-col justify-center px-2 text-xs font-medium text-center gap-y-1">
                          40.31
                          <Progress value={40} className="h-1 bg-white" />
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <ul className="grid w-full grid-cols-3 gap-2 py-3 bg-gray-700 rounded-xl ">
                        <li className="flex flex-col justify-center px-2 text-xs font-medium text-center gap-y-1">
                          40.31
                          <Progress value={40} className="h-1 bg-white" />
                        </li>
                        <li className="flex flex-col justify-center px-2 text-xs font-medium text-center gap-y-1">
                          40.31
                          <Progress value={40} className="h-1 bg-white" />
                        </li>
                        <li className="flex flex-col justify-center px-2 text-xs font-medium text-center gap-y-1">
                          40.31
                          <Progress value={40} className="h-1 bg-white" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-2 px-1 py-2 my-1 rounded-lg bg-tertiary">
                <h2 className="flex items-center justify-center w-full px-1 text-xs font-medium text-ellipsis overflow-style">
                  GitLab PMM
                </h2>
                <div className="flex items-center justify-center w-full text-xs font-medium bg-gray-700 rounded-xl">
                  <CircleProgress
                    color="text-yellow-500"
                    className="size-8"
                  ></CircleProgress>
                  <p>43.4%</p>
                </div>
                <div className="flex items-center col-span-5">
                  <ul className="grid w-full grid-cols-5 gap-2">
                    <li className="flex flex-row items-center justify-center py-3 text-xs font-medium bg-gray-700 gap-x-1 rounded-xl">
                      <MdOutlineSsidChart className="text-red-500" />
                      20.8%
                    </li>
                    <li className="flex flex-row items-center justify-center py-3 text-xs font-medium bg-gray-700 gap-x-1 rounded-xl">
                      <MdOutlineSsidChart className="text-red-500" />
                      83.23%
                    </li>
                    <li className="flex flex-row items-center justify-center py-3 text-xs font-medium bg-gray-700 gap-x-1 rounded-xl">
                      <MdOutlineSsidChart className="text-red-500" />
                      13.84%
                    </li>
                    <li className="flex flex-row items-center justify-center py-3 text-xs font-medium bg-gray-700 gap-x-1 rounded-xl">
                      <MdOutlineSsidChart className="text-red-500" />
                      208.24%
                    </li>
                    <li className="flex flex-row items-center justify-center py-3 text-xs font-medium bg-gray-700 gap-x-1 rounded-xl">
                      <MdOutlineSsidChart className="text-red-500" />
                      21.57%
                    </li>
                  </ul>
                </div>
                <div className="col-span-5">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col items-center justify-center">
                      <ul className="grid w-full grid-cols-3 gap-2 py-3 bg-gray-700 rounded-xl ">
                        <li className="flex flex-col justify-center px-2 text-xs font-medium text-center gap-y-1">
                          40.31
                          <Progress value={40} className="h-1 bg-white" />
                        </li>
                        <li className="flex flex-col justify-center px-2 text-xs font-medium text-center gap-y-1">
                          40.31
                          <Progress value={40} className="h-1 bg-white" />
                        </li>
                        <li className="flex flex-col justify-center px-2 text-xs font-medium text-center gap-y-1">
                          40.31
                          <Progress value={40} className="h-1 bg-white" />
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <ul className="grid w-full grid-cols-3 gap-2 py-3 bg-gray-700 rounded-xl ">
                        <li className="flex flex-col justify-center px-2 text-xs font-medium text-center gap-y-1">
                          40.31
                          <Progress value={40} className="h-1 bg-white" />
                        </li>
                        <li className="flex flex-col justify-center px-2 text-xs font-medium text-center gap-y-1">
                          40.31
                          <Progress value={40} className="h-1 bg-white" />
                        </li>
                        <li className="flex flex-col justify-center px-2 text-xs font-medium text-center gap-y-1">
                          40.31
                          <Progress value={40} className="h-1 bg-white" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="DPS" className="py-5">
            <div className="space-y-2">
              <div className="grid grid-cols-12 gap-2 mb-1 text-xs">
                <div className="flex flex-col items-center">
                  <h3 className="flex justify-center w-full py-2 font-medium bg-tertiary rounded-t-xl">
                    Teams
                  </h3>
                  <h3 className="flex justify-center w-full py-3 font-medium text-white bg-gray-700 rounded-b-xl">
                    Name
                  </h3>
                </div>
                <div className="flex flex-col items-center">
                  <h3 className="flex justify-center w-full py-2 font-medium bg-tertiary rounded-t-xl">
                    Synchrony
                  </h3>
                  <h3 className="flex justify-center w-full py-3 font-medium text-white bg-gray-700 rounded-b-xl">
                    Global
                  </h3>
                </div>
                <div className="col-span-5">
                  <div className="flex flex-col items-center ">
                    <h3 className="flex justify-center w-full py-2 font-medium bg-tertiary rounded-t-xl">
                      Dimension
                    </h3>
                    <ul className="grid w-full grid-cols-6 gap-2 py-3 bg-gray-700 rounded-b-xl">
                      <li className="flex justify-center text-xs font-medium text-white">
                        Trust
                      </li>
                      <li className="flex justify-center text-xs font-medium text-white">
                        Safety
                      </li>
                      <li className="flex justify-center text-xs font-medium text-white">
                        Participate
                      </li>
                      <li className="flex justify-center text-xs font-medium text-white">
                        Enjoy
                      </li>
                      <li className="flex justify-center text-xs font-medium text-white">
                        Goal
                      </li>
                      <li className="flex justify-center text-xs font-medium text-white">
                        Engage
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-span-5">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col items-center">
                      <h3 className="flex justify-center w-full py-2 text-xs font-medium bg-tertiary rounded-t-xl">
                        Performance
                      </h3>
                      <ul className="grid w-full grid-cols-3 gap-2 py-3 bg-gray-700 rounded-b-xl">
                        <li className="flex justify-center text-xs font-medium">
                          Brain
                        </li>
                        <li className="flex justify-center text-xs font-medium">
                          Body
                        </li>
                        <li className="flex justify-center text-xs font-medium">
                          Behaviour
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-center">
                      <h3 className="flex justify-center w-full py-2 text-xs font-medium bg-tertiary rounded-t-xl">
                        Sentiment
                      </h3>
                      <ul className="grid w-full grid-cols-3 gap-2 py-3 bg-gray-700 rounded-b-xl">
                        <li className="flex justify-center text-xs font-medium text-white">
                          Negative
                        </li>
                        <li className="flex justify-center text-xs font-medium text-white">
                          Neutral
                        </li>
                        <li className="flex justify-center text-xs font-medium text-white">
                          Positive
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-2 px-1 py-2 my-1 rounded-lg bg-tertiary">
                <h2 className="flex items-center justify-center w-full px-1 text-xs font-medium text-ellipsis overflow-style">
                  Devlopment Team
                </h2>
                <div className="flex items-center justify-center w-full text-xs font-medium bg-gray-700 rounded-xl">
                  <CircleProgress
                    color="text-yellow-500"
                    className="size-8"
                  ></CircleProgress>
                  <p className="flex">43.4%</p>
                </div>
                <div className="flex items-center col-span-5">
                  <ul className="grid w-full grid-cols-6 gap-2">
                    <li className="flex flex-row items-center justify-center py-3 text-xs font-medium bg-gray-700 gap-x-1 rounded-xl">
                      <MdOutlineSsidChart className="text-red-500" />
                      20.8%
                    </li>
                    <li className="flex flex-row items-center justify-center py-3 text-xs font-medium bg-gray-700 gap-x-1 rounded-xl">
                      <MdOutlineSsidChart className="text-red-500" />
                      83.23%
                    </li>
                    <li className="flex flex-row items-center justify-center py-3 text-xs font-medium bg-gray-700 gap-x-1 rounded-xl">
                      <MdOutlineSsidChart className="text-red-500" />
                      13.84%
                    </li>
                    <li className="flex flex-row items-center justify-center py-3 text-xs font-medium bg-gray-700 gap-x-1 rounded-xl">
                      <MdOutlineSsidChart className="text-red-500" />
                      208.24%
                    </li>
                    <li className="flex flex-row items-center justify-center py-3 text-xs font-medium bg-gray-700 gap-x-1 rounded-xl">
                      <MdOutlineSsidChart className="text-red-500" />
                      21.57%
                    </li>
                    <li className="flex flex-row items-center justify-center py-3 text-xs font-medium bg-gray-700 gap-x-1 rounded-xl">
                      <MdOutlineSsidChart className="text-red-500" />
                      8.57%
                    </li>
                  </ul>
                </div>
                <div className="col-span-5">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col items-center justify-center">
                      <ul className="grid w-full grid-cols-3 gap-2 py-3 bg-gray-700 rounded-xl ">
                        <li className="flex flex-col justify-center px-2 text-xs font-medium text-center gap-y-1">
                          40.31
                          <Progress value={40} className="h-1 bg-white" />
                        </li>
                        <li className="flex flex-col justify-center px-2 text-xs font-medium text-center gap-y-1">
                          40.31
                          <Progress value={40} className="h-1 bg-white" />
                        </li>
                        <li className="flex flex-col justify-center px-2 text-xs font-medium text-center gap-y-1">
                          40.31
                          <Progress value={40} className="h-1 bg-white" />
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <ul className="grid w-full grid-cols-3 gap-2 py-3 bg-gray-700 rounded-xl ">
                        <li className="flex flex-col justify-center px-2 text-xs font-medium text-center gap-y-1">
                          40.31
                          <Progress value={40} className="h-1 bg-white" />
                        </li>
                        <li className="flex flex-col justify-center px-2 text-xs font-medium text-center gap-y-1">
                          40.31
                          <Progress value={40} className="h-1 bg-white" />
                        </li>
                        <li className="flex flex-col justify-center px-2 text-xs font-medium text-center gap-y-1">
                          40.31
                          <Progress value={40} className="h-1 bg-white" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-2 px-1 py-2 my-1 rounded-lg bg-tertiary">
                <h2 className="flex items-center justify-center w-full px-1 text-xs font-medium text-ellipsis overflow-style">
                  SNRG baseline
                </h2>
                <div className="flex items-center justify-center w-full text-xs font-medium bg-gray-700 rounded-xl">
                  <CircleProgress
                    color="text-yellow-500"
                    className="size-8"
                  ></CircleProgress>
                  <p>43.4%</p>
                </div>
                <div className="flex items-center col-span-5">
                  <ul className="grid w-full grid-cols-6 gap-2">
                    <li className="flex flex-row items-center justify-center py-3 text-xs font-medium bg-gray-700 gap-x-1 rounded-xl">
                      <MdOutlineSsidChart className="text-red-500" />
                      20.8%
                    </li>
                    <li className="flex flex-row items-center justify-center py-3 text-xs font-medium bg-gray-700 gap-x-1 rounded-xl">
                      <MdOutlineSsidChart className="text-red-500" />
                      83.23%
                    </li>
                    <li className="flex flex-row items-center justify-center py-3 text-xs font-medium bg-gray-700 gap-x-1 rounded-xl">
                      <MdOutlineSsidChart className="text-red-500" />
                      13.84%
                    </li>
                    <li className="flex flex-row items-center justify-center py-3 text-xs font-medium bg-gray-700 gap-x-1 rounded-xl">
                      <MdOutlineSsidChart className="text-red-500" />
                      208.24%
                    </li>
                    <li className="flex flex-row items-center justify-center py-3 text-xs font-medium bg-gray-700 gap-x-1 rounded-xl">
                      <MdOutlineSsidChart className="text-red-500" />
                      21.57%
                    </li>
                    <li className="flex flex-row items-center justify-center py-3 text-xs font-medium bg-gray-700 gap-x-1 rounded-xl">
                      <MdOutlineSsidChart className="text-red-500" />
                      8.57%
                    </li>
                  </ul>
                </div>
                <div className="col-span-5">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col items-center justify-center">
                      <ul className="grid w-full grid-cols-3 gap-2 py-3 bg-gray-700 rounded-xl ">
                        <li className="flex flex-col justify-center px-2 text-xs font-medium text-center gap-y-1">
                          40.31
                          <Progress value={40} className="h-1 bg-white" />
                        </li>
                        <li className="flex flex-col justify-center px-2 text-xs font-medium text-center gap-y-1">
                          40.31
                          <Progress value={40} className="h-1 bg-white" />
                        </li>
                        <li className="flex flex-col justify-center px-2 text-xs font-medium text-center gap-y-1">
                          40.31
                          <Progress value={40} className="h-1 bg-white" />
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <ul className="grid w-full grid-cols-3 gap-2 py-3 bg-gray-700 rounded-xl ">
                        <li className="flex flex-col justify-center px-2 text-xs font-medium text-center gap-y-1">
                          40.31
                          <Progress value={40} className="h-1 bg-white" />
                        </li>
                        <li className="flex flex-col justify-center px-2 text-xs font-medium text-center gap-y-1">
                          40.31
                          <Progress value={40} className="h-1 bg-white" />
                        </li>
                        <li className="flex flex-col justify-center px-2 text-xs font-medium text-center gap-y-1">
                          40.31
                          <Progress value={40} className="h-1 bg-white" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-2 px-1 py-2 my-1 rounded-lg bg-tertiary">
                <h2 className="flex items-center justify-center w-full px-1 text-xs font-medium text-ellipsis overflow-style">
                  GitLab PMM
                </h2>
                <div className="flex items-center justify-center w-full text-xs font-medium bg-gray-700 rounded-xl">
                  <CircleProgress
                    color="text-yellow-500"
                    className="size-8"
                  ></CircleProgress>
                  <p>43.4%</p>
                </div>
                <div className="flex items-center col-span-5">
                  <ul className="grid w-full grid-cols-6 gap-2">
                    <li className="flex flex-row items-center justify-center py-3 text-xs font-medium bg-gray-700 gap-x-1 rounded-xl">
                      <MdOutlineSsidChart className="text-red-500" />
                      20.8%
                    </li>
                    <li className="flex flex-row items-center justify-center py-3 text-xs font-medium bg-gray-700 gap-x-1 rounded-xl">
                      <MdOutlineSsidChart className="text-red-500" />
                      83.23%
                    </li>
                    <li className="flex flex-row items-center justify-center py-3 text-xs font-medium bg-gray-700 gap-x-1 rounded-xl">
                      <MdOutlineSsidChart className="text-red-500" />
                      13.84%
                    </li>
                    <li className="flex flex-row items-center justify-center py-3 text-xs font-medium bg-gray-700 gap-x-1 rounded-xl">
                      <MdOutlineSsidChart className="text-red-500" />
                      208.24%
                    </li>
                    <li className="flex flex-row items-center justify-center py-3 text-xs font-medium bg-gray-700 gap-x-1 rounded-xl">
                      <MdOutlineSsidChart className="text-red-500" />
                      21.57%
                    </li>
                    <li className="flex flex-row items-center justify-center py-3 text-xs font-medium bg-gray-700 gap-x-1 rounded-xl">
                      <MdOutlineSsidChart className="text-red-500" />
                      8.57%
                    </li>
                  </ul>
                </div>
                <div className="col-span-5">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col items-center justify-center">
                      <ul className="grid w-full grid-cols-3 gap-2 py-3 bg-gray-700 rounded-xl ">
                        <li className="flex flex-col justify-center px-2 text-xs font-medium text-center gap-y-1">
                          40.31
                          <Progress value={40} className="h-1 bg-white" />
                        </li>
                        <li className="flex flex-col justify-center px-2 text-xs font-medium text-center gap-y-1">
                          40.31
                          <Progress value={40} className="h-1 bg-white" />
                        </li>
                        <li className="flex flex-col justify-center px-2 text-xs font-medium text-center gap-y-1">
                          40.31
                          <Progress value={40} className="h-1 bg-white" />
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <ul className="grid w-full grid-cols-3 gap-2 py-3 bg-gray-700 rounded-xl ">
                        <li className="flex flex-col justify-center px-2 text-xs font-medium text-center gap-y-1">
                          40.31
                          <Progress value={40} className="h-1 bg-white" />
                        </li>
                        <li className="flex flex-col justify-center px-2 text-xs font-medium text-center gap-y-1">
                          40.31
                          <Progress value={40} className="h-1 bg-white" />
                        </li>
                        <li className="flex flex-col justify-center px-2 text-xs font-medium text-center gap-y-1">
                          40.31
                          <Progress value={40} className="h-1 bg-white" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="SD" className="py-5">
            <div className="space-y-2">
              <div className="grid grid-cols-12 gap-2 mb-1 text-xs">
                <div className="flex flex-col items-center">
                  <h3 className="flex justify-center w-full py-2 font-medium bg-tertiary rounded-t-xl">
                    Teams
                  </h3>
                  <h3 className="flex justify-center w-full py-3 font-medium text-white bg-gray-700 rounded-b-xl">
                    Name
                  </h3>
                </div>
                <div className="flex flex-col items-center">
                  <h3 className="flex justify-center w-full py-2 font-medium bg-tertiary rounded-t-xl">
                    Synchrony
                  </h3>
                  <h3 className="flex justify-center w-full py-3 font-medium text-white bg-gray-700 rounded-b-xl">
                    Global
                  </h3>
                </div>
                <div className="col-span-5">
                  <div className="flex flex-col items-center ">
                    <h3 className="flex justify-center w-full py-2 font-medium bg-tertiary rounded-t-xl">
                      Status
                    </h3>
                    <ul className="grid w-full grid-cols-5 gap-2 py-3 bg-gray-700 rounded-b-xl">
                      <li className="flex justify-center text-xs font-medium text-white">
                        Engage
                      </li>
                      <li className="flex justify-center text-xs font-medium text-white">
                        Alignment
                      </li>
                      <li className="flex justify-center text-xs font-medium text-white">
                        Agency
                      </li>
                      <li className="flex justify-center text-xs font-medium text-white">
                        Stress
                      </li>
                      <li className="flex justify-center text-xs font-medium text-white">
                        Burnout
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-span-5">
                  <div className="grid grid-cols-1">
                    <div className="flex flex-col items-center">
                      <h3 className="flex justify-center w-full py-2 text-xs font-medium bg-tertiary rounded-t-xl">
                        Dimensions
                      </h3>
                      <ul className="grid w-full grid-cols-6 gap-2 py-3 bg-gray-700 rounded-b-xl">
                        <li className="flex justify-center text-xs font-medium">
                          Trust
                        </li>
                        <li className="flex justify-center text-xs font-medium">
                          Safety
                        </li>
                        <li className="flex justify-center text-xs font-medium">
                          Participate
                        </li>
                        <li className="flex justify-center text-xs font-medium">
                          Enjoy
                        </li>
                        <li className="flex justify-center text-xs font-medium">
                          Goal
                        </li>
                        <li className="flex justify-center text-xs font-medium">
                          Engage
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-2 px-1 py-2 my-1 rounded-lg bg-tertiary">
                <h2 className="flex items-center justify-center w-full px-1 text-xs font-medium text-ellipsis overflow-style">
                  Devlopment Team
                </h2>
                <div className="flex items-center justify-center w-full text-xs font-medium bg-gray-700 rounded-xl">
                  <CircleProgress
                    color="text-yellow-500"
                    className="size-8"
                  ></CircleProgress>
                  <p className="flex">43.4%</p>
                </div>
                <div className="flex items-center col-span-5">
                  <ul className="grid w-full grid-cols-5 gap-2">
                    <li className="flex flex-row items-center justify-center py-3 text-xs font-medium bg-gray-700 gap-x-1 rounded-xl">
                      <MdOutlineSsidChart className="text-red-500" />
                      20.8%
                    </li>
                    <li className="flex flex-row items-center justify-center py-3 text-xs font-medium bg-gray-700 gap-x-1 rounded-xl">
                      <MdOutlineSsidChart className="text-red-500" />
                      83.23%
                    </li>
                    <li className="flex flex-row items-center justify-center py-3 text-xs font-medium bg-gray-700 gap-x-1 rounded-xl">
                      <MdOutlineSsidChart className="text-red-500" />
                      13.84%
                    </li>
                    <li className="flex flex-row items-center justify-center py-3 text-xs font-medium bg-gray-700 gap-x-1 rounded-xl">
                      <MdOutlineSsidChart className="text-red-500" />
                      208.24%
                    </li>
                    <li className="flex flex-row items-center justify-center py-3 text-xs font-medium bg-gray-700 gap-x-1 rounded-xl">
                      <MdOutlineSsidChart className="text-red-500" />
                      21.57%
                    </li>
                  </ul>
                </div>
                <div className="col-span-5">
                  <div className="grid grid-cols-1">
                    <div className="flex flex-col items-center justify-center">
                      <ul className="grid w-full grid-cols-6 gap-2 py-3 bg-gray-700 rounded-xl ">
                        <li className="flex flex-row justify-center px-2 text-xs font-medium text-center gap-x-1">
                          <MdOutlineSsidChart className="text-red-500" />
                          40.31
                        </li>
                        <li className="flex flex-row justify-center px-2 text-xs font-medium text-center gap-x-1">
                          <MdOutlineSsidChart className="text-red-500" />
                          40.31
                        </li>
                        <li className="flex flex-row justify-center px-2 text-xs font-medium text-center gap-x-1">
                          <MdOutlineSsidChart className="text-red-500" />
                          40.31
                        </li>
                        <li className="flex flex-row justify-center px-2 text-xs font-medium text-center gap-x-1">
                          <MdOutlineSsidChart className="text-red-500" />
                          40.31
                        </li>
                        <li className="flex flex-row justify-center px-2 text-xs font-medium text-center gap-x-1">
                          <MdOutlineSsidChart className="text-red-500" />
                          40.31
                        </li>
                        <li className="flex flex-row justify-center px-2 text-xs font-medium text-center gap-x-1">
                          <MdOutlineSsidChart className="text-red-500" />
                          40.31
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-2 px-1 py-2 my-1 rounded-lg bg-tertiary">
                <h2 className="flex items-center justify-center w-full px-1 text-xs font-medium text-ellipsis overflow-style">
                  SNRG baseline
                </h2>
                <div className="flex items-center justify-center w-full text-xs font-medium bg-gray-700 rounded-xl">
                  <CircleProgress
                    color="text-yellow-500"
                    className="size-8"
                  ></CircleProgress>
                  <p>43.4%</p>
                </div>
                <div className="flex items-center col-span-5">
                  <ul className="grid w-full grid-cols-5 gap-2">
                    <li className="flex flex-row items-center justify-center py-3 text-xs font-medium bg-gray-700 gap-x-1 rounded-xl">
                      <MdOutlineSsidChart className="text-red-500" />
                      20.8%
                    </li>
                    <li className="flex flex-row items-center justify-center py-3 text-xs font-medium bg-gray-700 gap-x-1 rounded-xl">
                      <MdOutlineSsidChart className="text-red-500" />
                      83.23%
                    </li>
                    <li className="flex flex-row items-center justify-center py-3 text-xs font-medium bg-gray-700 gap-x-1 rounded-xl">
                      <MdOutlineSsidChart className="text-red-500" />
                      13.84%
                    </li>
                    <li className="flex flex-row items-center justify-center py-3 text-xs font-medium bg-gray-700 gap-x-1 rounded-xl">
                      <MdOutlineSsidChart className="text-red-500" />
                      208.24%
                    </li>
                    <li className="flex flex-row items-center justify-center py-3 text-xs font-medium bg-gray-700 gap-x-1 rounded-xl">
                      <MdOutlineSsidChart className="text-red-500" />
                      21.57%
                    </li>
                  </ul>
                </div>
                <div className="col-span-5">
                  <div className="grid grid-cols-1">
                    <div className="flex flex-col items-center justify-center">
                      <ul className="grid w-full grid-cols-6 gap-2 py-3 bg-gray-700 rounded-xl ">
                        <li className="flex flex-row justify-center px-2 text-xs font-medium text-center gap-x-1">
                          <MdOutlineSsidChart className="text-red-500" />
                          40.31
                        </li>
                        <li className="flex flex-row justify-center px-2 text-xs font-medium text-center gap-x-1">
                          <MdOutlineSsidChart className="text-red-500" />
                          40.31
                        </li>
                        <li className="flex flex-row justify-center px-2 text-xs font-medium text-center gap-x-1">
                          <MdOutlineSsidChart className="text-red-500" />
                          40.31
                        </li>
                        <li className="flex flex-row justify-center px-2 text-xs font-medium text-center gap-x-1">
                          <MdOutlineSsidChart className="text-red-500" />
                          40.31
                        </li>
                        <li className="flex flex-row justify-center px-2 text-xs font-medium text-center gap-x-1">
                          <MdOutlineSsidChart className="text-red-500" />
                          40.31
                        </li>
                        <li className="flex flex-row justify-center px-2 text-xs font-medium text-center gap-x-1">
                          <MdOutlineSsidChart className="text-red-500" />
                          40.31
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-2 px-1 py-2 my-1 rounded-lg bg-tertiary">
                <h2 className="flex items-center justify-center w-full px-1 text-xs font-medium text-ellipsis overflow-style">
                  GitLab PMM
                </h2>
                <div className="flex items-center justify-center w-full text-xs font-medium bg-gray-700 rounded-xl">
                  <CircleProgress
                    color="text-yellow-500"
                    className="size-8"
                  ></CircleProgress>
                  <p>43.4%</p>
                </div>
                <div className="flex items-center col-span-5">
                  <ul className="grid w-full grid-cols-5 gap-2">
                    <li className="flex flex-row items-center justify-center py-3 text-xs font-medium bg-gray-700 gap-x-1 rounded-xl">
                      <MdOutlineSsidChart className="text-red-500" />
                      20.8%
                    </li>
                    <li className="flex flex-row items-center justify-center py-3 text-xs font-medium bg-gray-700 gap-x-1 rounded-xl">
                      <MdOutlineSsidChart className="text-red-500" />
                      83.23%
                    </li>
                    <li className="flex flex-row items-center justify-center py-3 text-xs font-medium bg-gray-700 gap-x-1 rounded-xl">
                      <MdOutlineSsidChart className="text-red-500" />
                      13.84%
                    </li>
                    <li className="flex flex-row items-center justify-center py-3 text-xs font-medium bg-gray-700 gap-x-1 rounded-xl">
                      <MdOutlineSsidChart className="text-red-500" />
                      208.24%
                    </li>
                    <li className="flex flex-row items-center justify-center py-3 text-xs font-medium bg-gray-700 gap-x-1 rounded-xl">
                      <MdOutlineSsidChart className="text-red-500" />
                      21.57%
                    </li>
                  </ul>
                </div>
                <div className="col-span-5">
                  <div className="grid grid-cols-1">
                    <div className="flex flex-col items-center justify-center">
                      <ul className="grid w-full grid-cols-6 gap-2 py-3 bg-gray-700 rounded-xl ">
                        <li className="flex flex-row justify-center px-2 text-xs font-medium text-center gap-x-1">
                          <MdOutlineSsidChart className="text-red-500" />
                          40.31
                        </li>
                        <li className="flex flex-row justify-center px-2 text-xs font-medium text-center gap-x-1">
                          <MdOutlineSsidChart className="text-red-500" />
                          40.31
                        </li>
                        <li className="flex flex-row justify-center px-2 text-xs font-medium text-center gap-x-1">
                          <MdOutlineSsidChart className="text-red-500" />
                          40.31
                        </li>
                        <li className="flex flex-row justify-center px-2 text-xs font-medium text-center gap-x-1">
                          <MdOutlineSsidChart className="text-red-500" />
                          40.31
                        </li>
                        <li className="flex flex-row justify-center px-2 text-xs font-medium text-center gap-x-1">
                          <MdOutlineSsidChart className="text-red-500" />
                          40.31
                        </li>
                        <li className="flex flex-row justify-center px-2 text-xs font-medium text-center gap-x-1">
                          <MdOutlineSsidChart className="text-red-500" />
                          40.31
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
