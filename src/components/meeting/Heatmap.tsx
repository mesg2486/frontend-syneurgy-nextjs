// import React, { useEffect, useState, useCallback, useMemo } from "react";
// // import { useDebounce } from "use-debounce";
// import _ from "lodash";
// // import EllipseAnimation from "@/components/meetingDetails/AnimationHeatmap";
// // import { heatmapChartOptions } from "@/helpers/charts/heatmap";
// // import { useHeatmapStore, useAuthStore } from "@/stores";
// import VChart from "./Vchart";
// import { ellipseChartData } from "./ellipse.echarts";

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
//     []
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
//     [heatmapStore.timeline]
//   );
//   const userList = useMemo(
//     () => heatmapStore.userList,
//     [heatmapStore.userList]
//   );
//   const data = useMemo(() => heatmapStore.data, [heatmapStore.data]);
//   const heatmapData = useMemo(
//     () => heatmapStore.heatmapData,
//     [heatmapStore.heatmapData]
//   );

//   const baseUrl = process.env.REACT_APP_BACKEND_URL;
//   const defaultImage = useMemo(
//     () => new URL("../assets/img/temps/userprofile.png", import.meta.url).href,
//     []
//   );
//   const imageUrl1 = useMemo(
//     () =>
//       authStore.currentUser?.photo && authStore.currentUser.photo.length > 0
//         ? baseUrl + authStore.currentUser.photo
//         : defaultImage,
//     [authStore.currentUser, baseUrl, defaultImage]
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
//       {timeline.length > 0 && userList.length > 0 && (
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
//           {userList.map((user, index) => (
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
