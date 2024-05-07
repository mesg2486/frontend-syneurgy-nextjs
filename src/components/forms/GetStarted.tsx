"use client";

import {
  TOnboardingHomeSchema,
  onboardingHomeSchema,
} from "@/components/forms/onboarding.schema";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
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

export default function GetStarted() {
  const { toast } = useToast();
  const router = useRouter();

  const { mutate, isPending, isError, error } = useMutation<
    any,
    any,
    TOnboardingHomeSchema
  >({
    mutationFn: async () => {},
    onSuccess: (response) => {
      toast({
        title: "Account Created",
        description: "Your account was created successfully.",
      });
      return router.push("/auth/verification");
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

  async function onSubmit(data: TOnboardingHomeSchema) {
    // console.log({ data });
    mutate({ ...data });
  }

  const form = useForm<TOnboardingHomeSchema>({
    resolver: zodResolver(onboardingHomeSchema),
    mode: "onChange",
    defaultValues: {
      title: "",
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
              name="title"
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
