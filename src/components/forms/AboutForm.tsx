"use client";

import {
  TAboutFormSchema,
  aboutFormSchema,
} from "@/components/forms/onboarding.schema";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
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
import { useSession } from "next-auth/react";
import useUpdateUser from "@/hooks/useUpdateUserStep";

export const UPDATE_USER_ABOUT = graphql(`
  mutation updateUser(
    $step: String
    $onboarded: Boolean
    $sub: ID!
    $username: String
    $email: String
    $status: String
    $lastName: String
    $firstName: String
    $country: String
    $company: String
    $dob: String
    $avatar: String
    $phone: String
    $position: String
    $resultPrivacy: Boolean
    $firstTeam: String
    $firstMeeting: String
  ) {
    user: updateUser(
      input: {
        step: $step
        onboarded: $onboarded
        lastName: $lastName
        firstName: $firstName
        country: $country
        company: $company
        dob: $dob
        avatar: $avatar
        phone: $phone
        position: $position
        resultPrivacy: $resultPrivacy
        status: $status
        sub: $sub
        username: $username
        email: $email
        firstTeam: $firstTeam
        firstMeeting: $firstMeeting
      }
    ) {
      sub
    }
  }
`);

interface IFormProps {
  progress: string;
  setProgress: React.Dispatch<React.SetStateAction<string>>;
}

export default function AboutForm({ progress, setProgress }: IFormProps) {
  const { data: session } = useSession();

  const { mutate, isPending } = useUpdateUser({
    progress,
    setProgress,
  });

  async function onSubmit(data: TAboutFormSchema) {
    console.log({ data });
    mutate({
      ...data,
      sub: session?.user.sub,
      step: "4",
    } as any);
  }

  const form = useForm<TAboutFormSchema>({
    resolver: zodResolver(aboutFormSchema),
    mode: "onChange",
    defaultValues: {
      company: "",
      // country: "",
      firstName: "",
      lastName: "",
      position: "",
      // privacy: true,
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
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
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
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
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
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company</FormLabel>
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
            <FormField
              control={form.control}
              name="position"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Position</FormLabel>
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
            {/* <Button
              type="submit"
              size="lg"
              onClick={() => setProgress((v) => String(Number(v) - 1))}
              className="rounded-full w-full bg-white hover:bg-white/90"
            >
              Back
            </Button> */}
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
                <span>Finish</span>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
