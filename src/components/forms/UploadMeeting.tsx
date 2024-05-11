"use client";

// import {
//   TAboutFormSchema,
//   aboutFormSchema,
// } from "@/components/forms/onboarding.schema";
import { Input } from "@/components/ui/input";
// import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useState } from "react";
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
import { FaUpload } from "react-icons/fa6";
import { HiDocument } from "react-icons/hi";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import Uploader from "../modals/Uploader";
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

interface IFormProps {
  progress: string;
  setProgress: React.Dispatch<React.SetStateAction<string>>;
}

export default function UploadMeeting({ progress, setProgress }: IFormProps) {
  const [url, setUrl] = useState("");
  const { toast } = useToast();
  const router = useRouter();
  const { data: session } = useSession();

  const { mutate: upload } = usePublicUpload({
    sub: session?.user.sub,
    setUrl,
    type: "profile",
  });

  // const { mutate, isPending, isError, error } = useMutation<
  //   any,
  //   any,
  //   TAboutFormSchema
  // >({
  //   mutationFn: async (variables: any) =>
  //     gql.request(UPDATE_USER_ABOUT, variables),
  //   onSuccess: (response) => {
  //     toast({
  //       title: "Details updated",
  //       description: "Details updated successfully.",
  //     });
  //     setProgress(String(Number(progress) + 1));
  //   },
  //   onError: (error) => {
  //     return toast({
  //       title: "Error",
  //       description:
  //         error?.response?.data?.error?.message ||
  //         "An error occurred while creating account.",
  //     });
  //   },
  // });

  const isPending = false;

  async function onSubmit(data: TAboutFormSchema) {
    console.log({ data });
    setProgress("3");
    // mutate({
    //   ...data,
    //   sub: session?.user.sub,
    //   step: "3",
    // } as any);
  }

  const form = useForm<TAboutFormSchema>({
    // resolver: zodResolver(aboutFormSchema),
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
    const { files } = e.target;
    if (!files) {
      return;
    }
    upload(files[0]);
    setFileName(files[0].name);
  };

  return (
    <div className="pt-8 flex-1">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="gap-4 text-white/60 flex h-full flex-col"
        >
          <div className="space-y-4">
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
                  <p className="pt-4">
                    Drag & Drop or{" "}
                    <span className="text-primary">
                      Choose file
                      <input
                        onChange={handleFileChange}
                        className="opacity-0 cursor-pointer inset-0 absolute"
                        type="file"
                      />
                    </span>{" "}
                    to upload
                  </p>
                  <p>Mov., MP4, HEVC (Maximum 2gb)</p>
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
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Meeting Type</FormLabel>
                  <FormControl>
                    <Select {...field}>
                      <SelectTrigger className="border-0 border-b border-b-white/60 rounded-none px-0">
                        <SelectValue placeholder="Select a Course" />
                      </SelectTrigger>
                      <SelectContent className="">
                        <SelectItem value="creative">Creative</SelectItem>
                        <SelectItem value="creative">Creative</SelectItem>
                        <SelectItem value="creative">Creative</SelectItem>
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
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date</FormLabel>
                  <FormControl>
                    <Input
                      type="date"
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
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Meeting Name</FormLabel>
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
