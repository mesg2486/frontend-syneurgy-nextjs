"use client";

import {
  TAboutFormSchema,
  aboutFormSchema,
} from "@/components/forms/onboarding.schema";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "../ui/button";
import { AiOutlineReload } from "react-icons/ai";
import { graphql } from "@/services/gql";
import { useSession } from "next-auth/react";
import { countries } from "@/config/countries.config";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { LuChevronsUpDown } from "react-icons/lu";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import { cn } from "@/lib/utils";
import { User } from "@/services/gql/graphql";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useToast } from "../ui/use-toast";
import { gql } from "@/services/clients/graphql.client";
import { GET_USER } from "@/contexts/onboarding.context";
import usePublicUpload from "@/hooks/usePublicUpload";
import Image from "next/image";
import { HiPencil, HiPlus } from "react-icons/hi";
import SettingsPlaceholder from "../placeholders/Settings.skeleton";

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
  data?: User;
}

export default function AccountSettingsForm(props: IFormProps) {
  const { toast } = useToast();
  const [avatar, setAvatar] = useState("");
  const { data: session, status } = useSession();

  // get user data
  let { data, isLoading } = useQuery({
    queryKey: ["user", session?.user.sub],
    queryFn: async () => {
      return await gql.request(GET_USER, {
        sub: String(session?.user.sub),
      });
    },
    enabled: !!session?.user,
  });

  // image upload
  const onUploadSuccess = (url: any) => {
    toast({
      title: "Image Uploaded",
    });
    setAvatar(url);
  };

  const onUploadError = (error: any) => {
    toast({
      title: "Error",
      description: "An error occurred while uploading the image.",
    });
  };

  const { mutate: uploadImage, isPending: isImageUploading } = usePublicUpload({
    type: "profile",
    sub: (session?.user as any)?.sub,
    onSuccess: onUploadSuccess,
    onError: onUploadError,
  });

  // update user details
  const { mutate, isPending } = useMutation<any, any, TAboutFormSchema>({
    mutationFn: async (variables: any) =>
      gql.request(UPDATE_USER_ABOUT, variables),
    onSuccess: () => {
      toast({
        title: "Details Updated",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "An error occurred while updating the details.",
      });
    },
  });

  async function onSubmit(data: TAboutFormSchema) {
    mutate({
      ...data,
      sub: session?.user.sub,
      avatar,
    } as any);
  }

  const form = useForm<TAboutFormSchema>({
    resolver: zodResolver(aboutFormSchema),
    mode: "onChange",
    defaultValues: {
      company: "",
      country: "",
      firstName: "",
      lastName: "",
      position: "",
      resultPrivacy: false,
    },
  });

  useEffect(() => {
    if (!data || isLoading) return;
    form.reset({
      company: data?.user?.company || "",
      country: data?.user?.country || "",
      firstName: data?.user?.firstName || "",
      lastName: data?.user?.lastName || "",
      position: data?.user?.position || "",
      resultPrivacy: data?.user?.resultPrivacy || false,
    });
    setAvatar(data?.user?.avatar || "");
  }, [data]);

  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files) {
      return;
    }
    console.log({ files });

    uploadImage(files[0]);
  };

  // isLoading = true;

  if (isLoading || status === "loading")
    return (
      <div className="flex-1 max-w-xl bg-popover p-6 rounded-lg">
        <SettingsPlaceholder />
      </div>
    );

  return (
    <div className="flex-1 max-w-xl md:bg-popover md:p-6 rounded-lg">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="gap-4 text-white/60 flex h-full flex-col"
        >
          <div className="gap-6 flex">
            <div className="relative">
              <Image
                className="size-40 object-cover bg-black/30 rounded-md"
                src={avatar || "/user.png"}
                alt="profile"
                quality={80}
                width={200}
                height={200}
              />
              <input
                type="file"
                id="avatar"
                onChange={handleImageChange}
                className="absolute inset-0 cursor-pointer opacity-0"
              />
              <label
                htmlFor="avatar"
                className="absolute right-0 top-0 cursor-pointer rounded-full bg-black/40 backdrop-blur-sm p-1 translate-x-1/2 -translate-y-1/2"
              >
                {avatar ? (
                  <HiPencil className="text-sm" />
                ) : (
                  <HiPlus className="text-sm" />
                )}
              </label>
            </div>
          </div>
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
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
                    <Input {...field} />
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
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block">Country</FormLabel>
                  <Popover>
                    <PopoverTrigger className="w-full" asChild>
                      <FormControl className="w-full">
                        <Button
                          variant="outline"
                          role="combobox"
                          className={cn(
                            "w-full justify-between px-0 bg-transparent border-0 border-b rounded-none",
                            !field.value && "",
                          )}
                        >
                          {field.value
                            ? countries.find(
                                (country) => country.code === field.value,
                              )?.name
                            : "Select country"}
                          <LuChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-0">
                      <Command>
                        <CommandInput placeholder="Search country..." />
                        <CommandEmpty>No country found.</CommandEmpty>
                        <CommandGroup>
                          <CommandList className="">
                            {countries.map((country) => (
                              <CommandItem
                                value={country.name}
                                key={country.name}
                                className="text-white/80"
                                onSelect={() => {
                                  form.setValue("country", country.code);
                                }}
                              >
                                <span className="mr-2 inline-block">
                                  {country.flag}
                                </span>
                                {country.name}
                              </CommandItem>
                            ))}
                          </CommandList>
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>
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
                    <Input {...field} />
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
                    <Input {...field} />
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
              name="resultPrivacy"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center gap-4">
                    <FormControl>
                      <Input
                        type="checkbox"
                        checked={field.value}
                        className="border-0 h-4 w-4 border-b border-b-white/60"
                        {...field}
                        value={String(field.value)}
                      />
                    </FormControl>
                    <FormLabel className="text-primary-content">
                      <p className="text-xs">
                        Do not share my results with my team
                      </p>
                    </FormLabel>
                  </div>
                  {field.value && (
                    <FormDescription>
                      Your results will be anonymized in the average team data.
                    </FormDescription>
                  )}
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
                <span>Update</span>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
