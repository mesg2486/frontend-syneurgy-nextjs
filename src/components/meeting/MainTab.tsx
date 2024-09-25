import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GetMeetingQuery } from "@/services/gql/graphql";
import ReactPlayer from "react-player";
import UniverseControl from "./UniverseChart";
import MomentsChart from "./MomentsChart";
// import Heatmap from "./Heatmap";

export default function MainTab({ data }: { data: GetMeetingQuery }) {
  return (
    <div className="w-full p-6 rounded-lg bg-slate-800">
      <Tabs defaultValue="meeting">
        <TabsList className="max-w-full space-x-4 overflow-x-auto bg-transparent">
          <TabsTrigger
            value="meeting"
            className=" rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:text-white border-slate-300"
          >
            MEETING
          </TabsTrigger>
          <TabsTrigger
            value="universe"
            className="rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:text-white border-slate-300"
          >
            UNIVERSE
          </TabsTrigger>
          <TabsTrigger
            value="heatmap"
            className="rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:text-white border-slate-300"
          >
            HEATMAP
          </TabsTrigger>
          <TabsTrigger
            value="moments"
            className="rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:text-white border-slate-300"
          >
            MOMENTS
          </TabsTrigger>
          <TabsTrigger
            value="all"
            className="rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:text-white border-slate-300"
          >
            ALL
          </TabsTrigger>
        </TabsList>
        <TabsContent value="meeting">
          {/* This image is just for testing purpose  */}
          {data.meeting?.url && (
            <ReactPlayer
              loop
              playing
              width="100%"
              controls
              muted
              height="100%"
              url={data.meeting?.url}
            />
          )}
        </TabsContent>
        <TabsContent value="universe">
          <div className="h-[430px]">
            <UniverseControl />
          </div>
        </TabsContent>
        <TabsContent value="heatmap">{/* <Heatmap /> */}</TabsContent>
        <TabsContent value="moments" className="relative">
          {data.meeting?.url && (
            <ReactPlayer
              loop
              width="100%"
              controls
              muted
              height="100%"
              url={data.meeting?.url}
            />
          )}
          <MomentsChart
            width__graph={1200}
            height__graph={600}
            isAbsolute={true}
          />
        </TabsContent>
        <TabsContent value="all"></TabsContent>
      </Tabs>
    </div>
  );
}
