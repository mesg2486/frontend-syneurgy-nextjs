import React from "react";

export default function Explore() {
  return (
    <section className="bg-secondary pt-40 text-white">
      <div className="c-container">
        <img src="/flow-2.jpg" alt="flow-2" />
        <div className="py-7 space-y-5">
          <h2 className="text-3xl md:text-4xl text-center font-bold">
            Explore the inner workings of team performance today
          </h2>
          <p className="text-white/60 text-xl md:text-2xl text-center font-semibold">
            Informed Insight + Right Action = Optimal Performance
          </p>
        </div>
        <img src="/flow-3.jpg" alt="" />
        <div className="flex py-4 justify-center items-center pb-28">
          <button className="h-12 px-6 text-sm rounded-full font-semibold bg-primary text-[#1B212F]">
            Get in Sync!
          </button>
        </div>
      </div>
    </section>
  );
}
