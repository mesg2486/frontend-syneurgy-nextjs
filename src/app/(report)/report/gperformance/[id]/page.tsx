import TeamPerformance from "@/components/meeting/TeamPerformance";
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

export default async function GPerformance({
  params,
}: {
  params: { id: string };
}) {
  const meeting = await fetchMeetingData(params.id);
  console.log(meeting);

  return (
    <div className="flex items-center justify-center min-h-screen space-y-4 bg-secondary text-secondary-foreground">
      <div className="max-w-sm p-6 scale-[250%] rounded-xl bg-white/10">
        <TeamPerformance activeTeamData={meeting.team} />
      </div>
    </div>
  );
}
