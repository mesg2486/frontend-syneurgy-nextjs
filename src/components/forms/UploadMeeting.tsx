"use client";

import {
  TAboutFormSchema,
  aboutFormSchema,
} from "@/components/forms/onboarding.schema";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React, { ChangeEvent } from "react";
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
import { gql } from "@/services/clients/graphql.client";
import { graphql } from "@/services/gql";
import { useSession } from "next-auth/react";
import usePublicUpload from "@/hooks/usePublicUpload";

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
      }
    ) {
      sub
    }
  }
`);

export default function UploadMeeting() {
  const { toast } = useToast();
  const router = useRouter();

  const { data: session } = useSession();

  const { mutate, isPending, isError, error } = useMutation<
    any,
    any,
    TAboutFormSchema
  >({
    mutationFn: async (variables: any) =>
      gql.request(UPDATE_USER_ABOUT, variables),
    onSuccess: (response) => {
      toast({
        title: "Details updated",
        description: "Details updated successfully.",
      });
      // return router.push("/auth/verification");
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

  async function onSubmit(data: TAboutFormSchema) {
    console.log({ data });
    mutate({
      ...data,
      sub: session?.user.sub,
      step: "2",
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
    <div className="pt-20 flex-1">
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
                <span>Continue</span>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
