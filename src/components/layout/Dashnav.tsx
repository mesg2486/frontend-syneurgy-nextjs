"use client";

import React from "react";
import { Button } from "../ui/button";
import { AiOutlinePlus } from "react-icons/ai";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { FaBell } from "react-icons/fa6";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useSession } from "next-auth/react";

export default function Dashnav() {
  const { data: session } = useSession();

  return (
    <div className="border-b px-6 border-white/20 h-16 flex items-center justify-between">
      <div></div>
      <div className="flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="outline">
              <AiOutlinePlus />
              Add
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-secondary">
            sasdf
          </DropdownMenuContent>
        </DropdownMenu>
        <FaBell />
        <DropdownMenu>
          <DropdownMenuTrigger className="focus:ring-0 flex gap-2 focus:border-0">
            <Avatar className="h-6 w-6">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>SG</AvatarFallback>
            </Avatar>
            <div className="capitalize">{session?.user.firstName}</div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-secondary">
            sasdf
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
