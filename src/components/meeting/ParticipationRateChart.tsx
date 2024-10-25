import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

type Value = {
  color: string;
  rate: number;
};

type ParticipationRateChartProps = {
  values: Value[];
};

export default function ParticipationRateChart({
  values = [],
}: ParticipationRateChartProps) {
  const chartRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = d3.select(chartRef.current);
    svg.selectAll("*").remove();

    const totalWidth = chartRef.current?.clientWidth || 230;
    const isTeamVariant = values.length > 1;

    if (isTeamVariant) {
      let xOffset = 0;

      values.forEach((item) => {
        const barWidth = (item.rate / 100) * totalWidth;
        svg
          .append("rect")
          .attr("x", xOffset)
          .attr("y", 0)
          .attr("width", barWidth)
          .attr("height", 8)
          .attr("fill", item.color);

        xOffset += barWidth;
      });
    } else {
      svg
        .append("rect")
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", (values[0]?.rate / 100) * totalWidth)
        .attr("height", 8)
        .attr("fill", values[0]?.color);
    }
  }, [values]);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <svg
        className="rounded-full"
        ref={chartRef}
        width="100%"
        height="8"
      ></svg>
    </div>
  );
}
