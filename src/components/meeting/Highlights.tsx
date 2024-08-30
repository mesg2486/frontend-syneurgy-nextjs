import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TeamHighlight, UserHighlight } from "@/services/gql/graphql";

interface HighlightsProps {
  teamHighlight: [TeamHighlight];
  userHighlight: [UserHighlight];
}

export default function Highlights({
  teamHighlight,
  userHighlight,
}: HighlightsProps) {
  return (
    <div className="w-full p-6 rounded-lg bg-slate-800">
      <Tabs defaultValue="teamHighlight">
        <TabsList className="max-w-full space-x-4 overflow-x-auto bg-transparent">
          <TabsTrigger
            value="teamHighlight"
            className=" rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:text-white border-slate-300"
          >
            Team Highlights
          </TabsTrigger>
          <TabsTrigger
            value="myHighlight"
            className="rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:text-white border-slate-300"
          >
            User Highlights
          </TabsTrigger>
          <TabsTrigger
            value="synchrony"
            className="rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:text-white border-slate-300"
          >
            Moment of Synchrony
          </TabsTrigger>
        </TabsList>
        <TabsContent value="teamHighlight" className="flex flex-col space-y-6">
          {teamHighlight?.map((highlight, index) => (
            <div key={index} className="flex flex-row gap-x-4">
              <h4 className="h-max w-max rounded-xl px-1 border-[1px] border-slate-200 border-opacity-25">
                {highlight.start}
              </h4>
              <p className="">{highlight.description}</p>
            </div>
          ))}
        </TabsContent>
        <TabsContent value="myHighlight" className="flex flex-col space-y-6">
          {userHighlight?.map((highlight, index) => (
            <div key={index} className="flex flex-row gap-x-4">
              <h4 className="h-max w-max rounded-xl px-1 border-[1px] border-slate-200 border-opacity-25">
                {highlight.start}
              </h4>
              <p className="">{highlight.description}</p>
            </div>
          ))}
        </TabsContent>
        {/* <TabsContent value="heatmap"></TabsContent> */}
        <TabsContent value="synchrony"></TabsContent>
      </Tabs>
    </div>
  );
}

const highlights = [
  {
    time: "08:14",
    content:
      "Compared to your team average , your HRV is higher; you're feeling more positive and this topic is not grabbing your attention. Feeling compassionate, but not necessarily driven to action.",
  },
  {
    time: "12:08",
    content:
      "Compared to your team average , your HRV is higher; you're feeling more positive and this topic is not grabbing your attention. Feeling compassionate, but not necessarily driven to action.",
  },
];
