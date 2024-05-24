import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import CircleProgressWithIcon from "../fragments/CircleProgressWithIcon";

export default function Profile() {
  return (
    <div className="bg-slate-800 flex flex-col text-center justify-center space-y-4 p-4 rounded-lg">
      <div className="w-full flex flex-col items-center space-y-3">
        <Avatar className="w-10 h-10">
          <AvatarImage className="w-10 h-10" src="/user.png" alt="@shadcn" />
          <AvatarFallback>S</AvatarFallback>
        </Avatar>
        <h2>My Performance</h2>
      </div>
      <div className="grid grid-cols-3 grid-flow-row gap-x-4">
        <div className="">
          <CircleProgressWithIcon />
          <p className="text-sm font-thin">Brain</p>
        </div>
        <div className="">
          {" "}
          <CircleProgressWithIcon />
          <p className="text-sm font-thin">Body</p>
        </div>
        <div className="">
          {" "}
          <CircleProgressWithIcon />
          <p className="text-sm font-thin">Behavior</p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row justify-between">
          <p className="text-md font-extralight">synchrony</p>
          <p className="text-md">26</p>
        </div>
        <Separator
          orientation="horizontal"
          className="bg-slate-200 opacity-15 my-1"
        />
        <div className="flex flex-row justify-between">
          <p className="text-md font-extralight">Contribution %</p>
          <p className="text-md">14</p>
        </div>
        <Separator
          orientation="horizontal"
          className="bg-slate-200 opacity-15 my-1"
        />
        <div className="flex flex-row justify-between">
          <p className="text-md font-extralight">Participation %</p>
          <p className="text-md">14</p>
        </div>
      </div>
      <div>
        <p className="opacity-60 text-left font-light">
          Looks like you can help your Team to get optimal team synchrony ready
          to take any challenges?
        </p>
      </div>
      <Button className="bg-white text-black">Take Action</Button>
    </div>
  );
}
