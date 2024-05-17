"use client";

import React from "react";
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

export default function TeamCard({ team }: { team: Team }) {
  return (
    <div className="bg-tertiary space-y-2 rounded-lg p-4">
      <div className="flex justify-between items-center">
        <div className="flex pl-2">
          {Array.from(Array(team.invitations?.length || 3).keys()).map((i) => (
            <Avatar
              key={i}
              className="h-6 w-6 rounded-full overflow-hidden shadow -ml-2"
            >
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            </Avatar>
          ))}
        </div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="ghost">
                <HiOutlineDotsVertical />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="bottom" className="bg-secondary">
              <Button
                variant="ghost"
                size="sm"
                className="hover:bg-tertiary w-full justify-between"
              >
                Rename
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="hover:bg-tertiary w-full justify-between"
              >
                Delete
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
            {team.invitations?.length || 0} members
          </p>
          <p className="text-xs">
            {format(new Date(team.createdAt), "do MMM, yyyy")}
          </p>
        </div>
      </div>
    </div>
  );
}
