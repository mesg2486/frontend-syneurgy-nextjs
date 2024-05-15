"use client";

import { TAboutFormSchema } from "@/components/forms/onboarding.schema";
import { Input } from "@/components/ui/input";
import React, { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Button } from "../ui/button";
import { AiOutlineDelete, AiOutlineReload } from "react-icons/ai";
import { useOnboardingData } from "@/contexts/onboarding.context";
import { graphql } from "@/services/gql";
import { useMutation } from "@tanstack/react-query";
import { gql } from "@/services/clients/graphql.client";
import useUpdateUser from "@/hooks/useUpdateUserStep";

const UPDATE_TEAM_INVITATIONS = graphql(`
  mutation updateMeetingInvitations(
    $id: ID!
    $invitations: [UpdateInvitationsInput]
  ) {
    team: updateTeam(input: { id: $id, invitations: $invitations }) {
      id
    }
  }
`);

interface IFormProps {
  progress: string;
  setProgress: React.Dispatch<React.SetStateAction<string>>;
}

export default function InviteTeam({ progress, setProgress }: IFormProps) {
  const { toast } = useToast();
  const { user } = useOnboardingData();
  const { mutate: updateUser } = useUpdateUser({ progress, setProgress });

  const { mutate, isPending } = useMutation<any, any>({
    mutationFn: async (variables: any) =>
      gql.request(UPDATE_TEAM_INVITATIONS, variables),
    onSuccess: (response) => {
      updateUser({
        sub: user.sub,
        firstTeam: response?.team.id,
        step: "5",
      } as any);
    },
    onError: (error) => {
      return toast({
        title: "Error",
        description:
          error?.response?.data?.error?.message ||
          "An error occurred while creating account.",
      });
    },
  });

  async function onSubmit(data: any) {
    console.log({ data });
    try {
      mutate({
        id: user.firstTeam,
        invitations: data.invitations.map((i: any) => ({
          email: i.value,
          invited: false,
        })),
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
    prepend({ value: "" });
  }, []);

  console.log(fields);

  return (
    <div className="pt-8 flex-1">
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
                      <Input {...field} className="border-white/20" />
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
                <span>Create Team</span>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
