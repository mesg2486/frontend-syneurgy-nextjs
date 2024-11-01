"use client";

import { colors, GET_MEETING } from "@/app/(dashboard)/meetings/[id]/page";
import ParticipationRateChart from "@/components/meeting/ParticipationRateChart";
import SpeakerRateChart from "@/components/meeting/SpeakerRateChart";
import { UserRow } from "@/components/meeting/TeamDetails";
import { gql } from "@/services/clients/graphql.client";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export default function Report({ params }: { params: { id: string } }) {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["meeting", params.id],
    queryFn: async () => {
      return await gql.request(GET_MEETING, {
        id: String(params.id),
      });
    },
  });

  const renderContent = (type: "v" | "a") =>
    data?.meeting?.posNegRates?.map((i, index) => (
      <UserRow
        key={index}
        meetingId={params.id}
        user={i?.user || ""}
        negativeRate={
          type === "v" ? Number(i?.negative_rate_v) : Number(i?.negative_rate_a)
        }
        positiveRate={
          type === "v" ? Number(i?.positive_rate_v) : Number(i?.positive_rate_a)
        }
      />
    ));

  // return (
  //   <div className="flex items-center justify-center min-h-screen bg-secondary text-secondary-foreground">
  //     <div className="max-w-[400px] w-full mx-auto flex flex-col py-4 space-y-4 scale-150">
  //       {renderContent("v")}
  //     </div>
  //   </div>
  // );

  const averageRate =
    Number(
      data?.meeting?.speaker_rates?.reduce(
        (sum, i) => sum + Number(i?.rate),
        0,
      ),
    ) / Number(data?.meeting?.speaker_rates?.length);

  const teamAvgWpm = averageRate;
  const meetingId = data?.meeting?.id;

  const participation = data?.meeting?.participation?.map((i, index) => ({
    color: colors[index % colors.length],
    rate: i?.time,
    speaker: i?.speakerId,
    wpm: data.meeting?.speaker_rates?.[index]?.rate,
  }));

  return (
    <div className="bg-secondary text-secondary-foreground">
      <div className="max-w-[600px] mx-auto flex justify-center items-center min-h-screen">
        <div className="py-5 scale-125">
          <div id="content" className="flex flex-col py-4 space-y-6">
            <div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {participation?.map((i: any) => (
                        <img
                          key={i}
                          className="inline-block object-cover w-6 h-6 rounded-full"
                          src={`${process.env.NEXT_PUBLIC_CDN_ENDPOINT}/out/${meetingId}/${i.speaker?.replace(
                            "speaker",
                            "user",
                          )}.jpg`}
                          alt={i?.speaker}
                        />
                      ))}
                    </div>
                    <span className="opacity-80">Team</span>
                  </div>
                  <div className="text-xs font-normal opacity-60">100%</div>
                </div>
                <ParticipationRateChart values={participation} />
                <SpeakerRateChart teamAvg={teamAvgWpm} userScore={teamAvgWpm} />
              </div>
            </div>
            {participation?.map((i: any) => (
              <div key={i.rate} className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      <img
                        className="inline-block object-cover w-6 h-6 rounded-full"
                        src={`${process.env.NEXT_PUBLIC_CDN_ENDPOINT}/out/${meetingId}/${i.speaker?.replace(
                          "speaker",
                          "user",
                        )}.jpg`}
                        alt={i?.speaker}
                      />
                    </div>
                    <span className="opacity-80">{i?.speaker}</span>
                  </div>
                  <div className="text-xs font-normal opacity-60">
                    {i?.rate?.toFixed(1)} %
                  </div>
                </div>
                <ParticipationRateChart values={[i]} />
                <SpeakerRateChart teamAvg={teamAvgWpm} userScore={i?.wpm} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
