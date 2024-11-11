import { cn } from "@/lib/utils";
import React from "react";
import { FaFaceSmile } from "react-icons/fa6";

interface ICircleProgressProps {
  className?: string;
  color?: string;
  children?: React.ReactNode;
  progress?: number | undefined;
  fill?: "number" | "icon";
}

export default function CircleProgressWithIcon({
  className,
  color = "text-primary",
  children,
  fill = "icon",
  progress = 80,
}: ICircleProgressProps) {
  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className={cn("relative size-12", className)}>
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
          stroke-width="3"
        ></circle>
        <g className="origin-center transform -rotate-90">
          <circle
            cx="18"
            cy="18"
            r={radius}
            fill="none"
            className={cn("stroke-current", color)}
            stroke-width="3"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          ></circle>
        </g>
      </svg>
      <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 start-1/2">
        {fill === "icon" ? (
          children || (
            <span className="text-xl text-center">
              <FaFaceSmile />
            </span>
          )
        ) : (
          <span className="text-sm text-center">{progress?.toFixed(0)}</span>
        )}
      </div>
    </div>
  );
}
