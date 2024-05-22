import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Meeting } from "@/services/gql/graphql";

export default function MainTab() {
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
          {/* <video width="640" height="360" controls>
            <source
              src="https://sync5.s3.us-west-1.amazonaws.com/prod/profile/417b9590-b071-70fd-6a16-2721bd2dcfa4/alegance1.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video> */}
          {/* <ReactPlayer url={meeting?.url} /> */}
        </TabsContent>
        <TabsContent value="universe"></TabsContent>
        <TabsContent value="heatmap"></TabsContent>
        <TabsContent value="moments"></TabsContent>
        <TabsContent value="all"></TabsContent>
      </Tabs>
    </div>
  );
}
