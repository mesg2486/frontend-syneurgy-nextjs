import { AxiosProgressEvent } from "axios";
import React, { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { useAxiosUploadProgress } from "@/contexts/event.context";
import { ChevronUpIcon } from "@radix-ui/react-icons";

export default function UploadProgress() {
  const [expanded, setExpanded] = useState(true);
  const { state } = useAxiosUploadProgress();

  if (!state.uploads.length) return null;

  return (
    <div className="fixed shadow-xl z-30 bottom-6 text-secondary-foreground right-8 w-72 bg-black/20 backdrop-blur-md border border-white/20 space-y-3 divide-white/20 p-4 rounded-xl text-xs">
      <div className="flex justify-between">
        <h3 className="font-semibold">Uploads({state.uploads.length})</h3>
        <button onClick={() => setExpanded((v) => !v)}>
          <ChevronUpIcon className={!expanded ? "" : "rotate-180"} />
        </button>
      </div>
      {state.uploads.map((upload) => (
        <UploadProgressTab
          key={upload.id}
          expanded={expanded}
          filename={upload.filename}
          event={upload.event}
        />
      ))}
    </div>
  );
}

function UploadProgressTab({
  event,
  filename,
  expanded,
}: {
  filename: string;
  event: AxiosProgressEvent;
  expanded?: boolean;
}) {
  let progress;

  progress = {
    size: Number((Number(event?.total) / (1024 * 1024)).toFixed(2)),
    progress: Math.round(Number(event?.progress) * 100),
    estimated: Number(
      Number(
        (Number(event?.total) - Number(event?.loaded)) / Number(event?.rate),
      ).toFixed(2),
    ),
    rate: Number((Number(event?.rate) / (1024 * 1024)).toFixed(2)),
  };

  if (!event) {
    progress = {
      size: 0,
      progress: 0,
      estimated: 0,
      rate: 0,
    };
  }

  return (
    <div className="space-y-2 transition-all">
      {expanded && (
        <div className="flex transition-all justify-between items-center">
          <p>
            {filename.length > 20 ? filename.slice(0, 20) + "..." : filename}
          </p>
          {event.progress === 100 ? (
            <p>Uploaded</p>
          ) : (
            <p>{progress.estimated} s</p>
          )}
        </div>
      )}
      <Progress value={progress.progress} className="w-full h-2 bg-white/20" />
      {expanded && (
        <div className="flex transition-all opacity-60 justify-between items-center">
          <p>{progress.size} MB</p>
          <p>{progress.rate} Mbps</p>
        </div>
      )}
    </div>
  );
}
