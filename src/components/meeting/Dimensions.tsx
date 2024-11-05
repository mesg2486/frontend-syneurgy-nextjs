"use client";

import { Dimensions } from "@/services/gql/graphql";
import React from "react";
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

const defaultDimensions = {
  absorptionOrTaskEngagement: 0,
  enjoyment: 0,
  equalParticipation: 0,
  sharedGoalCommitment: 0,
  trustAndPsychologicalSafety: 0,
};

const dimensionLabels: Record<string, string> = {
  absorptionOrTaskEngagement: "Engagement",
  enjoyment: "Enjoyment",
  equalParticipation: "Participation",
  sharedGoalCommitment: "Shared goal",
  trustAndPsychologicalSafety: "Trust",
};

export default function DimensionsRadar({
  dimensions,
}: {
  dimensions: Dimensions;
}) {
  const radarData = Object.entries(dimensions || defaultDimensions).map(
    ([key, value]) => ({
      subject: dimensionLabels[key],
      A: value,
      fullMark: 1,
    })
  );

  console.log(radarData);

  return (
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
  );
}
