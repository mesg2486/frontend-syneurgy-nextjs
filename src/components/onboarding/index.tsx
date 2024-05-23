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

  if (step === "6")
    return (
      <div className="bg-secondary min-h-dvh h-full flex justify-center items-center text-secondary-foreground relative">
        <div className="flex justify-center items-center flex-col gap-4">
          You&apos;re completed this step.
          <Link
            href={`/dashboard`}
            className="flex justify-center items-center gap-2 text-primary"
          >
            Dashboard
            <HiArrowLongRight />
          </Link>
        </div>
      </div>
    );

  return (
    <OnboardingProvider>
      <div className="bg-secondary min-h-dvh h-full flex justify-between items-center text-secondary-foreground relative">
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
        <div className="h-full flex-1 md:py-32 px-6 py-20 flex justify-center md:justify-end">
          <div className="space-y-4 h-full flex flex-col w-full max-w-sm relative">
            {Number(progress) < 6 && (
              <div className="text-xs pb-4 font-semibold text-white/60">
                <span className="text-white">{progress}</span>
                {" / "}
                <span>5</span>
              </div>
            )}
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
            {progress === "7" && (
              <AboutForm setProgress={setProgress} progress={progress} />
            )}
          </div>
        </div>
        <div className="h-full min-h-dvh flex-1 hidden md:flex md:justify-end pl-20">
          <div className="bg-[#262E40] text-secondary-foreground h-full min-h-dvh flex-1 max-w-lg flex flex-col justify-center p-16 gap-6 items-center">
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
