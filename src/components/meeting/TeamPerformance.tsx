import React from "react";
import CircleProgressWithIcon from "../fragments/CircleProgressWithIcon";

export interface ITeamScores {
  bodyScore: number;
  brainScore: number;
  totalScore: number;
  behaviorScore: number;
}

export default function TeamPerformance({
  teamScores,
}: {
  teamScores: ITeamScores;
}) {
  return (
    <div className="flex items-center justify-center gap-x-4">
      <div className="flex flex-col items-center justify-center gap-2">
        <CircleProgressWithIcon
          fill="number"
          progress={teamScores.brainScore}
        />
        <p className="text-sm">Brain</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <CircleProgressWithIcon fill="number" progress={teamScores.bodyScore} />
        <p className="text-sm">Body</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <CircleProgressWithIcon
          fill="number"
          progress={teamScores.behaviorScore}
        />
        <p className="text-sm">Behavior</p>
      </div>
    </div>
  );
}
