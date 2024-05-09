"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { IconType } from "react-icons";
import { FaUpload } from "react-icons/fa";

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
        <ProcessCard data={progress[0]} bg="bg-[#d6fec5]" y={y} />
        <ProcessCard data={progress[1]} bg="bg-[#d7d0fe]" y={y2} />
        <ProcessCard data={progress[2]} bg="bg-[#fefec6]" y={y3} />
      </div>
    </section>
  );
}

function ProcessCard({
  bg,
  y,
  data,
}: {
  bg: string;
  y: MotionValue;
  data: IProgress;
}) {
  return (
    <motion.div style={{ y }} className={"p-8 space-y-6 rounded-2xl " + bg}>
      <div className="flex justify-center items-center">
        <div className="bg-white rounded-full h-20 w-20 flex justify-center items-center">
          {data.icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-center">{data.title}</h3>
      <p className="text-center">Upload your team meeting recording.</p>
      {data.description.map((i) => (
        <p className="text-center" key={i}>
          {i}
        </p>
      ))}
    </motion.div>
  );
}

interface IProgress {
  title: string;
  description: string[];
  icon: any;
}

const progress: IProgress[] = [
  {
    title: "Upload your meeting",
    description: [
      "Upload your team meeting recording.",
      "Invite-only access ensures only authorized and permissioned team members can see the analysis.",
      "Privacy defaults and data anonymiztion keep your information secure.",
      "Users maintain full control of who sees what information on the platform.",
    ],
    icon: <FaUpload className="text-2xl" />,
  },
  {
    title: "Syneurgy AI Analysis",
    description: [
      "Our platform analyzes elements of neurobiological, physiological, and behavioral synchrony.",
      "Brains + Bodies + Behaviors - are the foundational components of connection, communication, and teamwork.",
      "Understand these elements at the foundational level of our biology.",
    ],
    icon: <FaUpload className="text-2xl" />,
  },
  {
    title: "The Right Next Step",
    description: [
      "Receive personalized, individual and team behaviors to incorporate into your daily practice that help to grow ability in an incremental and natural way.",
      "Receive meaningful data on how team behaviors improve performance.",
      "Build habits that support the key drivers of your specific team's performance.",
    ],
    icon: <FaUpload className="text-2xl" />,
  },
];
