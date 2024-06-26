import React from "react";
import { LuArrowRightToLine } from "react-icons/lu";

export default function page() {
  return (
    <div className="py-20 c-container">
      <section className="relative bg-gray-200 py-16 px-10">
        <div className="hidden md:block w-80 absolute right-0 top-0 h-full bg-gray-400 z-0" />
        <div className="relative grid grid-cols-1 gap-y-8 md:gap-y-0 md:grid-cols-2 md:gap-x-6 z-10">
          <div className="py-10">
            <div className="flex flex-row gap-x-10">
              <h4 className=" font-semibold">Product</h4>
              <p className="opacity-60 font-medium">june 20,2024</p>
            </div>
            <div className="flex flex-col py-10">
              <h2 className="text-3xl font-semibold mb-4">
                Product Updates: Q2 2023
              </h2>
              <p className="opacity-80 ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
                minima dicta quasi autem. Omnis eligendi beatae ab voluptates
                odit ipsa!
              </p>
              <div className="flex flex-row gap-x-4 pt-10">
                <div>
                  <img
                    className="w-12 h-16 object-cover rounded-md"
                    src="https://images.unsplash.com/photo-1604004215402-e0be233f39be"
                  />
                </div>
                <div className="w-full flex flex-col gap-y-1">
                  <h2 className="font-semibold ">Kupt Ruppel</h2>
                  <div className="flex flex-row justify-between">
                    <p className="opacity-80 font-medium">CO-founder and cto</p>
                    <a className="underline cursor-pointer">Read more &rarr;</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:pl-10">
            <div className="h-full w-full bg-[#BFD4D6] rounded-sm flex flex-col justify-between py-10 px-5">
              <h2 className="text-2xl font-semibold pb-10 md:pb-10">
                Quarterly Recap
              </h2>
              <div className="flex flex-col text-6xl">
                <h2 className="font-medium">Q2</h2>
                <div className="flex flex-row justify-between items-center">
                  <h2 className="font-light">2023</h2>
                  <LuArrowRightToLine className="opacity-80 font-extralight text" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center py-16 divide-y-2 divide-slate-400/25 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-x-6 py-10">
          <div className="md:pr-10 py-10 items-center">
            <img
              className="object-cover rounded-md"
              src="https://plus.unsplash.com/premium_photo-1661382011487-cd3d6b1d9dff"
            />
          </div>
          <div className="flex flex-col space-y-6">
            <h4 className="font-semibold text-xl">Guide</h4>
            <div>
              <h2 className="text-2xl font-semibold leading-6 mb-4">
                How to run an effectice kyb vendor
              </h2>
              <p className="opacity-80 leading-6 text-balance mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                placeat quae in vel eligendi eveniet amet commodi. Nesciunt
                similique excepturi illum enim veniam voluptate voluptatibus
                voluptates maiores, odit consequuntur debitis non minima
                repellendus rem inventore corporis incidunt. Illum, consequatur
                modi?
              </p>
              <a className="text-md font-semibold border-b border-border cursor-pointer">
                Read Article
              </a>
            </div>
            <div className="flex flex-row gap-x-6 h-max items-center">
              <div className="">
                <img
                  className="object-cover rounded-md h-16 w-10"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
                />
              </div>
              <h3 className="text-md font-semibold opacity-80">Lara Croft</h3>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-x-6 py-10">
          <div className="md:pr-10 py-10 items-center">
            <img
              className="object-cover rounded-md"
              src="https://plus.unsplash.com/premium_photo-1661382011487-cd3d6b1d9dff"
            />
          </div>
          <div className="flex flex-col space-y-6">
            <h4 className="font-semibold text-xl">Guide</h4>
            <div>
              <h2 className="text-2xl font-semibold leading-6 mb-4">
                How to run an effectice kyb vendor
              </h2>
              <p className="opacity-80 leading-6 text-balance mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                placeat quae in vel eligendi eveniet amet commodi. Nesciunt
                similique excepturi illum enim veniam voluptate voluptatibus
                voluptates maiores, odit consequuntur debitis non minima
                repellendus rem inventore corporis incidunt. Illum, consequatur
                modi?
              </p>
              <a className="text-md font-semibold border-b border-border cursor-pointer">
                Read Article
              </a>
            </div>
            <div className="flex flex-row gap-x-6 h-max items-center">
              <div className="">
                <img
                  className="object-cover rounded-md h-16 w-10"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
                />
              </div>
              <h3 className="text-md font-semibold opacity-80">Lara Croft</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 pt-20">
        <div className="bg-[#283C3D] w-full py-12 flex flex-col justify-center space-y-6">
          <div className="w-full flex flex-col justify-center items-center text-background">
            <h2 className="text-4xl font-semibold pb-2">Stay looped</h2>
            <p className="test-sm font-semibold opacity-60 ">
              Subscribe and be the first to hear about new events.
            </p>
          </div>
          <div className="mx-auto h-max items-center">
            <input
              className="text-[#464646] py-2 px-4"
              type="text"
              placeholder="Enter your mail..."
            />
            <button className="py-2 bg-primary px-4">Stay in the loop</button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-4xl font-semibold">All Articles</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10 pt-16">
            {Articles.map((articles, index) => (
              <div
                key={index}
                className="w-full bg-sky-600 p-2 divide-y-2 divide-slate-400/25 "
              >
                <div className="flex flex-col pb-4">
                  <div className="pb-4 bg-no-repeat">
                    <img
                      className="object-cover rounded-md"
                      src={articles.thumbnail}
                    />
                  </div>
                  <div className="flex flex-row justify-between">
                    <h4 className="font-semibold opacity-80">
                      {articles.type}
                    </h4>
                    <p className="opacity-80 text-sm font-medium">
                      {articles.date}
                    </p>
                  </div>
                </div>

                <div className="w-full bg-red-500 h-max flex flex-col pt-4">
                  <h2 className="font-semibold pb-8">{articles.title}</h2>
                  <div className="w-full flex flex-row gap-x-4 items-center">
                    <div className="w-12 h-12">
                      <img
                        className="object-cover rounded-md w-full h-full"
                        src={articles.profile.profile}
                      />
                    </div>
                    <div className="w-full flex flex-col">
                      <h3 className="text-md opacity-80 font-semibold pb-1">
                        {articles.profile.name}
                      </h3>
                      <div className=" w-full flex flex-row justify-between items-center">
                        <p className="text-xs opacity-80 font-semibold ">
                          {articles.profile.designation}
                        </p>
                        <a className="border-b border-opacity-35 ">Read more</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const Articles = [
  {
    thumbnail: "https://images.unsplash.com/photo-1541462608143-67571c6738dd",
    type: "Guides",
    date: "OCT 6, 2016",
    title: "The Ultimate Guide to Business Verification for KYB Compliance",
    profile: {
      name: "Lara Croft",
      profile: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      designation: "Marketing",
    },
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1541462608143-67571c6738dd",
    type: "Tutorials",
    date: "JAN 10, 2020",
    title: "Step-by-Step Guide to Setting Up Your First Campaign",
    profile: {
      name: "John Doe",
      profile: "https://images.unsplash.com/photo-1502764613149-7f1d229e230f",
      designation: "Campaign Manager",
    },
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1541462608143-67571c6738dd",
    type: "Reviews",
    date: "MAR 22, 2019",
    title: "Comprehensive Review of the Latest Marketing Tools",
    profile: {
      name: "Jane Smith",
      profile: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df",
      designation: "Product Analyst",
    },
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1541462608143-67571c6738dd",
    type: "Opinions",
    date: "SEP 18, 2018",
    title: "The Impact of Social Media on Consumer Behavior",
    profile: {
      name: "Emily Clark",
      profile: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      designation: "Social Media Expert",
    },
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1541462608143-67571c6738dd",
    type: "News",
    date: "JUN 30, 2021",
    title: "Breaking News: Major Changes in Marketing Regulations",
    profile: {
      name: "Michael Brown",
      profile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
      designation: "Industry Analyst",
    },
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1541462608143-67571c6738dd",
    type: "Insights",
    date: "APR 14, 2017",
    title: "Step-by-Step Guide to Setting Up Your ",
    profile: {
      name: "Sarah Johnson",
      profile: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce",
      designation: "Futurist",
    },
  },
];
