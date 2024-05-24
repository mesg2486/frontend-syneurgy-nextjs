"use client";

import MeetingCard from "@/components/cards/MeetingCard";
import { LIST_MEETINGS_BY_USERID } from "@/components/dashboard/Meetings";
import AddMeeting from "@/components/modals/AddMeeting.modal";
import TeamCardSkeleton from "@/components/placeholders/TeamCard.skeleton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { gql } from "@/services/clients/graphql.client";
import { Meeting } from "@/services/gql/graphql";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { HiOutlineSearch } from "react-icons/hi";

export default function Meetings() {
  const [open, setOpen] = useState(false);
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
    <div className="py-6 space-y-5 pb-32">
      <div className="flex justify-between items-center">
        <h2 className="md:text-xl">
          Meetings ({data?.meetings?.items?.length})
        </h2>
        <div className="flex flex-row gap-x-3">
          <div className="relative">
            <Input
              placeholder="Search"
              className="h-full border w-32 md:w-40 px-6 rounded-full"
            />
            <div className="absolute right-6 top-1/2 -translate-y-1/2">
              <HiOutlineSearch />
            </div>
          </div>
          <Button onClick={() => setOpen(true)}>
            <AiOutlinePlus />
            <span className="hidden md:block">Add Meeting</span>
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:grid-cols-4 lg:grid-cols-5">
        {(isLoading || status === "loading") &&
          Array.from(Array(10)).map((i) => <TeamCardSkeleton key={i} />)}
        {Number(data?.meetings?.items?.length) > 0 &&
          data?.meetings?.items?.map((meeting) => (
            <MeetingCard meeting={meeting as Meeting} key={meeting?.id} />
          ))}
        {!(isLoading || status === "loading") &&
          Number(data?.meetings?.items?.length) === 0 && (
            <div className="col-span-5 py-40 flex justify-center items-center">
              No meetings uploaded!
            </div>
          )}
      </div>
      <AddMeeting open={open} setIsOpen={setOpen} />
    </div>
  );
}
