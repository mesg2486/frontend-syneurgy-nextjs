import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
          <img
            className="w-full h-full object-cover rounded-xl"
            src="https://plus.unsplash.com/premium_photo-1661688963878-4f3282dd1263"
          />
        </TabsContent>
        <TabsContent value="universe"></TabsContent>
        <TabsContent value="heatmap"></TabsContent>
        <TabsContent value="moments"></TabsContent>
        <TabsContent value="all"></TabsContent>
      </Tabs>
    </div>
  );
}
