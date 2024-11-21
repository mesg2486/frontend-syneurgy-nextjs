"use client";

import React, { ChangeEvent, useState } from "react";
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
  TMeetingSchema,
  meetingSchema,
} from "@/components/forms/onboarding.schema";
import { useToast } from "@/components/ui/use-toast";
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
import usePublicUpload from "@/hooks/usePublicUpload";
import { CREATE_MEETING } from "../forms/UploadMeeting";
import { HiDocument } from "react-icons/hi";
import { FaUpload } from "react-icons/fa6";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Calendar } from "../ui/calendar";
import { cn } from "@/lib/utils";
import { generateThumbnail } from "@/utils/generate-thumbnail";
import { convertBlobToFile } from "@/utils/blob-to-file";
import { v4 as uuidv4 } from "uuid";
import { useMeetingContext } from "../providers/MeetingProvider";

interface IAddMeetingProps {
  open: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AddMeeting({ open, setIsOpen }: IAddMeetingProps) {
  const [id, setId] = useState(uuidv4());
  const [url, setUrl] = useState("");
  const { toast } = useToast();
  const [thumbnail, setThumbnail] = useState("");
  const { data: session } = useSession();
  const user = session?.user;
  const queryClient = useQueryClient();
  const { activeTeamId } = useMeetingContext();

  const { mutate: upload } = usePublicUpload({
    setUrl,
    meetingId: id,
    type: "meeting",
    contentType: "video/mp4",
  });

  const { mutate: uploadThumbnail } = usePublicUpload({
    sub: user?.sub,
    setUrl: setThumbnail,
    meetingId: id,
    type: "thumbnails",
  });

  const { mutate, isPending, isError, error } = useMutation<
    any,
    any,
    TMeetingSchema
  >({
    mutationFn: async (variables: any) =>
      gql.request(CREATE_MEETING, variables),
    onSuccess: (response) => {
      toast({
        title: "Meeting Created",
      });
      queryClient.invalidateQueries({
        queryKey: ["meetings"],
      });
      setIsOpen(false);
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
      return toast({
        title: "Please upload a file",
        description: "Upload a file to submit the form",
      });
    mutate({
      ...data,
      sub: user?.sub,
      url,
      userId: user?.sub,
      teamId: activeTeamId,
      thumbnail,
      id,
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
    const maxSize = 2 * 1024 * 1024 * 1024;

    const file = e.dataTransfer.files[0];
    if (file.size > maxSize) {
      return toast({
        title: "Exceeds Size Limit",
        description: "File size exceeds the maximum limit of 2GB.",
      });
    }

    console.log(file.name);
    setFileName(file.name);
    upload(file);
  };

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const maxSize = 2 * 1024 * 1024 * 1024;

    const { files } = e.target;
    if (!files) {
      return;
    }

    const file = files[0];
    setDropped(true);
    setFileName(file.name);
    form.reset({
      name: file.name,
    });
    if (file.size > maxSize) {
      return toast({
        title: "Exceeds Size Limit",
        description: "File size exceeds the maximum limit of 2GB.",
      });
    }

    upload(file);
    try {
      const thumbnail = await generateThumbnail(file, 6.2);
      uploadThumbnail(convertBlobToFile(thumbnail, "thumbnail.png"));

      console.log({ thumbnail });
    } catch (e) {
      console.log(e);
    }
    setFileName(file.name);
  };

  // console.log({ url, thumbnail });

  return (
    <Dialog open={open} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[600px] w-full bg-secondary text-secondary-foreground">
        <DialogHeader>
          <DialogTitle>Add Meeting</DialogTitle>
          <DialogDescription>
            Let&apos;s duplicate only the teams, not the meetings.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col h-full gap-4 text-white/60"
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
                    <HiDocument className="mx-auto text-4xl" />
                    <p className="pt-4">
                      {fileName.length > 40
                        ? fileName.slice(0, 40) + "..."
                        : fileName}
                    </p>
                  </>
                ) : (
                  <>
                    <FaUpload className="mx-auto text-2xl text-white" />
                    <p className="pt-4 text-xs">
                      Drag & Drop or{" "}
                      <span className="text-primary">
                        Choose file
                        <input
                          onChange={handleFileChange}
                          className="absolute inset-0 opacity-0 cursor-pointer"
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
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Meeting Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
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
                          <SelectValue placeholder="Select Type" />
                        </SelectTrigger>
                        <SelectContent className="">
                          <SelectItem value="creative">Creative</SelectItem>
                          <SelectItem value="decision-making">
                            Decision Making
                          </SelectItem>
                          <SelectItem value="brainstorming">
                            Brainstorming
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
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
                            <CalendarIcon className="w-4 h-4 ml-auto opacity-50" />
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
            <div className="flex justify-end flex-1 gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-white rounded-full hover:bg-white/90"
              >
                {isPending ? (
                  <span className="flex items-center gap-2">
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
      </DialogContent>
    </Dialog>
  );
}
