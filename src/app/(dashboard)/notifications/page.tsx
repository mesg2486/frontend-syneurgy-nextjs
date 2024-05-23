import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import React from "react";
import { HiCheck } from "react-icons/hi";

export default function Notifcations() {
  return (
    <div className="py-8 space-y-6">
      <h2 className="text-xl font-medium">Notifications</h2>
      <div className="max-w-xl divide-y divide-white/5">
        {Array.from(Array(4).keys()).map((i) => (
          <div className="flex gap-4 py-4" key={i}>
            <div className="size-8 rounded-full bg-tertiary">
              <Avatar className="h-full w-full">
                <AvatarImage src={"/user.png"} alt="avatar" />
                <AvatarFallback>User</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex-1 space-y-2">
              <h2 className="text-sm">Somebody invited you to their team.</h2>
              <Button size="sm" className="bg-primary">
                <HiCheck />
                Accept
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
