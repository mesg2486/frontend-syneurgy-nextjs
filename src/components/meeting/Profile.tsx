import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import CircleProgressWithIcon from "../fragments/CircleProgressWithIcon";
import { useSession } from "next-auth/react";

export default function Profile() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col justify-center p-4 space-y-4 text-center rounded-lg bg-slate-800">
      <div className="flex flex-col items-center w-full space-y-3">
        <Avatar className="w-16 h-16">
          <AvatarImage
            className="w-16 h-16"
            src={session?.user.avatar || "/user.png"}
            alt="@shadcn"
          />
          <AvatarFallback>S</AvatarFallback>
        </Avatar>
        <h2>My Performance</h2>
      </div>
      <div className="grid grid-flow-row grid-cols-3 pb-4 text-center gap-x-4">
        <div className="flex flex-col items-center justify-center gap-2">
          <CircleProgressWithIcon />
          <p className="text-sm">Brain</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          {" "}
          <CircleProgressWithIcon />
          <p className="text-sm">Body</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          {" "}
          <CircleProgressWithIcon />
          <p className="text-sm">Behavior</p>
        </div>
      </div>
      {/* <div className="flex flex-col">
        <div className="flex flex-row justify-between">
          <p className="text-md font-extralight">synchrony</p>
          <p className="text-md">26</p>
        </div>
        <Separator
          orientation="horizontal"
          className="my-1 bg-slate-200 opacity-15"
        />
        <div className="flex flex-row justify-between">
          <p className="text-md font-extralight">Contribution %</p>
          <p className="text-md">14</p>
        </div>
        <Separator
          orientation="horizontal"
          className="my-1 bg-slate-200 opacity-15"
        />
        <div className="flex flex-row justify-between">
          <p className="text-md font-extralight">Participation %</p>
          <p className="text-md">14</p>
        </div>
      </div> */}
      <div className="pt-5 border-t-2 border-white/20">
        <p className="max-w-xs mx-auto text-sm leading-snug text-center opacity-60">
          Looks like you can help your Team to get optimal team synchrony ready
          to take any challenges?
        </p>
      </div>
      <Button className="text-black bg-white">Take Action</Button>
    </div>
  );
}
