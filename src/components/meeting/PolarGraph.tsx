// import React, { useEffect, useRef, useState } from "react";
// import * as d3 from "d3";
// import emotion1Url from "../../../public/emotions/emotion1.png";
// import emotion2Url from "../../../public/emotions/emotion2.png";
// import emotion3Url from "../../../public/emotions/emotion3.png";
// import emotion4Url from "../../../public/emotions/emotion4.png";
// import emotion5Url from "../../../public/emotions/emotion5.png";
// import emotion6Url from "../../../public/emotions/emotion6.png";
// import emotion7Url from "../../../public/emotions/emotion7.png";
// import emotion8Url from "../../../public/emotions/emotion8.png";
// import emotion9Url from "../../../public/emotions/emotion9.png";
// import emotion10Url from "../../../public/emotions/emotion10.png";
// import emotion11Url from "../../../public/emotions/emotion11.png";

// const emotions = [
//   { id: 1, url: emotion1Url, name: "Empathetic" },
//   { id: 2, url: emotion2Url, name: "Comradely" },
//   { id: 3, url: emotion3Url, name: "Curious" },
//   { id: 4, url: emotion4Url, name: "Active Listener" },
//   { id: 5, url: emotion5Url, name: "Attentive" },
//   { id: 6, url: emotion6Url, name: "Indifferent" },
//   { id: 7, url: emotion7Url, name: "Hostile" },
//   { id: 8, url: emotion8Url, name: "Passive Listener" },
//   { id: 9, url: emotion9Url, name: "Negative" },
//   { id: 10, url: emotion10Url, name: "Bored" },
//   { id: 11, url: emotion11Url, name: "Not Cohesive" },
// ];

// const PolarGraph = ({
//   width = 500,
//   height = 500,
//   distance = {},
//   time = 0,
//   currentTime = 0,
//   avgSync = {},
//   wordCount = {},
//   emoji = {},
//   animationStarted = false,
//   resetAnimation = false,
//   groupEmoji = [],
//   groupSync = [],
// }) => {
//   const chartRef = useRef(null);
//   const [dots, setDots] = useState([]);
//   const initialRadius = Math.random() * 10 + 5;
//   const userKeys = Object.keys(distance);
//   const anglePerUser = (2 * Math.PI) / userKeys.length;

//   useEffect(() => {
//     if (chartRef.current) {
//       drawChart();
//     }
//   }, [chartRef, animationStarted, currentTime]);

//   const updateDotPosition = (
//     userData,
//     index,
//     currentTime,
//     initialRadius,
//     url,
//     wordCountPercentageForUser,
//     dots,
//     width,
//     height,
//     anglePerUser,
//     pulse
//   ) => {
//     let timeInMiliseconds = currentTime * 1000;
//     let timeIndex = userData.findIndex((data) => data[0] === timeInMiliseconds);
//     if (timeIndex === -1) return;

//     let timeData = userData[timeIndex];
//     if (!timeData) return;

//     let distance = timeData[1];
//     if (isNaN(distance)) return;

//     let currentRadius = 50 + (distance / 1.5) * (150 - 50);
//     let currentAngle = anglePerUser * index;
//     let dotX =
//       width / 2 + currentRadius * Math.cos(currentAngle) - initialRadius / 2;
//     let dotY =
//       height / 2 + currentRadius * Math.sin(currentAngle) - initialRadius / 2;

//     if (dots[index]) {
//       let initialOpacity = isNaN(dotX) || isNaN(dotY) ? 0 : 1;
//       dots[index]
//         .transition()
//         .duration(1000)
//         .attr("id", `dot-${index}`)
//         .attr("x", dotX)
//         .attr("y", dotY)
//         .attr("width", wordCountPercentageForUser)
//         .attr("height", wordCountPercentageForUser)
//         .style("opacity", initialOpacity)
//         .on("end", () => pulse(dots[index], 1));
//     }

//     d3.select(`#dot-${index}`).attr("href", url);

//     return currentRadius;
//   };

//   const pulse = (selection, initialOpacity) => {
//     selection
//       .transition()
//       .duration(1000)
//       .ease(d3.easeSinIn)
//       .style("opacity", initialOpacity)
//       .attr("transform", () => {
//         const bbox = selection.node().getBBox();
//         const xCenter = width / 2;
//         const yCenter = height / 2;
//         const xDirection = xCenter - bbox.x;
//         const yDirection = yCenter - bbox.y;
//         const randomX = xDirection * 0.05;
//         const randomY = yDirection * 0.05;
//         return `translate(${randomX}, ${randomY})`;
//       })
//       .transition()
//       .duration(1000)
//       .ease(d3.easeSinIn)
//       .style("opacity", initialOpacity)
//       .attr("transform", "translate(0, 0)")
//       .on("end", () => pulse(selection, initialOpacity));
//   };

