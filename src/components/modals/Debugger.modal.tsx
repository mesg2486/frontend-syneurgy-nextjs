"use client";

import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Meeting } from "@/services/gql/graphql";
import { Badge } from "../ui/badge";

interface IAddTeamProps {
  open: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  meeting: Meeting | null | undefined;
}

export default function DebuggerModal({
  open,
  setIsOpen,
  meeting,
}: IAddTeamProps) {
  const [totalTime, setTotalTime] = useState<number>(0);

  const errored = Object.values(meeting?.errors || {}).includes(true);
  const erroredAt = Object.entries(meeting?.errors || {}).filter(
    (e) => e[1] === true,
  );

  const start = meeting?.start ? new Date(meeting.start * 1000) : "";
  const finish = meeting?.finish ? new Date(meeting.finish * 1000) : "";

  const calculateTotalTime = () => {
    const now = Date.now();
    const totalMinutes = finish
      ? (Number(finish) - Number(start)) / 60000
      : (now - Number(start)) / 60000;
    setTotalTime(totalMinutes * 60);
  };

  useEffect(() => {
    if (!start) return;
    if (!finish) {
      const interval = setInterval(() => {
        calculateTotalTime();
      }, 1000);

      return () => clearInterval(interval);
    } else {
      calculateTotalTime(); // Calculate immediately if finish is available
    }
  }, [finish, start]);

  const totalSeconds = totalTime;
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor(totalSeconds % 60);

  const formatDuration = (duration: number | null | undefined) => {
    if (duration === null || duration === undefined) {
      return <span className="text-xs uppercase">AWAITING DATA</span>;
    }
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = Math.floor(duration % 60);
    return hours > 0
      ? `${hours}h ${minutes}m ${seconds}s`
      : `${minutes}m ${seconds}s`;
  };

  return (
    <Dialog open={open} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[400px] w-full text-sm font-normal bg-secondary text-secondary-foreground">
        <DialogHeader>
          <DialogTitle>Debugger</DialogTitle>
          <DialogDescription>{meeting?.name}</DialogDescription>
        </DialogHeader>
        <div className="w-full space-y-2 text-sm">
          <div className="flex justify-between gap-4">
            <div>Duration</div>
            <div>{formatDuration(meeting?.duration)}</div>
          </div>
          <div className="flex justify-between gap-4">
            <div>Queued</div>
            <div>
              {meeting?.queued ? (
                <span className="font-semibold uppercase text-primary">
                  Yes
                </span>
              ) : (
                "No"
              )}
            </div>
          </div>
          <div className="flex justify-between gap-4">
            <div>Started</div>
            <div>{meeting?.started ? "Yes" : "No"}</div>
          </div>
          <div className="flex justify-between gap-4">
            <div>Checkpoint</div>
            <div className="font-semibold uppercase text-primary">
              {meeting?.checkpoint}
            </div>
          </div>
          <div className="flex justify-between gap-4">
            <div>Finished</div>
            <div>{meeting?.finished ? "Yes" : "No"}</div>
          </div>
          <div className="flex justify-between gap-4">
            <div>Errored</div>
            <div>{errored ? "Yes" : "No"}</div>
          </div>
          <div className="flex justify-between gap-4">
            <div className="w-20">Errored At</div>
            {erroredAt.length ? (
              <div className="flex flex-wrap items-center justify-end flex-1 gap-1">
                {erroredAt?.map((i) => (
                  <Badge variant="destructive" key={i[0]}>
                    {i[0]}
                  </Badge>
                ))}
              </div>
            ) : (
              "None"
            )}
          </div>
          <div className="pt-4 space-y-2">
            <div className="flex justify-between gap-4">
              <div>Start Time</div>
              <div>
                {start ? (
                  format(start, "MMM do yy h:mmaaa")
                ) : (
                  <span className="text-xs uppercase\">AWAITING DATA</span>
                )}
              </div>
            </div>
            <div className="flex justify-between gap-4">
              <div>Finish Time</div>
              <div>
                {finish ? (
                  format(finish, "MMM do yy h:mmaaa")
                ) : (
                  <span className="text-xs uppercase">AWAITING DATA</span>
                )}
              </div>
            </div>
            <div className="flex justify-between gap-4">
              <div>Processing Time *</div>
              <div className="font-semibold text-primary">
                {hours > 0
                  ? `${hours} hours ${minutes} minutes ${seconds} seconds`
                  : `${minutes} minutes ${seconds} seconds`}
              </div>
            </div>
            <div className="text-[8px]">
              * e2e processing time including download, upload, and model
              processing.
            </div>
          </div>
        </div>
        <div className="flex justify-center flex-1 gap-3 py-8">
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
