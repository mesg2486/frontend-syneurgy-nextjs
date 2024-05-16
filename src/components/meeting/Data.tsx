import { Circle } from "rc-progress";
import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import { GiArcheryTarget } from "react-icons/gi";
import { FaInfoCircle } from "react-icons/fa";

export default function Data() {
  return (
    <div className="flex flex-col space-y-6 ml-5">
      <div className="w-full bg-slate-800 rounded-xl p-3">
        <h2 className="text-lg font-medium flex items-center gap-x-1">
          Team Synchrony <FaInfoCircle />
        </h2>
        <div>
          <h4 className="text-3xl font-semibold mb-2">56</h4>
          <p className="opacity-60 flex ">
            {" "}
            <GiArcheryTarget className="text-lg" /> Decision making
          </p>
        </div>
      </div>
      <div className="w-full bg-slate-800 rounded-xl p-3">
        <h2 className="text-lg font-medium mb-4 flex items-center gap-x-1">
          Dimensions <FaInfoCircle />
        </h2>
        <div className="w-full h-48 p-5">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data1}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <Radar
                name="Mike"
                dataKey="A"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.6}
              />
              <Radar
                name="Lily"
                dataKey="B"
                stroke="#82ca9d"
                fill="#82ca9d"
                fillOpacity={0.6}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="w-full bg-slate-800 rounded-xl p-3">
        <h2 className="text-lg font-medium mb-4 flex items-center gap-x-1">
          Team Performance <FaInfoCircle />
        </h2>
        <div className="grid grid-cols-3 grid-flow-row gap-x-4">
          <div className="">
            <Circle
              className="max-w-10 max-h-10"
              percent={12}
              strokeWidth={6}
              strokeColor="yellow"
            />
            <p className="text-sm font-thin">Brain</p>
          </div>
          <div className="">
            {" "}
            <Circle
              className="max-w-10 max-h-10"
              percent={22}
              strokeWidth={6}
              strokeColor="green"
            />
            <p className="text-sm font-thin">Body</p>
          </div>
          <div className="">
            {" "}
            <Circle
              className="max-w-10 max-h-10"
              percent={37}
              strokeWidth={6}
              strokeColor="red"
            />
            <p className="text-sm font-thin">Behavior</p>
          </div>
        </div>
      </div>
      <div className="w-full bg-slate-800 rounded-xl p-3">
        <h2 className="text-lg font-medium mb-4 flex items-center gap-x-1">
          Team Sentiment <FaInfoCircle />
        </h2>
        <div className="grid grid-cols-3 grid-flow-row gap-x-4">
          <div className="">
            <Circle
              className="max-w-10 max-h-10"
              percent={12}
              strokeWidth={6}
              strokeColor="yellow"
            />
            <p className="text-sm font-thin">Brain</p>
          </div>
          <div className="">
            {" "}
            <Circle
              className="max-w-10 max-h-10"
              percent={22}
              strokeWidth={6}
              strokeColor="green"
            />
            <p className="text-sm font-thin">Body</p>
          </div>
          <div className="">
            {" "}
            <Circle
              className="max-w-10 max-h-10"
              percent={37}
              strokeWidth={6}
              strokeColor="red"
            />
            <p className="text-sm font-thin">Behavior</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const data1 = [
  {
    subject: "Trust",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "Participation",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Enjoyment",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Shared goal",
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "Engagement",
    A: 85,
    B: 90,
    fullMark: 150,
  },
];
