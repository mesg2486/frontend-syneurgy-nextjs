"use client";

import React, { useState } from "react";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { Team } from "@/services/gql/graphql";
import { format } from "date-fns";
import RenameTeam from "../modals/RenameTeam.modal";
import ConfirmationModal from "../modals/Confirmation.modal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { graphql } from "@/services/gql";
import { gql } from "@/services/clients/graphql.client";
import { useSession } from "next-auth/react";
import { useToast } from "../ui/use-toast";

const DELETE_TEAM = graphql(`
  mutation deleteTeam($id: ID!) {
    team: deleteTeam(input: { id: $id }) {
      id
    }
  }
`);

export default function TeamCard({ team }: { team: Team }) {
  const [open, setOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const { toast } = useToast();
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation<any, any, any>({
    mutationFn: async (variables: any) => gql.request(DELETE_TEAM, variables),
    onSuccess: (response) => {
      queryClient.invalidateQueries({
        queryKey: ["teams", session?.user.sub],
      });
      toast({
        title: "Team Deleted",
      });
      setDeleteModalOpen(false);
    },
    onError: (error) => {
      return toast({
        title: "Error",
        description: "An error occurred while deleting your team.",
      });
    },
  });

  return (
    <div className="bg-tertiary space-y-2 rounded-lg p-4">
      <div className="flex justify-between items-center">
        <div className="flex pl-2">
          {Array.from(Array(team.members?.items?.length || 3).keys()).map(
            (i) => (
              <Avatar
                key={i}
                className="h-6 w-6 rounded-full border shadow-md overflow-hidden -ml-2"
              >
                <AvatarImage src="/user.png" alt="member" />
              </Avatar>
            ),
          )}
        </div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="ghost">
                <HiOutlineDotsVertical />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="bottom" className="bg-secondary w-20">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setOpen(true)}
                className="hover:bg-tertiary w-full justify-between"
              >
                Rename
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setDeleteModalOpen(true)}
                className="hover:bg-tertiary w-full justify-between"
              >
                Delete
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  navigator.clipboard.writeText(
                    `${window.location.origin}/auth/register?teamId=${team.id}`,
                  );
                  toast({
                    title: "Invite Link Copied",
                  });
                }}
                className="hover:bg-tertiary w-full justify-between"
              >
                Copy Invite Link
              </Button>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="space-y-2 pt-8">
        <Link
          href={`/teams/${team.id}`}
          className="hover:underline hover:underline-offset-4 pt-8"
        >
          {team?.name}
        </Link>
        <div className="flex items-center justify-between">
          <p className="text-primary opacity-80 text-xs">
            {team.members?.items?.length || 0} members
          </p>
          <p className="text-xs">
            {format(new Date(team.createdAt), "do MMM, yyyy")}
          </p>
        </div>
      </div>
      <ConfirmationModal
        open={deleteModalOpen}
        setIsOpen={setDeleteModalOpen}
        onConfirm={() => mutate({ id: team.id })}
        ctaText="Confirm Deletion"
        isPending={isPending}
        title="Confirm Team Deletion"
      />
      <RenameTeam
        id={team.id}
        open={open}
        setIsOpen={setOpen}
        name={team.name}
      />
    </div>
  );
}
