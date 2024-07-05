// @ts-nocheck
import type { EChartsOption } from "echarts";
import merge from "deepmerge";
import color from "./color";

const isSpec = (key: string) => {
  return key.includes("mean") || key.includes("sync");
};

export function LineChart(
  dataIndividuals = {},
  dataTeam: any = {},
  specColorKey: string,
  single: boolean,
  marks: { [key: string]: { start: number; end: number; label?: number }[] },
  customOpt?: EChartsOption
) {
  const opt: EChartsOption = {
    grid: {
      top: 60,
      left: 100,
      right: 100,
      bottom: 60,
    },
    dataZoom: [
      {
        type: "inside",
        start: 0,
        end: 10,
      },
      {
        type: "slider",
        left: 100,
        right: 110,
        bottom: 10,
        start: 0,
        end: 100,
        handleSize: "10%",
        dataBackground: {
          areaStyle: {
            opacity: 0.2,
            color: "#76FD3F",
          },
          lineStyle: {
            width: 1,
            opacity: 1,
            color: "#76FD3F",
          },
        },
        moveHandleStyle: {
          color: "#fff",
          opacity: 1,
          // change size
        },
        handleStyle: {
          color: "#fff",
          opacity: 1,
          borderWidth: 3,
          borderColor: "#fff",
        },
        // handle height
        // make a rectagle 24px height 12px width
        handleIcon: "path://M 0,0 L 12,0 L 12,24 L 0,24 L 0,0 z",
        borderColor: "rgba(255, 255, 255, 0.3)",
        fillerColor: "rgba(255, 255, 255, 0.3)",
        labelFormatter: () => {
          return ``;
        },
      },
    ],
    tooltip: {},
    xAxis: {
      type: "time",
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { show: false },
    },
    yAxis: {
      min: -1,
      max: 1,
      show: true,
      type: "value",
      // max: function (value: any) {
      //   let p = value.max.toString().split('.')[1].length
      //   return Math.floor(value.max * 10 ** p + 1) / 10 ** p;
      // },
      boundaryGap: [0, "100%"],
      splitLine: {
        show: true,
        lineStyle: {
          color: "#303A52",
        },
      },
      axisLabel: { show: false },
    },
    legend: {
      data: Object?.keys(dataIndividuals)?.sort(),
      show: false,
    },
    //@ts-ignore
    series: [
      ...Object.keys(dataTeam).map((e) => {
        return {
          name: e,
          type: "line",
          smooth: true,
          symbol: "none",
          data: dataTeam[e],
          sampling: "lttb",
          lineStyle: isSpec(e)
            ? {
                width: 4,
                color: color[specColorKey],
              }
            : { width: 1 },
          itemStyle: {
            color: isSpec(e) ? color[specColorKey] : color[e],
          },
          markArea: single
            ? {
                data: marks["team"].map((m: any) => [
                  {
                    name: "",
                    itemStyle: { color: color[specColorKey] + "75" },
                    xAxis: parseInt(m.start),
                  },
                  {
                    xAxis: parseInt(m.end),
                  },
                ]),
              }
            : // eslint-disable-next-line no-prototype-builtins
              marks.hasOwnProperty(e)
              ? {
                  label: {
                    rotate: 35,
                    offset: [25, 0],
                  },
                  data: (
                    marks as {
                      [key: string]: {
                        start: number;
                        end: number;
                        label?: number;
                      }[];
                    }
                  )[e].map((m, index) => [
                    {
                      name: "section " + (index + 1),
                      xAxis: m.start,
                      itemStyle: {
                        color: `${color[e]}75`,
                      },
                    },
                    {
                      xAxis: m.end,
                    },
                  ]),
                }
              : {},
        };
      }),
      ...Object.keys(dataIndividuals)
        .filter((e) => !isSpec(e))
        .map((e) => {
          return {
            name: e,
            type: "line",
            smooth: true,
            symbol: "none",
            data: dataIndividuals[e],
            sampling: "lttb",
            lineStyle: isSpec(e)
              ? {
                  width: 4,
                  color: color[specColorKey],
                }
              : { width: 1 },
            itemStyle: {
              color: isSpec(e) ? color[specColorKey] : color[e],
            },
            markArea: single
              ? {
                  data: marks["team"].map((m: any) => [
                    {
                      name: "",
                      itemStyle: { color: color[specColorKey] + "75" },
                      xAxis: parseInt(m.start),
                    },
                    {
                      xAxis: parseInt(m.end),
                    },
                  ]),
                }
              : // eslint-disable-next-line no-prototype-builtins
                marks.hasOwnProperty(e)
                ? {
                    label: {
                      rotate: 35,
                      offset: [25, 0],
                    },
                    data: (
                      marks as {
                        [key: string]: {
                          start: number;
                          end: number;
                          label?: number;
                        }[];
                      }
                    )[e].map((m, index) => [
                      {
                        name: "section " + (index + 1),
                        xAxis: m.start,
                        itemStyle: {
                          color: `${color[e]}75`,
                        },
                      },
                      {
                        xAxis: m.end,
                      },
                    ]),
                  }
                : {},
          };
        }),
    ],
  };

  return customOpt
    ? (merge<EChartsOption>(opt, customOpt) as EChartsOption)
    : opt;
}
