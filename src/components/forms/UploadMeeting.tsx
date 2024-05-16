"use client";

import {
  TMeetingSchema,
  meetingSchema,
} from "@/components/forms/onboarding.schema";
import { Input } from "@/components/ui/input";
// import { zodResolver } from "@hookform/resolvers/zod";
import React, { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { useMutation } from "@tanstack/react-query";
import { format } from "date-fns";
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
import { FaUpload } from "react-icons/fa6";
import { HiDocument } from "react-icons/hi";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import usePublicUpload from "@/hooks/usePublicUpload";
import { zodResolver } from "@hookform/resolvers/zod";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import { CalendarIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import useUpdateUser from "@/hooks/useUpdateUserStep";
import { useOnboardingData } from "@/contexts/onboarding.context";

export const CREATE_MEETING = graphql(`
  mutation createMeeting(
    $teamId: String!
    $userId: String!
    $name: String!
    $synchrony: String
    $dimensions: String
    $performance: String
    $sentiment: String
    $highlights: String
    $type: String!
    $url: String!
    $thumbnail: String
    $date: String!
  ) {
    meeting: createMeeting(
      input: {
        teamId: $teamId
        userId: $userId
        name: $name
        synchrony: $synchrony
        dimensions: $dimensions
        performance: $performance
        sentiment: $sentiment
        highlights: $highlights
        type: $type
        url: $url
        thumbnail: $thumbnail
        date: $date
      }
    ) {
      id
      name
      synchrony
      dimensions
      performance
      sentiment
      highlights
      type
      url
      thumbnail
      date
    }
  }
`);

interface IFormProps {
  progress: string;
  setProgress: React.Dispatch<React.SetStateAction<string>>;
}

export default function UploadMeeting({ progress, setProgress }: IFormProps) {
  const [url, setUrl] = useState("");
  const { toast } = useToast();
  const { user, refetchUser } = useOnboardingData();

  const { mutate: upload } = usePublicUpload({
    sub: user?.sub,
    setUrl,
    type: "profile",
  });

  console.log({ user });

  // update step in user
  const { mutate: updateUser } = useUpdateUser({
    progress,
    setProgress,
  });

  const { mutate, isPending, isError, error } = useMutation<
    any,
    any,
    TMeetingSchema
  >({
    mutationFn: async (variables: any) =>
      gql.request(CREATE_MEETING, variables),
    onSuccess: (response) => {
      console.log(response, {
        sub: user.sub,
        step: "3",
        firstMeeting: response.meeting.id,
      });
      updateUser({
        sub: user.sub,
        step: "3",
        firstMeeting: response.meeting.id,
      } as any);
      refetchUser();
    },
    onError: (error) => {
      return toast({
        title: "Error",
        description: "An error occurred while updating meeting details.",
      });
    },
  });

  async function onSubmit(data: TMeetingSchema) {
    console.log({ data, date: data.date.toISOString() });
    if (!url)
      toast({
        title: "Please upload a file",
        description: "Upload a file to submit the form",
      });
    mutate({
      ...data,
      sub: user.sub,
      url,
      userId: user.sub,
      teamId: "team",
      date: data.date.toISOString(),
    } as any);
  }

  const form = useForm<TMeetingSchema>({
    resolver: zodResolver(meetingSchema),
    mode: "onChange",
    defaultValues: {
      date: new Date(),
      name: "",
      // type: "",
    },
  });

  const [highlighted, setHighlighted] = useState(false);
  const [dropped, setDropped] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleDragEnter = (e: any) => {
    e.preventDefault();
    setHighlighted(true);
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
    setHighlighted(true);
  };

  const handleDragLeave = () => {
    setHighlighted(false);
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    setHighlighted(false);
    setDropped(true);

    const file = e.dataTransfer.files[0];
    console.log(file.name);
    setFileName(file.name);
    upload(file);
    // You can perform further actions with the dropped file here
  };

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const maxSize = 2 * 1024 * 1024 * 1024;

    const { files } = e.target;
    if (!files) {
      return;
    }

    const file = files[0];

    if (file.size > maxSize) {
      return toast({
        title: "Exceeds Size Limit",
        description: "File size exceeds the maximum limit of 2GB.",
      });
    }

    upload(file);
    setFileName(file.name);
  };

  return (
    <div className="pt-8 flex-1">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="gap-4 text-white/60 flex h-full flex-col"
        >
          <div className="space-y-6">
            <div
              onDragEnter={handleDragEnter}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`border relative rounded-lg text-center border-dashed py-8 ${highlighted ? "border-primary" : "border-white/30"} ${dropped ? "bg-primary p-4 text-primary-foreground" : ""}`}
            >
              {dropped ? (
                <>
                  <HiDocument className="text-4xl mx-auto" />
                  <p className="pt-4">
                    {fileName.length > 40
                      ? fileName.slice(0, 40) + "..."
                      : fileName}
                  </p>
                </>
              ) : (
                <>
                  <FaUpload className="text-2xl mx-auto text-white" />
                  <p className="pt-4 text-xs">
                    Drag & Drop or{" "}
                    <span className="text-primary">
                      Choose file
                      <input
                        onChange={handleFileChange}
                        className="opacity-0 cursor-pointer inset-0 absolute"
                        type="file"
                        accept=".mov,.mp4,.hevc"
                      />
                    </span>{" "}
                    to upload
                  </p>
                  <p className="text-xs">Mov., MP4, HEVC (Maximum 2gb)</p>
                </>
              )}
            </div>
            <div className="flex py-3 items-center">
              <span className="border-b border-white/30 block flex-1"></span>
              <span className="px-5 block">or</span>
              <span className="border-b border-white/30 block flex-1"></span>
            </div>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Meeting Name</FormLabel>
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
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Meeting Type</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="">
                        <SelectValue placeholder="Select a Course" />
                      </SelectTrigger>
                      <SelectContent className="">
                        <SelectItem value="creative">Creative</SelectItem>
                      </SelectContent>
                    </Select>
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
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "text-left border-0 border-b border-input rounded-none px-0 bg-secondary w-full",
                            !field.value && "",
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value as any}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
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
        <div className="flex justify-center items-center text-xs pt-4">
          <button onClick={() => setProgress(String(Number(progress) + 1))}>
            Remind me later
          </button>
        </div>
      </Form>
    </div>
  );
}
