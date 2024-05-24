"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { AiOutlinePlus } from "react-icons/ai";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { FaBell } from "react-icons/fa6";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import AddTeam from "../modals/AddTeam.modal";
import AddMeeting from "../modals/AddMeeting.modal";

export default function Dashnav() {
  const { data: session } = useSession();
  const [meetingModalOpen, setMeetingModalOpen] = useState(false);
  const [teamModalOpen, setTeamModalOpen] = useState(false);

  return (
    <div className="border-b px-4 md:px-6 border-white/20 h-16 flex items-center justify-between">
      <div className="">
        <Link href="/">
          <img src="/logo-icon.png" className="h-6 md:hidden" alt="syneurgy" />
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="outline">
              <AiOutlinePlus />
              Add
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-secondary">
            <Button
              className="hover:bg-secondary justify-between w-full"
              size="sm"
              variant="ghost"
              type="button"
              onClick={() => setTeamModalOpen(true)}
            >
              Team
            </Button>
            <Button
              className="hover:bg-secondary justify-between w-full"
              size="sm"
              variant="ghost"
              type="button"
              onClick={() => setMeetingModalOpen(true)}
            >
              Meeting
            </Button>
          </DropdownMenuContent>
        </DropdownMenu>
        <Link href={`/notifications`}>
          <FaBell />
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger className="focus:ring-0 flex gap-2 focus:border-0">
            <Avatar className="h-6 w-6">
              <AvatarImage
                className="object-cover"
                src={session?.user.avatar || "/user.png"}
                alt="avatar"
              />
              <AvatarFallback>SG</AvatarFallback>
            </Avatar>
            <div className="capitalize">{session?.user.firstName}</div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-tertiary">
            <DropdownMenuItem asChild className="p-2.5">
              <Link href={"/settings/account"}>
                <span className="block w-full text-xs rounded-md">
                  Settings
                </span>
              </Link>
            </DropdownMenuItem>
            <Button
              className="hover:bg-secondary justify-between w-full"
              size="sm"
              variant="ghost"
              type="button"
              onClick={() => signOut()}
            >
              Logout
            </Button>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <AddTeam open={teamModalOpen} setIsOpen={setTeamModalOpen} />
      <AddMeeting open={meetingModalOpen} setIsOpen={setMeetingModalOpen} />
    </div>
  );
}
