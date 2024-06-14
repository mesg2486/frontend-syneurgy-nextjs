"use client";

import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface IAddTeamProps {
  open: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function VideoModal({ open, setIsOpen }: IAddTeamProps) {
  return (
    <Dialog open={open} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-6xl bg-secondary text-secondary-foreground">
        <video width="full" height="full" controls>
          <source
            src="https://videos.pexels.com/video-files/20600550/20600550-hd_1280_720_30fps.mp4"
            type="video/mp4"
          />
        </video>
      </DialogContent>
    </Dialog>
  );
}
