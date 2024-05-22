import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import { PiNewspaper } from "react-icons/pi";

export default function Summary() {
  return (
    <div className="grid grid-cols-2 gap-x-5 divide-x-2 divide-slate-500 divide-opacity-25">
      <div className="p-4 flex flex-col space-y-4 divide-y-2 divide-slate-500 divide-opacity-25">
        <h2 className="text-lg">AI meeting summary</h2>
        <div>
          <ul className="list-disc ml-5 space-y-3 mt-4">
            <li className="text-sm font-light opacity-70">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              fugit possimus vel inventore ducimus nostrum?{" "}
            </li>
            <li className="text-sm font-light opacity-70">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              fugit possimus vel inventore ducimus nostrum?{" "}
            </li>
            <li className="text-sm  font-light opacity-70">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              fugit possimus vel inventore ducimus nostrum?{" "}
            </li>
          </ul>
        </div>
        <div className="">
          <h3 className="text-md font-medium my-4">Chapter 1: Intro</h3>
          <div className="space-y-3">
            {highlights?.map((highlight, index) => (
              <div key={index} className="flex flex-row gap-x-4">
                <p className="h-max w-max text-sm rounded-lg px-1 border-[1px] border-slate-200 border-opacity-25">
                  {highlight.time}
                </p>
                <p className="text-sm font-light opacity-70">
                  {highlight.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="p-4 flex flex-col space-y-4 divide-y-2 divide-slate-500 divide-opacity-25">
        <h2 className="text-lg flex items-center gap-x-1">
          <PiNewspaper size={20} /> Transcript
        </h2>
        <div className="flex flex-col space-y-4 pt-6">
          {transcripts?.map((transscript) => (
            <div
              key={transscript.id}
              className="relative pl-12 overflow-hidden"
            >
              <div className="text-base font-semibold">
                <div className="absolute left-0 top-0 flex size-5">
                  <Avatar className="w-8 h-8">
                    <AvatarImage
                      className="object-cover"
                      src="https://github.com/shadcn.png"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex gap-x-2">
                  <p className="opacity-80 ">{transscript.name}</p>
                  <p className="h-max w-max text-sm font-extralight rounded-lg px-1 border-[1px] border-slate-200 border-opacity-25">
                    {transscript.time}
                  </p>
                </div>
              </div>
              <p className="mt-2 text-sm font-light opacity-60">
                {transscript.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const transcripts = [
  {
    id: 1,
    name: "Alice",
    time: "08:12",
    content: "Hello, good morning.",
  },
  {
    id: 2,
    name: "Bob",
    time: "08:13",
    content: "How are you?",
  },
  {
    id: 3,
    name: "Charlie",
    time: "08:14",
    content: "I'm doing well.",
  },
  {
    id: 4,
    name: "Diana",
    time: "08:15",
    content: "What about you?",
  },
  {
    id: 5,
    name: "Eve",
    time: "08:16",
    content: "I'm great, thanks!",
  },
];

const highlights = [
  {
    time: "08:14",
    content:
      "Compared to your team average , your HRV is higher; you're feeling more positive and this topic is not grabbing your attention. ",
  },
  {
    time: "12:08",
    content:
      "Compared to your team average , your HRV is higher; you're feeling more positive and this topic is not grabbing your attention.",
  },
];
