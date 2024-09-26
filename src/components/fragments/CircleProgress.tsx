import { cn } from "@/lib/utils";
import React from "react";

interface ICircleProgressProps {
  className?: string;
  progress: number;
}

export default function CircleProgress({
  className,
  progress,
}: ICircleProgressProps) {
  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className={cn("relative size-14", className)}>
      <svg
        className="size-full"
        width="36"
        height="36"
        viewBox="0 0 36 36"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="18"
          cy="18"
          r={radius}
          fill="none"
          className="stroke-current text-white/20"
          strokeWidth="5"
        ></circle>
        <g className="origin-center transform -rotate-90">
          <circle
            cx="18"
            cy="18"
            r={radius}
            fill="none"
            className="stroke-current text-primary"
            strokeWidth="5"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          ></circle>
        </g>
      </svg>
    </div>
  );
}
