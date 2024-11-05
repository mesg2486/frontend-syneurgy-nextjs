import DimensionsRadar from "@/components/meeting/Dimensions";
import { fetchql } from "@/services/clients/fetch";
import React from "react";

const GET_MEETING_QUERY = `
  query getMeeting($id: ID!) {
    meeting: getMeeting(id: $id) {
      dimensions {
        absorptionOrTaskEngagement
        enjoyment
        equalParticipation
        sharedGoalCommitment
        trustAndPsychologicalSafety
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

export default async function Report({ params }: { params: { id: string } }) {
  const meeting = await fetchMeetingData(params.id);
  console.log(meeting);
  return (
    <div className="bg-secondary text-secondary-foreground">
      <div className="max-w-[600px] w-full mx-auto flex justify-center items-center min-h-screen">
        <div className="py-5 scale-150">
          <div className="overflow-hidden rounded-lg w-96 h-96 bg-white/10">
            {meeting?.dimensions && (
              <DimensionsRadar dimensions={meeting?.dimensions} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
