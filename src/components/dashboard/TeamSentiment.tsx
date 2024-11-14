import React from "react";
import { FaFaceFrown, FaFaceMeh, FaFaceSmile } from "react-icons/fa6";
import CircleProgressWithIcon from "../fragments/CircleProgressWithIcon";

export default function TeamSentimentDisplay({
  activeTeamData,
}: {
  activeTeamData: any;
}) {
  return (
    <div>
      <div className="flex flex-row justify-around w-full gap-4 p-5 overflow-hidden">
        <div className="flex flex-col items-center justify-center gap-3">
          <CircleProgressWithIcon
            progress={activeTeamData?.emotions?.negative}
            color="text-red-500"
          >
            <span className="text-xl text-center">
              <FaFaceFrown />
            </span>
          </CircleProgressWithIcon>
          <p>Negative</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <CircleProgressWithIcon
            progress={activeTeamData?.emotions?.neutral}
            color="text-gray-300"
          >
            <span className="text-xl text-center">
              <FaFaceMeh />
            </span>
          </CircleProgressWithIcon>
          <p>Neutral</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <CircleProgressWithIcon
            progress={activeTeamData?.emotions?.positive}
            color="text-green-500"
          >
            <span className="text-xl text-center">
              <FaFaceSmile />
            </span>
          </CircleProgressWithIcon>
          <p>Positive</p>
        </div>
      </div>
    </div>
  );
}
