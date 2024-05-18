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
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  TOnboardingHomeSchema,
  onboardingHomeSchema,
} from "@/components/forms/onboarding.schema";
import { toast } from "@/components/ui/use-toast";
import { gql } from "@/services/clients/graphql.client";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AiOutlineReload } from "react-icons/ai";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { graphql } from "@/services/gql";

export const RENAME_TEAM = graphql(`
  mutation renameTeam($id: ID!, $name: String!) {
    team: updateTeam(input: { id: $id, name: $name }) {
      id
    }
  }
`);

interface IRenameTeamProps {
  open: boolean;
  name: string;
  id: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function RenameTeam({
  open,
  name,
  id,
  setIsOpen,
}: IRenameTeamProps) {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  // TODO: update Schema type
  const { mutate, isPending } = useMutation<any, any, TOnboardingHomeSchema>({
    mutationFn: async (variables: any) => gql.request(RENAME_TEAM, variables),
    onSuccess: (response) => {
      queryClient.invalidateQueries({
        queryKey: ["teams", session?.user.sub],
      });
      toast({
        title: "Team Renamed",
      });
      setIsOpen(false);
    },
    onError: (error) => {
      return toast({
        title: "Error",
        description: "An error occurred while updating your team.",
      });
    },
  });

  async function onSubmit(data: TOnboardingHomeSchema) {
    console.log({ data });
    mutate({ ...data, id } as any);
  }

  const form = useForm<TOnboardingHomeSchema>({
    resolver: zodResolver(onboardingHomeSchema),
    mode: "onChange",
    defaultValues: {
      name: name,
    },
  });

  return (
    <Dialog open={open} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[600px] w-full bg-secondary text-secondary-foreground">
        <DialogHeader>
          <DialogTitle>Create Team</DialogTitle>
          <DialogDescription>
            Let&apos;s duplicate only the teams, not the meetings.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="gap-4 text-white/60 flex h-full py-8 pb-4 flex-col"
          >
            <div>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Team Name</FormLabel>
                    <FormControl>
                      <Input
                        className="border-0 border-b border-b-white/60 rounded-none"
                        {...field}
                      />
                    </FormControl>
                    {/* <FormDescription>
        This is your public display name.
      </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex-1 flex justify-end gap-3">
              <Button variant="outline" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button
                type="submit"
                className="rounded-full bg-white hover:bg-white/90"
              >
                {isPending ? (
                  <span className="flex gap-2 items-center">
                    <span>Pending</span>
                    <AiOutlineReload className="animate-spin" />
                  </span>
                ) : (
                  <span>Rename Team</span>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
