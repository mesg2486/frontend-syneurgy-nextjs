import React from "react";
import CircleProgressWithIcon from "../fragments/CircleProgressWithIcon";

export interface ITeamScores {
  brainScore: number;
  bodyScore: number;
  behaviorScore: number;
  totalScore: number;
}

export default function TeamPerformance({
  activeTeamData,
}: {
  activeTeamData?: any;
}) {
  return (
    <div className="flex items-center justify-center gap-x-4">
      <div className="flex flex-col items-center justify-center gap-2">
        <CircleProgressWithIcon
          fill="number"
          progress={Number(activeTeamData?.brainScore)}
        />
        <p className="text-sm">Brain</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <CircleProgressWithIcon
          fill="number"
          progress={Number(activeTeamData?.bodyScore)}
        />
        <p className="text-sm">Body</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <CircleProgressWithIcon
          fill="number"
          progress={Number(activeTeamData?.behaviorScore)}
        />
        <p className="text-sm">Behavior</p>
      </div>
    </div>
  );
}
