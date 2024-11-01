import ParticipationRateChart from "@/components/meeting/ParticipationRateChart";
import SpeakerRateChart from "@/components/meeting/SpeakerRateChart";
import { UserRow } from "@/components/meeting/TeamDetails";
import { fetchql } from "@/services/clients/fetch";
import React from "react";

export const colors = [
  "#FFA500", // orange
  "#87CEFA", // light sky blue
  "#FFD700", // gold
  "#98FB98", // pale green
  "#FF8C00", // dark orange
  "#E0FFFF", // light cyan
  "#FFB347", // light orange
  "#F0E68C", // khaki (soft yellow-green)
  "#FFDAB9", // peach puff
  "#AFEEEE", // pale turquoise
];

const GET_MEETING_QUERY = `
  query getMeeting($id: ID!) {
    meeting: getMeeting(id: $id) {
      createdAt
      date
      highlights
      id
      name
      performance
      sentiment
      synchrony
      teamId
      thumbnail
      type
      updatedAt
      url
      userId
      summary {
        bullets
        start
        end
        summary
      }
      team_highlights {
        start
        end
        description
      }
      user_highlights {
        start
        end
        description
        speaker
      }
      dimensions {
        absorptionOrTaskEngagement
        enjoyment
        equalParticipation
        sharedGoalCommitment
        trustAndPsychologicalSafety
      }
      posNegRates {
        negative_rate_a
        negative_rate_v
        positive_rate_a
        positive_rate_v
        user
      }
      team {
        bodyScore
        brainScore
        totalScore
        behaviorScore
      }
      participation {
        speakerId
        time
      }
      speaker_rates {
        speakerId
        rate
      }
      speaker_rate_chunks {
        speakerId
        chunks {
          time
          rate
        }
      }
      speaker_times {
        speakerId
        time
      }
      totalScore
      bodyScore
      behaviorScore
      brainScore
    }
  }
`;

async function fetchMeetingData(id: string) {
  const result = await fetchql(GET_MEETING_QUERY, { id });
  if (result.errors) {
    throw new Error("Failed to fetch meeting data");
  }
  return result.data.meeting;
}

export default async function Report({ params }: { params: { id: string } }) {
  const meeting = await fetchMeetingData(params.id);
  const renderContent = (type: "v" | "a") =>
    meeting?.posNegRates?.map((i, index) => (
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
      meeting?.speaker_rates?.reduce(
        (sum: any, i: any) => sum + Number(i?.rate),
        0
      )
    ) / Number(meeting?.speaker_rates?.length);

  const teamAvgWpm = averageRate;
  const meetingId = meeting?.id;

  const participation = meeting?.participation?.map((i: any, index: any) => ({
    color: colors[index % colors.length],
    rate: i?.time,
    speaker: i?.speakerId,
    wpm: meeting?.speaker_rates?.[index]?.rate,
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
        </div>
      </div>
    </div>
  );
}
