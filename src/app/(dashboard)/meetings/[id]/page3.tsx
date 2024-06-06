"use client";
import React, { useRef, useState, useEffect, ReactNode } from "react";
// import { getEmitter } from '@/helpers/mitt';
// import { useVideoStore } from '@/stores/video.store'; // Placeholder for the video store
// import ResizeObserver from 'resize-observer-polyfill';

interface VideoPlayerProps {
  src: string;
  controls?: boolean;
  loop?: boolean;
  width?: number;
  height?: number;
  autoplay?: boolean;
  muted?: boolean;
  poster?: string;
  preload?: string;
  isModal?: boolean;
  starts?: number;
  ends?: number;
  onVideoSize?: (width: number, height: number) => void;
  children?: ReactNode;
}

const useVideoStore = () => ({
  setDuration: (duration: number) =>
    console.log("Video duration set to:", duration),
});

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  controls = false,
  loop = false,
  width = 500,
  height = 500,
  autoplay = false,
  muted = false,
  poster,
  preload = "auto",
  isModal = false,
  starts = 0,
  ends = 0,
  onVideoSize,
  children,
}) => {
  const videoElement = useRef<HTMLVideoElement>(null);
  const videoStore = useVideoStore();
  const EVENTS = [
    "play",
    "pause",
    "ended",
    "loadeddata",
    "waiting",
    "playing",
    "timeupdate",
    "canplay",
    "canplaythrough",
    "statechanged",
    "highlightTimeClicked",
  ];

  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [percentagePlayed, setPercentagePlayed] = useState(0);
  const [videoMuted, setVideoMuted] = useState(muted);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const video = videoElement.current;
    if (video) {
      setIsLoading(true);

      video.addEventListener("loadedmetadata", () => {
        const clientWidth = video.clientWidth;
        const clientHeight = video.clientHeight;

        setIsLoading(false);
        if (ends !== 0) {
          video.currentTime = starts;
          video.play();
        }

        if (onVideoSize) onVideoSize(clientWidth, clientHeight);
      });

      video.addEventListener("timeupdate", () => {
        if (ends !== 0) {
          if (video.currentTime > ends || video.currentTime < starts) {
            video.pause();
          }
        }
      });

      video.addEventListener("error", () => {
        const error = video.error;
        switch (error?.code) {
          case MediaError.MEDIA_ERR_ABORTED:
            console.log("The video loading was aborted by the user.");
            break;
          case MediaError.MEDIA_ERR_NETWORK:
            console.log("A network error occurred while loading the video.");
            break;
          case MediaError.MEDIA_ERR_DECODE:
            console.log("The video could not be decoded.");
            break;
          case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
            console.log("The video source is not supported.");
            break;
          default:
            console.log("An unknown error occurred while loading the video.");
        }
        setTimeout(() => {
          if (src) {
            video.src = src;
            video.load();
          }
        }, 3000);
      });

      EVENTS.forEach((event) => bindVideoEvent(event, video));

      // Resize observer to handle video size changes
      const resizeObserver = new ResizeObserver((entries) => {
        const { width, height } = entries[0].contentRect;
        if (onVideoSize) onVideoSize(width, height);
      });
      resizeObserver.observe(
        document.getElementById("video_player") as HTMLElement
      );

      const handleTimeUpdate = (event: Event) => {
        const now = Math.floor(video.currentTime || 0);
        // getEmitter().emit("video_time_update", now);
      };

      video.ontimeupdate = handleTimeUpdate;

      return () => {
        video.ontimeupdate = null;
        resizeObserver.disconnect();
      };
    }
  }, [src, starts, ends, onVideoSize]);

  useEffect(() => {
    const handleChartTimeUpdate = async (i: number) => {
      if (videoElement.current) {
        if (videoElement.current.paused) {
          videoElement.current.currentTime = i;
        } else {
          await videoElement.current.pause();
          videoElement.current.currentTime = i;
          videoElement.current.play();
        }
      }
    };

    const handlePause = async (isPaused: boolean) => {
      if (videoElement.current) {
        if (isPaused) {
          videoElement.current.pause();
        } else {
          videoElement.current.play();
        }
      }
    };

    const handleHighlightTimeClicked = (value: number) => {
      if (videoElement.current) {
        videoElement.current.currentTime = value / 1000;
      }
    };

    // getEmitter().on("chart_time_update", handleChartTimeUpdate);
    // getEmitter().on("pause", handlePause);
    // getEmitter().on("highlight_time_clicked", handleHighlightTimeClicked);

    // return () => {
    //   getEmitter().off("chart_time_update", handleChartTimeUpdate);
    //   getEmitter().off("pause", handlePause);
    //   getEmitter().off("highlight_time_clicked", handleHighlightTimeClicked);
    // };
  }, []);

  const bindVideoEvent = (event: string, player: HTMLVideoElement) => {
    player.addEventListener(
      event,
      (e: Event) => {
        if (event === "loadeddata") {
          setDuration(player.duration);
          videoStore.setDuration(player.duration);
        }
        if (event === "timeupdate") {
          setPercentagePlayed((player.currentTime / player.duration) * 100);
        }
        if (["play", "pause", "ended"].includes(event)) {
          // Emit the event here
        } else {
          // Emit the event here
        }
      },
      true
    );
  };

  const play = () => {
    videoElement.current?.play();
    setPlaying(true);
  };

  const pause = () => {
    videoElement.current?.pause();
    setPlaying(false);
  };

  const togglePlay = () => {
    if (playing) {
      pause();
    } else {
      play();
    }
  };

  const seekToPercentage = (percentage: number) => {
    if (videoElement.current) {
      const timeToGo = (percentage / 100) * duration;
      if (ends && ends !== 0) {
        if (timeToGo <= ends) {
          videoElement.current.currentTime = timeToGo;
        }
      } else {
        videoElement.current.currentTime = timeToGo;
      }
    }
  };

  const convertTimeToDuration = (seconds: number) => {
    return [Math.floor(Math.floor(seconds) / 60) % 60, Math.floor(seconds) % 60]
      .join(":")
      .replace(/\b(\d)\b/g, "0$1");
  };

  const mute = () => {
    if (videoElement.current) {
      videoElement.current.muted = true;
      setVideoMuted(true);
    }
  };

  const unmute = () => {
    if (videoElement.current) {
      videoElement.current.muted = false;
      setVideoMuted(false);
    }
  };

  const toggleMute = () => {
    if (videoMuted) {
      unmute();
    } else {
      mute();
    }
  };

  return (
    <div style={{ backgroundColor: "black" }}>
      {isLoading && (
        <div
          className="loading_color"
          style={{ background: "rgba(0, 0, 0, 0.6)" }}
        >
          Loading...
        </div>
      )}
      <video
        id="video_player"
        ref={videoElement}
        src={src}
        muted={muted}
        autoPlay={autoplay}
        controls={controls}
        loop={loop}
        width={width}
        height={height}
        poster={poster}
        preload={preload}
        playsInline
        className={`w-full ${isModal ? "h-[300px]" : "h-[500px]"}`}
      />
      {/* Custom controls slot */}
      <div className="video-controls">
        {React.Children.map(children, (child) => {
          return React.cloneElement(child as React.ReactElement, {
            play,
            pause,
            togglePlay,
            playing,
            percentagePlayed,
            seekToPercentage,
            duration,
            convertTimeToDuration,
            videoMuted,
            toggleMute,
          });
        })}
      </div>
    </div>
  );
};

export default function page() {
  return (
    <div>
      <VideoPlayer
        src="https://sync5.s3.us-west-1.amazonaws.com/test/video/gitlab_video_4.mp4"
        controls
      />
    </div>
  );
}
