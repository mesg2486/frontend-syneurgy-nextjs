"use client";

import MeetingCard from "@/components/cards/MeetingCard";
import AddMeeting from "@/components/modals/AddMeeting.modal";
import TeamCardSkeleton from "@/components/placeholders/TeamCard.skeleton";
import { useMeetingContext } from "@/components/providers/MeetingProvider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Meeting } from "@/services/gql/graphql";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { HiOutlineSearch } from "react-icons/hi";

export default function Meetings() {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();

  const {
    meetings,
    isMeetingsLoading: isLoading,
    teams,
    activeTeamId,
    setActiveTeamId,
  } = useMeetingContext();

  console.log({ meetings });

  return (
    <div className="py-6 pb-32 space-y-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="md:text-xl">Meetings ({meetings?.length})</h2>
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
            </div>
          )}
        </div>
        <div className="flex flex-row gap-x-3">
          <div className="relative">
            <Input
              placeholder="Search"
              className="w-32 h-full px-6 border rounded-full md:w-40"
            />
            <div className="absolute -translate-y-1/2 right-6 top-1/2">
              <HiOutlineSearch />
            </div>
          </div>
          <Button onClick={() => setOpen(true)}>
            <AiOutlinePlus />
            <span className="hidden md:block">Add Meeting</span>
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        {isLoading &&
          Array.from(Array(10)).map((i) => <TeamCardSkeleton key={i} />)}
        {Number(meetings?.length) > 0 &&
          meetings?.map((meeting) => (
            <MeetingCard meeting={meeting as Meeting} key={meeting?.id} />
          ))}
        {!isLoading && Number(meetings?.length) === 0 && (
          <div className="flex items-center justify-center col-span-5 py-40">
            No meetings uploaded!
          </div>
        )}
      </div>
      <AddMeeting open={open} setIsOpen={setOpen} />
    </div>
  );
}
