// @ts-nocheck
"use client";

import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

export default function SynchronyGraph({ data }: { data: any }) {
  const graphRef = useRef();

  console.log("Original data:", data);

  useEffect(() => {
    if (!data || data.length === 0) {
      console.warn("Data is not ready or invalid");
      return;
    }

    // Clear any existing SVG before rendering
    d3.select(graphRef.current as any)
      .select("svg")
      .remove();

    const margin = { top: 20, right: 50, bottom: 50, left: 200 };
    const width =
      (graphRef.current as any).clientWidth - margin.left - margin.right;
    const height =
      (graphRef.current as any).clientHeight - margin.top - margin.bottom;

    const svg = d3
      .select(graphRef.current as any)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Use JavaScript's built-in Date parsing
    data.forEach((d: any) => {
      d.date = new Date(d.date);
    });

    console.log("Parsed data:", data);

    const x = d3
      .scalePoint()
      .domain(data.map((d: any) => d.date))
      .range([0, width])
      .padding(0.5);

    const y = d3.scaleLinear().domain([0, 100]).range([height, 0]);

    // Draw x-axis
    svg
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x).tickFormat(d3.timeFormat("%m/%d/%Y")) as any)
      .selectAll("text")
      .style("fill", "#FFFFFF");

    // Draw y-axis
    svg
      .append("g")
      .call(d3.axisLeft(y))
      .selectAll("text")
      .style("fill", "#FFFFFF");

    // Draw line
    svg
      .append("path")
      .datum(data)
      .attr("class", "line")
      .attr(
        "d",
        d3
          .line()
          .x((d) => x(d.date))
          .y((d) => y(d.value)),
      )
      .style("stroke", "#6FA6D6")
      .style("stroke-width", 3)
      .style("fill", "none");

    // Draw circles at data points
    svg
      .selectAll(".dot")
      .data(data)
      .enter()
      .append("circle")
      .attr("class", "label-circle")
      .attr("cx", (d) => x(d.date))
      .attr("cy", (d) => y(d.value))
      .attr("r", 6)
      .style("fill", "#3B7DBA")
      .style("stroke", "#FFFFFF")
      .style("stroke-width", 1.5);

    // Add shaded region for Medium Synchrony
    svg
      .append("rect")
      .attr("x", 0)
      .attr("y", y(70))
      .attr("width", width)
      .attr("height", y(40) - y(70))
      .style("fill", "#2E3B4E")
      .style("opacity", 0.3);

    // Adding labels for High, Medium, Low Synchrony aligned with the corresponding areas
    const legend = svg
      .append("g")
      .attr("class", "legend")
      .attr("transform", `translate(-180, ${height / 2 - 30})`);

    legend
      .append("circle")
      .attr("cx", 0)
      .attr("cy", -90)
      .attr("r", 6)
      .style("fill", "red");
    legend
      .append("text")
      .attr("x", 15)
      .attr("y", -85)
      .text("High Synchrony")
      .style("fill", "#FFFFFF");

    legend
      .append("circle")
      .attr("cx", 0)
      .attr("cy", -5)
      .attr("r", 6)
      .style("fill", "green");
    legend
      .append("text")
      .attr("x", 15)
      .attr("y", 0)
      .text("Medium Synchrony")
      .style("fill", "#FFFFFF");

    legend
      .append("circle")
      .attr("cx", 0)
      .attr("cy", 80)
      .attr("r", 6)
      .style("fill", "orange");
    legend
      .append("text")
      .attr("x", 15)
      .attr("y", 85)
      .text("Low Synchrony")
      .style("fill", "#FFFFFF");
  }, [data]);

  return (
    <div
      ref={graphRef}
      className="synchrony-graph"
      style={{ width: "100%", height: "100%" }}
    ></div>
  );
}
