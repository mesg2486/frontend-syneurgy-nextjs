// import React, { useEffect, useState, useCallback, useMemo } from "react";
// // import { useDebounce } from "use-debounce";
// import _ from "lodash";
// // import EllipseAnimation from "@/components/meetingDetails/AnimationHeatmap";
// // import { heatmapChartOptions } from "@/helpers/charts/heatmap";
// // import { useHeatmapStore, useAuthStore } from "@/stores";
// import VChart from "./Vchart";
// import { ellipseChartData } from "./ellipse.echarts";
// import EllipseAnimation from "./EllipseAnimation";
// import { heatmapChartOptions } from "./HeatmapChartOptions";

// const Heatmap = ({
//   width__graph,
//   height__graph,
//   heatmap__category,
//   changed_category,
// }: any) => {
//   //   const heatmapStore = useHeatmapStore();
//   //   const authStore = useAuthStore();
//   const heatmapStore = {};
//   const authStore = {};

//   const [widthChange, setWidthChange] = useState(0);
//   const [currentUser, setCurrentUser] = useState(0);

//   const debouncedUpdateWidth = useCallback(
//     _.debounce(() => {
//       setWidthChange(window.innerWidth);
//     }, 500),
//     [],
//   );

//   useEffect(() => {
//     window.addEventListener("resize", debouncedUpdateWidth);
//     setTimeout(() => {
//       debouncedUpdateWidth();
//     }, 100);
//     return () => {
//       window.removeEventListener("resize", debouncedUpdateWidth);
//     };
//   }, [debouncedUpdateWidth]);

//   const timeline = useMemo(
//     () => heatmapStore.timeline,
//     [heatmapStore.timeline],
//   );
//   const userList = useMemo(
//     () => heatmapStore.userList,
//     [heatmapStore.userList],
//   );
//   const data = useMemo(() => heatmapStore.data, [heatmapStore.data]);
//   // const heatmapData = useMemo(
//   //   () => heatmapStore.heatmapData,
//   //   [heatmapStore.heatmapData]
//   // );
//   const heatmapData = [
//     [82, 135, 1],
//     [77, 122, 1],
//     [77, 123, 1],
//     [77, 124, 1],
//     [77, 125, 1],
//     [77, 126, 1],
//     [77, 127, 1],
//     [77, 128, 1],
//     [77, 129, 1],
//     [77, 130, 1],
//     [78, 117, 1],
//     [78, 118, 1],
//     [78, 119, 1],
//     [78, 120, 1],
//     [78, 121, 1],
//     [78, 122, 1],
//     [78, 123, 1],
//     [78, 124, 1],
//     [78, 125, 1],
//     [78, 126, 1],
//     [78, 127, 1],
//     [78, 128, 1],
//     [78, 129, 1],
//     [78, 130, 1],
//     [78, 131, 1],
//     [78, 132, 1],
//     [78, 133, 1],
//     [78, 134, 1],
//     [78, 135, 1],
//     [79, 115, 1],
//     [79, 116, 1],
//     [79, 117, 1],
//     [79, 118, 1],
//     [79, 119, 1],
//     [79, 120, 1],
//     [79, 121, 1],
//     [79, 122, 1],
//     [79, 123, 1],
//     [79, 124, 1],
//     [79, 125, 1],
//     [79, 126, 1],
//     [79, 127, 1],
//     [79, 128, 1],
//     [79, 129, 1],
//     [79, 130, 1],
//     [79, 131, 1],
//     [79, 132, 1],
//     [79, 133, 1],
//     [79, 134, 1],
//     [79, 135, 1],
//     [79, 136, 1],
//     [79, 137, 1],
//     [80, 112, 1],
//     [80, 113, 1],
//     [80, 114, 1],
//     [80, 115, 1],
//     [80, 116, 1],
//     [80, 117, 1],
//     [80, 118, 1],
//     [80, 119, 1],
//     [80, 120, 1],
//     [80, 121, 1],
//     [80, 122, 1],
//     [80, 123, 1],
//     [80, 124, 1],
//     [80, 125, 1],
//   ];

