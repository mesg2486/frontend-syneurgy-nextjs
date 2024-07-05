// @ts-nocheck
import React, { useMemo } from "react";
import Vchart from "./Vchart"; // Assume you have a Vchart component in React
import { LineChart } from "./linechart";
import { momentsData, momentsSyncStore } from "./data";
// import { useMomentStore, useMomentSyncStore } from "@/stores"; // Replace with your actual store implementation

export default function MomentsChart({
  width__graph,
  height__graph,
  isAbsolute,
}: any) {
  //   const momentStore = useMomentStore();
  //   const momentSyncStore = useMomentSyncStore();
  const momentStore = { data: momentsData };
  const momentSyncStore = { data: momentsSyncStore };
  const data = useMemo(() => momentStore.data, [momentStore.data]);
  const data1 = useMemo(() => momentSyncStore.data, [momentSyncStore.data]);

  const heightValue = useMemo(() => {
    return `${height__graph}px`;
  }, [height__graph]);

  return (
    <div className={isAbsolute ? "" : "relative"}>
      <div
        className={`w-full absolute inset-0 bg-black/70`}
        style={{ height: heightValue }}
      >
        <Vchart
          opt={LineChart(data, data1, "rppg", false, {})}
          key={`${width__graph}-${JSON.stringify(data)}-${JSON.stringify(data1)}`}
          width={width__graph ? width__graph - 40 : 100}
          height={height__graph ? height__graph - 50 : 100}
          type="line"
          className="ml-[60px]"
        />
        {/* <p className="text-[10px] text-white absolute left-6 top-14">Making decisions</p>
      <p className="text-[10px] text-white absolute left-6 top-[132px]">Listening to an idea</p>
      <p className="text-[10px] text-white absolute left-6 top-[298px]">Creative sessions</p>
      <p className="text-[10px] text-white absolute left-6 top-[340px]">Disagreement</p>
      <p className="text-[10px] text-white absolute left-6 top-[380px]">Miscommunication</p> */}
        <p className="text-[10px] text-white absolute left-6 top-14">Zone 5</p>
        <p className="text-[10px] text-white absolute left-6 top-[132px]">
          Zone 4
        </p>
        <p className="text-[10px] text-white absolute left-6 top-[298px]">
          Zone 3
        </p>
        <p className="text-[10px] text-white absolute left-6 top-[340px]">
          Zone 2
        </p>
        <p className="text-[10px] text-white absolute left-6 top-[380px]">
          Zone 1
        </p>
        {width__graph && width__graph > 0 && (
          <img
            src="/logo-icon.png"
            className="absolute left-[14px] top-[200px] h-10 block"
          />
        )}
      </div>
    </div>
  );
}
