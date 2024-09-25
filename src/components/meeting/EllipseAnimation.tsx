// import React, { useEffect, useRef, useState } from "react";
// import mitt from "mitt";

// const emitter = mitt();

// interface EllipseAnimationProps {
//   width: number;
//   height: number;
//   userList: Array<any>;
//   data: Array<any>;
//   currentUser: number;
//   imageUrl: string;
// }

// const EllipseAnimation: React.FC<EllipseAnimationProps> = ({
//   width,
//   height,
//   userList,
//   data: initialData,
//   currentUser,
//   imageUrl,
// }) => {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);
//   const [playing, setPlaying] = useState(false);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [img, setImg] = useState<HTMLImageElement | null>(null);
//   const [currentEllipse, setCurrentEllipse] = useState(0);
//   const [t, setT] = useState(0);
//   const [data, setData] = useState(initialData);
//   const [animationFrameId, setAnimationFrameId] = useState<number | null>(null);
//   const [lastPositions, setLastPositions] = useState<
//     { x: number; y: number; radiusX: number; radiusY: number }[]
//   >([]);

//   useEffect(() => {
//     const image = new Image();
//     fetch(
//       //   `/api/meeting/img/${window.location.pathname.split("/")[2]}/${userList[currentUser || 0]}.jpg`
//       `/assets/temp/userprofile.png`,
//     )
//       .then((res) => res.blob())
//       .then((blob) => {
//         image.src = URL.createObjectURL(blob);
//         setImg(image);
//       });
//   }, [userList, currentUser]);

//   useEffect(() => {
//     const fetchData = () => {
//       const updatedData = initialData?.map((item) => {
//         return item[currentUser || 0].map(
//           (innerItem: number, index: number) => {
//             if (index === 0) {
//               return ((innerItem * 100 + 100) / 200) * 300;
//             } else if (index === 1) {
//               return ((innerItem * -100 + 100) / 200) * 300;
//             } else if (index === 2) {
//               return innerItem === 0 ? 0 : ((innerItem * 100) / 200) * 300;
//             } else if (index === 3) {
//               return innerItem === 0 ? 0 : ((innerItem * 100) / 200) * 300;
//             }
//           },
//         );
//       });
//       setData(updatedData);
//     };

//     fetchData();
//   }, [initialData, currentUser]);

//   useEffect(() => {
//     const animateEllipse = () => {
//       if (!canvasRef.current || !playing) return;

//       const canvas = canvasRef.current;
//       const ctx = canvas.getContext("2d")!;
//       const maxX = 300;
//       const maxY = 300;

//       const ellipseData1 = data[currentEllipse];
//       const ellipseData2 = data[(currentEllipse + 1) % data.length];

//       if (!ellipseData1 || !ellipseData2) return;

//       const normalizedEllipseData1_1 = (ellipseData1[1] - maxY / 2) / maxY;
//       const normalizedEllipseData2_1 = (ellipseData2[1] - maxY / 2) / maxY;

//       let y = (1 - t) * normalizedEllipseData1_1 + t * normalizedEllipseData2_1;
//       y = y * height + height / 2;

//       const normalizedEllipseData1_0 = (ellipseData1[0] - maxX / 2) / maxX;
//       const normalizedEllipseData2_0 = (ellipseData2[0] - maxX / 2) / maxX;

//       let x = (1 - t) * normalizedEllipseData1_0 + t * normalizedEllipseData2_0;
//       x = x * width + width / 2;

//       let radiusX = 10;
//       let radiusY = 10;

//       const newPositions = [...lastPositions, { x, y, radiusX, radiusY }];
//       if (newPositions.length > (currentUser > 0 ? 0 : 120)) {
//         newPositions.shift();
//       }
//       setLastPositions(newPositions);

//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       ctx.fillStyle = "rgba(233, 46, 251, 0.1)";
//       newPositions.forEach((pos) => {
//         ctx.lineWidth = 2;
//         ctx.beginPath();
//         ctx.ellipse(pos.x, pos.y, pos.radiusX, pos.radiusY, 0, 0, 2 * Math.PI);
//         ctx.fill();
//       });

//       ctx.fillStyle = "rgba(233, 46, 251, 1)";
//       if (currentUser > 0 && img) {
//         ctx.save();
//         ctx.beginPath();
//         ctx.arc(x, y, 15, 0, 2 * Math.PI);
//         ctx.clip();
//         ctx.drawImage(img, x - 15, y - 15, 30, 30);
//         ctx.restore();
//       } else {
//         ctx.beginPath();
//         ctx.ellipse(x, y, radiusX, radiusY, 0, 0, 2 * Math.PI);
//         ctx.fill();
//       }

//       let newT = t + 0.02;
//       if (newT >= 1) {
//         newT = 0;
//         setCurrentEllipse((prev) => (prev + 1) % data.length);
//       }
//       setT(newT);

//       setAnimationFrameId(requestAnimationFrame(animateEllipse));
//     };

//     if (playing) {
//       animateEllipse();
//     } else if (animationFrameId !== null) {
//       cancelAnimationFrame(animationFrameId);
//     }

//     return () => {
//       if (animationFrameId !== null) {
//         cancelAnimationFrame(animationFrameId);
//       }
//     };
//   }, [playing, t, currentEllipse, data, lastPositions, img, width, height]);

//   useEffect(() => {
//     const handlePlaying = (currentTime: number) => {
//       setPlaying(true);
//       setCurrentEllipse(Math.floor(currentTime));
//       setT(currentTime - Math.floor(currentTime));
//     };

//     const handlePause = () => {
//       setPlaying(false);
//       if (animationFrameId !== null) {
//         cancelAnimationFrame(animationFrameId);
//       }
//     };

//     const handleSeekToSecond = (i: number) => {
//       setCurrentEllipse(Math.floor(i));
//       setT(i - Math.floor(i));
//       if (animationFrameId !== null) {
//         cancelAnimationFrame(animationFrameId);
//       }
//     };

//     emitter.on("playing", handlePlaying);
//     emitter.on("pause", handlePause);
//     emitter.on("seekToSecond", handleSeekToSecond);

//     return () => {
//       emitter.off("playing", handlePlaying);
//       emitter.off("pause", handlePause);
//       emitter.off("seekToSecond", handleSeekToSecond);
//     };
//   }, [animationFrameId]);

//   return <canvas ref={canvasRef} width={width} height={height} />;
// };

// export default EllipseAnimation;

import React from "react";

export default function EllipseAnimation() {
  return <div>EllipseAnimation</div>;
}
