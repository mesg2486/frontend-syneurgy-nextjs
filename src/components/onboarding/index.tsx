"use client";

import AboutForm from "@/components/forms/AboutForm";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import GetStarted from "../forms/GetStarted";
import UploadMeeting from "../forms/UploadMeeting";
import { onboarding } from "@/config/onboarding.config";
import InviteTeam from "../forms/InviteTeamForm";
import { OnboardingProvider } from "@/contexts/onboarding.context";
import OnboardingQuestions from "../forms/Questions";

export default function Onboarding({ step }: { step: string }) {
  const [progress, setProgress] = useState<string>(step);

  const content = onboarding.find((item) => item.step === progress);

  return (
    <OnboardingProvider>
      <div className="bg-secondary h-screen flex justify-between items-center text-secondary-foreground relative">
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
        <div className="h-full flex-1 my-auto py-32 flex justify-end">
          <div className="space-y-4 h-full flex flex-col w-full max-w-sm relative">
            <div className="text-xs pb-4">
              <span>{progress}</span>
              {"/"}
              <span>5</span>
            </div>
            <h2 className="text-4xl font-medium max-w-sm">{content?.title}</h2>
            <p>{content?.description}</p>
            {progress === "1" && (
              <GetStarted setProgress={setProgress} progress={progress} />
            )}
            {progress === "2" && (
              <UploadMeeting setProgress={setProgress} progress={progress} />
            )}
            {progress === "3" && (
              <AboutForm setProgress={setProgress} progress={progress} />
            )}
            {progress === "4" && (
              <InviteTeam setProgress={setProgress} progress={progress} />
            )}
            {progress === "5" && (
              <OnboardingQuestions
                setProgress={setProgress}
                progress={progress}
              />
            )}
          </div>
        </div>
        <div className="flex-1 flex justify-end pl-20 h-full">
          <div className="bg-[#262E40] text-secondary-foreground h-full flex-1 max-w-lg flex flex-col justify-center p-16 gap-6 items-center">
            <img
              src={content?.thumbnail}
              alt="marc-benioff"
              className="h-auto w-full object-cover"
            />
            {content?.quote && (
              <>
                <h3 className="font-italic text-lg text-center text-white/60">
                  &quot;{content.quote.content}&quot;
                </h3>
                <div className="flex flex-col items-center text-center pt-8">
                  <h4 className="text-white">{content.quote.name}</h4>
                  <p className="text-white/60">{content.quote.role}</p>
                </div>
              </>
            )}
            {content?.para && (
              <>
                <div className="flex flex-col text-center items-center pt-8">
                  <p className="text-white/60">{content.para}</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </OnboardingProvider>
  );
}
