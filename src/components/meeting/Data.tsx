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
import { Dimensions } from "@/services/gql/graphql";

const dimensionLabels: Record<string, string> = {
  absorptionOrTaskEngagement: "Engagement",
  enjoyment: "Enjoyment",
  equalParticipation: "Participation",
  sharedGoalCommitment: "Shared goal",
  trustAndPsychologicalSafety: "Trust",
};

const defaultDimensions = {
  absorptionOrTaskEngagement: 0,
  enjoyment: 0,
  equalParticipation: 0,
  sharedGoalCommitment: 0,
  trustAndPsychologicalSafety: 0,
};

export default function Data({ dimensions }: { dimensions: Dimensions }) {
  const radarData = Object.entries(dimensions || defaultDimensions).map(
    ([key, value]) => ({
      subject: dimensionLabels[key],
      A: value,
      fullMark: 1,
    }),
  );

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
        <div className="w-full h-48 text-xs">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart
              cx="50%"
              barGap={12}
              cy="50%"
              outerRadius="80%"
              data={radarData}
            >
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <Radar name="Mike" dataKey="A" fill="#6ae338" fillOpacity={0.6} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* <div className="w-full p-3 bg-slate-800 rounded-xl">
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
      </div> */}
      <div className="w-full p-3 pb-8 bg-slate-800 rounded-xl">
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
