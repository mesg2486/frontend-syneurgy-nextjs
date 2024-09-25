import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
// import logoSvg from "./logo.png"; // Import the SVG file
// import bigLogo from "./bigLogo.png"; // Import the SVG file
// import IconAlert from "@/components/icons/IconAlert"; // Update the import path as needed

export interface ICircularDashboardScores {
  score: number;
  brainScore: number;
  bodyScore: number;
  behaviorScore: number;
}

const CircularDashboard = ({
  scores,
}: {
  scores: ICircularDashboardScores;
}) => {
  const d3Container = useRef(null);

  useEffect(() => {
    createDashboard();
    updateArcs();
    return () => {
      // Cleanup function to remove the existing chart before re-rendering
      d3.select(d3Container.current).select("svg").remove();
    };
  }, []);

  const createDashboard = () => {
    const width = 300;
    const height = 300;
    const svg = d3
      .select(d3Container.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    const radius = Math.min(width, height) / 4; // Calculate radius based on container size

    // Define the background arc generator
    const backgroundInnerArcGenerator = d3
      .arc()
      .innerRadius(90) // Adjust as needed for the desired background thickness
      .outerRadius(105) // Adjust as needed
      .startAngle(0)
      .endAngle(Math.PI * 2);

    const backgroundOuterArcGenerator = d3
      .arc()
      .innerRadius(110) // Adjust as needed for the desired background thickness
      .outerRadius(125) // Adjust as needed
      .startAngle(0)
      .endAngle(Math.PI * 2);

    // Draw the inner background arc
    svg
      .append("path")
      .datum({ endAngle: Math.PI * 2 })
      .style("fill", "#1b212f")
      .attr("d", backgroundInnerArcGenerator as any);

    // Draw the outer background arc
    svg
      .append("path")
      .datum({ endAngle: Math.PI * 2 })
      .style("fill", "#1b212f")
      .attr("d", backgroundOuterArcGenerator as any);

    // Define the arc generator for the internal arcs
    const internalArcGenerator = d3
      .arc()
      .innerRadius(50)
      .outerRadius(60)
      .cornerRadius(10); // Adjust the corner radius as needed

    // Define the outer arc generator
    const outerArcGenerator = d3
      .arc()
      .innerRadius(110)
      .outerRadius(120)
      .startAngle(0)
      .cornerRadius(10); // Adjust the corner radius as needed

    // Create a group for the team arcs so we can update them later
    const teamArcsGroup = svg.append("g").attr("class", "team-arcs-group");

    // Team data for internal arc
    const teamData = [
      { team: 1, color: "#195DFA", value: 0.333, label: "BRAIN" },
      { team: 2, color: "#A78302", value: 0.333, label: "BODY" },
      { team: 3, color: "#258374", value: 0.333, label: "BEHAVIOUR" },
    ];

    // Starting angle for the team arcs
    let startAngle = 0;

    // Draw the internal arc for each team
    teamData.forEach((team) => {
      const endAngle = startAngle + Math.PI * 2 * team.value;

      teamArcsGroup
        .append("path")
        .datum({ startAngle: startAngle, endAngle: endAngle })
        .style("fill", team.color)
        .attr("d", internalArcGenerator as any)
        .attr("class", `arc-${team.team}`);

      // Update start angle for the next segment
      startAngle = endAngle;
    });

    // Draw the outer arc
    svg
      .append("path")
      .datum({ endAngle: Math.PI * 2 * (scores.score / 100) })
      .style("fill", "#6AE338")
      .attr("d", outerArcGenerator as any)
      .attr("class", "outer-arc");

    teamData.forEach((team) => {
      const endAngle = startAngle + Math.PI * 2 * team.value;
      const textArc = d3
        .arc()
        .innerRadius(93)
        .outerRadius(90)
        .startAngle(startAngle)
        .endAngle(endAngle);

      // Invisible path for text to follow
      svg
        .append("path")
        .attr("id", `textPath-${team.team}`)
        .attr("d", textArc({} as any))
        .style("fill", "none");

      // Adding curved text
      svg
        .append("text")
        .append("textPath")
        .attr("xlink:href", `#textPath-${team.team}`)
        .style("text-anchor", "middle")
        .attr("startOffset", team.label === "BEHAVIOUR" ? "13%" : "8%")
        .style("fill", "white")
        .style("font-size", "11px")
        .text(team.label);

      // Calculate the position for the dot
      const dotRadius = 93;
      const angleOffset = 0.05;
      const angleForDot = startAngle - angleOffset;

      const dotX =
        dotRadius * Math.cos(angleForDot - Math.PI / 2) -
        (team.label === "BEHAVIOUR" ? 11 : team.label === "BODY" ? 3 : -12);
      const dotY =
        dotRadius * Math.sin(angleForDot - Math.PI / 2) -
        (team.label === "BEHAVIOUR" ? 11 : team.label === "BODY" ? -13 : 5);
      // Add the dot
      svg
        .append("circle")
        .attr("cx", dotX)
        .attr("cy", dotY)
        .attr("r", 3) // Radius of the dot
        .style(
          "fill",
          team.label === "BEHAVIOUR"
            ? "#44C5AE"
            : team.label === "BODY"
              ? "#f8d864"
              : "#2e6cfb",
        );

      startAngle = endAngle;
    });

    const outerRadius = 117; // Adjust as needed
    const mainSvg = d3.select(d3Container.current).select("svg");

    // Calculate the starting position of the outer ring
    const startX = 300 / 2 + outerRadius * Math.cos(0 - Math.PI / 2) + 7;
    const startY = 300 / 2 + outerRadius * Math.sin(0 - Math.PI / 2);

    // Append the SVG icon to the start of the outer ring
    mainSvg
      .append("image")
      .attr("xlink:href", "/logo-icon.png")
      .attr("x", startX - 2) // Adjust for the icon's size
      .attr("y", startY - 6) // Adjust for the icon's size
      .attr("width", 12)
      .attr("height", 12);

    const centerGroup = svg
      .append("g")
      .attr("class", "center-group")
      .attr("transform", `translate(0, 0)`); // This centers the group in the SVG

    // Add the "Team Synchrony" label
    centerGroup
      .append("text")
      .attr("class", "team-synchrony-label")
      .attr("text-anchor", "middle")
      .attr("x", 0)
      .attr("y", -20) // Adjust as needed
      .style("fill", "#6AE338")
      .style("font-size", "12px")
      .text("Team Synchrony");

    // Define gradient from yellow to green top to bottom
    const gradient = svg
      .append("svg:defs")
      .append("svg:linearGradient")
      .attr("id", "gradient")
      .attr("x1", "0%")
      .attr("y1", "0%")
      .attr("x2", "0%")
      .attr("y2", "100%")
      .attr("spreadMethod", "pad");

    // Define the gradient colors
    gradient
      .append("svg:stop")
      .attr("offset", "0%")
      .attr("stop-color", "#6AE338")
      .attr("stop-opacity", 1);

    gradient
      .append("svg:stop")
      .attr("offset", "100%")
      .attr("stop-color", "#FDDC65")
      .attr("stop-opacity", 1);

    // Add the performance value
    centerGroup
      .append("text")
      .attr("class", "team-synchrony-value")
      .attr("text-anchor", "middle")
      .attr("x", 15)
      .attr("y", 30) // Adjust as needed
      .style("fill", "url(#gradient)")
      .style("font-size", "48px")
      .style("font-weight", "bold")
      .text(scores.score);

    // Add big logo left of the performance value
    centerGroup
      .append("image")
      .attr("xlink:href", "/logo-icon.png")
      .attr("x", -55)
      .attr("y", -5)
      .attr("width", 36)
      .attr("height", 36);
  };

  const updateArcs = () => {
    const scoreIndex = [
      scores.brainScore,
      scores.bodyScore,
      scores.behaviorScore,
    ];
    // Update the outer arc
    const outerArcGenerator = d3
      .arc()
      .innerRadius(110)
      .outerRadius(125)
      .startAngle(0)
      .cornerRadius(10);

    d3.select(".outer-arc")
      .datum({ endAngle: Math.PI * 2 * (scores.score / 100) })
      .attr("d", outerArcGenerator as any);

    // Update the team arcs
    const internalArcGenerator = d3
      .arc()
      .innerRadius(90)
      .outerRadius(105)
      .cornerRadius(10);

    const teamData = [
      { team: 1, color: "#195DFA", value: 0.333, label: "BRAIN" },
      { team: 2, color: "#A78302", value: 0.333, label: "BODY" },
      { team: 3, color: "#258374", value: 0.333, label: "BEHAVIOUR" },
    ];

    teamData.forEach((team, index) => {
      // Each third of the circle
      const third = (Math.PI * 2) / teamData.length;

      // Start angle for this team's segment
      const startAngle = third * index;

      // End angle based on n value within the allocated third
      const endAngle = startAngle + third * (scoreIndex[index] / 100);

      d3.select(`.arc-${team.team}`)
        .datum({ startAngle: startAngle, endAngle: endAngle })
        .attr("d", internalArcGenerator as any);
    });

    // Update performance value
    d3.select(".team-synchrony-value").text(Math.round(scores.score));
  };

  return <div className="introTeamChart" ref={d3Container}></div>;
};

export default CircularDashboard;
