import { fetchql } from "@/services/clients/fetch";
import React from "react";

const GET_MEETING_QUERY = `
  query getMeeting($id: ID!) {
    meeting: getMeeting(id: $id) {
      thumbnail
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
  console.log(meeting);
  return (
    <div className="bg-secondary text-secondary-foreground">
      <div className="max-w-[600px] w-full mx-auto flex justify-center items-center min-h-screen">
        <div className="w-full py-5 scale-125">
          <div className="w-full overflow-hidden rounded-lg bg-white/10">
            <img src={meeting?.thumbnail} alt="meeting" />
            <div className="p-4">
              <div className="flex flex-col space-y-6">
                {meeting?.team_highlights?.map((highlight: any, index: any) => (
                  <div key={index} className="flex flex-row gap-x-4">
                    <h4 className="h-max w-max rounded-xl px-1 border-[1px] border-slate-200 border-opacity-25">
                      {highlight.start}
                    </h4>
                    <p className="">{highlight.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
