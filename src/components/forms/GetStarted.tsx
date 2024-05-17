"use client";

import {
  TOnboardingHomeSchema,
  onboardingHomeSchema,
} from "@/components/forms/onboarding.schema";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { useMutation } from "@tanstack/react-query";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "../ui/button";
import { AiOutlineReload } from "react-icons/ai";
import { graphql } from "@/services/gql";
import { gql } from "@/services/clients/graphql.client";
import useUpdateUser from "@/hooks/useUpdateUserStep";
import { useOnboardingData } from "@/contexts/onboarding.context";

export const CREATE_TEAM = graphql(`
  mutation createTeam($createdBy: ID!, $name: String!) {
    team: createTeam(input: { createdBy: $createdBy, name: $name }) {
      id
    }
  }
`);

interface IFormProps {
  progress: string;
  setProgress: React.Dispatch<React.SetStateAction<string>>;
}

export default function GetStarted({ progress, setProgress }: IFormProps) {
  const { toast } = useToast();
  const { user } = useOnboardingData();

  const { mutate: updateUser } = useUpdateUser({
    progress,
    setProgress,
  });

  const { mutate, isPending } = useMutation<any, any, TOnboardingHomeSchema>({
    mutationFn: async (variables: any) => gql.request(CREATE_TEAM, variables),
    onSuccess: (response) => {
      console.log({ response });
      console.log({
        sub: user.sub,
        firstTeam: response?.team.id,
        step: "2",
      });

      updateUser({
        sub: user.sub,
        firstTeam: response?.team.id,
        step: "2",
      } as any);
    },
    onError: (error) => {
      return toast({
        title: "Error",
        description: "An error occurred while creating team.",
      });
    },
  });

  async function onSubmit(data: TOnboardingHomeSchema) {
    console.log({ data });
    mutate({ ...data, createdBy: user.sub } as any);
  }

  const form = useForm<TOnboardingHomeSchema>({
    resolver: zodResolver(onboardingHomeSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
    },
  });

  return (
    <div className="pt-8 flex-1">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="gap-4 text-white/60 flex h-full flex-col"
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
          <div className="flex-1 flex flex-col justify-end">
            <Button
              type="submit"
              size="lg"
              className="rounded-full w-full bg-white hover:bg-white/90"
            >
              {isPending ? (
                <span className="flex gap-2 items-center">
                  <span>Creating</span>
                  <AiOutlineReload className="animate-spin" />
                </span>
              ) : (
                <span>Create Team</span>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
