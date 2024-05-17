"use client";

import React, { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";
import { gql } from "@/services/clients/graphql.client";
import { useFieldArray, useForm } from "react-hook-form";
import { AiOutlineDelete, AiOutlineReload } from "react-icons/ai";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UPDATE_TEAM_INVITATIONS } from "../forms/InviteTeamForm";

export interface IInvitation {
  email: string;
  invited: string;
  message: string;
}

interface IAddMembersProps {
  open: boolean;
  teamId: string;
  invitations: IInvitation[] | [];
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AddMembers({
  open,
  setIsOpen,
  teamId,
  invitations,
}: IAddMembersProps) {
  const { toast } = useToast();

  const { mutate, isPending } = useMutation<any, any>({
    mutationFn: async (variables: any) =>
      gql.request(UPDATE_TEAM_INVITATIONS, variables),
    onSuccess: (response) => {
      console.log(response?.team?.id, "teamId");
    },
    onError: (error) => {
      return toast({
        title: "Error",
        description:
          error?.response?.data?.error?.message ||
          "An error occurred while updating the details.",
      });
    },
  });

  async function onSubmit(data: any) {
    const invitationList = [
      ...data.invitations
        .filter((i: any) => !!i)
        .map((i: any) => ({
          email: i.value,
          invited: false,
          message: "",
        })),
      ...invitations,
    ];

    console.log({ invitationList });

    try {
      mutate({
        id: teamId,
        invitations: invitationList,
      } as any);
    } catch (e) {
      console.log(e);
    }
  }

  const form = useForm();

  const { fields, append, remove, prepend } = useFieldArray({
    control: form.control,
    name: "invitations" as never,
  });

  useEffect(() => {
    prepend({ value: "" });
  }, []);

  return (
    <Dialog open={open} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[600px] w-full bg-secondary text-secondary-foreground">
        <DialogHeader>
          <DialogTitle>Add members</DialogTitle>
          <DialogDescription>
            Invite your teammates to join the team.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="gap-4 text-white/60 flex h-full flex-col"
          >
            {fields.map((i: any, index) => (
              <FormField
                control={undefined}
                key={i.id}
                // defaultValue={i.value}
                name={`invitations.${index}.value`}
                render={({ field }) => (
                  <FormItem className="max-w-xl gap-2">
                    <FormLabel>Email Address</FormLabel>
                    <div className="flex gap-2 items-center">
                      <FormControl>
                        <Input
                          {...field}
                          autoComplete=""
                          className="border-white/20"
                        />
                      </FormControl>
                      <Button
                        size="icon"
                        className="!mt-0"
                        variant="ghost"
                        type="button"
                        onClick={() => remove(index)}
                      >
                        <AiOutlineDelete />
                      </Button>
                    </div>
                  </FormItem>
                )}
              />
            ))}
            <div>
              <button
                type="button"
                className="text-primary"
                onClick={() => append({ value: "" })}
              >
                Add more members
              </button>
            </div>
            <div className="flex-1 flex flex-col justify-end">
              <Button
                type="submit"
                size="lg"
                className="rounded-full w-full bg-white hover:bg-white/90"
              >
                {isPending ? (
                  <span className="flex gap-2 items-center">
                    <span>Pending</span>
                    <AiOutlineReload className="animate-spin" />
                  </span>
                ) : (
                  <span>Invite Members</span>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
