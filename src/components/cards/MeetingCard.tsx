import React, { useState } from "react";
import CircleProgress from "@/components/fragments/CircleProgress";
import { GoGoal } from "react-icons/go";
import { Separator } from "@/components/ui/separator";
import { Meeting } from "@/services/gql/graphql";
import { format } from "date-fns";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { HiCog } from "react-icons/hi";
import { Button } from "../ui/button";
import DebuggerModal from "../modals/Debugger.modal";

export default function MeetingCard({ meeting }: { meeting: Meeting }) {
  const [open, setOpen] = useState(false);
  const errored = Object.values(meeting?.errors || {}).includes(true);
  return (
    <div className="relative h-full group">
      <Link
        href={meeting.finished ? `meetings/${meeting.id}` : ""}
        className="flex flex-col h-full rounded-lg bg-tertiary hover:opacity-90"
      >
        <div className="relative h-32 overflow-hidden rounded-t-lg">
          {meeting.queued ? (
            <div className="absolute top-4 left-4">
              <Badge variant="secondary" className="cursor-default">
                Queued
              </Badge>
            </div>
          ) : null}
          {meeting.started && !meeting.finished ? (
            <div className="absolute top-4 left-4">
              <Badge className="cursor-default">Processing</Badge>
            </div>
          ) : null}
          {meeting.finished && errored ? (
            <div className="absolute top-4 left-4">
              <Badge variant="destructive" className="cursor-default">
                Errored
              </Badge>
            </div>
          ) : null}
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
          <div className="flex flex-row justify-between gap-x-3">
            <div className="flex flex-row gap-3">
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
        </div>
      </Link>
      <div
        className="absolute items-center hidden gap-2 bottom-2 right-4 group-hover:flex"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <Button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setOpen(true);
          }}
          variant="ghost"
          size="icon"
        >
          <HiCog />
        </Button>
        <DebuggerModal open={open} setIsOpen={setOpen} meeting={meeting} />
      </div>
    </div>
  );
}
