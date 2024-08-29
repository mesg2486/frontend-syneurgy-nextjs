// @ts-nocheck
import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
const emotion1Url = "/emotions/emotion1.png";
const emotion2Url = "/emotions/emotion2.png";
const emotion3Url = "/emotions/emotion3.png";
const emotion4Url = "/emotions/emotion4.png";
const emotion5Url = "/emotions/emotion5.png";
const emotion6Url = "/emotions/emotion6.png";
const emotion7Url = "/emotions/emotion7.png";
const emotion8Url = "/emotions/emotion8.png";
const emotion9Url = "/emotions/emotion9.png";
const emotion10Url = "/emotions/emotion10.png";
const emotion11Url = "/emotions/emotion11.png";

const emotions = [
  { id: 1, url: emotion1Url, name: "Empathetic" },
  { id: 2, url: emotion2Url, name: "Comradely" },
  { id: 3, url: emotion3Url, name: "Curious" },
  { id: 4, url: emotion4Url, name: "Active Listener" },
  { id: 5, url: emotion5Url, name: "Attentive" },
  { id: 6, url: emotion6Url, name: "Indifferent" },
  { id: 7, url: emotion7Url, name: "Hostile" },
  { id: 8, url: emotion8Url, name: "Passive Listener" },
  { id: 9, url: emotion9Url, name: "Negative" },
  { id: 10, url: emotion10Url, name: "Bored" },
  { id: 11, url: emotion11Url, name: "Not Cohesive" },
];

