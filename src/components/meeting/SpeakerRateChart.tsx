"use client";
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { RiSpeakLine } from "react-icons/ri";

type SpeakerRateChartProps = {
  userScore: number;
  teamAvg: number;
};

export default function SpeakerRateChart({
  userScore,
  teamAvg,
}: SpeakerRateChartProps) {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Clear existing content if any

    const containerWidth = svgRef.current?.clientWidth || 200;
    const height = 4;
    const lineHeight = 6;
    const barWidth = containerWidth;

    // Scale to map values to the chart width
    const xScale = d3.scaleLinear().domain([80, 230]).range([0, barWidth]);

    const zones = [
      { start: 80, end: 130, color: "gray", rounded: "left" },
      { start: 130, end: 180, color: "rgb(106, 227, 56)" },
      { start: 180, end: 230, color: "gray", rounded: "right" },
    ];

    // Draw the colored zones
    zones.forEach(({ start, end, color, rounded }) => {
      svg
        .append("rect")
        .attr("x", xScale(start))
        .attr("y", 0)
        .attr("width", xScale(end) - xScale(start))
        .attr("height", height)
        .attr("fill", color);
    });

    const lines = [
      { value: 80, color: "gray" },
      { value: 230, color: "gray" },
      { value: teamAvg, color: "orange" },
      { value: userScore, color: "white" },
    ];

    console.log({ lines });

    // Draw the lines
    lines.forEach(({ value, color }) => {
      svg
        .append("line")
        .attr("x1", xScale(value))
        .attr("x2", xScale(value))
        .attr("y1", -lineHeight / 2)
        .attr("y2", height + lineHeight / 2)
        .attr("stroke", color)
        .attr("stroke-width", 2);
    });
  }, [userScore, teamAvg]);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-4">
        <RiSpeakLine />
        <div>
          <svg
            ref={svgRef}
            width="100%"
            height={4}
            className="overflow-visible w4full"
          />
        </div>
        <span className="text-xs text-nowrap">{userScore?.toFixed(0)} WPM</span>
      </div>
    </div>
  );
}
