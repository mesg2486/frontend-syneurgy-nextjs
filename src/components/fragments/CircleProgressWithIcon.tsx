import { cn } from "@/lib/utils";
import React from "react";
import { FaFaceSmile } from "react-icons/fa6";

interface ICircleProgressProps {
  className?: string;
  color?: string;
  children?: React.ReactNode;
}

export default function CircleProgressWithIcon({
  className,
  color = "text-primary",
  children,
}: ICircleProgressProps) {
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
        <g className="origin-center -rotate-90 transform">
          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            className={cn("stroke-current", color)}
            stroke-width="3"
            stroke-dasharray="100"
            stroke-dashoffset="75"
          ></circle>
        </g>
      </svg>
      <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
        {children || (
          <span className="text-center text-xl">
            <FaFaceSmile />
          </span>
        )}
      </div>
    </div>
  );
}
