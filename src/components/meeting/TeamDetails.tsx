import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Progress } from "../ui/progress";
import { RiSpeakLine } from "react-icons/ri";
import { FaInfo } from "react-icons/fa6";
import { FaHandPaper } from "react-icons/fa";

export default function TeamDetails() {
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
            <div className="flex flex-col space-y-6">
              <div className="flex flex-col space-y-2">
                <div className="flex justify-between">
                  <div className="flex flex-row gap-x-2">
                    <div className="flex -space-x-2">
                      {participation.map((users, index) => (
                        <img
                          key={index}
                          className="inline-block w-5 h-5 rounded-full ring-2 ring-slate-100 object-cover"
                          src={users.profile}
                        />
                      ))}
                    </div>
                    <p className="opacity-80 font-light text-sm">Team</p>
                  </div>
                  <div>
                    <p className="font-semibold opacity-80 text-sm">100%</p>
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
                            className="inline-block w-5 h-5 rounded-full ring-2 ring-slate-100 object-center"
                            src={participation.profile}
                          />
                        </div>
                        <p className="opacity-80 font-light text-sm">
                          {participation.name}
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold opacity-80 text-sm">
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
          </TabsContent>
          <TabsContent value="Emotion" className="py-5">
            <div className="flex flex-col space-y-6">
              <div className="flex flex-row space-x-3">
                <div className="p-1 bg-tertiary rounded-xl">
                  <FaHandPaper className="h-full w-full" />
                </div>
                <div className="w-full flex flex-col space-y-2">
                  <div className="flex flex-row gap-x-3">
                    <div className="flex -space-x-2">
                      {Emotion.map((users, index) => (
                        <img
                          key={index}
                          className="inline-block w-5 h-5 rounded-full ring-2 ring-slate-100 object-cover"
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
                      className="bg-tertiary h-1 rotate-180"
                    />
                    <Progress value={10} className="bg-tertiary h-1" />+
                  </div>
                </div>
              </div>
              <div className="py-4 flex flex-col space-y-4">
                {Emotion.map((user, index) => (
                  <div key={index} className="flex flex-row space-x-3">
                    <div className="p-1 bg-tertiary rounded-xl">
                      <FaHandPaper className="h-full w-full" />
                    </div>
                    <div className="w-full flex flex-col space-y-2">
                      <div className="flex flex-row gap-x-3">
                        <div className="flex -space-x-2">
                          <img
                            key={index}
                            className="inline-block w-5 h-5 rounded-full ring-2 ring-slate-100 object-cover"
                            src={user.profile}
                          />
                        </div>
                        <p className="text-sm font-extralight opacity-80">
                          {user.name}
                        </p>
                      </div>
                      <div className="flex flex-row gap-x-1">
                        -
                        <Progress
                          value={user.negative}
                          className="bg-tertiary h-1 rotate-180 "
                        />
                        <Progress
                          value={user.positive}
                          className="bg-tertiary h-1"
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
            <div className="flex flex-col space-y-6">
              <div className="flex flex-row space-x-3">
                <div className="p-1 bg-tertiary rounded-xl">
                  <FaHandPaper className="h-full w-full" />
                </div>
                <div className="w-full flex flex-col space-y-2">
                  <div className="flex flex-row gap-x-3">
                    <div className="flex -space-x-2">
                      {Attention.map((users, index) => (
                        <img
                          key={index}
                          className="inline-block w-5 h-5 rounded-full ring-2 ring-slate-100 object-cover"
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
                      className="bg-tertiary h-1 rotate-180"
                    />
                    <Progress value={75} className="bg-tertiary h-1" />+
                  </div>
                </div>
              </div>
              <div className="py-4 flex flex-col space-y-4">
                {Attention.map((user, index) => (
                  <div key={index} className="flex flex-row space-x-3">
                    <div className="p-1 bg-tertiary rounded-xl">
                      <FaHandPaper className="h-full w-full" />
                    </div>
                    <div className="w-full flex flex-col space-y-2">
                      <div className="flex flex-row gap-x-3">
                        <div className="flex -space-x-2">
                          <img
                            key={index}
                            className="inline-block w-5 h-5 rounded-full ring-2 ring-slate-100 object-cover"
                            src={user.profile}
                          />
                        </div>
                        <p className="text-sm font-extralight opacity-80">
                          {user.name}
                        </p>
                      </div>
                      <div className="flex flex-row gap-x-1">
                        -
                        <Progress
                          value={user.negative}
                          className="bg-tertiary h-1 rotate-180 "
                        />
                        <Progress
                          value={user.positive}
                          className="bg-tertiary h-1"
                        />
                        +
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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

const Emotion = [
  {
    profile: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    name: "user1",
    positive: 35,
    negative: 80,
  },
  {
    profile: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    name: "user2",
    positive: 35,
    negative: 80,
  },
  {
    profile: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    name: "user3",
    positive: 35,
    negative: 80,
  },
  {
    profile: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    name: "user4",
    positive: 35,
    negative: 80,
  },
];

const Attention = [
  {
    profile: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    name: "user1",
    positive: 85,
    negative: 20,
  },
  {
    profile: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    name: "user2",
    positive: 75,
    negative: 19,
  },
  {
    profile: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    name: "user3",
    positive: 43,
    negative: 80,
  },
  {
    profile: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    name: "user4",
    positive: 95,
    negative: 5,
  },
];
