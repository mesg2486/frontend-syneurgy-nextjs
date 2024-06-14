"use client";

import MeetingCard from "@/components/cards/MeetingCard";
import { LIST_MEETINGS_BY_USERID } from "@/components/dashboard/Meetings";
import { Button } from "@/components/ui/button";
import { gql } from "@/services/clients/graphql.client";
import { Meeting } from "@/services/gql/graphql";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { GoThumbsdown, GoThumbsup } from "react-icons/go";
import { IoIosWarning } from "react-icons/io";
import { CiStopwatch } from "react-icons/ci";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import VideoModal from "@/components/modals/VideoCard.modal";
import Link from "next/link";

export default function Wizard() {
  const [open, setOpen] = useState(false);
  // const { data: session, status } = useSession();

  // const { data, isLoading, refetch } = useQuery({
  //   queryKey: ["meetings", session?.user.sub],
  //   queryFn: async () => {
  //     return await gql.request(LIST_MEETINGS_BY_USERID, {
  //       userId: String(session?.user.sub),
  //     });
  //   },
  //   enabled: !!session?.user,
  // });

  return (
    <div className="flex gap-12">
      <div className="border-r space-y-8 h-full min-h-dvh border-white/10 w-60 pt-8">
        <section className="relative">
          <div className="max-w-[200px] flex items-center gap-6 justify-center">
            <p className="flex-1 text-right">Recent Examples</p>
            <span className="p-1 bg-primary text-black rounded-full">
              <IoIosWarning className="text-xl" />
            </span>
            <div className="absolute h-2 w-2 bg-primary right-0 translate-x-1/2 rounded-full"></div>
          </div>
        </section>
        <section className="relative">
          <div className="max-w-[200px] flex items-center gap-6 justify-center">
            <Link href={"create"} className="flex-1 text-right ">
              Create Behavior
            </Link>
            <span className="p-1 bg-primary text-black rounded-full">
              <IoIosWarning className="text-xl" />
            </span>
            <div className="absolute h-2 w-2 bg-primary right-0 translate-x-1/2 rounded-full"></div>
          </div>
        </section>
      </div>
      <div className="pt-8 flex-1">
        <div className="flex w-full justify-between items-center">
          <h2 className="text-2xl">Recent Examples</h2>
          <Button className="rounded-full px-14 py-5">Next</Button>
        </div>
        <div className="space-y-4 pt-6">
          <div className="pt-4 text-sm divide-y divide-white/5">
            <div className="grid grid-cols-12 space-x-3  opacity-60 py-3">
              <h2 className="col-span-2">Meeting</h2>
              <h2 className="col-span-1">Ranking</h2>
              <h2 className="col-span-2">growth</h2>
              <h2 className="col-span-5 ">Description</h2>
            </div>
            {data?.map((data) => (
              <div key={data.id} className="grid grid-cols-12 space-x-3 py-5">
                <div className="col-span-2 flex flex-row gap-x-2">
                  <img
                    onClick={() => setOpen(true)}
                    className="w-16 rounded-md cursor-pointer"
                    src={data.thumbnail}
                  />
                  <VideoModal open={open} setIsOpen={setOpen} />
                  <div className="font-light opacity-60">
                    <p>{data.date}</p>
                    <p className="flex flex-row items-center">
                      <CiStopwatch />
                      {data.time}
                    </p>
                  </div>
                </div>
                <div className="col-span-1 flex flex-row gap-x-3 text-lg">
                  <GoThumbsup
                    className={`${data.ranking === true ? "text-green-500" : ""} cursor-pointer`}
                  />
                  <GoThumbsdown
                    className={`${data.ranking === false ? "text-red-600" : ""} cursor-pointer`}
                  />
                </div>
                <div className="col-span-2 opacity-80 font-light overflow-hidden">
                  <p>{data.growth}</p>
                </div>
                <div className="col-span-5 opacity-80 font-light">
                  <p>{data.description}</p>
                </div>
                <div className="col-span-2">
                  <Button variant={"outline"}>Take Action</Button>
                </div>
              </div>
            ))}
          </div>
          {/* {(isLoading || status === "loading") &&
            Array.from(Array(10)).map((i) => <strong key={i} />)}
          {Number(data?.meetings?.items?.length) > 0 &&
            data?.meetings?.items?.slice(8).map((meeting) => (
              <div key={meeting?.id} className="grid grid-cols-12">
                <img
                  src={
                    meeting?.thumbnail ||
                    "https://plus.unsplash.com/premium_photo-1661688963878-4f3282dd1263"
                  }
                  className="rounded-lg h-20 w-32"
                  alt=""
                />
              </div>
              // <MeetingCard meeting={meeting as Meeting} key={meeting?.id} />
            ))} */}
          {/* {!(isLoading || status === "loading") &&
            Number(data?.meetings?.items?.length) === 0 && (
              <div className="col-span-5 py-40 flex justify-center items-center">
                No segments found!
              </div>
            )} */}
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    id: 1,
    description:
      "Learn the basics of JavaScript, including syntax and fundamental programming concepts.",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1661688963878-4f3282dd1263",
    ranking: null,
    growth: "consistency and reliability",
    date: "2024-06-01",
    time: "10min",
  },
  {
    id: 2,
    description:
      "Understand how to work with arrays and objects in JavaScript for more advanced data handling.",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1661688963878-4f3282dd1263",
    ranking: true,
    growth: "consistency and reliability",
    date: "2024-06-02",
    time: "15min",
  },
  {
    id: 3,
    description:
      "Get introduced to JavaScript functions and how they are used to create reusable code blocks.",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1661688963878-4f3282dd1263",
    ranking: false,
    growth: "consistency and reliability",
    date: "2024-06-03",
    time: "12min",
  },
  {
    id: 4,
    description:
      "Learn about JavaScript closures and how they help in managing scope effectively.",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1661688963878-4f3282dd1263",
    ranking: true,
    growth: "consistency and reliability",
    date: "2024-06-04",
    time: "20min",
  },
  {
    id: 5,
    description:
      "Explore JavaScript promises and asynchronous programming for handling async operations.",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1661688963878-4f3282dd1263",
    ranking: null,
    growth: "consistency and reliability",
    date: "2024-06-05",
    time: "25min",
  },
];
