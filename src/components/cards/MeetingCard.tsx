import React from "react";
import CircleProgress from "@/components/fragments/CircleProgress";
import { GoGoal } from "react-icons/go";
import { Separator } from "@/components/ui/separator";
import { Meeting } from "@/services/gql/graphql";
import { format } from "date-fns";
import Link from "next/link";

export default function MeetingCard({ meeting }: { meeting: Meeting }) {
  return (
    <Link
      href={`meetings/${meeting.id}`}
      className="bg-tertiary hover:opacity-90 rounded-lg"
    >
      <div className="h-32 overflow-hidden rounded-t-lg">
        <img
          className="w-full h-full object-cover rounded-t-lg"
          src={
            meeting.thumbnail ||
            "https://plus.unsplash.com/premium_photo-1661688963878-4f3282dd1263"
          }
        />
      </div>
      <div className="p-4 space-y-2">
        <p className="opacity-70 font-light text-xs">
          {format(new Date(meeting.createdAt), "do MMM, yyyy")}
        </p>
        <h2 className="text-md font-medium pb-3">{meeting.name}</h2>
        <Separator className="my-3 bg-white/5" />
        <div className="flex flex-row gap-x-3">
          <div className="flex gap-2 items-center">
            <CircleProgress className="size-6" />
            <p className="text-xs opacity-60">20%</p>
          </div>
          <div className="flex gap-2 items-center">
            <GoGoal className="size-5" />
            <p className="text-xs opacity-60">{meeting.type}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
