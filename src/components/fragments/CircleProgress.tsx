import { cn } from "@/lib/utils";
import React from "react";

interface ICircleProgressProps {
  className?: string;
}

export default function CircleProgress({ className }: ICircleProgressProps) {
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
          r="16"
          fill="none"
          className="stroke-current text-white/20"
          stroke-width="5"
        ></circle>
        <g className="origin-center -rotate-90 transform">
          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            className="stroke-current text-primary"
            stroke-width="5"
            stroke-dasharray="100"
            stroke-dashoffset="75"
          ></circle>
        </g>
      </svg>
    </div>
  );
}
