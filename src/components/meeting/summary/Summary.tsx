import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { gql } from "@/services/clients/graphql.client";
import { graphql } from "@/services/gql";
import { MeetingSummary } from "@/services/gql/graphql";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import React from "react";
import { PiNewspaper } from "react-icons/pi";

const GET_MEETING_TRANSCRIPT = graphql(`
  query getMeetingTranscripts($id: ID!) {
    meeting: getMeeting(id: $id) {
      id
      transcript {
        end
        sentence
        speaker
        start
      }
    }
  }
`);

export default function Summary({ summary }: { summary: MeetingSummary[] }) {
  const params = useParams();

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["meeting-transcript", params?.id],
    queryFn: async () => {
      return await gql.request(GET_MEETING_TRANSCRIPT, {
        id: String(params?.id),
      });
    },
  });

  return (
    <div className="grid grid-cols-2 divide-x-2 gap-x-5 divide-slate-500 divide-opacity-25">
      <div className="flex flex-col p-4 space-y-4 divide-y-2 divide-slate-500 divide-opacity-25">
        <h2 className="text-lg">AI meeting summary</h2>
        {summary?.map((i) => (
          <div className="" key={i.start}>
            <h3 className="my-4 font-medium text-md">
              {i.summary} ({i.start} - {i.end})
            </h3>
            <div className="space-y-3">
              {i.bullets?.map((bullet, index) => (
                <div key={index} className="flex flex-row gap-x-4">
                  {/* <p className="h-max w-max text-sm rounded-lg px-1 border-[1px] border-slate-200 border-opacity-25">
                    {bullet}
                  </p> */}
                  <p className="text-sm font-light opacity-70">{bullet}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col max-h-screen p-4 space-y-4 overflow-y-auto divide-y-2 hide-scrollbar divide-slate-500 divide-opacity-25">
        <h2 className="flex items-center text-base gap-x-1">
          <PiNewspaper size={20} /> Transcript
        </h2>
        <div className="flex flex-col pt-6 space-y-4">
          {data?.meeting?.transcript?.map((transcript) => (
            <div
              key={transcript?.start}
              className="relative pl-12 overflow-hidden"
            >
              <div className="text-base font-semibold">
                <div className="absolute top-0 left-0 flex size-5">
                  <Avatar className="w-8 h-8">
                    <AvatarImage
                      className="object-cover"
                      src={`${process.env.NEXT_PUBLIC_CDN_ENDPOINT}/out/${data.meeting?.id}/${transcript?.speaker?.replace("speaker", "user")}.jpg`}
                    />
                    <AvatarFallback>SY</AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex items-center gap-x-2">
                  <p className="text-sm opacity-80">{transcript?.speaker}</p>
                  <p>
                    <span className="px-2 h-auto py-0.5 text-[8px] border border-white rounded-full opacity-60 border-opacity-20">
                      {transcript?.start}
                    </span>
                  </p>
                </div>
              </div>
              <p className="mt-2 text-sm font-light opacity-60">
                {transcript?.sentence}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const transcripts = [
  {
    id: 1,
    name: "Alice",
    time: "08:12",
    content: "Hello, good morning.",
  },
  {
    id: 2,
    name: "Bob",
    time: "08:13",
    content: "How are you?",
  },
  {
    id: 3,
    name: "Charlie",
    time: "08:14",
    content: "I'm doing well.",
  },
  {
    id: 4,
    name: "Diana",
    time: "08:15",
    content: "What about you?",
  },
  {
    id: 5,
    name: "Eve",
    time: "08:16",
    content: "I'm great, thanks!",
  },
];