const PolarGraph = ({
  width = 800,
  height = 500,
  distance = {},
  time = 0,
  currentTime = 0,
  avgSync = {},
  wordCount = {},
  emoji = {},
  animationStarted = false,
  resetAnimation = false,
  groupEmoji = [],
  groupSync = [],
}) => {
  const chartRef = useRef(null);
  const [dots, setDots] = useState([]);
  const [storedTime, setStoredTime] = useState(null);
  const userKeys = Object.keys(distance);
  const anglePerUser = (2 * Math.PI) / userKeys.length;

  const updateDotPosition = (
    userData: any,
    index: any,
    currentTime: any,
    initialRadius: any,
    url: any,
    wordCountPercentageForUser: any,
    dots: any,
    width: any,
    height: any,
    anglePerUser: any,
    pulse: any,
  ) => {
    const timeInMilliseconds = currentTime * 1000;
    const timeIndex = userData.findIndex(
      (data: any) => data[0] === timeInMilliseconds,
    );
    if (timeIndex === -1) return;

    const timeData = userData[timeIndex];
    if (!timeData) return;

    const distance = timeData[1];
    if (isNaN(distance)) return;

    const currentRadius = 50 + (distance / 1.5) * (150 - 50);
    const currentAngle = anglePerUser * index;
    const dotX =
      width / 2 + currentRadius * Math.cos(currentAngle) - initialRadius / 2;
    const dotY =
      height / 2 + currentRadius * Math.sin(currentAngle) - initialRadius / 2;

    if (dots[index]) {
      const initialOpacity = isNaN(dotX) || isNaN(dotY) ? 0 : 1;
      dots[index]
        .transition()
        .duration(1000)
        .attr("id", `dot-${index}`)
        .attr("x", dotX)
        .attr("y", dotY)
        .attr("width", wordCountPercentageForUser)
        .attr("height", wordCountPercentageForUser)
        .style("opacity", initialOpacity)
        .on("end", () => pulse(dots[index], 1));
    }

    d3.select(`#dot-${index}`).attr("href", url);

    return currentRadius;
  };

  const pulse = (selection: any, initialOpacity: any) => {
    selection
      .transition()
      .duration(1000)
      .ease(d3.easeSinIn)
      .style("opacity", initialOpacity)
      .attr("transform", () => {
        const bbox = selection.node().getBBox();
        const xCenter = width / 2;
        const yCenter = height / 2;
        const xDirection = xCenter - bbox.x;
        const yDirection = yCenter - bbox.y;
        const randomX = xDirection * 0.05;
        const randomY = yDirection * 0.05;
        return `translate(${randomX}, ${randomY})`;
      })
      .transition()
      .duration(1000)
      .ease(d3.easeSinIn)
      .style("opacity", initialOpacity)
      .attr("transform", "translate(0, 0)")
      .on("end", () => pulse(selection, initialOpacity));
  };

  useEffect(() => {
    const svg = d3
      .select(chartRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    const centerX = width / 2;
    const centerY = height / 2;

    const circles = [
      { radius: 150, fill: "#232A3C", stroke: "#404655", text: "Zone 1" },
      { radius: 130, fill: "#313B55", stroke: "#4F586D", text: "Zone 2" },
      { radius: 110, fill: "#3B4969", stroke: "#606B86", text: "Zone 3" },
      { radius: 90, fill: "#4F5F87", stroke: "#727F9F", text: "Zone 4" },
      { radius: 70, fill: "#687AA6", stroke: "#727F9F", text: "Zone 5" },
      { radius: 50, fill: "#2b344a", stroke: "#040507", text: "" },
    ];

    const lineSpacing = 20;
    const totalLineHeight = circles.length * lineSpacing;
    const startPos = (height - totalLineHeight) / 2;

    circles.forEach((circle, index) => {
      const yPos = startPos + lineSpacing * (circles.length - index - 1);
      const points = [
        [0, yPos],
        [centerX + circle.radius - 50, yPos],
      ];

      const lineGenerator = d3.line();
      if (index !== circles.length - 1) {
        svg
          .append("path")
          .attr("id", `line_${index}`)
          .attr("d", lineGenerator(points))
          .attr("stroke", circle.stroke)
          .attr("stroke-width", 1)
          .attr("fill", "none");

        const text = svg
          .append("text")
          .attr("id", `text_${index}`)
          .attr("font-size", 10)
          .attr("x", 30)
          .attr("y", yPos + 3)
          .attr("fill", "white")
          .text(
            0 +
              " " +
              circle.text.charAt(0).toUpperCase() +
              circle.text.slice(1),
          );

        const bbox = text.node()?.getBBox();
        svg
          .insert("rect", `#text_${index}`)
          .attr("x", 0)
          .attr("y", yPos - 10)
          .attr("width", bbox.width + 40)
          .attr("height", bbox.height + 10)
          .attr("fill", "#1b212f");
      } else {
        svg
          .append("text")
          .attr("id", `title_chart`)
          .attr("font-size", 12)
          .attr("x", 50)
          .attr("y", yPos - 3)
          .attr("fill", "#84818A")
          .text("Users in synchrony categories");
        const titleWidth = svg.select("#title_chart").node()?.getBBox().width;
        svg
          .insert("path", "#title_chart")
          .attr(
            "d",
            "M9.54545 3.85714C10.6018 3.85714 11.4482 2.99571 11.4482 1.92857C11.4482 0.861429 10.6018 0 9.54545 0C8.48909 0 7.63636 0.861429 7.63636 1.92857C7.63636 2.99571 8.48909 3.85714 9.54545 3.85714ZM4.45455 3.85714C5.51091 3.85714 6.35727 2.99571 6.35727 1.92857C6.35727 0.861429 5.51091 0 4.45455 0C3.39818 0 2.54545 0.861429 2.54545 1.92857C2.54545 2.99571 3.39818 3.85714 4.45455 3.85714ZM4.45455 5.14286C2.97182 5.14286 0 5.895 0 7.39286V9H8.90909V7.39286C8.90909 5.895 5.93727 5.14286 4.45455 5.14286ZM9.54545 5.14286C9.36091 5.14286 9.15091 5.15571 8.92818 5.175C9.66636 5.715 10.1818 6.44143 10.1818 7.39286V9H14V7.39286C14 5.895 11.0282 5.14286 9.54545 5.14286Z",
          )
          .attr("transform", `translate(${titleWidth - 138}, 178)`)
          .attr("fill", "#A4A7AF");
        svg
          .append("line")
          .attr("x1", 30)
          .attr("y1", yPos + 5)
          .attr("x2", 60)
          .attr("y2", yPos + 5)
          .attr("stroke-width", 1)
          .attr("stroke", "#404655");
      }
      svg
        .append("circle")
        .attr("id", `circle_${index}`)
        .attr("cx", centerX)
        .attr("cy", centerY)
        .attr("r", circle.radius)
        .attr("fill", circle.fill)
        .attr("stroke", circle.stroke);
    });

    svg
      .append("foreignObject")
      .attr("x", centerX - 26)
      .attr("y", centerY - 26)
      .attr("width", 52)
      .attr("height", 52)
      .html(`<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M25.9893 5.79157C22.0552 5.79157 18.8659 8.98293 18.8659 12.9197C18.8659 13.2843 18.8933 13.6425 18.946 13.9923C18.9467 13.9926 18.9473 13.9929 18.9479 13.9932C17.0811 15.1292 15.5097 16.703 14.3762 18.5722C14.3759 18.5716 14.3756 18.5711 14.3754 18.5705C14.0279 18.5183 13.6722 18.4913 13.3102 18.4913C9.37604 18.4913 6.1868 21.6827 6.1868 25.6194C6.1868 29.5561 9.37604 32.7475 13.3102 32.7475C13.672 32.7475 14.0275 32.7205 14.3748 32.6684C14.3766 32.6647 14.3785 32.6609 14.3803 32.6572C15.5165 34.5283 17.0916 36.1031 18.9626 37.2384C18.957 37.2411 18.9514 37.2438 18.9459 37.2466C18.8932 37.5961 18.8659 37.9539 18.8659 38.3181C18.8659 42.2548 22.0552 45.4462 25.9893 45.4462C29.9234 45.4462 33.1127 42.2548 33.1127 38.3181C33.1127 37.9496 33.0848 37.5877 33.0309 37.2343C34.8965 36.1008 36.4675 34.5302 37.602 32.6646C37.9573 32.7192 38.3213 32.7475 38.6918 32.7475C42.626 32.7475 45.8152 29.5561 45.8152 25.6194C45.8152 21.6827 42.626 18.4913 38.6918 18.4913C38.3244 18.4913 37.9634 18.5192 37.6109 18.5729C36.4761 16.7014 34.9026 15.126 33.033 13.9896C33.0855 13.6406 33.1127 13.2833 33.1127 12.9197C33.1127 8.98293 29.9234 5.79157 25.9893 5.79157ZM25.9893 51.2378C33.0467 51.2378 38.7816 45.5716 38.8986 38.5374C45.9339 38.4269 51.603 32.6856 51.603 25.6194C51.603 18.5532 45.9339 12.8119 38.8986 12.7014C38.7822 5.66672 33.0471 0 25.9893 0C18.9314 0 13.1962 5.66693 13.08 12.7017C6.05556 12.8246 0.399048 18.561 0.399048 25.6194C0.399048 32.6778 6.05557 38.4142 13.08 38.537C13.1968 45.5714 18.9318 51.2378 25.9893 51.2378Z"
            fill="url(#paint0_linear_1_14)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M25.9929 18.4713C22.0587 18.4713 18.8695 21.6626 18.8695 25.5994C18.8695 29.5361 22.0587 32.7274 25.9929 32.7274C29.927 32.7274 33.1162 29.5361 33.1162 25.5994C33.1162 21.6626 29.927 18.4713 25.9929 18.4713ZM13.0817 25.5994C13.0817 18.464 18.8622 12.6797 25.9929 12.6797C33.1235 12.6797 38.904 18.464 38.904 25.5994C38.904 32.7347 33.1235 38.519 25.9929 38.519C18.8622 38.519 13.0817 32.7347 13.0817 25.5994Z"
            fill="url(#paint1_linear_1_14)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_14"
              x1="26.001"
              y1="0"
              x2="26.001"
              y2="51.2378"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#6AE338" />
              <stop offset="1" stop-color="#F9FD3F" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_1_14"
              x1="25.9929"
              y1="12.6797"
              x2="25.9929"
              y2="38.519"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#6AE338" />
              <stop offset="1" stop-color="#F9FD3F" />
            </linearGradient>
          </defs>
        </svg>
      `);

    svg
      .append("text")
      .attr("id", `text_100_title`)
      .attr("font-size", 10)
      .attr("x", (width / 4) * 3 + 4)
      .attr("y", height / 2 - 43)
      .attr("fill", "#84818A")
      .text("Current team synchrony");

    svg
      .append("foreignObject")
      .attr("id", `averageSync`)
      .attr("x", (width / 4) * 3 + 5)
      .attr("y", height / 2 - 35)
      .attr("width", 132)
      .attr("height", 8)
      .html(`<svg width="132" height="8" viewBox="0 0 132 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="3" width="8" height="2" rx="1" fill="white"/>
          <rect x="124" y="3" width="8" height="2" rx="1" fill="white"/>
          <rect x="129" width="8" height="2" rx="1" transform="rotate(90 129 0)" fill="white"/>
          <path d="M119 4L103.627 4" stroke="#4EB000" stroke-width="3" stroke-linecap="round"/>
          <path d="M101.116 4L85.7428 4" stroke="#84DF00" stroke-width="3" stroke-linecap="round"/>
          <path d="M83.1807 4L67.8073 4" stroke="#ABD900" stroke-width="3" stroke-linecap="round"/>
          <path d="M65.2446 4L49.8712 4" stroke="#F5C900" stroke-width="3" stroke-linecap="round"/>
          <path d="M47.3091 4L31.9357 4" stroke="#F06E00" stroke-width="3" stroke-linecap="round"/>
          <path d="M29.3735 4L14.0001 4" stroke="#DC0000" stroke-width="3" stroke-linecap="round"/>
          </svg>
        `);
    svg
      .append("foreignObject")
      .attr("id", `averageSyncIcon`)
      .attr("x", (width / 4) * 3 + 14 + 50)
      .attr("y", height / 2 - 35 + 15)
      .attr("width", 17)
      .attr("height", 23)
      .html(`<svg width="17" height="23" viewBox="0 0 17 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M1.81267 14.9908C1.81267 16.2221 2.81151 17.2203 4.04365 17.2203C4.15762 17.2203 4.2696 17.2117 4.37898 17.1953C4.37916 17.1949 4.37935 17.1945 4.37953 17.1941C4.73518 17.7786 5.22794 18.2705 5.81318 18.6253C5.81276 18.6255 5.81234 18.6257 5.81191 18.6259C5.79562 18.7346 5.78718 18.8458 5.78718 18.959C5.78718 20.1903 6.78602 21.1885 8.01816 21.1885C9.25029 21.1885 10.2491 20.1903 10.2491 18.959C10.2491 18.8457 10.2407 18.7344 10.2244 18.6256C10.2232 18.625 10.222 18.6245 10.2208 18.6239C10.8065 18.2683 11.2993 17.7754 11.6547 17.1899C11.6556 17.1916 11.6564 17.1934 11.6573 17.1952C11.7669 17.2117 11.8791 17.2203 11.9933 17.2203C13.2254 17.2203 14.2243 16.2221 14.2243 14.9908C14.2243 13.7595 13.2254 12.7613 11.9933 12.7613C11.8779 12.7613 11.7646 12.77 11.6539 12.7869C11.2991 12.2027 10.8074 11.7108 10.2232 11.3557C10.2403 11.2446 10.2491 11.1308 10.2491 11.0149C10.2491 9.78359 9.25029 8.78541 8.01816 8.78541C6.78602 8.78541 5.78718 9.78359 5.78718 11.0149C5.78718 11.1299 5.79589 11.2428 5.81268 11.3531C5.2269 11.7083 4.73381 12.2009 4.37816 12.7862C4.26904 12.7698 4.15734 12.7613 4.04365 12.7613C2.81151 12.7613 1.81267 13.7595 1.81267 14.9908ZM16.0369 14.9908C16.0369 12.7817 14.2632 10.9866 12.0613 10.9504C12.0268 8.74836 10.2298 6.97394 8.01816 6.97394C5.80648 6.97394 4.00951 8.74837 3.97502 10.9504C1.77343 10.987 1.21849e-07 12.7819 9.55089e-08 14.9908C6.9168e-08 17.1997 1.7735 18.9946 3.97514 19.0312C4.01367 21.2297 5.80904 23 8.01816 23C10.2273 23 12.0226 21.2297 12.0612 19.0312C14.2631 18.995 16.0369 17.1999 16.0369 14.9908Z" fill="#F5C900"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.78142 14.9893C5.78142 16.2206 6.78026 17.2188 8.0124 17.2188C9.24453 17.2188 10.2434 16.2206 10.2434 14.9893C10.2434 13.758 9.24453 12.7598 8.0124 12.7598C6.78026 12.7598 5.78142 13.758 5.78142 14.9893ZM8.0124 19.0303C5.77915 19.0303 3.96875 17.2211 3.96875 14.9893C3.96875 12.7575 5.77915 10.9483 8.0124 10.9483C10.2456 10.9483 12.056 12.7575 12.056 14.9893C12.056 17.2211 10.2456 19.0303 8.0124 19.0303Z" fill="#F5C900"/>
          <path d="M8 1.11273e-07L9.73205 3L6.26795 3L8 1.11273e-07Z" fill="#F5C900"/>
          </svg>`);

    svg
      .append("text")
      .attr("id", `text_100_title`)
      .attr("font-size", 10)
      .attr("x", (width / 4) * 3 + 4)
      .attr("y", height / 1.3 - 43)
      .attr("fill", "#84818A")
      .text("Average team synchrony");

    svg
      .append("foreignObject")
      .attr("id", `averageTeamSync`)
      .attr("x", (width / 4) * 3 + 5)
      .attr("y", height / 1.3 - 35)
      .attr("width", 132)
      .attr("height", 8)
      .html(`<svg width="132" height="8" viewBox="0 0 132 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="3" width="8" height="2" rx="1" fill="white"/>
          <rect x="124" y="3" width="8" height="2" rx="1" fill="white"/>
          <rect x="129" width="8" height="2" rx="1" transform="rotate(90 129 0)" fill="white"/>
          <path d="M119 4L103.627 4" stroke="#4EB000" stroke-width="3" stroke-linecap="round"/>
          <path d="M101.116 4L85.7428 4" stroke="#84DF00" stroke-width="3" stroke-linecap="round"/>
          <path d="M83.1807 4L67.8073 4" stroke="#ABD900" stroke-width="3" stroke-linecap="round"/>
          <path d="M65.2446 4L49.8712 4" stroke="#F5C900" stroke-width="3" stroke-linecap="round"/>
          <path d="M47.3091 4L31.9357 4" stroke="#F06E00" stroke-width="3" stroke-linecap="round"/>
          <path d="M29.3735 4L14.0001 4" stroke="#DC0000" stroke-width="3" stroke-linecap="round"/>
          </svg>
        `);
    svg
      .append("foreignObject")
      .attr("id", `averageTeamSyncIcon`)
      .attr("x", (width / 4) * 3 + 14 + 50)
      .attr("y", height / 1.3 - 35 + 15)
      .attr("width", 17)
      .attr("height", 23)
      .html(`<svg width="17" height="23" viewBox="0 0 17 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M1.81267 14.9908C1.81267 16.2221 2.81151 17.2203 4.04365 17.2203C4.15762 17.2203 4.2696 17.2117 4.37898 17.1953C4.37916 17.1949 4.37935 17.1945 4.37953 17.1941C4.73518 17.7786 5.22794 18.2705 5.81318 18.6253C5.81276 18.6255 5.81234 18.6257 5.81191 18.6259C5.79562 18.7346 5.78718 18.8458 5.78718 18.959C5.78718 20.1903 6.78602 21.1885 8.01816 21.1885C9.25029 21.1885 10.2491 20.1903 10.2491 18.959C10.2491 18.8457 10.2407 18.7344 10.2244 18.6256C10.2232 18.625 10.222 18.6245 10.2208 18.6239C10.8065 18.2683 11.2993 17.7754 11.6547 17.1899C11.6556 17.1916 11.6564 17.1934 11.6573 17.1952C11.7669 17.2117 11.8791 17.2203 11.9933 17.2203C13.2254 17.2203 14.2243 16.2221 14.2243 14.9908C14.2243 13.7595 13.2254 12.7613 11.9933 12.7613C11.8779 12.7613 11.7646 12.77 11.6539 12.7869C11.2991 12.2027 10.8074 11.7108 10.2232 11.3557C10.2403 11.2446 10.2491 11.1308 10.2491 11.0149C10.2491 9.78359 9.25029 8.78541 8.01816 8.78541C6.78602 8.78541 5.78718 9.78359 5.78718 11.0149C5.78718 11.1299 5.79589 11.2428 5.81268 11.3531C5.2269 11.7083 4.73381 12.2009 4.37816 12.7862C4.26904 12.7698 4.15734 12.7613 4.04365 12.7613C2.81151 12.7613 1.81267 13.7595 1.81267 14.9908ZM16.0369 14.9908C16.0369 12.7817 14.2632 10.9866 12.0613 10.9504C12.0268 8.74836 10.2298 6.97394 8.01816 6.97394C5.80648 6.97394 4.00951 8.74837 3.97502 10.9504C1.77343 10.987 1.21849e-07 12.7819 9.55089e-08 14.9908C6.9168e-08 17.1997 1.7735 18.9946 3.97514 19.0312C4.01367 21.2297 5.80904 23 8.01816 23C10.2273 23 12.0226 21.2297 12.0612 19.0312C14.2631 18.995 16.0369 17.1999 16.0369 14.9908Z" fill="#F5C900"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.78142 14.9893C5.78142 16.2206 6.78026 17.2188 8.0124 17.2188C9.24453 17.2188 10.2434 16.2206 10.2434 14.9893C10.2434 13.758 9.24453 12.7598 8.0124 12.7598C6.78026 12.7598 5.78142 13.758 5.78142 14.9893ZM8.0124 19.0303C5.77915 19.0303 3.96875 17.2211 3.96875 14.9893C3.96875 12.7575 5.77915 10.9483 8.0124 10.9483C10.2456 10.9483 12.056 12.7575 12.056 14.9893C12.056 17.2211 10.2456 19.0303 8.0124 19.0303Z" fill="#F5C900"/>
          <path d="M8 1.11273e-07L9.73205 3L6.26795 3L8 1.11273e-07Z" fill="#F5C900"/>
          </svg>`);

    svg
      .append("text")
      .attr("id", `text_100_title`)
      .attr("font-size", 10)
      .attr("x", (width / 4) * 3 + 4)
      .attr("y", height / 2.8 - 43)
      .attr("fill", "#84818A")
      .text("Current");

    svg
      .append("image")
      .attr("id", `currentEmoji`)
      .attr("x", (width / 4) * 3 - 50)
      .attr("y", height / 2.8 - 35)
      .attr("width", 132)
      .attr("height", 24)
      .attr("href", emotions[0].url);

    svg
      .append("text")
      .attr("id", `text_100_title`)
      .attr("font-size", 10)
      .attr("x", (width / 4) * 3 + 4)
      .attr("y", height / 1.6 - 43)
      .attr("fill", "#84818A")
      .text("Average");

    svg
      .append("image")
      .attr("id", `averageEmoji`)
      .attr("x", (width / 4) * 3 - 50)
      .attr("y", height / 1.6 - 35)
      .attr("width", 132)
      .attr("height", 24)
      .attr("href", emotions[0].url);

    userKeys.forEach((userKey, index) => {
      const userData = distance[userKey];
      if (!userData) return;

      const timeData = userData[0];
      if (!timeData) return;
      const distance = timeData[1];

      let currentRadius = 50 + (distance / 1.5) * (150 - 50);
      const currentAngle = anglePerUser * index;
      let dotX = centerX + currentRadius * Math.cos(currentAngle);
      let dotY = centerY + currentRadius * Math.sin(currentAngle);

      if (isNaN(dotX) || isNaN(dotY)) {
        dotX = centerX + 75 * Math.cos(currentAngle);
        dotY = centerY + 75 * Math.sin(currentAngle);
      }

      const wordCountPercentage = getWordPercentage(currentTime);
      let wordCountPercentageForUser = 0;

      wordCountPercentage.forEach((array) => {
        if (array[0] === userKey) {
          wordCountPercentageForUser = array[1];
        }
      });
      const minSize = 20;
      const maxSize = 50;
      const imgSize =
        (wordCountPercentageForUser * (maxSize - minSize)) / 100 + minSize;

      const userEmotions = JSON.parse(JSON.stringify(emoji[userKey]));
      let emojiId = 0;
      currentTime = currentTime * 1000;
      if (currentTime === 0) {
        currentTime = 1000;
      }
      userEmotions.forEach((emotion) => {
        if (emotion[1] === currentTime) {
          emojiId = emotion[0];
        }
      });

      const emotion = emotions.find((emotion) => {
        return emotion.id === emojiId;
      });

      const initialOpacity = isNaN(dotX) || isNaN(dotY) ? 0 : 1;
      const dot = svg
        .append("image")
        .attr("id", `dot-${index}`)
        .attr("href", emotion?.url || "")
        .attr("x", dotX - imgSize / 2)
        .attr("y", dotY - imgSize / 2)
        .attr("width", imgSize)
        .attr("height", imgSize)
        .style("opacity", initialOpacity);

      const tooltip = d3
        .select(chartRef.current)
        .append("div")
        .attr("class", "tooltipUniverse")
        .style("opacity", 0);

      dot
        .on("mouseenter", () => {
          tooltip.style("opacity", 1);
          tooltip.html(`${userKey} <br> ${emotion?.name || "No emotion"}`);
        })
        .on("mousemove", (event) => {
          tooltip
            .style("left", event.pageX + "px")
            .style("top", event.pageY + "px")
            .style("opacity", 1);
        })
        .on("mouseleave", () => {
          tooltip.style("opacity", 0);
        });

      pulse(dot, initialOpacity);
      setDots((prevDots) => [...prevDots, dot]);
    });
    return () => {
      // Cleanup function to remove the existing chart before re-rendering
      d3.select(chartRef.current).select("svg").remove();
    };
  }, []);

  const getWordPercentage = (currentTime) => {
    const closestTime = Math.floor(currentTime / 30) * 30 * 1000;
    let wordCountPercentage = [];
    let totalWordCount = 0;
    const userKeysWordCount = Object.keys(wordCount);

    userKeysWordCount.forEach((userKey) => {
      const userData = wordCount[userKey];
      if (!userData) return;
      const timeData = userData[0];
      if (!timeData) return;
      userData.forEach((timeData) => {
        const time = timeData[0];
        const wordCount = timeData[1];
        if (time === closestTime) {
          totalWordCount += wordCount;
        }
      });
    });

    userKeysWordCount.forEach((userKey) => {
      const userData = wordCount[userKey];
      if (!userData) return;
      const timeData = userData[0];
      if (!timeData) return;
      userData.forEach((timeData) => {
        const time = timeData[0];
        const wordCount = timeData[1];
        if (time === closestTime) {
          const wordCountPercentageForUser = Math.round(
            (wordCount / totalWordCount) * 100,
          );
          wordCountPercentage.push([userKey, wordCountPercentageForUser]);
        }
      });
    });

    wordCountPercentage.forEach(
      (array) => (array[0] = array[0].replace("speaker", "user")),
    );
    return wordCountPercentage;
  };

  useEffect(() => {
    if (animationStarted) {
      startAnimation();
    } else {
      // clearInterval(animationInterval);
    }
  }, [animationStarted]);

  useEffect(() => {
    if (resetAnimation) {
      setStoredTime(0);
    }
  }, [resetAnimation]);

  const startAnimation = () => {
    let time = storedTime || 0;
    const animationInterval = setInterval(() => {
      const currentTime = time * 30 + 1;
      setStoredTime(Math.floor(currentTime / 30));
      const closestTime = Math.floor(currentTime / 30) * 30 + 1;
      const wordCountPercentage = getWordPercentage(currentTime);
      userKeys.forEach((userKey, index) => {
        const userData = distance[userKey];
        if (!userData) return;
        let wordCountPercentageForUser = 0;
        wordCountPercentage.forEach((array) => {
          if (array[0] === userKey) {
            wordCountPercentageForUser = array[1];
          }
        });
        const minSize = 20;
        const maxSize = 50;
        let dotsPosition;
        const imgSize =
          (wordCountPercentageForUser * (maxSize - minSize)) / 100 + minSize;
        const userEmotions = JSON.parse(JSON.stringify(emoji[userKey]));
        let emojiId = 0;
        userEmotions.forEach((emotion) => {
          if (emotion[1] === closestTime * 1000) {
            emojiId = emotion[0];
          }
        });
        const emotion = emotions.find((emotion) => {
          return emotion.id === emojiId;
        });

        const currentRadius = updateDotPosition(
          userData,
          index,
          closestTime,
          // initialRadius,
          20, // TODO: this is hardcoded in the place of initialRadius. Remove this if initialRadius is provided dynamically.
          emotion?.url || "",
          imgSize,
          dots,
          width,
          height,
          anglePerUser,
          pulse,
        );
        dotsPosition.splice(index, 1, currentRadius);
      });
      time++;
    }, 1000);
  };

  return <div ref={chartRef} className="absolute w-full bg-black-200"></div>;
};

export default PolarGraph;
