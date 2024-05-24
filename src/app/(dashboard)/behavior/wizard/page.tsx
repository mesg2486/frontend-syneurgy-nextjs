"use client";

import MeetingCard from "@/components/cards/MeetingCard";
import { LIST_MEETINGS_BY_USERID } from "@/components/dashboard/Meetings";
import { Button } from "@/components/ui/button";
import { gql } from "@/services/clients/graphql.client";
import { Meeting } from "@/services/gql/graphql";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import React from "react";
import { IoIosWarning } from "react-icons/io";

export default function Wizard() {
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
            <p className="flex-1 text-right">Create Behavior</p>
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
          {(isLoading || status === "loading") &&
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