//   const baseUrl = process.env.REACT_APP_BACKEND_URL;
//   const defaultImage = useMemo(
//     // () => new URL("/assets/temp/userprofile.png", import.meta.url).href,
//     () => "/assets/temp/userprofile.png",
//     [],
//   );
//   const imageUrl1 = useMemo(
//     () =>
//       authStore.currentUser?.photo && authStore.currentUser.photo.length > 0
//         ? baseUrl + authStore.currentUser.photo
//         : defaultImage,
//     [authStore.currentUser, baseUrl, defaultImage],
//   );

//   const updateCurrentUser = (value) => {
//     setCurrentUser(value);
//   };

//   const onClickPosition = () => {
//     if (heatmap__category === 0) {
//       return;
//     }
//     // Emit clickCategory event
//   };

//   const onClickFace = () => {
//     if (heatmap__category !== 0) {
//       return;
//     }
//     // Emit clickCategory event
//   };

//   return (
//     <div className="relative w-full h-full">
//       {timeline?.length > 0 && userList.length > 0 && (
//         <VChart
//           key={
//             widthChange + JSON.stringify(timeline) + JSON.stringify(userList)
//           }
//           opt={ellipseChartData(timeline, userList)}
//           height={height__graph}
//           width={width__graph}
//           type="ellipse"
//           className="absolute bg-transparent"
//           style={{ zIndex: 1 }}
//         />
//       )}
//       <div className="w-full h-full bg-black-200">
//         <EllipseAnimation
//           key={currentUser + JSON.stringify(userList) + JSON.stringify(data)}
//           className="absolute flex items-center justify-center w-full h-full bg-transparent"
//           width={width__graph - height__graph * 0.25}
//           height={height__graph - (height__graph * 0.25 - 10)}
//           userList={userList}
//           currentUser={currentUser}
//           data={data}
//           imageUrl={imageUrl1}
//           style={{ zIndex: 2, transform: "translateY(-5px)" }}
//         />
//       </div>
//       <VChart
//         key={widthChange + JSON.stringify(heatmapData)}
//         opt={heatmapChartOptions(heatmapData)}
//         height={height__graph}
//         width={width__graph}
//         type="ellipse"
//         heatmap
//         className="absolute bg-black-200"
//         style={{ transform: "scaleY(-1)", top: "-10px" }}
//       />
//       <div
//         className="absolute flex flex-row w-full left-4 top-5"
//         style={{ zIndex: 2 }}
//       >
//         <div
//           className={`px-2 py-1 cursor-pointer text-xs font-medium border mr-2 rounded-[4px] ${
//             heatmap__category === 0
//               ? "bg-gray-100 text-black-200 border-gray-700"
//               : "bg-purple-100/10 text-green-50 border-green-50"
//           }`}
//           onClick={onClickPosition}
//         >
//           Position
//         </div>
//         {/* Uncomment the below block to enable Face button */}
//         {/* <div
//           className={`px-2 py-1 cursor-pointer text-xs font-medium border rounded-[4px] ${
//             heatmap__category !== 0
//               ? 'bg-gray-100 text-black-200 border-gray-700'
//               : 'bg-purple-100/10 text-green-50 border-green-50'
//           }`}
//           onClick={onClickFace}
//         >
//           Face
//         </div> */}
//         <div className="flex justify-end w-full mr-10 gap-[10px]">
//           {userList?.map((user, index) => (
//             <div
//               key={index}
//               className={`flex flex-col items-center justify-center px-2 py-1 cursor-pointer text-xs font-medium border rounded-[4px] ${
//                 currentUser === index
//                   ? "bg-gray-100 text-black-200 border-gray-700"
//                   : "bg-purple-100/10 text-green-50 border-green-50"
//               }`}
//               onClick={() => updateCurrentUser(index)}
//             >
//               <div className="flex flex-row items-center justify-center">
//                 <div>{user}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Heatmap;

import React from "react";

export default function Heatmap() {
  return <div>Heatmap</div>;
}
