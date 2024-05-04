"use client";
import { IFeature, features } from "@/config/features.config";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Features() {
  return (
    <section className="bg-background pb-32">
      <div className="c-container pt-28 md:pt-60 pb-20 md:pb-40">
        <h2 className="text-4xl md:text-6xl font-semibold max-w-[800px] mx-auto text-center">
          Synchrony for peak performance and engagement – in person, hybrid or
          remote teams.
        </h2>
      </div>
      <div className="c-container space-y-24">
        <FeatureCard data={features[0]} />
        <FeatureCard rev data={features[0]} />
        <FeatureCard data={features[2]} />
        <FeatureCard rev data={features[3]} />
      </div>
    </section>
  );
}

function FeatureCard({ data, rev }: { rev?: boolean; data: IFeature }) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.4], [200, 0]);

  return (
    <div
      ref={container}
      className={`bg-white overflow-hidden gap-6 md:gap-8 rounded-3xl md:py-6 py-4 px-4 md:px-8 flex flex-col ${rev ? "md:flex-row-reverse" : "md:flex-row"}`}
    >
      <div className="flex-1 space-y-4 py-6 md:py-20">
        <h2 className="text-2xl md:text-3xl font-semibold">{data.title}</h2>
        <h3 className="text-xl md:text-2xl font-medium">{data.subtitle}</h3>
        <p className="text-sm sm:text-base md:text-lg">{data.description}</p>
      </div>
      <div className="flex-1">
        <motion.div style={{ y }}>
          <Image
            src="/card.png"
            height={500}
            width={500}
            className="w-full md:h-[480px] object-cover"
            alt=""
          />
        </motion.div>
      </div>
    </div>
  );
}
