"use client";

import React from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";

export default function TeamCardSkeleton() {
  return (
    <div className="bg-tertiary space-y-2 rounded-lg p-4">
      <div className="flex justify-between items-center">
        <div className="flex pl-2">
          {Array.from(Array(4).keys()).map((i) => (
            <div
              key={i}
              className="h-6 w-6 rounded-full backdrop-blur-lg bg-white/20 animate-pulse overflow-hidden shadow -ml-2"
            ></div>
          ))}
        </div>
        <div>
          <HiOutlineDotsVertical />
        </div>
      </div>
      <div className="space-y-2 pt-8">
        <p className="h-6 animate-pulse bg-white/20 w-3/5"></p>
        <p className="bg-white/20 animate-pulse h-4 w-2/3"></p>
      </div>
    </div>
  );
}
