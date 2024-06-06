"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useMutation } from "@tanstack/react-query";
import { gql } from "@/services/clients/graphql.client";
import { graphql } from "@/services/gql";
import { toast } from "@/components/ui/use-toast";
import { AiOutlineReload } from "react-icons/ai";

export const contactSchema = z.object({
  name: z.string().min(2, { message: "name is not valid" }),
  phone: z.string().optional(),
  email: z.string().email(),
  message: z.string().optional(),
});

export type TContactSchema = z.infer<typeof contactSchema>;

export const CREATE_CONTACT = graphql(`
  mutation createContact(
    $name: String!
    $email: String!
    $phone: String
    $subject: String
    $message: String!
  ) {
    contact: createContact(
      input: {
        name: $name
        email: $email
        phone: $phone
        subject: $subject
        message: $message
      }
    ) {
      id
    }
  }
`);

export default function Contact() {
  const form = useForm<TContactSchema>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (variables: any) =>
      gql.request(CREATE_CONTACT, variables),
    onSuccess: (response) => {
      toast({
        title: "Contact created",
      });
      form.reset();
    },
    onError: (error) => {
      return toast({
        title: "Error",
        description: "An error occurred while updating your team.",
      });
    },
  });

  const onSubmit = (data: TContactSchema) => {
    console.log({ data });
    mutate({ ...data });
  };

  return (
    <div className="bg-[#F7F7FD] pt-24">
      <div className="container flex flex-col items-center justify-center space-y-10 py-20">
        <div className="w-full max-w-3xl text-center">
          <h2 className="text-4xl md:text-6xl font-semibold mb-6">
            We’d love to hear from you
          </h2>
          <p className="opacity-80 font-medium text-base md:text-xl">
            Complete this form and we will contact you.{" "}
          </p>
        </div>
        <div className="p-8 border-b mx-auto w-full text-black max-w-3xl pb-20">
          <h2 className="text-4xl mb-10 font-semibold">Get In Touch</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>FullName</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea {...field} rows={4} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="pt-4">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full mt-4 bg-black text-white hover:bg-black hover:opacity-90"
                >
                  {isPending ? (
                    <span className="flex gap-2 items-center">
                      <span>Pending</span>
                      <AiOutlineReload className="animate-spin" />
                    </span>
                  ) : (
                    <span>Sign Up</span>
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </div>
        <div className="mt-8 space-y-4 text-center">
          <p className=" text-2xl font-medium">Syneurgy, Inc.</p>
          <p className="text-base font-light">9701 Wilshire Blvd.</p>
          <p className="text-base font-light">Tenth Floor</p>
          <p className="text-base font-medium">USA</p>
          <p className="text-base font-medium">Beverly Hills, CA 90212</p>
        </div>
      </div>
    </div>
  );
}
