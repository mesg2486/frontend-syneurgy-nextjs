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
        diffBehaviorScore
        diffBodyScore
        diffBrainScore
        diffTotalScore
        behaviorScore
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
        emotions {
          positive
          negative
          neutral
          prevPositive
          prevNegative
          prevNeutral
          diffPositive
          diffNegative
          diffNeutral
        }
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
        activeTeamData={
          data?.teams?.items?.filter((i) => i?.id === activeTeam)?.[0]
        }
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
