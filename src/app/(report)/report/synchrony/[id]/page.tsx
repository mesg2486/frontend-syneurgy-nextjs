import { fetchql } from "@/services/clients/fetch";
import React from "react";

const GET_MEETING_QUERY = `
  query getMeeting($id: ID!) {
    meeting: getMeeting(id: $id) {
      teamId
                  team {
                id
                brainScore
                bodyScore
                behaviorScore
                name
                performance
                prevBehaviorScore
                prevBodyScore
                prevBrainScore
                sentiment
                prevTotalScore
                syncHistory
                synchrony
                totalScore
                diffTotalScore
            }
    }
  }
`;

async function fetchMeetingData(id: string) {
  const result = await fetchql(GET_MEETING_QUERY, { id });
  if (result.errors) {
    throw new Error("Failed to fetch meeting data");
  }
  return result.data.meeting;
}

export default async function Synchrony({
  params,
}: {
  params: { id: string };
}) {
  const meeting = await fetchMeetingData(params.id);
  console.log(meeting);

  return (
    <div className="flex items-center justify-center min-h-screen space-y-4 bg-secondary text-secondary-foreground">
      <div className="max-w-sm p-6 scale-150 rounded-xl bg-white/10">
        <div className="mr-4 space-y-6">
          <h2 className="">Current Synchrony</h2>
          <h4 className="text-6xl font-semibold">
            {meeting?.team?.totalScore}
          </h4>
          <span className="text-xl text-primary">
            {meeting?.team?.diffTotalScore}
          </span>
          <span className="block w-full py-2 text-center rounded-md bg-white/20">
            {meeting?.team?.prevTotalScore}
          </span>
        </div>
      </div>
    </div>
  );
}
