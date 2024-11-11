import SynchronyGraph from "@/components/meeting/SynchronyProgress";
import { fetchql } from "@/services/clients/fetch";
import React from "react";

const LIST_TEAM_MEETINGS = `
  query queryMeetingsByTeamId($id: String) {
    meetings: queryMeetingsByTeamId(id: $id) {
      items {
        totalScore
        createdAt
      }
    }
  }
`;

export default async function GSyncProgress({
  params,
}: {
  params: { id: string };
}) {
  const result = await fetchql(LIST_TEAM_MEETINGS, { id: params.id });
  console.log({ errors: result.errors, result });
  console.log({ errors: result.errors, result: result.data.meetings.items });

  return (
    <div className="flex items-center justify-center min-h-screen space-y-4 bg-secondary text-secondary-foreground">
      <div className="w-full max-w-4xl h-96 bg-white/10 rounded-xl">
        <SynchronyGraph
          data={result?.data?.meetings?.items?.map((i: any) => ({
            date: i.createdAt,
            value: i.totalScore,
          }))}
        />
      </div>
    </div>
  );
}
