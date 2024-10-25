import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Progress } from "../ui/progress";
import { FaHandPaper } from "react-icons/fa";
import { PosNegRate } from "@/services/gql/graphql";
import SpeakerRateChart from "./SpeakerRateChart";
import ParticipationRateChart from "./ParticipationRateChart";

const UserRow = ({
  meetingId,
  user,
  negativeRate,
  positiveRate,
}: {
  meetingId: string;
  user: string;
  negativeRate: number;
  positiveRate: number;
}) => (
  <div className="flex flex-row space-x-3">
    <div>
      <div className="p-1 bg-tertiary rounded-xl">
        <FaHandPaper className="w-full h-full" />
      </div>
    </div>
    <div className="flex flex-col w-full space-y-2">
      <div className="flex flex-row gap-x-3">
        <div className="flex -space-x-2">
          <img
            className="inline-block object-cover w-5 h-5 rounded-full"
            src={`${process.env.NEXT_PUBLIC_CDN_ENDPOINT}/out/${meetingId}/${user?.replace(
              "speaker",
              "user"
            )}.jpg`}
            alt={user}
          />
        </div>
        <p className="text-sm font-extralight opacity-80">{user}</p>
      </div>
      <div className="flex flex-row items-center gap-x-1">
        -
        <Progress
          value={negativeRate * 100}
          color="bg-orange-400"
          className="h-1.5 rotate-180 bg-tertiary"
        />
        <Progress value={positiveRate * 100} className="h-1.5 bg-tertiary" />+
      </div>
    </div>
  </div>
);

export default function TeamDetails({
  pos_neg_rates,
  meetingId,
  participation,
  teamAvgWpm,
}: {
  meetingId: string;
  pos_neg_rates: PosNegRate[];
  participation: any;
  teamAvgWpm: number;
}) {
  const renderContent = (type: "v" | "a") =>
    pos_neg_rates?.map((i, index) => (
      <UserRow
        key={index}
        meetingId={meetingId}
        user={i.user}
        negativeRate={
          type === "v" ? Number(i.negative_rate_v) : Number(i.negative_rate_a)
        }
        positiveRate={
          type === "v" ? Number(i.positive_rate_v) : Number(i.positive_rate_a)
        }
      />
    ));

  return (
    <div className="p-5 rounded-md">
      <div className="flex flex-col">
        <Tabs defaultValue="Participation" className="w-full">
          <TabsList>
            <TabsTrigger value="Participation">Participation</TabsTrigger>
            <TabsTrigger value="Emotion">Emotion</TabsTrigger>
            <TabsTrigger value="Attention">Attention</TabsTrigger>
          </TabsList>
          <TabsContent value="Participation" className="py-5">
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
                              "user"
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
                  <SpeakerRateChart
                    teamAvg={teamAvgWpm}
                    userScore={teamAvgWpm}
                  />
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
                            "user"
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
          </TabsContent>
          <TabsContent value="Emotion" className="py-5">
            <div className="flex flex-col py-4 space-y-4">
              {renderContent("v")}
            </div>
          </TabsContent>
          <TabsContent value="Attention" className="py-5">
            <div className="flex flex-col py-4 space-y-4">
              {renderContent("a")}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
