import KPIEmotionsDisplay from "@/components/dashboard/KPIEmotion";
import { fetchql } from "@/services/clients/fetch";
import React from "react";

const GET_TEAM_KPIS = `
  query getMeeting($id: ID!) {
    meeting: getMeeting(id: $id) {
      teamId
        team {
          id
          kpis {
            engagement
            alignment
            agency
            stress
            burnout
            prevEngagement
            prevAlignment
            prevAgency
            prevStress
            prevBurnout
            diffEngagement
            diffAlignment
            diffAgency
            diffStress
            diffBurnout
        }
      }
    }
  }
`;

async function fetchMeetingData(id: string) {
  const result = await fetchql(GET_TEAM_KPIS, { id });
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
        <KPIEmotionsDisplay activeTeamData={meeting.team} />
      </div>
    </div>
  );
}
