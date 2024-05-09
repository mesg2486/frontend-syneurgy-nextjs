import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="bg-secondary font-body text-white">
      <div className="grid grid-cols-1 c-container py-20 gap-8 md:grid-cols-2">
        <div className="space-y-6 py-12 md:py-0 flex justify-center flex-col">
          <h1 className="text-5xl md:text-[65px] font-semibold leading-tight tracking-tight">
            Teams In Sync Perform Better
          </h1>
          <p className="text-xl md:text-3xl font-medium">
            “Get and Stay In Sync ” – Ray Dalio
          </p>
          <p className="font-medium">
            Discover the Neuroscience of Collaboration and{" "}
            <span className="text-primary">AI</span> for interpersonal{" "}
            <span className="text-primary">synchrony and team performance</span>
            . Successful teams require alignment and engagement across a range
            of factors.
          </p>
          <p>The Neuroscience of Teamwork powered by Syneurgy.</p>
          <div className="flex">
            <button className="h-12 px-6 text-sm rounded-full font-semibold bg-white text-[#1B212F]">
              Get in Sync!
            </button>
          </div>
        </div>
        <div>
          <Image
            height={800}
            width={800}
            src="/syneurgy.png"
            className=""
            alt="syneurgy"
          />
        </div>
      </div>
    </section>
  );
}
