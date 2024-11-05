"use client";

import { gql } from "@/services/clients/graphql.client";
import { graphql } from "@/services/gql";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import DashMain from "./DashMain";
import { Team } from "@/services/gql/graphql";
import DetailedData from "./DetailedData";
import Meetings from "./Meetings";

const LIST_TEAMS = graphql(`
  query listTeamsForDashboard($userId: ID!) {
    teams: listTeamsByUserId(userId: $userId) {
      items {
        createdBy
        id
        name
        createdAt
        updatedAt
        synchrony
        teamInSync
        totalScore
        engagementLevel
        brainScore
        bodyScore
        behaviorScore
      }
    }
  }
`);

export default function Dashboard() {
  const { data: session, status } = useSession();
  const [activeTeam, setActiveTeam] = useState("");

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["teams", session?.user.sub],
    queryFn: async () => {
      return await gql.request(LIST_TEAMS, {
        userId: String(session?.user.sub),
      });
    },
    enabled: !!session?.user,
  });

  useEffect(() => {
    if (data?.teams?.items?.length) {
      !activeTeam && setActiveTeam(data?.teams?.items?.[0]?.id || "");
    }
  }, [data]);

  const defaultTeamId = data?.teams?.items?.[0]?.id;

  return (
    <div>
      <DashMain
        teamScores={{
          brainScore:
            data?.teams?.items?.filter((team: any) => team.id === activeTeam)[0]
              ?.brainScore || 0,
          bodyScore:
            data?.teams?.items?.filter((team: any) => team.id === activeTeam)[0]
              ?.bodyScore || 0,
          behaviorScore:
            data?.teams?.items?.filter((team: any) => team.id === activeTeam)[0]
              ?.behaviorScore || 0,
          totalScore:
            data?.teams?.items?.filter((team: any) => team.id === activeTeam)[0]
              ?.totalScore || 0,
        }}
        isTeamsLoading={status === "loading" || isLoading}
        teams={data?.teams?.items as Team[]}
        activeTeam={activeTeam}
        setActiveTeam={setActiveTeam}
        defaultTeam={defaultTeamId}
      />
      <DetailedData />
      <Meetings />
    </div>
  );
}
