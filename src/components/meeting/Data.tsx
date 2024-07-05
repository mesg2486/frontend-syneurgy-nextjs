import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import { FaInfoCircle } from "react-icons/fa";
import CircleProgressWithIcon from "../fragments/CircleProgressWithIcon";
import CircularDashboard from "./MeetingScore";

export default function Data() {
  return (
    <div className="flex flex-col space-y-6">
      <div className="w-full p-3 bg-slate-800 rounded-xl">
        <h2 className="flex items-center font-medium text-md gap-x-1">
          Team Synchrony <FaInfoCircle />
        </h2>
        <div>
          {/* <h4 className="mb-2 text-3xl font-semibold">56</h4>
          <p className="flex opacity-60 ">
            {" "}
            <GiArcheryTarget className="text-lg" /> Decision making
          </p> */}
          <CircularDashboard score={56} brainScore={56} />
        </div>
      </div>
      <div className="w-full p-3 bg-slate-800 rounded-xl">
        <h2 className="flex items-center mb-4 font-medium text-md gap-x-1">
          Dimensions <FaInfoCircle />
        </h2>
        <div className="w-full h-48 p-5 text-xs">
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
      <div className="w-full p-3 bg-slate-800 rounded-xl">
        <h2 className="flex items-center mb-4 font-medium text-md gap-x-1">
          Team Performance <FaInfoCircle />
        </h2>
        <div className="grid grid-flow-row grid-cols-3 gap-x-4">
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
      </div>
      <div className="w-full p-3 bg-slate-800 rounded-xl">
        <h2 className="flex items-center mb-4 font-medium text-md gap-x-1">
          Team Sentiment <FaInfoCircle />
        </h2>
        <div className="grid grid-flow-row grid-cols-3 gap-x-4">
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
