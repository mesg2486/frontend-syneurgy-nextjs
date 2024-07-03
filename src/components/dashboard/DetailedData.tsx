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

export default function DetailedData() {
  return (
    <section className="py-8 ">
      <div className="flex w-full justify-end">
        <div className="w-max">
          <Select>
            <SelectTrigger className="rounded-2xl hidden md:flex bg-tertiary px-5 gap-1 border-0">
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
                  <h3 className="bg-tertiary py-2 font-medium w-full flex justify-center rounded-t-xl">
                    Teams
                  </h3>
                  <h3 className="bg-gray-700 py-3 font-medium text-white w-full flex justify-center rounded-b-xl">
                    Name
                  </h3>
                </div>
                <div className="flex flex-col items-center">
                  <h3 className="bg-tertiary py-2 font-medium w-full flex justify-center rounded-t-xl">
                    Synchrony
                  </h3>
                  <h3 className="bg-gray-700 py-3 font-medium text-white w-full flex justify-center rounded-b-xl">
                    Global
                  </h3>
                </div>
                <div className="col-span-5">
                  <div className=" flex flex-col items-center">
                    <h3 className="bg-tertiary py-2 font-medium w-full flex justify-center rounded-t-xl">
                      Status
                    </h3>
                    <ul className="grid grid-cols-5 gap-2 rounded-b-xl bg-gray-700 py-3 w-full">
                      <li className="font-medium text-xs text-white flex justify-center">
                        Engage
                      </li>
                      <li className="font-medium text-xs text-white flex justify-center">
                        Alignment
                      </li>
                      <li className="font-medium text-xs text-white flex justify-center">
                        Agency
                      </li>
                      <li className="font-medium text-xs text-white flex justify-center">
                        Stress
                      </li>
                      <li className="font-medium text-xs text-white flex justify-center">
                        Burnout
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-span-5">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col items-center">
                      <h3 className="bg-tertiary py-2 font-medium text-xs w-full flex justify-center rounded-t-xl">
                        Performance
                      </h3>
                      <ul className="grid grid-cols-3 gap-2 rounded-b-xl bg-gray-700 py-3 w-full">
                        <li className="font-medium text-xs  flex justify-center">
                          Brain
                        </li>
                        <li className="font-medium text-xs  flex justify-center">
                          Body
                        </li>
                        <li className="font-medium text-xs  flex justify-center">
                          Behaviour
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-center">
                      <h3 className="bg-tertiary py-2 font-medium text-xs w-full flex justify-center rounded-t-xl">
                        Sentiment
                      </h3>
                      <ul className="grid grid-cols-3 gap-2 rounded-b-xl bg-gray-700 py-3 w-full">
                        <li className="font-medium text-xs text-white flex justify-center">
                          Negative
                        </li>
                        <li className="font-medium text-xs text-white flex justify-center">
                          Neutral
                        </li>
                        <li className="font-medium text-xs text-white flex justify-center">
                          Positive
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-2 my-1 bg-tertiary rounded-lg py-2 px-1">
                <h2 className="font-medium text-xs  w-full flex justify-center items-center px-1 text-ellipsis overflow-style">
                  Devlopment Team
                </h2>
                <div className="bg-gray-700 font-medium text-xs w-full flex justify-center items-center rounded-xl">
                  <CircleProgress
                    color="text-yellow-500"
                    className="size-8"
                  ></CircleProgress>
                  <p className="flex">43.4%</p>
                </div>
                <div className="col-span-5 flex items-center">
                  <ul className="grid grid-cols-5 gap-2 w-full">
                    <li className="flex flex-row gap-x-1 font-medium text-xs justify-center rounded-xl bg-gray-700 py-3 items-center">
                      <MdOutlineSsidChart className="text-red-500" />
                      20.8%
                    </li>
                    <li className="flex flex-row gap-x-1 font-medium text-xs justify-center rounded-xl bg-gray-700 py-3 items-center">
                      <MdOutlineSsidChart className="text-red-500" />
                      83.23%
                    </li>
                    <li className="flex flex-row gap-x-1 font-medium text-xs justify-center rounded-xl bg-gray-700 py-3 items-center">
                      <MdOutlineSsidChart className="text-red-500" />
                      13.84%
                    </li>
                    <li className="flex flex-row gap-x-1 font-medium text-xs justify-center rounded-xl bg-gray-700 py-3 items-center">
                      <MdOutlineSsidChart className="text-red-500" />
                      208.24%
                    </li>
                    <li className="flex flex-row gap-x-1 font-medium text-xs justify-center rounded-xl bg-gray-700 py-3 items-center">
                      <MdOutlineSsidChart className="text-red-500" />
                      21.57%
                    </li>
                  </ul>
                </div>
                <div className="col-span-5">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col justify-center items-center">
                      <ul className="grid grid-cols-3 gap-2 rounded-xl bg-gray-700 py-3 w-full ">
                        <li className="flex flex-col gap-y-1 font-medium text-xs justify-center px-2 text-center">
                          40.31
                          <Progress value={40} className="bg-white h-1" />
                        </li>
                        <li className="flex flex-col gap-y-1 font-medium text-xs justify-center px-2 text-center">
                          40.31
                          <Progress value={40} className="bg-white h-1" />
                        </li>
                        <li className="flex flex-col gap-y-1 font-medium text-xs justify-center px-2 text-center">
                          40.31
                          <Progress value={40} className="bg-white h-1" />
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <ul className="grid grid-cols-3 gap-2 rounded-xl bg-gray-700 py-3 w-full ">
                        <li className="flex flex-col gap-y-1 font-medium text-xs justify-center px-2 text-center">
                          40.31
                          <Progress value={40} className="bg-white h-1" />
                        </li>
                        <li className="flex flex-col gap-y-1 font-medium text-xs justify-center px-2 text-center">
                          40.31
                          <Progress value={40} className="bg-white h-1" />
                        </li>
                        <li className="flex flex-col gap-y-1 font-medium text-xs justify-center px-2 text-center">
                          40.31
                          <Progress value={40} className="bg-white h-1" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-2 my-1 bg-tertiary rounded-lg py-2 px-1">
                <h2 className="font-medium text-xs  w-full flex justify-center items-center px-1 text-ellipsis overflow-style">
                  SNRG baseline
                </h2>
                <div className="bg-gray-700 font-medium text-xs w-full flex justify-center items-center rounded-xl">
                  <CircleProgress
                    color="text-yellow-500"
                    className="size-8"
                  ></CircleProgress>
                  <p>43.4%</p>
                </div>
                <div className="col-span-5 flex items-center">
                  <ul className="grid grid-cols-5 gap-2 w-full">
                    <li className="flex flex-row gap-x-1 font-medium text-xs justify-center rounded-xl bg-gray-700 py-3 items-center">
                      <MdOutlineSsidChart className="text-red-500" />
                      20.8%
                    </li>
                    <li className="flex flex-row gap-x-1 font-medium text-xs justify-center rounded-xl bg-gray-700 py-3 items-center">
                      <MdOutlineSsidChart className="text-red-500" />
                      83.23%
                    </li>
                    <li className="flex flex-row gap-x-1 font-medium text-xs justify-center rounded-xl bg-gray-700 py-3 items-center">
                      <MdOutlineSsidChart className="text-red-500" />
                      13.84%
                    </li>
                    <li className="flex flex-row gap-x-1 font-medium text-xs justify-center rounded-xl bg-gray-700 py-3 items-center">
                      <MdOutlineSsidChart className="text-red-500" />
                      208.24%
                    </li>
                    <li className="flex flex-row gap-x-1 font-medium text-xs justify-center rounded-xl bg-gray-700 py-3 items-center">
                      <MdOutlineSsidChart className="text-red-500" />
                      21.57%
                    </li>
                  </ul>
                </div>
                <div className="col-span-5">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col justify-center items-center">
                      <ul className="grid grid-cols-3 gap-2 rounded-xl bg-gray-700 py-3 w-full ">
                        <li className="flex flex-col gap-y-1 font-medium text-xs justify-center px-2 text-center">
                          40.31
                          <Progress value={40} className="bg-white h-1" />
                        </li>
                        <li className="flex flex-col gap-y-1 font-medium text-xs justify-center px-2 text-center">
                          40.31
                          <Progress value={40} className="bg-white h-1" />
                        </li>
                        <li className="flex flex-col gap-y-1 font-medium text-xs justify-center px-2 text-center">
                          40.31
                          <Progress value={40} className="bg-white h-1" />
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <ul className="grid grid-cols-3 gap-2 rounded-xl bg-gray-700 py-3 w-full ">
                        <li className="flex flex-col gap-y-1 font-medium text-xs justify-center px-2 text-center">
                          40.31
                          <Progress value={40} className="bg-white h-1" />
                        </li>
                        <li className="flex flex-col gap-y-1 font-medium text-xs justify-center px-2 text-center">
                          40.31
                          <Progress value={40} className="bg-white h-1" />
                        </li>
                        <li className="flex flex-col gap-y-1 font-medium text-xs justify-center px-2 text-center">
                          40.31
                          <Progress value={40} className="bg-white h-1" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-2 my-1 bg-tertiary rounded-lg py-2 px-1">
                <h2 className="font-medium text-xs  w-full flex justify-center items-center px-1 text-ellipsis overflow-style">
                  GitLab PMM
                </h2>
                <div className="bg-gray-700 font-medium text-xs w-full flex justify-center items-center rounded-xl">
                  <CircleProgress
                    color="text-yellow-500"
                    className="size-8"
                  ></CircleProgress>
                  <p>43.4%</p>
                </div>
                <div className="col-span-5 flex items-center">
                  <ul className="grid grid-cols-5 gap-2 w-full">
                    <li className="flex flex-row gap-x-1 font-medium text-xs justify-center rounded-xl bg-gray-700 py-3 items-center">
                      <MdOutlineSsidChart className="text-red-500" />
                      20.8%
                    </li>
                    <li className="flex flex-row gap-x-1 font-medium text-xs justify-center rounded-xl bg-gray-700 py-3 items-center">
                      <MdOutlineSsidChart className="text-red-500" />
                      83.23%
                    </li>
                    <li className="flex flex-row gap-x-1 font-medium text-xs justify-center rounded-xl bg-gray-700 py-3 items-center">
                      <MdOutlineSsidChart className="text-red-500" />
                      13.84%
                    </li>
                    <li className="flex flex-row gap-x-1 font-medium text-xs justify-center rounded-xl bg-gray-700 py-3 items-center">
                      <MdOutlineSsidChart className="text-red-500" />
                      208.24%
                    </li>
                    <li className="flex flex-row gap-x-1 font-medium text-xs justify-center rounded-xl bg-gray-700 py-3 items-center">
                      <MdOutlineSsidChart className="text-red-500" />
                      21.57%
                    </li>
                  </ul>
                </div>
                <div className="col-span-5">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col justify-center items-center">
                      <ul className="grid grid-cols-3 gap-2 rounded-xl bg-gray-700 py-3 w-full ">
                        <li className="flex flex-col gap-y-1 font-medium text-xs justify-center px-2 text-center">
                          40.31
                          <Progress value={40} className="bg-white h-1" />
                        </li>
                        <li className="flex flex-col gap-y-1 font-medium text-xs justify-center px-2 text-center">
                          40.31
                          <Progress value={40} className="bg-white h-1" />
                        </li>
                        <li className="flex flex-col gap-y-1 font-medium text-xs justify-center px-2 text-center">
                          40.31
                          <Progress value={40} className="bg-white h-1" />
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <ul className="grid grid-cols-3 gap-2 rounded-xl bg-gray-700 py-3 w-full ">
                        <li className="flex flex-col gap-y-1 font-medium text-xs justify-center px-2 text-center">
                          40.31
                          <Progress value={40} className="bg-white h-1" />
                        </li>
                        <li className="flex flex-col gap-y-1 font-medium text-xs justify-center px-2 text-center">
                          40.31
                          <Progress value={40} className="bg-white h-1" />
                        </li>
                        <li className="flex flex-col gap-y-1 font-medium text-xs justify-center px-2 text-center">
                          40.31
                          <Progress value={40} className="bg-white h-1" />
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
                  <h3 className="bg-tertiary py-2 font-medium w-full flex justify-center rounded-t-xl">
                    Teams
                  </h3>
                  <h3 className="bg-gray-700 py-3 font-medium text-white w-full flex justify-center rounded-b-xl">
                    Name
                  </h3>
                </div>
                <div className="flex flex-col items-center">
                  <h3 className="bg-tertiary py-2 font-medium w-full flex justify-center rounded-t-xl">
                    Synchrony
                  </h3>
                  <h3 className="bg-gray-700 py-3 font-medium text-white w-full flex justify-center rounded-b-xl">
                    Global
                  </h3>
                </div>
                <div className="col-span-5">
                  <div className=" flex flex-col items-center">
                    <h3 className="bg-tertiary py-2 font-medium w-full flex justify-center rounded-t-xl">
                      Dimension
                    </h3>
                    <ul className="grid grid-cols-6 gap-2 rounded-b-xl bg-gray-700 py-3 w-full">
                      <li className="font-medium text-xs text-white flex justify-center">
                        Trust
                      </li>
                      <li className="font-medium text-xs text-white flex justify-center">
                        Safety
                      </li>
                      <li className="font-medium text-xs text-white flex justify-center">
                        Participate
                      </li>
                      <li className="font-medium text-xs text-white flex justify-center">
                        Enjoy
                      </li>
                      <li className="font-medium text-xs text-white flex justify-center">
                        Goal
                      </li>
                      <li className="font-medium text-xs text-white flex justify-center">
                        Engage
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-span-5">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col items-center">
                      <h3 className="bg-tertiary py-2 font-medium text-xs w-full flex justify-center rounded-t-xl">
                        Performance
                      </h3>
                      <ul className="grid grid-cols-3 gap-2 rounded-b-xl bg-gray-700 py-3 w-full">
                        <li className="font-medium text-xs  flex justify-center">
                          Brain
                        </li>
                        <li className="font-medium text-xs  flex justify-center">
                          Body
                        </li>
                        <li className="font-medium text-xs  flex justify-center">
                          Behaviour
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-center">
                      <h3 className="bg-tertiary py-2 font-medium text-xs w-full flex justify-center rounded-t-xl">
                        Sentiment
                      </h3>
                      <ul className="grid grid-cols-3 gap-2 rounded-b-xl bg-gray-700 py-3 w-full">
                        <li className="font-medium text-xs text-white flex justify-center">
                          Negative
                        </li>
                        <li className="font-medium text-xs text-white flex justify-center">
                          Neutral
                        </li>
                        <li className="font-medium text-xs text-white flex justify-center">
                          Positive
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-2 my-1 bg-tertiary rounded-lg py-2 px-1">
                <h2 className="font-medium text-xs  w-full flex justify-center items-center px-1 text-ellipsis overflow-style">
                  Devlopment Team
                </h2>
                <div className="bg-gray-700 font-medium text-xs w-full flex justify-center items-center rounded-xl">
                  <CircleProgress
                    color="text-yellow-500"
                    className="size-8"
                  ></CircleProgress>
                  <p className="flex">43.4%</p>
                </div>
                <div className="col-span-5 flex items-center">
                  <ul className="grid grid-cols-6 gap-2 w-full">
                    <li className="flex flex-row gap-x-1 font-medium text-xs justify-center rounded-xl bg-gray-700 py-3 items-center">
                      <MdOutlineSsidChart className="text-red-500" />
                      20.8%
                    </li>
                    <li className="flex flex-row gap-x-1 font-medium text-xs justify-center rounded-xl bg-gray-700 py-3 items-center">
                      <MdOutlineSsidChart className="text-red-500" />
                      83.23%
                    </li>
                    <li className="flex flex-row gap-x-1 font-medium text-xs justify-center rounded-xl bg-gray-700 py-3 items-center">
                      <MdOutlineSsidChart className="text-red-500" />
                      13.84%
                    </li>
                    <li className="flex flex-row gap-x-1 font-medium text-xs justify-center rounded-xl bg-gray-700 py-3 items-center">
                      <MdOutlineSsidChart className="text-red-500" />
                      208.24%
                    </li>
                    <li className="flex flex-row gap-x-1 font-medium text-xs justify-center rounded-xl bg-gray-700 py-3 items-center">
                      <MdOutlineSsidChart className="text-red-500" />
                      21.57%
                    </li>
                    <li className="flex flex-row gap-x-1 font-medium text-xs justify-center rounded-xl bg-gray-700 py-3 items-center">
                      <MdOutlineSsidChart className="text-red-500" />
                      8.57%
                    </li>
                  </ul>
                </div>
                <div className="col-span-5">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col justify-center items-center">
                      <ul className="grid grid-cols-3 gap-2 rounded-xl bg-gray-700 py-3 w-full ">
                        <li className="flex flex-col gap-y-1 font-medium text-xs justify-center px-2 text-center">
                          40.31
                          <Progress value={40} className="bg-white h-1" />
                        </li>
                        <li className="flex flex-col gap-y-1 font-medium text-xs justify-center px-2 text-center">
                          40.31
                          <Progress value={40} className="bg-white h-1" />
                        </li>
                        <li className="flex flex-col gap-y-1 font-medium text-xs justify-center px-2 text-center">
                          40.31
                          <Progress value={40} className="bg-white h-1" />
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <ul className="grid grid-cols-3 gap-2 rounded-xl bg-gray-700 py-3 w-full ">
                        <li className="flex flex-col gap-y-1 font-medium text-xs justify-center px-2 text-center">
                          40.31
                          <Progress value={40} className="bg-white h-1" />
                        </li>
                        <li className="flex flex-col gap-y-1 font-medium text-xs justify-center px-2 text-center">
                          40.31
                          <Progress value={40} className="bg-white h-1" />
                        </li>
                        <li className="flex flex-col gap-y-1 font-medium text-xs justify-center px-2 text-center">
                          40.31
                          <Progress value={40} className="bg-white h-1" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-2 my-1 bg-tertiary rounded-lg py-2 px-1">
                <h2 className="font-medium text-xs  w-full flex justify-center items-center px-1 text-ellipsis overflow-style">
                  SNRG baseline
                </h2>
                <div className="bg-gray-700 font-medium text-xs w-full flex justify-center items-center rounded-xl">
                  <CircleProgress
                    color="text-yellow-500"
                    className="size-8"
                  ></CircleProgress>
                  <p>43.4%</p>
                </div>
                <div className="col-span-5 flex items-center">
                  <ul className="grid grid-cols-6 gap-2 w-full">
                    <li className="flex flex-row gap-x-1 font-medium text-xs justify-center rounded-xl bg-gray-700 py-3 items-center">
                      <MdOutlineSsidChart className="text-red-500" />
                      20.8%
                    </li>
                    <li className="flex flex-row gap-x-1 font-medium text-xs justify-center rounded-xl bg-gray-700 py-3 items-center">
                      <MdOutlineSsidChart className="text-red-500" />
                      83.23%
                    </li>
                    <li className="flex flex-row gap-x-1 font-medium text-xs justify-center rounded-xl bg-gray-700 py-3 items-center">
                      <MdOutlineSsidChart className="text-red-500" />
                      13.84%
                    </li>
                    <li className="flex flex-row gap-x-1 font-medium text-xs justify-center rounded-xl bg-gray-700 py-3 items-center">
                      <MdOutlineSsidChart className="text-red-500" />
                      208.24%
                    </li>
                    <li className="flex flex-row gap-x-1 font-medium text-xs justify-center rounded-xl bg-gray-700 py-3 items-center">
                      <MdOutlineSsidChart className="text-red-500" />
                      21.57%
                    </li>
                    <li className="flex flex-row gap-x-1 font-medium text-xs justify-center rounded-xl bg-gray-700 py-3 items-center">
                      <MdOutlineSsidChart className="text-red-500" />
                      8.57%
                    </li>
                  </ul>
                </div>
                <div className="col-span-5">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col justify-center items-center">
                      <ul className="grid grid-cols-3 gap-2 rounded-xl bg-gray-700 py-3 w-full ">
                        <li className="flex flex-col gap-y-1 font-medium text-xs justify-center px-2 text-center">
                          40.31
                          <Progress value={40} className="bg-white h-1" />
                        </li>
                        <li className="flex flex-col gap-y-1 font-medium text-xs justify-center px-2 text-center">
                          40.31
                          <Progress value={40} className="bg-white h-1" />
                        </li>
                        <li className="flex flex-col gap-y-1 font-medium text-xs justify-center px-2 text-center">
                          40.31
                          <Progress value={40} className="bg-white h-1" />
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <ul className="grid grid-cols-3 gap-2 rounded-xl bg-gray-700 py-3 w-full ">
                        <li className="flex flex-col gap-y-1 font-medium text-xs justify-center px-2 text-center">
                          40.31
                          <Progress value={40} className="bg-white h-1" />
                        </li>
                        <li className="flex flex-col gap-y-1 font-medium text-xs justify-center px-2 text-center">
                          40.31
                          <Progress value={40} className="bg-white h-1" />
                        </li>
                        <li className="flex flex-col gap-y-1 font-medium text-xs justify-center px-2 text-center">
                          40.31
                          <Progress value={40} className="bg-white h-1" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-2 my-1 bg-tertiary rounded-lg py-2 px-1">
                <h2 className="font-medium text-xs  w-full flex justify-center items-center px-1 text-ellipsis overflow-style">
                  GitLab PMM
                </h2>
                <div className="bg-gray-700 font-medium text-xs w-full flex justify-center items-center rounded-xl">
                  <CircleProgress
                    color="text-yellow-500"
                    className="size-8"
                  ></CircleProgress>
                  <p>43.4%</p>
                </div>
                <div className="col-span-5 flex items-center">
                  <ul className="grid grid-cols-6 gap-2 w-full">
                    <li className="flex flex-row gap-x-1 font-medium text-xs justify-center rounded-xl bg-gray-700 py-3 items-center">
                      <MdOutlineSsidChart className="text-red-500" />
                      20.8%
                    </li>
                    <li className="flex flex-row gap-x-1 font-medium text-xs justify-center rounded-xl bg-gray-700 py-3 items-center">
                      <MdOutlineSsidChart className="text-red-500" />
                      83.23%
                    </li>
                    <li className="flex flex-row gap-x-1 font-medium text-xs justify-center rounded-xl bg-gray-700 py-3 items-center">
                      <MdOutlineSsidChart className="text-red-500" />
                      13.84%
                    </li>
                    <li className="flex flex-row gap-x-1 font-medium text-xs justify-center rounded-xl bg-gray-700 py-3 items-center">
                      <MdOutlineSsidChart className="text-red-500" />
                      208.24%
                    </li>
                    <li className="flex flex-row gap-x-1 font-medium text-xs justify-center rounded-xl bg-gray-700 py-3 items-center">
                      <MdOutlineSsidChart className="text-red-500" />
                      21.57%
                    </li>
                    <li className="flex flex-row gap-x-1 font-medium text-xs justify-center rounded-xl bg-gray-700 py-3 items-center">
                      <MdOutlineSsidChart className="text-red-500" />
                      8.57%
                    </li>
                  </ul>
                </div>
                <div className="col-span-5">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col justify-center items-center">
                      <ul className="grid grid-cols-3 gap-2 rounded-xl bg-gray-700 py-3 w-full ">
                        <li className="flex flex-col gap-y-1 font-medium text-xs justify-center px-2 text-center">
                          40.31
                          <Progress value={40} className="bg-white h-1" />
                        </li>
                        <li className="flex flex-col gap-y-1 font-medium text-xs justify-center px-2 text-center">
                          40.31
                          <Progress value={40} className="bg-white h-1" />
                        </li>
                        <li className="flex flex-col gap-y-1 font-medium text-xs justify-center px-2 text-center">
                          40.31
                          <Progress value={40} className="bg-white h-1" />
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <ul className="grid grid-cols-3 gap-2 rounded-xl bg-gray-700 py-3 w-full ">
                        <li className="flex flex-col gap-y-1 font-medium text-xs justify-center px-2 text-center">
                          40.31
                          <Progress value={40} className="bg-white h-1" />
                        </li>
                        <li className="flex flex-col gap-y-1 font-medium text-xs justify-center px-2 text-center">
                          40.31
                          <Progress value={40} className="bg-white h-1" />
                        </li>
                        <li className="flex flex-col gap-y-1 font-medium text-xs justify-center px-2 text-center">
                          40.31
                          <Progress value={40} className="bg-white h-1" />
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
                  <h3 className="bg-tertiary py-2 font-medium w-full flex justify-center rounded-t-xl">
                    Teams
                  </h3>
                  <h3 className="bg-gray-700 py-3 font-medium text-white w-full flex justify-center rounded-b-xl">
                    Name
                  </h3>
                </div>
                <div className="flex flex-col items-center">
                  <h3 className="bg-tertiary py-2 font-medium w-full flex justify-center rounded-t-xl">
                    Synchrony
                  </h3>
                  <h3 className="bg-gray-700 py-3 font-medium text-white w-full flex justify-center rounded-b-xl">
                    Global
                  </h3>
                </div>
                <div className="col-span-5">
                  <div className=" flex flex-col items-center">
                    <h3 className="bg-tertiary py-2 font-medium w-full flex justify-center rounded-t-xl">
                      Status
                    </h3>
                    <ul className="grid grid-cols-5 gap-2 rounded-b-xl bg-gray-700 py-3 w-full">
                      <li className="font-medium text-xs text-white flex justify-center">
                        Engage
                      </li>
                      <li className="font-medium text-xs text-white flex justify-center">
                        Alignment
                      </li>
                      <li className="font-medium text-xs text-white flex justify-center">
                        Agency
                      </li>
                      <li className="font-medium text-xs text-white flex justify-center">
                        Stress
                      </li>
                      <li className="font-medium text-xs text-white flex justify-center">
                        Burnout
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-span-5">
                  <div className="grid grid-cols-1">
                    <div className="flex flex-col items-center">
                      <h3 className="bg-tertiary py-2 font-medium text-xs w-full flex justify-center rounded-t-xl">
                        Dimensions
                      </h3>
                      <ul className="grid grid-cols-6 gap-2 rounded-b-xl bg-gray-700 py-3 w-full">
                        <li className="font-medium text-xs  flex justify-center">
                          Trust
                        </li>
                        <li className="font-medium text-xs  flex justify-center">
                          Safety
                        </li>
                        <li className="font-medium text-xs  flex justify-center">
                          Participate
                        </li>
                        <li className="font-medium text-xs  flex justify-center">
                          Enjoy
                        </li>
                        <li className="font-medium text-xs  flex justify-center">
                          Goal
                        </li>
                        <li className="font-medium text-xs  flex justify-center">
                          Engage
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-2 my-1 bg-tertiary rounded-lg py-2 px-1">
                <h2 className="font-medium text-xs  w-full flex justify-center items-center px-1 text-ellipsis overflow-style">
                  Devlopment Team
                </h2>
                <div className="bg-gray-700 font-medium text-xs w-full flex justify-center items-center rounded-xl">
                  <CircleProgress
                    color="text-yellow-500"
                    className="size-8"
                  ></CircleProgress>
                  <p className="flex">43.4%</p>
                </div>
                <div className="col-span-5 flex items-center">
                  <ul className="grid grid-cols-5 gap-2 w-full">
                    <li className="flex flex-row gap-x-1 font-medium text-xs justify-center rounded-xl bg-gray-700 py-3 items-center">
                      <MdOutlineSsidChart className="text-red-500" />
                      20.8%
                    </li>
                    <li className="flex flex-row gap-x-1 font-medium text-xs justify-center rounded-xl bg-gray-700 py-3 items-center">
                      <MdOutlineSsidChart className="text-red-500" />
                      83.23%
                    </li>
                    <li className="flex flex-row gap-x-1 font-medium text-xs justify-center rounded-xl bg-gray-700 py-3 items-center">
                      <MdOutlineSsidChart className="text-red-500" />
                      13.84%
                    </li>
                    <li className="flex flex-row gap-x-1 font-medium text-xs justify-center rounded-xl bg-gray-700 py-3 items-center">
                      <MdOutlineSsidChart className="text-red-500" />
                      208.24%
                    </li>
                    <li className="flex flex-row gap-x-1 font-medium text-xs justify-center rounded-xl bg-gray-700 py-3 items-center">
                      <MdOutlineSsidChart className="text-red-500" />
                      21.57%
                    </li>
                  </ul>
                </div>
                <div className="col-span-5">
                  <div className="grid grid-cols-1">
                    <div className="flex flex-col justify-center items-center">
                      <ul className="grid grid-cols-6 gap-2 rounded-xl bg-gray-700 py-3 w-full ">
                        <li className="flex flex-row gap-x-1 font-medium text-xs justify-center px-2 text-center">
                          <MdOutlineSsidChart className="text-red-500" />
                          40.31
                        </li>
                        <li className="flex justify-center flex-row gap-x-1 font-medium text-xs px-2 text-center">
                          <MdOutlineSsidChart className="text-red-500" />
                          40.31
                        </li>
                        <li className="flex justify-center flex-row gap-x-1 font-medium text-xs  px-2 text-center">
                          <MdOutlineSsidChart className="text-red-500" />
                          40.31
                        </li>
                        <li className="flex justify-center flex-row gap-x-1 font-medium text-xs  px-2 text-center">
                          <MdOutlineSsidChart className="text-red-500" />
                          40.31
                        </li>
                        <li className="flex justify-center flex-row gap-x-1 font-medium text-xs  px-2 text-center">
                          <MdOutlineSsidChart className="text-red-500" />
                          40.31
                        </li>
                        <li className="flex justify-center flex-row gap-x-1 font-medium text-xs  px-2 text-center">
                          <MdOutlineSsidChart className="text-red-500" />
                          40.31
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-2 my-1 bg-tertiary rounded-lg py-2 px-1">
                <h2 className="font-medium text-xs  w-full flex justify-center items-center px-1 text-ellipsis overflow-style">
                  SNRG baseline
                </h2>
                <div className="bg-gray-700 font-medium text-xs w-full flex justify-center items-center rounded-xl">
                  <CircleProgress
                    color="text-yellow-500"
                    className="size-8"
                  ></CircleProgress>
                  <p>43.4%</p>
                </div>
                <div className="col-span-5 flex items-center">
                  <ul className="grid grid-cols-5 gap-2 w-full">
                    <li className="flex flex-row gap-x-1 font-medium text-xs justify-center rounded-xl bg-gray-700 py-3 items-center">
                      <MdOutlineSsidChart className="text-red-500" />
                      20.8%
                    </li>
                    <li className="flex flex-row gap-x-1 font-medium text-xs justify-center rounded-xl bg-gray-700 py-3 items-center">
                      <MdOutlineSsidChart className="text-red-500" />
                      83.23%
                    </li>
                    <li className="flex flex-row gap-x-1 font-medium text-xs justify-center rounded-xl bg-gray-700 py-3 items-center">
                      <MdOutlineSsidChart className="text-red-500" />
                      13.84%
                    </li>
                    <li className="flex flex-row gap-x-1 font-medium text-xs justify-center rounded-xl bg-gray-700 py-3 items-center">
                      <MdOutlineSsidChart className="text-red-500" />
                      208.24%
                    </li>
                    <li className="flex flex-row gap-x-1 font-medium text-xs justify-center rounded-xl bg-gray-700 py-3 items-center">
                      <MdOutlineSsidChart className="text-red-500" />
                      21.57%
                    </li>
                  </ul>
                </div>
                <div className="col-span-5">
                  <div className="grid grid-cols-1">
                    <div className="flex flex-col justify-center items-center">
                      <ul className="grid grid-cols-6 gap-2 rounded-xl bg-gray-700 py-3 w-full ">
                        <li className="flex flex-row gap-x-1 font-medium text-xs justify-center px-2 text-center">
                          <MdOutlineSsidChart className="text-red-500" />
                          40.31
                        </li>
                        <li className="flex flex-row gap-x-1 font-medium text-xs justify-center px-2 text-center">
                          <MdOutlineSsidChart className="text-red-500" />
                          40.31
                        </li>
                        <li className="flex flex-row gap-x-1 font-medium text-xs justify-center  px-2 text-center">
                          <MdOutlineSsidChart className="text-red-500" />
                          40.31
                        </li>
                        <li className="flex flex-row gap-x-1 font-medium text-xs justify-center  px-2 text-center">
                          <MdOutlineSsidChart className="text-red-500" />
                          40.31
                        </li>
                        <li className="flex flex-row gap-x-1 font-medium text-xs justify-center  px-2 text-center">
                          <MdOutlineSsidChart className="text-red-500" />
                          40.31
                        </li>
                        <li className="flex flex-row gap-x-1 font-medium text-xs justify-center  px-2 text-center">
                          <MdOutlineSsidChart className="text-red-500" />
                          40.31
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-2 my-1 bg-tertiary rounded-lg py-2 px-1">
                <h2 className="font-medium text-xs  w-full flex justify-center items-center px-1 text-ellipsis overflow-style">
                  GitLab PMM
                </h2>
                <div className="bg-gray-700 font-medium text-xs w-full flex justify-center items-center rounded-xl">
                  <CircleProgress
                    color="text-yellow-500"
                    className="size-8"
                  ></CircleProgress>
                  <p>43.4%</p>
                </div>
                <div className="col-span-5 flex items-center">
                  <ul className="grid grid-cols-5 gap-2 w-full">
                    <li className="flex flex-row gap-x-1 font-medium text-xs justify-center rounded-xl bg-gray-700 py-3 items-center">
                      <MdOutlineSsidChart className="text-red-500" />
                      20.8%
                    </li>
                    <li className="flex flex-row gap-x-1 font-medium text-xs justify-center rounded-xl bg-gray-700 py-3 items-center">
                      <MdOutlineSsidChart className="text-red-500" />
                      83.23%
                    </li>
                    <li className="flex flex-row gap-x-1 font-medium text-xs justify-center rounded-xl bg-gray-700 py-3 items-center">
                      <MdOutlineSsidChart className="text-red-500" />
                      13.84%
                    </li>
                    <li className="flex flex-row gap-x-1 font-medium text-xs justify-center rounded-xl bg-gray-700 py-3 items-center">
                      <MdOutlineSsidChart className="text-red-500" />
                      208.24%
                    </li>
                    <li className="flex flex-row gap-x-1 font-medium text-xs justify-center rounded-xl bg-gray-700 py-3 items-center">
                      <MdOutlineSsidChart className="text-red-500" />
                      21.57%
                    </li>
                  </ul>
                </div>
                <div className="col-span-5">
                  <div className="grid grid-cols-1">
                    <div className="flex flex-col justify-center items-center">
                      <ul className="grid grid-cols-6 gap-2 rounded-xl bg-gray-700 py-3 w-full ">
                        <li className="flex flex-row gap-x-1 font-medium text-xs justify-center px-2 text-center">
                          <MdOutlineSsidChart className="text-red-500" />
                          40.31
                        </li>
                        <li className="flex flex-row gap-x-1 font-medium text-xs justify-center px-2 text-center">
                          <MdOutlineSsidChart className="text-red-500" />
                          40.31
                        </li>
                        <li className="flex flex-row gap-x-1 font-medium text-xs justify-center px-2 text-center">
                          <MdOutlineSsidChart className="text-red-500" />
                          40.31
                        </li>
                        <li className="flex flex-row gap-x-1 font-medium text-xs justify-center px-2 text-center">
                          <MdOutlineSsidChart className="text-red-500" />
                          40.31
                        </li>
                        <li className="flex flex-row gap-x-1 font-medium text-xs justify-center px-2 text-center">
                          <MdOutlineSsidChart className="text-red-500" />
                          40.31
                        </li>
                        <li className="flex flex-row gap-x-1 font-medium text-xs justify-center px-2 text-center">
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
