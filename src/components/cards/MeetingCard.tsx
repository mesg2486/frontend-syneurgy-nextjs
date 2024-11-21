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
      className="flex flex-col rounded-lg bg-tertiary hover:opacity-90"
    >
      <div className="h-32 overflow-hidden rounded-t-lg">
        <img
          className="object-cover w-full h-full rounded-t-lg"
          src={
            meeting.thumbnail ||
            "https://plus.unsplash.com/premium_photo-1661688963878-4f3282dd1263"
          }
        />
      </div>
      <div className="flex flex-col flex-1 gap-2 p-4">
        <p className="text-xs font-light opacity-70">
          {format(new Date(meeting.createdAt), "do MMM, yyyy, h:mm a")}
        </p>
        <h2 className="flex-1 pb-3 text-sm font-normal">{meeting.name}</h2>
        <Separator className="my-3 bg-white/5" />
        <div className="flex flex-row gap-x-3">
          <div className="flex items-center gap-2">
            <CircleProgress
              progress={meeting.totalScore || 25}
              className="size-6"
            />
            <p className="text-xs opacity-60">{meeting.totalScore}%</p>
          </div>
          <div className="flex items-center gap-2">
            <GoGoal className="size-5" />
            <p className="text-xs opacity-60">{meeting.type}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