//   const drawChart = () => {
//     const svg = d3
//       .select(chartRef.current)
//       .append("svg")
//       .attr("width", width)
//       .attr("height", height);
//     const centerX = width / 2;
//     const centerY = height / 2;

//     svg
//       .append("foreignObject")
//       .attr("x", centerX - 26)
//       .attr("y", centerY - 26)
//       .attr("width", 52)
//       .attr("height", 52)
//       .html(`<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path
//             fill-rule="evenodd"
//             clip-rule="evenodd"
//             d="M25.9893 5.79157C22.0552 5.79157 18.8659 8.98293 18.8659 12.9197C18.8659 13.2843 18.8933 13.6425 18.946 13.9923C18.9467 13.9926 18.9473 13.9929 18.9479 13.9932C17.0811 15.1292 15.5097 16.703 14.3762 18.5722C14.3759 18.5716 14.3756 18.5711 14.3754 18.5705C14.0279 18.5183 13.6722 18.4913 13.3102 18.4913C9.37604 18.4913 6.1868 21.6827 6.1868 25.6194C6.1868 29.5561 9.37604 32.7475 13.3102 32.7475C13.672 32.7475 14.0275 32.7205 14.3748 32.6684C14.3766 32.6647 14.3785 32.6609 14.3803 32.6572C15.5165 34.5283 17.0916 36.1031 18.9626 37.2384C18.957 37.2411 18.9514 37.2438 18.9459 37.2466C18.8932 37.5961 18.8659 37.9539 18.8659 38.3181C18.8659 42.2548 22.0552 45.4462 25.9893 45.4462C29.9234 45.4462 33.1127 42.2548 33.1127 38.3181C33.1127 37.9496 33.0848 37.5877 33.0309 37.2343C34.8965 36.1008 36.4675 34.5302 37.602 32.6646C37.9573 32.7192 38.3213 32.7475 38.6918 32.7475C42.626 32.7475 45.8152 29.5561 45.8152 25.6194C45.8152 21.6827 42.626 18.4913 38.6918 18.4913C38.3244 18.4913 37.9634 18.5192 37.6109 18.5729C36.4761 16.7014 34.9026 15.126 33.033 13.9896C33.0855 13.6406 33.1127 13.2833 33.1127 12.9197C33.1127 8.98293 29.9234 5.79157 25.9893 5.79157ZM25.9893 51.2378C33.0467 51.2378 38.7816 45.5716 38.8986 38.5374C45.9339 38.4269 51.603 32.6856 51.603 25.6194C51.603 18.5532 45.9339 12.8119 38.8986 12.7014C38.7822 5.66672 33.0471 0 25.9893 0C18.9314 0 13.1962 5.66693 13.08 12.7017C6.05556 12.8246 0.399048 18.561 0.399048 25.6194C0.399048 32.6778 6.05557 38.4142 13.08 38.537C13.1968 45.5714 18.9318 51.2378 25.9893 51.2378Z"
//             fill="url(#paint0_linear_1_14)"
//           />
//           <path
//             fill-rule="evenodd"
//             clip-rule="evenodd"
//             d="M25.9929 18.4713C22.0587 18.4713 18.8695 21.6626 18.8695 25.5994C18.8695 29.5361 22.0587 32.7274 25.9929 32.7274C29.927 32.7274 33.1162 29.5361 33.1162 25.5994C33.1162 21.6626 29.927 18.4713 25.9929 18.4713ZM13.0817 25.5994C13.0817 18.464 18.8622 12.6797 25.9929 12.6797C33.1235 12.6797 38.904 18.464 38.904 25.5994C38.904 32.7347 33.1235 38.519 25.9929 38.519C18.8622 38.519 13.0817 32.7347 13.0817 25.5994Z"
//             fill="url(#paint1_linear_1_14)"
//           />
//           <defs>
//             <linearGradient
//               id="paint0_linear_1_14"
//               x1="26.001"
//               y1="0"
//               x2="26.001"
//               y2="51.2378"
//               gradientUnits="userSpaceOnUse"
//             >
//               <stop stop-color="#6AE338" />
//               <stop offset="1" stop-color="#F9FD3F" />
//             </linearGradient>
//             <linearGradient
//               id="paint1_linear_1_14"
//               x1="25.9929"
//               y1="12.6797"
//               x2="25.9929"
//               y2="38.519"
//               gradientUnits="userSpaceOnUse"
//             >
//               <stop stop-color="#6AE338" />
//               <stop offset="1" stop-color="#F9FD3F" />
//             </linearGradient>
//           </defs>
//         </svg>
//       `);

//     const wordCountPercentage = getWordPercentage(currentTime);

//     userKeys.forEach((userKey, index) => {
//       let userData = distance[userKey];
//       if (!userData) return;

