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
import { HiOutlineSearch, HiPlay } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";
import CircleProgress from "@/components/fragments/CircleProgress";
import { GoGoal } from "react-icons/go";
import Link from "next/link";

export default function Meetings() {
  return (
    <div className="p-6 bg-secondary w-full">
      <Tabs defaultValue="meetings" className="w-full min-h-[600px]">
        <TabsList className="bg-transparent">
          <TabsTrigger value="meetings">Meetings</TabsTrigger>
          <TabsTrigger value="members">Members</TabsTrigger>
        </TabsList>
        <Separator className="mb-4" />
        <TabsContent value="meetings" className="py-5">
          <div className="flex justify-between">
            <h2 className="text-xl font-light">Total Meetings (20)</h2>
            <div className="flex flex-row gap-x-3">
              <div className="relative">
                <Input
                  placeholder="Search"
                  className="h-full border w-40 px-6 rounded-full"
                />
                <div className="absolute right-6 top-1/2 -translate-y-1/2">
                  <HiOutlineSearch />
                </div>
              </div>
              <Select>
                <SelectTrigger className="rounded-2xl bg-tertiary px-5 gap-1 border-0">
                  <SelectValue placeholder="Meeting Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="week">Type</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
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
              <Button variant="outline" className="">
                <AiOutlinePlus />
                Add Meeting
              </Button>
            </div>
          </div>
          <div className="pt-10 space-y-6">
            <div className="grid grid-cols-5 gap-5">
              {meetings?.map((meeting, index) => (
                <div key={index} className="bg-slate-800 rounded-lg">
                  <div className="h-32 overflow-hidden rounded-t-lg">
                    <img className="object-cover" src={meeting.thumbnail} />
                  </div>
                  <div className="p-4 space-y-2">
                    <p className="opacity-70 font-light text-xs">
                      {meeting.date}
                    </p>
                    <h2 className="text-md font-medium pb-3">
                      {meeting.title}
                    </h2>
                    <Separator className="my-3 bg-white/5" />
                    <div className="flex flex-row gap-x-3">
                      <div className="flex gap-2 items-center">
                        <CircleProgress className="size-6" />
                        <p className="text-xs opacity-60">20%</p>
                      </div>
                      <div className="flex gap-2 items-center">
                        <GoGoal className="size-5" />
                        <p className="text-xs opacity-60">Creative</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="justify-between flex items-center pt-6">
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

const meetings = [
  {
    thumbnail: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
    date: "2024-05-13 · 08:20 PM",
    title: "Team Standup Meeting",
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
    date: "2024-05-14 · 08:20 PM",
    title: "Project Kickoff Meeting",
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
    date: "2024-05-15 · 08:20 PM",
    title: "Client Presentation",
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
    date: "2024-05-16 · 08:20 PM",
    title: "Weekly Progress Review",
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
    date: "2024-05-17 · 08:20 PM",
    title: "Budget Planning Meeting",
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
    date: "2024-05-18 · 08:20 PM",
    title: "Marketing Strategy Discussion",
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
    date: "2024-05-19 · 08:20 PM",
    title: "Product Development Meeting",
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
    date: "2024-05-20 · 08:20 PM",
    title: "HR Recruitment Meeting",
  },
];
