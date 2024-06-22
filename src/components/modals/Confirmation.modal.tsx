"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AiOutlineReload } from "react-icons/ai";

interface IAddTeamProps {
  open: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onConfirm: () => void;
  isPending?: boolean;
  title?: string;
  subTitle?: string;
  ctaText?: string;
}

export default function ConfirmationModal({
  open,
  title = "Confirm Action",
  subTitle = "I understand the consequences, let's continue.",
  ctaText = "Confirm",
  setIsOpen,
  isPending = false,
  onConfirm,
}: IAddTeamProps) {
  return (
    <Dialog open={open} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[400px] w-full bg-secondary text-secondary-foreground">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{subTitle}</DialogDescription>
        </DialogHeader>
        <div className="flex justify-center flex-1 gap-3 py-8">
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button
            type="submit"
            onClick={() => onConfirm()}
            variant="destructive"
          >
            {isPending ? (
              <span className="flex items-center gap-2">
                <span>Pending</span>
                <AiOutlineReload className="animate-spin" />
              </span>
            ) : (
              <span>{ctaText}</span>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
