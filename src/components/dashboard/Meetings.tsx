import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "../ui/separator";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function Meetings() {
  return (
    <div className="p-6 bg-secondary w-full">
      <Tabs defaultValue="meetings" className="w-full">
        <TabsList className="bg-transparent ">
          <TabsTrigger value="meetings">Meetings</TabsTrigger>
          <TabsTrigger value="members">Members</TabsTrigger>
        </TabsList>
        <Separator className="mb-4" />
        <TabsContent value="meetings">
          <div className="flex justify-between">
            <h2 className="text-xl font-light">Total Metting</h2>

            <div className="flex flex-row gap-x-3">
              <Input placeholder="Search" type="search" />
              <Select>
                <SelectTrigger className="rounded-2xl p-2">
                  <SelectValue placeholder="Meeting Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="week">Type</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="rounded-2xl p-2">
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
              <Button
                variant={"ghost"}
                className="border-[1px] border-slate-50"
              >
                Add Meeting
              </Button>
            </div>
          </div>
          <div className="pt-10 space-y-6">
            <div className="grid grid-cols-4 gap-5">
              {meetings?.map((meeting, index) => (
                <div key={index} className="bg-slate-800 rounded-lg">
                  <div className="h-32 overflow-hidden rounded-t-lg">
                    <img className="object-cover" src={meeting.thumbnail} />
                  </div>
                  <div className="p-4">
                    <p className="opacity-80 font-extralight">{meeting.date}</p>
                    <h2 className="text-md font-medium">{meeting.title}</h2>
                    <Separator className="my-3" />
                    <div className="flex flex-row gap-x-3">
                      <p>12% </p>

                      <p>Creative</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
        </TabsContent>
        <TabsContent value="members"></TabsContent>
      </Tabs>
    </div>
  );
}

const meetings = [
  {
    thumbnail: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
    date: "2024-05-13",
    title: "Team Standup Meeting",
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
    date: "2024-05-14",
    title: "Project Kickoff Meeting",
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
    date: "2024-05-15",
    title: "Client Presentation",
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
    date: "2024-05-16",
    title: "Weekly Progress Review",
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
    date: "2024-05-17",
    title: "Budget Planning Meeting",
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
    date: "2024-05-18",
    title: "Marketing Strategy Discussion",
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
    date: "2024-05-19",
    title: "Product Development Meeting",
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
    date: "2024-05-20",
    title: "HR Recruitment Meeting",
  },
];
