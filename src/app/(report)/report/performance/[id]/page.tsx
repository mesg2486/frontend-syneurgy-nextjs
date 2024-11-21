import CircularDashboard from "@/components/meeting/MeetingScore";
import { fetchql } from "@/services/clients/fetch";
import React from "react";

const GET_MEETING_QUERY = `
  query getMeeting($id: ID!) {
    meeting: getMeeting(id: $id) {
      totalScore
      bodyScore
      behaviorScore
      brainScore
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

export default async function Report({ params }: { params: { id: string } }) {
  const meeting = await fetchMeetingData(params.id);
  console.log(meeting);
  return (
    <div className="bg-secondary text-secondary-foreground">
      <div className="max-w-[600px] w-full mx-auto flex justify-center items-center min-h-screen">
        <div className="w-full py-5 scale-150">
          <div className="flex items-center justify-center overflow-hidden rounded-lg bg-white/10">
            <CircularDashboard
              scores={{
                score: meeting?.totalScore,
                bodyScore: meeting?.bodyScore,
                behaviorScore: meeting?.behaviorScore,
                brainScore: meeting?.brainScore,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
