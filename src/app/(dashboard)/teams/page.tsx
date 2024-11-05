"use client";

import TeamCard from "@/components/cards/TeamCard";
import AddTeam from "@/components/modals/AddTeam.modal";
import TeamCardSkeleton from "@/components/placeholders/TeamCard.skeleton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { gql } from "@/services/clients/graphql.client";
import { graphql } from "@/services/gql";
import { Team } from "@/services/gql/graphql";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { HiOutlineSearch } from "react-icons/hi";

const LIST_TEAMS_BY_USERID = graphql(`
  query listTeamsByUserId($userId: ID!) {
    teams: listTeamsByUserId(userId: $userId) {
      items {
        createdBy
        engagementLevel
        goals
        id
        name
        performance
        sentiment
        syncHistory
        members {
          items {
            userId
            user {
              avatar
              email
              sub
              firstName
              lastName
            }
          }
        }
        invitations {
          email
          invited
          message
        }
        createdAt
        updatedAt
        synchrony
        teamInSync
      }
    }
  }
`);

export default function Meetings() {
  const [open, setOpen] = useState(false);
  const { data: session, status } = useSession();

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["teams", session?.user.sub],
    queryFn: async () => {
      return await gql.request(LIST_TEAMS_BY_USERID, {
        userId: String(session?.user.sub),
      });
    },
    enabled: !!session?.user,
  });

  return (
    <div className="py-6 space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="md:text-xl">Team Console</h2>
        <div className="flex flex-row gap-x-3">
          <div className="relative">
            <Input
              placeholder="Search"
              className="w-32 h-full px-6 border rounded-full md:w-40"
            />
            <div className="absolute -translate-y-1/2 right-6 top-1/2">
              <HiOutlineSearch />
            </div>
          </div>
          <Button onClick={() => setOpen(true)}>
            <AiOutlinePlus />
            <span className="hidden md:block">Add Team</span>
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        {(isLoading || status === "loading") &&
          Array.from(Array(10)).map((i) => <TeamCardSkeleton key={i} />)}
        {Number(data?.teams?.items?.length) > 0 &&
          data?.teams?.items?.map((team) => (
            <TeamCard team={team as Team} key={team?.id} />
          ))}
        {!(isLoading || status === "loading") &&
          Number(data?.teams?.items?.length) === 0 && (
            <div className="flex items-center justify-center col-span-5 py-40">
              No teams found!
            </div>
          )}
      </div>
      <AddTeam open={open} setIsOpen={setOpen} />
    </div>
  );
}
