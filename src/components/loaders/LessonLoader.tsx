import React from "react";

export default function LessonLoader() {
  return (
    <div className="space-y-8 py-6 max-w-6xl">
      <div className="flex gap-2">
        <div className="h-5 bg-secondary animate-pulse w-36"></div>
        <div className="h-5 bg-secondary animate-pulse w-32"></div>
      </div>
      <div className="border-b pb-2 space-y-2">
        <div className="h-12 bg-secondary animate-pulse w-2/6"></div>
        <div className="h-5 bg-secondary animate-pulse w-2/4"></div>
      </div>
      <div className="space-y-2">
        <div className="h-8 bg-secondary animate-pulse w-2/6"></div>
      </div>
      <div className="space-y-2">
        <div className="h-5 bg-secondary animate-pulse w-2/4"></div>
        <div className="h-5 bg-secondary animate-pulse w-4/6"></div>
        <div className="h-5 bg-secondary animate-pulse w-2/3"></div>
      </div>
      <div className="space-y-2">
        <div className="h-8 bg-secondary animate-pulse w-2/6"></div>
      </div>
      <div className="space-y-2">
        <div className="h-5 bg-secondary animate-pulse w-2/4"></div>
        <div className="h-5 bg-secondary animate-pulse w-4/6"></div>
        <div className="h-5 bg-secondary animate-pulse w-2/3"></div>
      </div>
      <div className="space-y-2">
        <div className="h-8 bg-secondary animate-pulse w-2/6"></div>
      </div>
      <div className="space-y-2">
        <div className="h-5 bg-secondary animate-pulse w-2/4"></div>
        <div className="h-5 bg-secondary animate-pulse w-4/6"></div>
      </div>
      <div className="h-80 bg-secondary animate-pulse w-2/3"></div>
    </div>
  );
}