//       let timeData = userData[0];
//       if (!timeData) return;

//       let distance = timeData[1];
//       let currentRadius = 50 + (distance / 1.5) * (150 - 50);
//       let currentAngle = anglePerUser * index;
//       let dotX = centerX + currentRadius * Math.cos(currentAngle);
//       let dotY = centerY + currentRadius * Math.sin(currentAngle);

//       if (isNaN(dotX) || isNaN(dotY)) {
//         dotX = centerX + 75 * Math.cos(currentAngle);
//         dotY = centerY + 75 * Math.sin(currentAngle);
//       }

//       let wordCountPercentageForUser = 0;
//       wordCountPercentage.forEach((array) => {
//         if (array[0] === userKey) {
//           wordCountPercentageForUser = array[1];
//         }
//       });
//       let minSize = 20;
//       let maxSize = 50;
//       let imgSize =
//         (wordCountPercentageForUser * (maxSize - minSize)) / 100 + minSize;

//       let userEmotions = JSON.parse(JSON.stringify(emoji[userKey]));
//       let emojiId = 0;
//       let currentTimeInMillis = currentTime * 1000;
//       if (currentTimeInMillis === 0) {
//         currentTimeInMillis = 1000;
//       }
//       userEmotions.forEach((emotion) => {
//         if (emotion[1] === currentTimeInMillis) {
//           emojiId = emotion[0];
//         }
//       });

//       let emotion = emotions.find((emotion) => emotion.id === emojiId);

//       let initialOpacity = 1;
//       if (isNaN(dotX) || isNaN(dotY)) {
//         initialOpacity = 0;
//       }
//       let dot = svg
//         .append("image")
//         .attr("id", `dot-${index}`)
//         .attr("href", emotion?.url || "")
//         .attr("x", dotX - imgSize / 2)
//         .attr("y", dotY - imgSize / 2)
//         .attr("width", imgSize)
//         .attr("height", imgSize)
//         .style("opacity", initialOpacity);

//       const tooltip = d3
//         .select(chartRef.current)
//         .append("div")
//         .attr("class", "tooltipUniverse")
//         .style("opacity", 0);

//       dot
//         .on("mouseenter", () => {
//           tooltip.style("opacity", 1);
//           tooltip.html(`${userKey} <br><br> ${emotion?.name || "No emotion"}`);
//         })
//         .on("mousemove", (event) => {
//           tooltip
//             .style("left", `${event.pageX / 2}px`)
//             .style("top", `${event.pageY / 2}px`)
//             .style("opacity", 1);
//         })
//         .on("mouseleave", () => {
//           tooltip.style("opacity", 0);
//         });

//       pulse(dot, initialOpacity);
//       setDots((prevDots) => [...prevDots, dot]);
//     });
//   };

//   const getWordPercentage = (currentTime) => {
//     let closestTime = Math.floor(currentTime / 30) * 30 * 1000;

//     let wordCountPercentage = [];
//     let totalWordCount = 0;
//     let userKeysWordCount = Object.keys(wordCount);

//     userKeysWordCount.forEach((userKey) => {
//       let userData = wordCount[userKey];
//       if (!userData) return;
//       let timeData = userData[0];
//       if (!timeData) return;
//       userData.forEach((timeData) => {
//         let time = timeData[0];
//         let wordCount = timeData[1];
//         if (time === closestTime) {
//           totalWordCount += wordCount;
//         }
//       });
//     });

//     userKeysWordCount.forEach((userKey) => {
//       let userData = wordCount[userKey];
//       if (!userData) return;
//       let timeData = userData[0];
//       if (!timeData) return;
//       userData.forEach((timeData) => {
//         let time = timeData[0];
//         let wordCount = timeData[1];
//         if (time === closestTime) {
//           let wordCountPercentageForUser = Math.round(
//             (wordCount / totalWordCount) * 100
//           );
//           wordCountPercentage.push([userKey, wordCountPercentageForUser]);
//         }
//       });
//     });
//     wordCountPercentage.forEach(
//       (array) => (array[0] = array[0].replace("speaker", "user"))
//     );
//     return wordCountPercentage;
//   };

//   return <div ref={chartRef} className="absolute w-full bg-black-200"></div>;
// };

// export default PolarGraph;

// // <style>
// // .tooltipUniverse {
// //   background: #323c51;
// //   color: white;
// //   border-radius: 8px;
// //   padding: 12px;
// //   position: absolute;
// //   text-align: center;
// //   width: fit-content;
// //   height: fit-content;
// //   font: 12px sans-serif;
// //   border: 0px;
// //   pointer-events: none;
// // }
// // </style>

import React from "react";

export default function PolarGraph() {
  return <div>PolarGraph</div>;
}
