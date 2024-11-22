"use client";

import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

interface DimensionsRadarProps {
  dimensions: {
    absorptionOrTaskEngagement?: number;
    enjoyment?: number;
    equalParticipation?: number;
    sharedGoalCommitment?: number;
    trustAndPsychologicalSafety?: number;
    safety?: number;
  };
}

export default function DimensionsRadar({ dimensions }: DimensionsRadarProps) {
  const d3Container = useRef(null);

  console.log({ dimensions });

  useEffect(() => {
    // Remove any existing SVG before re-rendering
    d3.select(d3Container.current).select("svg").remove();

    // Get container dimensions
    const container = d3Container.current as any;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const numberOfLevels = 5; // Number of concentric polygons
    const dimensionsData = [
      {
        axis: "Engagement",
        value: dimensions?.absorptionOrTaskEngagement || 0,
      },
      { axis: "Enjoyment", value: dimensions?.enjoyment || 0 },
      { axis: "Participation", value: dimensions?.equalParticipation || 0 },
      { axis: "Shared Goal", value: dimensions?.sharedGoalCommitment || 0 },
      { axis: "Trust", value: dimensions?.trustAndPsychologicalSafety || 0 },
      { axis: "Safety", value: dimensions?.safety || 0 },
    ];

    const svg = d3
      .select(d3Container.current)
      .append("svg")
      .attr("width", "100%")
      .attr("height", "100%")
      .attr("viewBox", `0 0 ${width} ${height}`)
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    const angleSlice = (Math.PI * 2) / dimensionsData.length;

    // Define color shades for each level
    const colorShades = [
      "#687AA6", // 1st (Outermost)
      "#21475B", // 2nd
      "#1A394B", // 3rd (darker than 2nd)
      "#142C3C", // 4th (deeper, more pronounced blue)
      "#0F333F", // 5th (Innermost, darkest)
    ];

    // Draw radar grid levels with specific shades
    for (let level = numberOfLevels; level >= 1; level--) {
      const radius = (level / numberOfLevels) * (Math.min(width, height) / 2.5);
      svg
        .append("polygon")
        .attr(
          "points",
          dimensionsData
            .map((_, i) => {
              const angle = angleSlice * i;
              const x = radius * Math.cos(angle - Math.PI / 2);
              const y = radius * Math.sin(angle - Math.PI / 2);
              return `${x},${y}`;
            })
            .join(" "),
        )
        .attr("stroke", "#8a94a6")
        .attr("stroke-width", "1px")
        .attr("fill", colorShades[numberOfLevels - level]) // Use the defined shades
        .attr("opacity", 0.7);
    }

    // Draw radar chart area with updated color
    const radarLine = d3
      .lineRadial()
      .angle((_, i) => i * angleSlice)
      .radius((d: any) => d.value * (Math.min(width, height) / 2.5))
      .curve(d3.curveLinearClosed);

    svg
      .append("path")
      .datum(dimensionsData)
      .attr("d", radarLine as any)
      .attr("fill", "#76FD3F") // Updated fill color
      .attr("fill-opacity", 0.6)
      .attr("stroke", "#76FD3F") // Updated stroke color
      .attr("stroke-width", 2);

    // Draw data points as circles with updated color
    dimensionsData.forEach((d, i) => {
      const radius = d.value * (Math.min(width, height) / 2.5);
      const angle = angleSlice * i - Math.PI / 2;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);

      svg
        .append("circle")
        .attr("cx", x)
        .attr("cy", y)
        .attr("r", 4)
        .attr("fill", "#76FD3F"); // Updated circle color
    });

    // Draw axis labels with smaller font size
    dimensionsData.forEach((d, i) => {
      const radius = Math.min(width, height) / 2.5 + 20; // Move the labels outside of the radar
      const angle = angleSlice * i - Math.PI / 2;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);

      svg
        .append("text")
        .attr("x", x)
        .attr("y", y)
        .attr("dy", "0.35em")
        .style("text-anchor", "middle")
        .style("fill", "#FFFFFF")
        .style("font-size", "10px") // Reduced font size for smaller labels
        .text(d.axis);
    });
  }, [dimensions]);

  return (
    <div ref={d3Container} style={{ width: "100%", height: "100%" }}></div>
  );
}
