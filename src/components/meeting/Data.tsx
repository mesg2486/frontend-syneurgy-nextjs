import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import CircleProgressWithIcon from "../fragments/CircleProgressWithIcon";
import CircularDashboard, { ICircularDashboardScores } from "./MeetingScore";
import { Dimensions } from "@/services/gql/graphql";
import DimensionsRadar from "@/components/meeting/Dimensions";
import TeamPerformance, { ITeamScores } from "./TeamPerformance";

export default function Data({
  dimensions,
  scores,
  teamScores,
}: {
  dimensions: Dimensions;
  scores: ICircularDashboardScores;
  teamScores: ITeamScores;
}) {
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
          {!!scores.score && <CircularDashboard scores={scores} />}
          {!scores.score && (
            <CircularDashboard
              scores={{
                behaviorScore: 0,
                brainScore: 0,
                bodyScore: 0,
                score: 0,
              }}
            />
          )}
        </div>
      </div>
      <div className="w-full p-3 bg-slate-800 rounded-xl">
        <h2 className="flex items-center mb-4 font-medium text-md gap-x-1">
          Dimensions <FaInfoCircle />
        </h2>
        <div className="w-full h-48 text-xs">
          <DimensionsRadar dimensions={dimensions} />
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
            <CircleProgressWithIcon />
            <p className="text-sm">Body</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <CircleProgressWithIcon />
            <p className="text-sm">Behavior</p>
          </div>
        </div>
      </div> */}
      <div className="w-full p-3 pb-8 bg-slate-800 rounded-xl">
        <h2 className="flex items-center mb-4 font-medium text-md gap-x-1">
          Team Performance <FaInfoCircle />
        </h2>
        <TeamPerformance teamScores={teamScores} />
      </div>
    </div>
  );
}
