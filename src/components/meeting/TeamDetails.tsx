import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Progress } from "../ui/progress";
import { RiSpeakLine } from "react-icons/ri";
import { FaInfo } from "react-icons/fa6";
import { FaHandPaper } from "react-icons/fa";
import { PosNegRate } from "@/services/gql/graphql";

export default function TeamDetails({
  pos_neg_rates,
  meetingId,
}: {
  meetingId: string;
  pos_neg_rates: PosNegRate[];
}) {
  return (
    <div className="p-5 rounded-md">
      <div className="flex flex-col">
        <Tabs defaultValue="Emotion" className="w-full">
          <TabsList>
            {/* <TabsTrigger value="Participation">Participation</TabsTrigger> */}
            <TabsTrigger value="Emotion">Emotion</TabsTrigger>
            <TabsTrigger value="Attention">Attention</TabsTrigger>
          </TabsList>
          {/* <TabsContent value="Participation" className="py-5">
            <div className="flex flex-col space-y-6">
              <div className="flex flex-col space-y-2">
                <div className="flex justify-between">
                  <div className="flex flex-row gap-x-2">
                    <div className="flex -space-x-2">
                      {participation.map((users, index) => (
                        <img
                          key={index}
                          className="inline-block object-cover w-5 h-5 rounded-full shadow-lg"
                          src={users.profile}
                        />
                      ))}
                    </div>
                    <p className="text-sm font-light opacity-80">Team</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold opacity-80">100%</p>
                  </div>
                </div>
                <div className="w-full">
                  <Progress value={100} className="h-2" />
                </div>
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row gap-x-1">
                    <RiSpeakLine />
                    <p className="text-sm font-extralight">130wpm</p>
                  </div>
                  <div>
                    <FaInfo />
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                {participation.map((participation, index) => (
                  <div key={index} className="flex flex-col space-y-2">
                    <div className="flex justify-between">
                      <div className="flex flex-row gap-x-2">
                        <div className="flex -space-x-2">
                          <img
                            className="inline-block object-center w-5 h-5 rounded-full shadow-lg"
                            src={participation.profile}
                          />
                        </div>
                        <p className="text-sm font-light opacity-80">
                          {participation.name}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold opacity-80">
                          {participation.participation}%
                        </p>
                      </div>
                    </div>
                    <div className="w-full">
                      <Progress
                        value={participation.participation}
                        className="h-2"
                      />
                    </div>
                    <div className="flex flex-row justify-between">
                      <div className="flex flex-row gap-x-1">
                        <RiSpeakLine />
                        <p className="text-sm font-extralight">
                          {participation.speak}
                        </p>
                      </div>
                      <div>
                        <FaInfo />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent> */}
          <TabsContent value="Emotion" className="py-5">
            <div className="flex flex-col space-y-6">
              {/* <div className="flex flex-row space-x-3">
                <div className="p-1 bg-tertiary rounded-xl">
                  <FaHandPaper className="w-full h-full" />
                </div>
                <div className="flex flex-col w-full space-y-2">
                  <div className="flex flex-row gap-x-3">
                    <div className="flex -space-x-2">
                      {pos_neg_rates?.map((users, index) => (
                        <img
                          key={index}
                          className="inline-block object-cover w-5 h-5 rounded-full"
                          src={users.profile}
                        />
                      ))}
                    </div>
                    <p className="text-sm font-extralight opacity-80">Team</p>
                  </div>
                  <div className="flex flex-row gap-x-1">
                    -
                    <Progress
                      value={40}
                      className="h-1 rotate-180 bg-tertiary"
                    />
                    <Progress value={10} className="h-1 bg-tertiary" />+
                  </div>
                </div>
              </div> */}
              <div className="flex flex-col py-4 space-y-4">
                {pos_neg_rates?.map((i, index) => (
                  <div key={index} className="flex flex-row space-x-3">
                    <div>
                      <div className="p-1 bg-tertiary rounded-xl">
                        <FaHandPaper className="w-full h-full" />
                      </div>
                    </div>
                    <div className="flex flex-col w-full space-y-2">
                      <div className="flex flex-row gap-x-3">
                        <div className="flex -space-x-2">
                          <img
                            key={index}
                            className="inline-block object-cover w-5 h-5 rounded-full"
                            src={`${process.env.NEXT_PUBLIC_CDN_ENDPOINT}/out/${meetingId}/${i.user?.replace("speaker", "user")}.jpg`}
                            alt={i.user}
                          />
                        </div>
                        <p className="text-sm font-extralight opacity-80">
                          {i.user}
                        </p>
                      </div>
                      <div className="flex flex-row items-center gap-x-1">
                        -
                        <Progress
                          value={Number(i.negative_rate_v) * 100}
                          className="h-1 rotate-180 bg-tertiary "
                        />
                        <Progress
                          value={Number(i.positive_rate_v) * 100}
                          className="h-1 bg-tertiary"
                        />
                        +
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="Attention" className="py-5">
            {/* <div className="flex flex-col space-y-6">
              <div className="flex flex-row space-x-3">
                <div className="p-1 bg-tertiary rounded-xl">
                  <FaHandPaper className="w-full h-full" />
                </div>
                <div className="flex flex-col w-full space-y-2">
                  <div className="flex flex-row gap-x-3">
                    <div className="flex -space-x-2">
                      {pos_neg_rates?.map((users, index) => (
                        <img
                          key={index}
                          className="inline-block object-cover w-5 h-5 rounded-full"
                          src={users.profile}
                        />
                      ))}
                    </div>
                    <p className="text-sm font-extralight opacity-80">Team</p>
                  </div>
                  <div className="flex flex-row gap-x-1">
                    -
                    <Progress
                      value={30}
                      className="h-1 rotate-180 bg-tertiary"
                    />
                    <Progress value={75} className="h-1 bg-tertiary" />+
                  </div>
                </div>
              </div> */}
            <div className="flex flex-col py-4 space-y-4">
              {pos_neg_rates?.map((i, index) => (
                <div key={index} className="flex flex-row space-x-3">
                  <div>
                    <div className="p-1 bg-tertiary rounded-xl">
                      <FaHandPaper className="w-full h-full" />
                    </div>
                  </div>
                  <div className="flex flex-col w-full space-y-2">
                    <div className="flex flex-row gap-x-3">
                      <div className="flex -space-x-2">
                        <img
                          key={index}
                          className="inline-block object-cover w-5 h-5 rounded-full"
                          src={`${process.env.NEXT_PUBLIC_CDN_ENDPOINT}/out/${meetingId}/${i.user?.replace("speaker", "user")}.jpg`}
                          alt={i.user}
                        />
                      </div>
                      <p className="text-sm font-extralight opacity-80">
                        {i.user}
                      </p>
                    </div>
                    <div className="flex flex-row items-center gap-x-1">
                      -
                      <Progress
                        value={Number(i.negative_rate_a) * 100}
                        className="h-1 rotate-180 bg-tertiary "
                      />
                      <Progress
                        value={Number(i.positive_rate_a) * 100}
                        className="h-1 bg-tertiary"
                      />
                      +
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

const participation = [
  {
    profile: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    name: "user1",
    participation: 20,
    speak: "160wpm",
  },
  {
    profile: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    name: "user1",
    participation: 20,
    speak: "160wpm",
  },
  {
    profile: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    name: "user1",
    participation: 20,
    speak: "160wpm",
  },
  {
    profile: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    name: "user1",
    participation: 20,
    speak: "160wpm",
  },
];

// const Emotion = [
//   {
//     profile: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
//     name: "user1",
//     positive: 35,
//     negative: 80,
//   },
//   {
//     profile: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
//     name: "user2",
//     positive: 35,
//     negative: 80,
//   },
//   {
//     profile: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
//     name: "user3",
//     positive: 35,
//     negative: 80,
//   },
//   {
//     profile: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
//     name: "user4",
//     positive: 35,
//     negative: 80,
//   },
// ];

// const Attention = [
//   {
//     profile: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
//     name: "user1",
//     positive: 85,
//     negative: 20,
//   },
//   {
//     profile: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
//     name: "user2",
//     positive: 75,
//     negative: 19,
//   },
//   {
//     profile: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
//     name: "user3",
//     positive: 43,
//     negative: 80,
//   },
//   {
//     profile: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
//     name: "user4",
//     positive: 95,
//     negative: 5,
//   },
// ];
