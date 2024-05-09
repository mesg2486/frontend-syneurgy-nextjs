"use client";

import {
  TAboutFormSchema,
  aboutFormSchema,
} from "@/components/forms/onboarding.schema";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
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
import { AiOutlineDelete, AiOutlineReload } from "react-icons/ai";
import { gql } from "@/services/clients/graphql.client";
import { graphql } from "@/services/gql";
import { useSession } from "next-auth/react";

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

export default function InviteTeam() {
  const { toast } = useToast();
  const { data: session } = useSession();

  //   const { mutate, isPending, isError, error } = useMutation<
  //     any,
  //     any,
  //     TAboutFormSchema
  //   >({
  //     mutationFn: async (variables: any) =>
  //       gql.request(UPDATE_USER_ABOUT, variables),
  //     onSuccess: (response) => {
  //       toast({
  //         title: "Details updated",
  //         description: "Details updated successfully.",
  //       });
  //       // return router.push("/auth/verification");
  //     },
  //     onError: (error) => {
  //       return toast({
  //         title: "Error",
  //         description:
  //           error?.response?.data?.error?.message ||
  //           "An error occurred while creating account.",
  //       });
  //     },
  //   });

  async function onSubmit(data: TAboutFormSchema) {
    console.log({ data });
    // mutate({
    //   ...data,
    //   sub: session?.user.sub,
    //   step: "2",
    // } as any);
  }

  const form = useForm<TAboutFormSchema>({
    // resolver: zodResolver(aboutFormSchema),
    // mode: "onChange",
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "objectives" as never,
  });

  useEffect(() => {
    append({ value: "" });
    append({ value: "" });
  }, []);

  return (
    <div className="pt-20 flex-1">
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
              name={`objectives.${index}.value`}
              render={({ field }) => (
                <FormItem className="max-w-xl flex gap-2 items-center">
                  <FormControl>
                    <Input {...field} />
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
                </FormItem>
              )}
            />
          ))}
        </form>
      </Form>
    </div>
  );
}
