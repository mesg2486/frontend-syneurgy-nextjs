import React from "react";

export default function Dashmain() {
  return (
    <div className="space-y-4 bg-secondary c-container">
      <div className="flex items-center justify-between pt-4">
        <div className="flex items-center gap-2">
          <div className="w-40 h-6 bg-white/20 animate-pulse"></div>
        </div>
        <div className="w-40 h-6 bg-tertiary animate-pulse"></div>
      </div>
      <div className="h-96 rounded-xl bg-tertiary animate-pulse"></div>
    </div>
  );
}
