import React, { useRef, useEffect, useState } from "react";
import * as echarts from "echarts";
import { getEmitter } from "@/utils/emitter";

interface VChartProps {
  opt: Object | (() => Object);
  height?: number;
  width?: number;
  type?: string;
  heatmap?: boolean;
}

const VChart: React.FC<VChartProps> = ({
  opt,
  height,
  width,
  type,
  heatmap = false,
}) => {
  const chartDiv = useRef<HTMLDivElement>(null);
  const [startTime] = useState(new Date());
  const [myChart, setMyChart] = useState<any>(null);

  useEffect(() => {
    const options = typeof opt === "function" ? opt() : opt;
    const chartInstance = echarts.init(chartDiv.current!, undefined, {
      height,
      width,
    });

    const setChartOptions = async () => {
      try {
        chartInstance.setOption(await options);
      } catch (e) {
        //
      }

      if (type === "gantt") {
        chartInstance.setOption({
          tooltip: {
            trigger: "axis",
            triggerOn: "click",
          },
          xAxis: {
            type: "time",
            axisLabel: {
              formatter: (value: number) =>
                echarts.time.format(
                  startTime.getTime() + value,
                  "{HH}:{mm}",
                  false
                ),
            },
            axisPointer: {
              value: 0,
              label: {
                show: true,
                formatter: (params: any) =>
                  echarts.time.format(
                    startTime.getTime() + params.value,
                    "{HH}:{mm}:{ss}",
                    false
                  ),
                backgroundColor: "#7581BD",
                margin: 20,
              },
              handle: {
                show: true,
                icon: "path://M2,8 L5,2 L8,8 L 2,8",
                size: 15,
                margin: 10,
                color: "#7581BD",
              },
            },
          },
        });
      } else if (type !== "ellipse") {
        chartInstance.setOption({
          tooltip: {
            trigger: "axis",
            triggerOn: "click",
          },
          xAxis: {
            type: "time",
            axisLabel: {
              formatter: (value: number) =>
                echarts.time.format(
                  startTime.getTime() + value,
                  "{HH}:{mm}",
                  false
                ),
            },
            axisPointer: {
              value: 0,
              label: {
                show: false,
                formatter: (params: any) =>
                  echarts.time.format(
                    startTime.getTime() + params.value,
                    "{HH}:{mm}:{ss}",
                    false
                  ),
                backgroundColor: "#7581BD",
                margin: 20,
              },
              handle: {
                show: true,
                icon: "path://M2,8 L5,2 L8,8 L 2,8",
                size: 15,
                margin: 10,
                color: "#7581BD",
              },
            },
          },
        });
      }
    };

    setChartOptions();

    const handleResize = () => {
      chartInstance.resize();
    };
    window.addEventListener("resize", handleResize);

    setMyChart(chartInstance);

    return () => {
      window.removeEventListener("resize", handleResize);
      chartInstance.dispose();
    };
  }, [opt, height, width, type, startTime]);

  useEffect(() => {
    if (!myChart) return;

    const updateChartOptions = () => {
      if (type === "gantt") {
        myChart.setOption({
          xAxis: {
            type: "time",
            axisLabel: {
              formatter: (value: number) =>
                echarts.time.format(
                  startTime.getTime() + value,
                  "{HH}:{mm}",
                  false
                ),
            },
          },
        });
      } else if (type !== "ellipse") {
        myChart.setOption({
          xAxis: {
            type: "time",
            axisLabel: {
              formatter: (value: number) =>
                echarts.time.format(
                  startTime.getTime() + value,
                  "{HH}:{mm}",
                  false
                ),
            },
          },
        });
      }
    };

    updateChartOptions();
  }, [type, startTime, myChart]);

  useEffect(() => {
    if (!myChart) return;

    const emitter = getEmitter();

    const handleVideoTimeUpdate = (i: number) => {
      const new_dataZoom_position = (i / 2233) * 100;
      const currentDataZoom = myChart.getOption().dataZoom[0];
      const dataZoom_range = currentDataZoom.end - currentDataZoom.start;
      let new_start = new_dataZoom_position - dataZoom_range / 2;
      let new_end = new_dataZoom_position + dataZoom_range / 2;

      if (new_start < 0) {
        new_end -= new_start;
        new_start = 0;
      } else if (new_end > 100) {
        new_start -= new_end - 100;
        new_end = 100;
      }

      myChart.setOption({
        dataZoom: [
          {
            type: "inside",
            start: new_start,
            end: new_end,
          },
        ],
      });

      echartsUpdate(i);
    };

    const handleLegendUnSelect = (user: string | string[]) => {
      if (Array.isArray(user)) {
        user.forEach((e) =>
          myChart.dispatchAction({
            type: "legendUnSelect",
            name: e,
          })
        );
      } else {
        myChart.dispatchAction({
          type: "legendUnSelect",
          name: user,
        });
      }
    };

    const handleLegendHighlight = () => {
      myChart.dispatchAction({
        type: "legendUnSelect",
      });
    };

    const handleLegendAllSelect = () => {
      myChart.dispatchAction({
        type: "legendAllSelect",
      });
    };

    emitter.on("video_time_update", handleVideoTimeUpdate);
    emitter.on("legendUnSelect", handleLegendUnSelect);
    emitter.on("legendHighlight", handleLegendHighlight);
    emitter.on("legendAllSelect", handleLegendAllSelect);

    return () => {
      emitter.off("video_time_update", handleVideoTimeUpdate);
      emitter.off("legendUnSelect", handleLegendUnSelect);
      emitter.off("legendHighlight", handleLegendHighlight);
      emitter.off("legendAllSelect", handleLegendAllSelect);
    };
  }, [myChart]);

  const echartsUpdate = (value: number) => {
    myChart.setOption({
      xAxis: {
        axisPointer: {
          value: value * 1000,
        },
      },
    });
  };

  return <div ref={chartDiv} className="w-full h-full"></div>;
};

export default VChart;
