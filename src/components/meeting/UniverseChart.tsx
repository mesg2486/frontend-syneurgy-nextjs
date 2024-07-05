// @ts-nocheck
import React, { useEffect, useRef, useState } from "react";
import _ from "lodash";
import PolarGraph from "./PolarGraph";

const UniverseControl = ({
  width__graph,
  height__graph,
  universe__category,
  meetingId,
  changed_category,
  currentTime,
}: any) => {
  const [widthChange, setWidthChange] = useState(0);
  const [animationStarted, setAnimationStarted] = useState(false);
  const [animationCurrentTime, setAnimationCurrentTime] = useState(0);
  const [resetAnimation, setResetAnimation] = useState(false);

  const debouncedUpdateWidth = _.debounce(
    () => setWidthChange(window.innerWidth),
    500
  );

  useEffect(() => {
    window.addEventListener("resize", debouncedUpdateWidth);
    setTimeout(() => setWidthChange(window.innerWidth), 10);
    return () => window.removeEventListener("resize", debouncedUpdateWidth);
  }, []);

  const handleClickCategory = (category) => {
    // store.setCategory(category);
  };

  const handleClickAnimationStart = () => {
    // store.emitPause(true);
    setAnimationStarted(!animationStarted);
  };

  const handleResetAnimation = () => {
    setResetAnimation(!resetAnimation);
    setAnimationStarted(false);
    setAnimationCurrentTime(0);
  };

  const formattedDuration = (duration) => {
    const hour = Math.floor(duration / 3600);
    const minute = Math.floor((duration % 3600) / 60);
    const second = duration % 60;
    return hour > 0
      ? `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}:${second.toString().padStart(2, "0")}`
      : `${minute.toString().padStart(2, "0")}:${second.toString().padStart(2, "0")}`;
  };

  //   const time = store.time;
  //   const distance = store.universeSync;
  //   const avgSync = store.avgSync;
  //   const wordCount = store.wordCount;
  //   const emoji = store.emoji;
  //   const groupEmoji = store.emojiArray;
  //   const groupSync = store.groupSync;
  //   const videoDuration = store.duration;
  const time = 2;
  const distance = 44;
  const avgSync = 4;
  const wordCount = 44;
  const emoji = "";
  const groupEmoji = "";
  const groupSync = 43;
  const videoDuration = 28;

  return (
    <div className="relative mt-5">
      <PolarGraph
        key={`${widthChange}-${JSON.stringify(time)}-${JSON.stringify(distance)}-${JSON.stringify(avgSync)}-${JSON.stringify(wordCount)}-${JSON.stringify(emoji)}-${JSON.stringify(videoDuration)}-${JSON.stringify(groupEmoji)}-${JSON.stringify(groupSync)}`}
        width={width__graph}
        height={height__graph}
        time={time}
        distance={distance}
        currentTime={currentTime}
        avgSync={avgSync}
        wordCount={wordCount}
        emoji={emoji}
        animationStarted={animationStarted}
        duration={videoDuration}
        resetAnimation={resetAnimation}
        groupEmoji={groupEmoji}
        groupSync={groupSync}
        onAnimationCurrentTime={(currentTime) => {
          setAnimationCurrentTime(currentTime);
          if (currentTime >= videoDuration) {
            setAnimationStarted(false);
          }
        }}
      />
      <div className="absolute flex left-4 top-5">
        <div
          className={`px-2 py-1 cursor-pointer text-xs font-medium border mr-2 rounded-[4px] ${universe__category === 0 ? "bg-gray-100 text-black-200 border-gray-700" : "bg-purple-100/10 text-green-50 border-green-50"}`}
          onClick={() => handleClickCategory(0)}
        >
          Emotion
        </div>
        <div
          className={`flex px-2 py-1 cursor-pointer text-xs font-medium border rounded-[4px] ${animationStarted ? "bg-gray-100 text-black-200 border-gray-700" : "bg-purple-100/10 text-green-50 border-green-50"}`}
          onClick={handleClickAnimationStart}
        >
          <svg
            className="w-5 h-5 mr-1 text-gray-500 cursor-pointer"
            style={{ color: animationStarted ? "#000000" : "#76fd3f" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
          >
            <path
              d="M241.5,121.3,152.3,63.9A8,8,0,0,0,140,70.7V185.3a8,8,0,0,0,12.3,6.8l89.2-57.4A7.9,7.9,0,0,0,241.5,121.3Z"
              fill={animationStarted ? "#000000" : "#76fd3f"}
              stroke={animationStarted ? "#000000" : "#76fd3f"}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="8"
            />
            <path
              d="M129.5,121.3,40.3,63.9A8,8,0,0,0,28,70.7V185.3a8,8,0,0,0,12.3,6.8l89.2-57.4A7.9,7.9,0,0,0,129.5,121.3Z"
              fill={animationStarted ? "#000000" : "#76fd3f"}
              stroke={animationStarted ? "#000000" : "#76fd3f"}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="8"
            />
          </svg>
          Fast Forward {formattedDuration(animationCurrentTime)} -{" "}
          {formattedDuration(videoDuration)}
        </div>
        <div className="flex items-center justify-center ml-1">
          {animationCurrentTime > 0 && (
            <svg
              className="w-5 h-5 text-gray-500 cursor-pointer"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              stroke="#76fd3f"
              viewBox="0 0 24 24"
              onClick={handleResetAnimation}
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default UniverseControl;
