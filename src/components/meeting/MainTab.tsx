import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GetMeetingQuery, Meeting } from "@/services/gql/graphql";
import ReactPlayer from "react-player";

export default function MainTab({ data }: { data: GetMeetingQuery }) {
  return (
    <div className="w-full p-6 rounded-lg bg-slate-800">
      <Tabs defaultValue="meeting">
        <TabsList className="bg-transparent space-x-4">
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
              url={data.meeting?.url}
            />
          )}
        </TabsContent>
        <TabsContent value="universe"></TabsContent>
        <TabsContent value="heatmap"></TabsContent>
        <TabsContent value="moments"></TabsContent>
        <TabsContent value="all"></TabsContent>
      </Tabs>
    </div>
  );
}
