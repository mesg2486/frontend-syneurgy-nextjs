"use client";
import React, { useState } from "react";
import { MdChat, MdOutlineMessage } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { IoMdSend } from "react-icons/io";
import { FiArrowLeftCircle } from "react-icons/fi";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { PiNewspaper } from "react-icons/pi";

interface AskSyneurgyProps {
  setToggleSyneurgy: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AskSyneurgy({ setToggleSyneurgy }: AskSyneurgyProps) {
  const [screen, setScreen] = useState(1);

  return (
    <div className="w-full p-5 ">
      {screen === 1 ? (
        <div className="divide-y-2 space-y-6 divide-slate-200 divide-opacity-25">
          <div className="flex justify-between items-center">
            <h2 className="flex flex-row gap-x-2 rounded-xl items-center">
              <MdChat /> Ask Syneurgy
            </h2>
            <RxCross1 onClick={() => setToggleSyneurgy(false)} />
          </div>
          <div>
            <Tabs defaultValue="question">
              <TabsList className="bg-transparent space-x-4">
                <TabsTrigger
                  value="question"
                  className=" rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:text-white border-slate-300"
                >
                  Question
                </TabsTrigger>
                <TabsTrigger
                  value="history"
                  className=" rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:text-white border-slate-300"
                >
                  History
                </TabsTrigger>
              </TabsList>
              <TabsContent value="question">
                <p className="opacity-60 font-extralight">
                  Please choose a prompt or ask anything about the meeting
                </p>
                <Accordion type="single" collapsible defaultValue="item-2">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent
                      className="opacity-60 font-extralight pl-6"
                      onClick={() => setScreen(2)}
                    >
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Brainstrom</AccordionTrigger>
                    <AccordionContent
                      className="opacity-60 font-extralight pl-6"
                      onClick={() => setScreen(2)}
                    >
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Collaborative Work</AccordionTrigger>
                    <AccordionContent
                      className="opacity-60 font-extralight pl-6"
                      onClick={() => setScreen(2)}
                    >
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Another dimension</AccordionTrigger>
                    <AccordionContent
                      className="opacity-60 font-extralight pl-6"
                      onClick={() => setScreen(2)}
                    >
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>Leadership</AccordionTrigger>
                    <AccordionContent
                      className="opacity-60 font-extralight pl-6"
                      onClick={() => setScreen(2)}
                    >
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-6">
                    <AccordionTrigger>Brainstrom</AccordionTrigger>
                    <AccordionContent
                      className="opacity-60 font-extralight pl-6"
                      onClick={() => setScreen(2)}
                    >
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <div className="relative mt-20">
                  <Input
                    type="search"
                    placeholder="write prompt..."
                    className="border h-12 w-full px-4 rounded-full"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2">
                    <Button>
                      Send <IoMdSend />
                    </Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="history"></TabsContent>
            </Tabs>
          </div>
        </div>
      ) : (
        <div className="divide-y-2 space-y-6 divide-slate-200 divide-opacity-25">
          <div className="flex justify-between items-center">
            <div className="flex flex-row content-center gap-x-4">
              <FiArrowLeftCircle
                className="text-3xl"
                onClick={() => setScreen(1)}
              />
              <h2 className="text-xl font-light">Meeting Intro</h2>
            </div>
            <RxCross1 onClick={() => setToggleSyneurgy(false)} />
          </div>
          <div className="grid grid-cols-2 py-6 divide-x-2 divide-slate-500 divide-opacity-25">
            <div className="flex flex-col space-y-4 divide-y-2 divide-slate-500 divide-opacity-25 pr-4">
              <h2 className="text-lg flex items-center gap-x-1">
                <MdOutlineMessage size={20} /> Questions
              </h2>
              <div className="flex flex-col space-y-4 py-6">
                <h2 className="text-md">Who was the user...</h2>
                <p>
                  Gpt: Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, qui.
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-4 divide-y-2 divide-slate-500 divide-opacity-25 pl-4">
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
          <div className="pt-4">
            <div className="relative">
              <Input
                type="search"
                placeholder="write prompt..."
                className="border h-12 w-full px-4 rounded-full"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <Button>
                  Send <IoMdSend />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
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
