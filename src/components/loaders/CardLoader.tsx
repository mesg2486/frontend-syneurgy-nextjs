import React from "react";

export default function CardLoader() {
  return (
    <div className="rounded-lg overflow-hidden bg-secondary">
      <div className="bg-background/60 animate-pulse h-40"></div>
      <div className="space-y-2 p-4">
        <div className="bg-background/60 animate-pulse w-1/4 rounded-full h-3"></div>
        <div className="bg-background/60 animate-pulse w-1/2 h-8"></div>
        <div className="bg-background/60 animate-pulse w-2/3 h-8"></div>
      </div>
      <div className="px-4 pb-4 flex justify-between">
        <div className="bg-background/60 animate-pulse w-8 rounded-full h-8"></div>
        <div className="space-y-1">
          <div className="bg-background/60 animate-pulse w-8 h-2"></div>
          <div className="bg-background/60 animate-pulse w-8 h-2"></div>
        </div>
      </div>
    </div>
  );
}
