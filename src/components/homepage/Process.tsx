"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function Process() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.3], [200, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.45], [200, 0]);
  const y3 = useTransform(scrollYProgress, [0.3, 0.55], [200, 0]);
  return (
    <section ref={container} className="">
      <div className="c-container md:py-28 py-0 md:pt-40">
        <h2 className="text-4xl md:text-6xl font-semibold max-w-[900px] mx-auto text-center">
          3 steps to improve your team’s Synchrony
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pb-20 c-container gap-12">
        <ProcessCard bg="bg-[#d6fec5]" y={y} />
        <ProcessCard bg="bg-[#d7d0fe]" y={y2} />
        <ProcessCard bg="bg-[#fefec6]" y={y3} />
      </div>
    </section>
  );
}

function ProcessCard({ bg, y }: { bg: string; y: MotionValue }) {
  return (
    <motion.div style={{ y }} className={"p-8 space-y-6 rounded-2xl " + bg}>
      <div className="flex justify-center items-center">
        <div className="bg-white rounded-full h-20 w-20"></div>
      </div>
      <h3 className="text-xl font-semibold text-center">Upload Your Meeting</h3>
      <p className="text-center">Upload your team meeting recording.</p>
      <p className="text-center">
        Invite-only access ensures only authorized and permissioned team members
        can see the analysis.
      </p>
      <p className="text-center">
        Privacy defaults and data anonymiztion keep your information secure.
      </p>
      <p className="text-center">
        Users maintain full control of who sees what information on the
        platform.
      </p>
    </motion.div>
  );
}
