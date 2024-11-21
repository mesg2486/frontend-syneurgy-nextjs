import { gql } from "@/services/clients/graphql.client";
import { graphql } from "@/services/gql";
import { Meeting, Team } from "@/services/gql/graphql";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import React, { createContext, useState, useContext, useEffect } from "react";

type MeetingContextType = {
  activeMeetingId: string | null;
  activeTeamId: string | null;
  isTeamsLoading: boolean;
  isMeetingsLoading: boolean;
  meetings: Meeting[] | null[] | null | undefined;
  teams: Team[] | null[] | null | undefined;
  activeTeam: Team | null | undefined;
  setActiveMeetingId: React.Dispatch<React.SetStateAction<string | null>>;
  setActiveTeamId: React.Dispatch<React.SetStateAction<string | null>>;
};

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

export const LIST_MEETINGS_BY_TEAMID = graphql(`
  query queryMeetingsByTeamId($teamId: String!) {
    meetings: queryMeetingsByTeamId(id: $teamId) {
      items {
        date
        highlights
        id
        name
        createdAt
        updatedAt
        sentiment
        performance
        synchrony
        teamId
        thumbnail
        type
        url
        userId
        totalScore
      }
    }
  }
`);

const MeetingContext = createContext<MeetingContextType | undefined>(undefined);

export const MeetingProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [activeMeetingId, setActiveMeetingId] = useState<string | null>(null);
  const [activeTeamId, setActiveTeamId] = useState<string | null>(null);

  const { data: session, status } = useSession();
  const { data, isLoading } = useQuery({
    queryKey: ["teams", session?.user.sub],
    queryFn: async () => {
      return await gql.request(LIST_TEAMS, {
        userId: String(session?.user.sub),
      });
    },
    enabled: !!session?.user,
  });

  const {
    data: meetingsData,
    isLoading: isMeetingsLoading,
    refetch,
  } = useQuery({
    queryKey: ["meetings", session?.user.sub],
    queryFn: async () => {
      return await gql.request(LIST_MEETINGS_BY_TEAMID, {
        teamId: activeTeamId || "",
      });
    },
    enabled: !!session?.user && !!activeTeamId,
  });

  useEffect(() => {
    refetch();
  }, [activeTeamId, refetch]);

  useEffect(() => {
    if (data?.teams?.items?.length && !activeTeamId) {
      !activeTeamId && setActiveTeamId(data?.teams?.items?.[0]?.id || "");
    }
  }, [data, activeTeamId, setActiveTeamId]);

  return (
    <MeetingContext.Provider
      value={{
        activeMeetingId,
        setActiveMeetingId,
        activeTeamId,
        activeTeam: data?.teams?.items?.filter(
          (i) => i?.id === activeTeamId,
        )?.[0],
        teams: data?.teams?.items as Team[],
        setActiveTeamId,
        meetings: meetingsData?.meetings?.items as Meeting[],
        isMeetingsLoading: isMeetingsLoading || status === "loading",
        isTeamsLoading: isLoading || status === "loading",
      }}
    >
      {children}
    </MeetingContext.Provider>
  );
};

export const useMeetingContext = (): MeetingContextType => {
  const context = useContext(MeetingContext);
  if (!context)
    throw new Error("useMeetingContext must be used within a MeetingProvider");
  return context;
};
