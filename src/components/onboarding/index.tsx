"use client";

import AboutForm from "@/components/forms/AboutForm";
import Image from "next/image";
import Link from "next/link";
import React, { ChangeEvent, useState } from "react";
import GetStarted from "../forms/GetStarted";
import UploadMeeting from "../forms/UploadMeeting";
import usePublicUpload from "@/hooks/usePublicUpload";
import { useSession } from "next-auth/react";
import { Progress } from "../ui/progress";

export default function Onboarding({ step }: { step: String }) {
  const [progress, setProgress] = useState(step);
  const [uploadProgress, setUploadProgress] = useState({
    size: 0,
    progress: 0,
    estimated: 0,
    rate: 0,
  });

  const { data: session } = useSession();

  const { mutate: uploadFile } = usePublicUpload({
    sub: session?.user.sub,
    type: "profile",
    onUploadProgress: (event) => {
      const progress = {
        size: Number((Number(event.total) / (1024 * 1024)).toFixed(2)),
        progress: Math.round(Number(event.progress) * 100),
        estimated: Number(
          Number(
            (Number(event.total) - event.loaded) / Number(event.rate),
          ).toFixed(2),
        ),
        rate: Number((Number(event.rate) / (1024 * 1024)).toFixed(2)),
      };
      setUploadProgress(progress);
    },
  });

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { files } = e.target;
    if (!files) {
      return;
    }
    uploadFile(files[0]);
  };

  return (
    <div className="bg-secondary h-screen flex justify-between items-center text-secondary-foreground relative">
      <div className="fixed bottom-0 space-y-2 right-96 w-96 bg-black/20 backdrop-blur-md border border-white/20 p-4 rounded-t-xl text-xs">
        <div className="flex justify-between items-center">
          <p>{uploadProgress.size} MB</p>
          <p>ETA {uploadProgress.estimated} s</p>
        </div>
        <Progress
          value={uploadProgress.progress}
          className="w-full h-4 bg-white/20"
        />
        <div className="flex justify-between items-center">
          <p>{uploadProgress.rate} Mbps</p>
          {/* <p>{uploadProgress.rate} MB</p> */}
        </div>
      </div>
      <Link
        href={"/"}
        className="flex flex-row gap-3 items-center pb-3 cursor-pointer absolute top-6 left-6"
      >
        <Image
          height={80}
          width={80}
          src="/logo-icon.png"
          alt="syneurgy"
          className="h-6 w-auto"
        />
        <p className="font-bold text-xl">Syneurgy</p>
      </Link>
      <input
        type="file"
        onChange={handleFileChange}
        placeholder="upload file"
      />
      <div className="h-full flex-1 max-h-[800px] my-auto py-32 flex justify-end">
        <div className="space-y-4 h-full flex flex-col w-full max-w-sm">
          <h2 className="text-4xl font-medium max-w-sm">About you</h2>
          <p>We want to meet you</p>
          {step === "1" && <AboutForm />}
          {step === "2" && <GetStarted />}
          {step === "3" && <UploadMeeting />}
        </div>
      </div>
      <div className="flex-1 flex justify-end pl-20 h-full">
        <div className="bg-[#262E40] text-secondary-foreground h-full flex-1 max-w-lg flex flex-col justify-center p-16 gap-6 items-center">
          <img
            src="/assets/marc-benioff.png"
            alt="marc-benioff"
            className="h-60 w-60 object-cover"
          />
          <h3 className="font-italic text-lg text-center text-white/60">
            &quot;The best teams play together like a family who trust one
            another to have their back&quot;
          </h3>
          <div className="flex flex-col items-center pt-8">
            <h4 className="text-white">Marc Benioff</h4>
            <p className="text-white/60">CEO and Founder of Salesforce</p>
          </div>
        </div>
      </div>
    </div>
  );
}
