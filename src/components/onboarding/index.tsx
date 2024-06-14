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
import { HiArrowLongRight } from "react-icons/hi2";

export default function Onboarding({ step }: { step: string }) {
  const [progress, setProgress] = useState<string>(step);

  const content = onboarding.find((item) => item.step === progress);

  if (progress === "6")
    return (
      <div className="relative flex items-center justify-center h-full bg-secondary min-h-dvh text-secondary-foreground">
        <div className="flex flex-col items-center justify-center gap-4">
          You&apos;re completed this step.
          <Link
            href={`/dashboard`}
            className="flex items-center justify-center gap-2 text-primary"
          >
            Dashboard
            <HiArrowLongRight />
          </Link>
        </div>
      </div>
    );

  return (
    <OnboardingProvider>
      <div className="relative flex items-center justify-between h-full bg-secondary min-h-dvh text-secondary-foreground">
        <Link
          href={"/"}
          className="absolute flex flex-row items-center gap-3 pb-3 cursor-pointer top-6 left-6"
        >
          <Image
            height={80}
            width={80}
            src="/logo-icon.png"
            alt="syneurgy"
            className="w-auto h-6"
          />
          <p className="text-xl font-bold">Syneurgy</p>
        </Link>
        <div className="flex justify-center flex-1 h-full px-6 py-20 md:py-32 md:justify-end">
          <div className="relative flex flex-col w-full h-full max-w-sm space-y-4">
            {Number(progress) < 6 && (
              <div className="pb-4 text-xs font-semibold text-white/60">
                <span className="text-white">{progress}</span>
                {" / "}
                <span>5</span>
              </div>
            )}
            <h2 className="max-w-sm text-4xl font-medium">{content?.title}</h2>
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
            {progress === "7" && (
              <AboutForm setProgress={setProgress} progress={progress} />
            )}
          </div>
        </div>
        <div className="flex-1 hidden h-full pl-20 min-h-dvh md:flex md:justify-end">
          <div className="bg-[#262E40] text-secondary-foreground h-full min-h-dvh flex-1 max-w-lg flex flex-col justify-center p-16 gap-6 items-center">
            <img
              src={content?.thumbnail}
              alt="marc-benioff"
              className="object-cover w-full h-auto"
            />
            {content?.quote && (
              <>
                <h3 className="text-lg text-center font-italic text-white/60">
                  &quot;{content.quote.content}&quot;
                </h3>
                <div className="flex flex-col items-center pt-8 text-center">
                  <h4 className="text-white">{content.quote.name}</h4>
                  <p className="text-white/60">{content.quote.role}</p>
                </div>
              </>
            )}
            {content?.para && (
              <>
                <div className="flex flex-col items-center pt-8 text-center">
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
