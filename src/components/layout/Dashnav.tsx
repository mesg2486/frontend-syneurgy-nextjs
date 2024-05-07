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

export default function Dashnav() {
  return (
    <div className="border-b px-6 border-white/20 h-16 flex items-center justify-between">
      <div></div>
      <div className="flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button className="rounded-full bg-white hover:bg-white gap-2">
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
          <DropdownMenuTrigger>
            <Button
              variant="outline"
              className="bg-transparent hover:bg-transparent border-white/20 gap-2"
            >
              <Avatar className="h-6 w-6">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>SG</AvatarFallback>
              </Avatar>
              Shijia Geng
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-secondary">
            sasdf
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
