import type { EChartsOption } from 'echarts';

export const ellipseChartData = (timeline: Array<any>, userList: Array<any>) => {
  return {
    // hide x and y axis lines
    dataZoom: [
      {
        show: false,
      },
    ],
    timeline: {
      show: false,
    },
    xAxis: {
      name: '',
      min: -6,
      max: 6,
      // hide labels
      axisLabel: {
        show: false,
      },
      // hide name
      axisLine: {
        show: false,
      },
      // hide ticks
      axisTick: {
        show: false,
      },
      splitLine: {
        // add more space between split lines
        show: true,
        lineStyle: {
          opacity: 0.0,
        },
      },
    },
    yAxis: {
      name: '',
      min: -6,
      max: 6,
      axisLabel: {
        show: false,
      },
      axisLine: {
        show: false, // Hide full Line
      },
      axisTick: {
        show: false, // Hide Ticks,
      },
      splitLine: {
        lineStyle: {
          opacity: 0.0,
        },
      },
    },
    // grid: {
    //   show: false,
    //   // hide labels
    //   containLabel: false,
    // },
    legend: {
      data: userList,
      show: false,
    },
    options: timeline.map((m: any, index: number) => {
      return {
        series: [
          {
            name: 'displayTxt',
            type: 'custom',
            renderItem: displayTxt,
            data: [[]],
            style: {
              zIndex: 10,
            },
          },
        ],
      };
    }),
  } as EChartsOption;
};

const displayTxt = (params: any, api: any) => {
  const [x0, y0] = api.coord([6, 6]);
  const [x00, y00] = api.coord([-6, -6]);
  const [xo, yo] = api.coord([0, 0]);
  return {
    type: 'group',
    children: [
      {
        type: 'line',
        style: {
          stroke: '#ffffff',
          lineWidth: 1,
          opacity: 0.5,
          // lineDash: [3],
        },
        shape: {
          x1: x0,
          y1: yo,
          x2: x00,
          y2: yo,
        },
      },
      {
        type: 'line',
        style: {
          stroke: '#ffffff',
          lineWidth: 1,
          opacity: 0.5,
        },
        shape: {
          x1: xo,
          y1: y0,
          x2: xo,
          y2: y00,
        },
      },
      {
        type: 'group',
        x: api.coord([0, 0])[0],
        y: api.coord([0, 6])[1],
        children: [
          {
            type: 'text',
            style: {
              y: -15,
              // text: 'Alert, Awake, Attentive',
              text: 'Team Excitement (Excited)',
              fontSize: 12,
              fill: '#FFFFFF',
              textAlign: 'center',
              fontFamily: 'Plus Jakarta Sans',
            },
          },
        ],
      },
      {
        type: 'group',
        x: api.coord([0, 0])[0],
        y: api.coord([0, -6])[1],
        children: [
          {
            type: 'text',
            style: {
              y: 5,
              text: 'Team Excitement (Calm)',
              fontSize: 12,
              fill: '#FFFFFF',
              textAlign: 'center',
              fontFamily: 'Plus Jakarta Sans',
            },
          },
        ],
      },
      {
        type: 'group',
        x: api.coord([6.1, 0.5])[0],
        y: api.coord([6.1, 0.5])[1],
        children: [
          {
            type: 'text',
            // rotate 90 degree
            rotation: Math.PI / 2,
            y: api.coord([0, 6])[1],
            style: {
              text: 'Team Emotion (Positive)',
              fontSize: 12,
              fill: '#FFFFFF',
              textAlign: 'left',
              fontFamily: 'Plus Jakarta Sans',
            },
          },
        ],
      },
      {
        type: 'group',
        x: api.coord([-6.3, 0.5])[0],
        y: api.coord([-6.3, 0.5])[1],
        children: [
          {
            type: 'text',
            y: api.coord([-6, 0])[0],
            rotation: Math.PI / 2,
            style: {
              text: 'Team Emotion (Negative)',
              fontSize: 12,
              fill: '#FFFFFF',
              textAlign: 'left',
              fontFamily: 'Plus Jakarta Sans',
            },
          },
        ],
      },
      {
        type: 'group',
        x: api.coord([1.5, 1.5])[0],
        y: api.coord([1.5, 1.5])[1],
        children: [
          {
            type: 'text',
            // margin left 10px
            x: 10,
            y: -5,
            style: {
              text: 'Engaged\nOptimistic',
              fontSize: 10,
              fill: '#FFFFFF',
              textAlign: 'left',
              fontFamily: 'Plus Jakarta Sans',
            },
          },
          {
            // white dot
            type: 'circle',
            shape: {
              cx: 0,
              cy: 0,
              r: 2,
            },
            style: {
              fill: '#FFFFFF',
            },
          },
          {
            // outer circle
            type: 'circle',
            shape: {
              cx: 0,
              cy: 0,
              r: 3,
            },
            style: {
              stroke: '#323C51',
              lineWidth: 2,
              fill: '#FFFFFF',
              fillOpacity: 0.0,
            },
          },
        ],
      },
      //第一象限
      {
        type: 'group',
        x: api.coord([0.7, 4.5])[0],
        y: api.coord([0.7, 4.5])[1],
        children: [
          {
            type: 'text',
            x: 10,
            y: -5,
            style: {
              text: 'Active Listening',
              fontSize: 10,
              fill: '#FFFFFF',
              textAlign: 'left',
              fontFamily: 'Plus Jakarta Sans',
            },
          },
          {
            // white dot
            type: 'circle',
            shape: {
              cx: 0,
              cy: 0,
              r: 2,
            },
            style: {
              fill: '#FFFFFF',
            },
          },
          {
            // outer circle
            type: 'circle',
            shape: {
              cx: 0,
              cy: 0,
              r: 3,
            },
            style: {
              stroke: '#323C51',
              lineWidth: 2,
              fill: '#FFFFFF',
              fillOpacity: 0.0,
            },
          },
        ],
      },
      {
        type: 'group',
        x: api.coord([4.5, 4.5])[0],
        y: api.coord([4.5, 4.5])[1],
        children: [
          {
            type: 'text',
            x: 10,
            y: -5,
            style: {
              text: 'Inspired\nEnergized',
              fontSize: 10,
              fill: '#FFFFFF',
              textAlign: 'left',
              fontFamily: 'Plus Jakarta Sans',
            },
          },
          {
            // white dot
            type: 'circle',
            shape: {
              cx: 0,
              cy: 0,
              r: 2,
            },
            style: {
              fill: '#FFFFFF',
            },
          },
          {
            // outer circle
            type: 'circle',
            shape: {
              cx: 0,
              cy: 0,
              r: 3,
            },
            style: {
              stroke: '#323C51',
              lineWidth: 2,
              fill: '#FFFFFF',
              fillOpacity: 0.0,
            },
          },
        ],
      },
      //第二象限
      {
        type: 'group',
        x: api.coord([3, -3])[0],
        y: api.coord([3, -3])[1],
        children: [
          {
            type: 'text',
            x: 10,
            y: -5,
            style: {
              text: 'Relaxed\nHarmonious',
              fontSize: 10,
              fill: '#FFFFFF',
              textAlign: 'left',
              fontFamily: 'Plus Jakarta Sans',
            },
          },
          {
            // white dot
            type: 'circle',
            shape: {
              cx: 0,
              cy: 0,
              r: 2,
            },
            style: {
              fill: '#FFFFFF',
            },
          },
          {
            // outer circle
            type: 'circle',
            shape: {
              cx: 0,
              cy: 0,
              r: 3,
            },
            style: {
              stroke: '#323C51',
              lineWidth: 2,
              fill: '#FFFFFF',
              fillOpacity: 0.0,
            },
          },
        ],
      },
      {
        type: 'group',
        x: api.coord([4.5, -1.5])[0],
        y: api.coord([4.5, -1.5])[1],
        children: [
          {
            type: 'text',
            x: 10,
            y: -5,
            style: {
              text: 'Content\nSatisfied',
              fontSize: 10,
              fill: '#FFFFFF',
              textAlign: 'left',
              fontFamily: 'Plus Jakarta Sans',
            },
          },
          {
            // white dot
            type: 'circle',
            shape: {
              cx: 0,
              cy: 0,
              r: 2,
            },
            style: {
              fill: '#FFFFFF',
            },
          },
          {
            // outer circle
            type: 'circle',
            shape: {
              cx: 0,
              cy: 0,
              r: 3,
            },
            style: {
              stroke: '#323C51',
              lineWidth: 2,
              fill: '#FFFFFF',
              fillOpacity: 0.0,
            },
          },
        ],
      },
      {
        type: 'group',
        x: api.coord([0.75, -4.5])[0],
        y: api.coord([0.75, -4.5])[1],
        children: [
          {
            type: 'text',
            x: 10,
            y: -5,
            style: {
              text: 'Passive Listening',
              fontSize: 10,
              fill: '#FFFFFF',
              textAlign: 'left',
              fontFamily: 'Plus Jakarta Sans',
            },
          },
          {
            // white dot
            type: 'circle',
            shape: {
              cx: 0,
              cy: 0,
              r: 2,
            },
            style: {
              fill: '#FFFFFF',
            },
          },
          {
            // outer circle
            type: 'circle',
            shape: {
              cx: 0,
              cy: 0,
              r: 3,
            },
            style: {
              stroke: '#323C51',
              lineWidth: 2,
              fill: '#FFFFFF',
              fillOpacity: 0.0,
            },
          },
        ],
      },
      //第三象限
      {
        type: 'group',
        x: api.coord([-3, -3])[0],
        y: api.coord([-3, -3])[1],
        children: [
          {
            type: 'text',
            x: 10,
            y: -5,
            style: {
              text: 'Disengaged\nApathetic',
              fontSize: 10,
              fill: '#FFFFFF',
              textAlign: 'left',
              fontFamily: 'Plus Jakarta Sans',
            },
          },
          {
            // white dot
            type: 'circle',
            shape: {
              cx: 0,
              cy: 0,
              r: 2,
            },
            style: {
              fill: '#FFFFFF',
            },
          },
          {
            // outer circle
            type: 'circle',
            shape: {
              cx: 0,
              cy: 0,
              r: 3,
            },
            style: {
              stroke: '#323C51',
              lineWidth: 2,
              fill: '#FFFFFF',
              fillOpacity: 0.0,
            },
          },
        ],
      },
      {
        type: 'group',
        x: api.coord([-1.5, -1.5])[0],
        y: api.coord([-1.5, -1.5])[1],
        children: [
          {
            type: 'text',
            x: 10,
            y: -5,
            style: {
              text: 'Frustrated\nResigned',
              fontSize: 10,
              fill: '#FFFFFF',
              textAlign: 'left',
              fontFamily: 'Plus Jakarta Sans',
            },
          },
          {
            // white dot
            type: 'circle',
            shape: {
              cx: 0,
              cy: 0,
              r: 2,
            },
            style: {
              fill: '#FFFFFF',
            },
          },
          {
            // outer circle
            type: 'circle',
            shape: {
              cx: 0,
              cy: 0,
              r: 3,
            },
            style: {
              stroke: '#323C51',
              lineWidth: 2,
              fill: '#FFFFFF',
              fillOpacity: 0.0,
            },
          },
        ],
      },
      //第四象限
      {
        type: 'group',
        x: api.coord([-1.5, 3])[0],
        y: api.coord([-1.5, 3])[1],
        children: [
          {
            type: 'text',
            x: 10,
            y: -5,
            style: {
              text: 'Anxious\nFearful',
              fontSize: 10,
              fill: '#FFFFFF',
              textAlign: 'left',
              fontFamily: 'Plus Jakarta Sans',
            },
          },
          {
            // white dot
            type: 'circle',
            shape: {
              cx: 0,
              cy: 0,
              r: 2,
            },
            style: {
              fill: '#FFFFFF',
            },
          },
          {
            // outer circle
            type: 'circle',
            shape: {
              cx: 0,
              cy: 0,
              r: 3,
            },
            style: {
              stroke: '#323C51',
              lineWidth: 2,
              fill: '#FFFFFF',
              fillOpacity: 0.0,
            },
          },
        ],
      },
      {
        type: 'group',
        x: api.coord([-4.5, 4.5])[0],
        y: api.coord([-4.5, 4.5])[1],
        children: [
          {
            type: 'text',
            x: 10,
            y: -5,
            style: {
              text: 'Stressed\nOverwhelmed:',
              fontSize: 10,
              fill: '#FFFFFF',
              textAlign: 'left',
              fontFamily: 'Plus Jakarta Sans',
            },
          },
          {
            // white dot
            type: 'circle',
            shape: {
              cx: 0,
              cy: 0,
              r: 2,
            },
            style: {
              fill: '#FFFFFF',
            },
          },
          {
            // outer circle
            type: 'circle',
            shape: {
              cx: 0,
              cy: 0,
              r: 3,
            },
            style: {
              stroke: '#323C51',
              lineWidth: 2,
              fill: '#FFFFFF',
              fillOpacity: 0.0,
            },
          },
        ],
      },
      // 8 line from top to bottom from left to right
      {
        type: 'group',
        children: [
          {
            type: 'line',
            shape: {
              // x1: xo - 75 use api.coord([1, 0])[0] instead
              x1: api.coord([-1.5, 0])[0],
              y1: y0,
              x2: api.coord([-1.5, 0])[0],
              y2: y00,
            },
            style: {
              stroke: '#FFFFFF',
              lineWidth: 0.5,
              opacity: 0.2,
            },
          },
          {
            type: 'line',
            shape: {
              x1: api.coord([-3, 0])[0],
              y1: y0,
              x2: api.coord([-3, 0])[0],
              y2: y00,
            },
            style: {
              stroke: '#FFFFFF',
              lineWidth: 0.5,
              opacity: 0.2,
              lineDash: [4],
            },
          },
          {
            type: 'line',
            shape: {
              x1: api.coord([-4.5, 0])[0],
              y1: y0,
              x2: api.coord([-4.5, 0])[0],
              y2: y00,
            },
            style: {
              stroke: '#FFFFFF',
              lineWidth: 0.5,
              opacity: 0.2,
            },
          },
          {
            type: 'line',
            shape: {
              x1: api.coord([-6, 0])[0],
              y1: y0,
              x2: api.coord([-6, 0])[0],
              y2: y00,
            },
            style: {
              stroke: '#FFFFFF',
              lineWidth: 0.5,
              opacity: 0.2,
            },
          },
        ],
      },
      {
        type: 'group',
        children: [
          {
            type: 'line',
            shape: {
              x1: api.coord([1.5, 0])[0],
              y1: y0,
              x2: api.coord([1.5, 0])[0],
              y2: y00,
            },
            style: {
              stroke: '#FFFFFF',
              lineWidth: 0.5,
              opacity: 0.2,
            },
          },
          {
            type: 'line',
            shape: {
              x1: api.coord([3, 0])[0],
              y1: y0,
              x2: api.coord([3, 0])[0],
              y2: y00,
            },
            style: {
              stroke: '#FFFFFF',
              lineWidth: 0.5,
              opacity: 0.2,
              lineDash: [4],
            },
          },
          {
            type: 'line',
            shape: {
              x1: api.coord([4.5, 0])[0],
              y1: y0,
              x2: api.coord([4.5, 0])[0],
              y2: y00,
            },
            style: {
              stroke: '#FFFFFF',
              lineWidth: 0.5,
              opacity: 0.2,
            },
          },
          {
            type: 'line',
            shape: {
              x1: api.coord([6, 0])[0],
              y1: y0,
              x2: api.coord([6, 0])[0],
              y2: y00,
            },
            style: {
              stroke: '#FFFFFF',
              lineWidth: 0.5,
              opacity: 0.2,
            },
          },
        ],
      },
      // horizontal lines
      {
        type: 'group',
        children: [
          {
            type: 'line',
            shape: {
              x1: x0,
              y1: api.coord([0, -1.5])[1],
              x2: x00,
              y2: api.coord([0, -1.5])[1],
            },
            style: {
              stroke: '#FFFFFF',
              lineWidth: 0.5,
              opacity: 0.2,
            },
          },
          {
            type: 'line',
            shape: {
              x1: x0,
              y1: api.coord([0, -3])[1],
              x2: x00,
              y2: api.coord([0, -3])[1],
            },
            style: {
              stroke: '#FFFFFF',
              lineWidth: 0.5,
              opacity: 0.2,
              lineDash: [4],
            },
          },
          {
            type: 'line',
            shape: {
              x1: x0,
              y1: api.coord([0, -4.5])[1],
              x2: x00,
              y2: api.coord([0, -4.5])[1],
            },
            style: {
              stroke: '#FFFFFF',
              lineWidth: 0.5,
              opacity: 0.2,
            },
          },
          {
            type: 'line',
            shape: {
              x1: x0,
              y1: api.coord([0, -6])[1],
              x2: x00,
              y2: api.coord([0, -6])[1],
            },
            style: {
              stroke: '#FFFFFF',
              lineWidth: 0.5,
              opacity: 0.2,
            },
          },
        ],
      },
      {
        type: 'group',
        children: [
          {
            type: 'line',
            shape: {
              x1: x0,
              y1: api.coord([0, 1.5])[1],
              x2: x00,
              y2: api.coord([0, 1.5])[1],
            },
            style: {
              stroke: '#FFFFFF',
              lineWidth: 0.5,
              opacity: 0.2,
            },
          },
          {
            type: 'line',
            shape: {
              x1: x0,
              y1: api.coord([0, 3])[1],
              x2: x00,
              y2: api.coord([0, 3])[1],
            },
            style: {
              stroke: '#FFFFFF',
              lineWidth: 0.5,
              opacity: 0.2,
              lineDash: [4],
            },
          },
          {
            type: 'line',
            shape: {
              x1: x0,
              y1: api.coord([0, 4.5])[1],
              x2: x00,
              y2: api.coord([0, 4.5])[1],
            },
            style: {
              stroke: '#FFFFFF',
              lineWidth: 0.5,
              opacity: 0.2,
            },
          },
          {
            type: 'line',
            shape: {
              x1: x0,
              y1: api.coord([0, 6])[1],
              x2: x00,
              y2: api.coord([0, 6])[1],
            },
            style: {
              stroke: '#FFFFFF',
              lineWidth: 0.5,
              opacity: 0.2,
            },
          },
        ],
      },
      // 1 quarter
      // horizontal lines
      {
        type: 'group',
        children: [
          {
            type: 'line',
            shape: {
              x1: api.coord([-4.35, 0])[0],
              y1: api.coord([0, -4.5])[1],
              x2: api.coord([-4.65, 0])[0],
              y2: api.coord([0, -4.5])[1],
            },
            style: {
              stroke: '#FFFFFF',
              lineWidth: 1,
              opacity: 0.3,
            },
          },
          {
            type: 'line',
            shape: {
              x1: api.coord([-4.35, 0])[0],
              y1: api.coord([0, -1.5])[1],
              x2: api.coord([-4.65, 0])[0],
              y2: api.coord([0, -1.5])[1],
            },
            style: {
              stroke: '#FFFFFF',
              lineWidth: 1,
              opacity: 0.3,
            },
          },
          {
            type: 'line',
            shape: {
              x1: api.coord([-4.35, 0])[0],
              y1: api.coord([0, 4.5])[1],
              x2: api.coord([-4.65, 0])[0],
              y2: api.coord([0, 4.5])[1],
            },
            style: {
              stroke: '#FFFFFF',
              lineWidth: 1,
              opacity: 0.3,
            },
          },
          {
            type: 'line',
            shape: {
              x1: api.coord([-4.35, 0])[0],
              y1: api.coord([0, 1.5])[1],
              x2: api.coord([-4.65, 0])[0],
              y2: api.coord([0, 1.5])[1],
            },
            style: {
              stroke: '#FFFFFF',
              lineWidth: 1,
              opacity: 0.3,
            },
          },
        ],
      },
      // vertical lines
      {
        type: 'group',
        children: [
          {
            type: 'line',
            shape: {
              x1: api.coord([-4.5, 0])[0],
              y1: api.coord([0, -4.25])[1],
              x2: api.coord([-4.5, 0])[0],
              y2: api.coord([0, -4.75])[1],
            },
            style: {
              stroke: '#FFFFFF',
              lineWidth: 1,
              opacity: 0.3,
            },
          },
          {
            type: 'line',
            shape: {
              x1: api.coord([-4.5, 0])[0],
              y1: api.coord([0, -1.25])[1],
              x2: api.coord([-4.5, 0])[0],
              y2: api.coord([0, -1.75])[1],
            },
            style: {
              stroke: '#FFFFFF',
              lineWidth: 1,
              opacity: 0.3,
            },
          },
          {
            type: 'line',
            shape: {
              x1: api.coord([-4.5, 0])[0],
              y1: api.coord([0, 4.25])[1],
              x2: api.coord([-4.5, 0])[0],
              y2: api.coord([0, 4.75])[1],
            },
            style: {
              stroke: '#FFFFFF',
              lineWidth: 1,
              opacity: 0.3,
            },
          },
          {
            type: 'line',
            shape: {
              x1: api.coord([-4.5, 0])[0],
              y1: api.coord([0, 1.25])[1],
              x2: api.coord([-4.5, 0])[0],
              y2: api.coord([0, 1.75])[1],
            },
            style: {
              stroke: '#FFFFFF',
              lineWidth: 1,
              opacity: 0.3,
            },
          },
        ],
      },
      // 2 quarter
      // horizontal lines
      {
        type: 'group',
        children: [
          {
            type: 'line',
            shape: {
              x1: api.coord([-1.35, 0])[0],
              y1: api.coord([0, -4.5])[1],
              x2: api.coord([-1.65, 0])[0],
              y2: api.coord([0, -4.5])[1],
            },
            style: {
              stroke: '#FFFFFF',
              lineWidth: 1,
              opacity: 0.3,
            },
          },
          {
            type: 'line',
            shape: {
              x1: api.coord([-1.35, 0])[0],
              y1: api.coord([0, -1.5])[1],
              x2: api.coord([-1.65, 0])[0],
              y2: api.coord([0, -1.5])[1],
            },
            style: {
              stroke: '#FFFFFF',
              lineWidth: 1,
              opacity: 0.3,
            },
          },
          {
            type: 'line',
            shape: {
              x1: api.coord([-1.35, 0])[0],
              y1: api.coord([0, 4.5])[1],
              x2: api.coord([-1.65, 0])[0],
              y2: api.coord([0, 4.5])[1],
            },
            style: {
              stroke: '#FFFFFF',
              lineWidth: 1,
              opacity: 0.3,
            },
          },
          {
            type: 'line',
            shape: {
              x1: api.coord([-1.35, 0])[0],
              y1: api.coord([0, 1.5])[1],
              x2: api.coord([-1.65, 0])[0],
              y2: api.coord([0, 1.5])[1],
            },
            style: {
              stroke: '#FFFFFF',
              lineWidth: 1,
              opacity: 0.3,
            },
          },
        ],
      },
      // vertical lines
      {
        type: 'group',
        children: [
          {
            type: 'line',
            shape: {
              x1: api.coord([-1.5, 0])[0],
              y1: api.coord([0, -4.25])[1],
              x2: api.coord([-1.5, 0])[0],
              y2: api.coord([0, -4.75])[1],
            },
            style: {
              stroke: '#FFFFFF',
              lineWidth: 1,
              opacity: 0.3,
            },
          },
          {
            type: 'line',
            shape: {
              x1: api.coord([-1.5, 0])[0],
              y1: api.coord([0, -1.25])[1],
              x2: api.coord([-1.5, 0])[0],
              y2: api.coord([0, -1.75])[1],
            },
            style: {
              stroke: '#FFFFFF',
              lineWidth: 1,
              opacity: 0.3,
            },
          },
          {
            type: 'line',
            shape: {
              x1: api.coord([-1.5, 0])[0],
              y1: api.coord([0, 4.25])[1],
              x2: api.coord([-1.5, 0])[0],
              y2: api.coord([0, 4.75])[1],
            },
            style: {
              stroke: '#FFFFFF',
              lineWidth: 1,
              opacity: 0.3,
            },
          },
          {
            type: 'line',
            shape: {
              x1: api.coord([-1.5, 0])[0],
              y1: api.coord([0, 1.25])[1],
              x2: api.coord([-1.5, 0])[0],
              y2: api.coord([0, 1.75])[1],
            },
            style: {
              stroke: '#FFFFFF',
              lineWidth: 1,
              opacity: 0.3,
            },
          },
        ],
      },
      // 3 quarter
      // horizontal lines
      {
        type: 'group',
        children: [
          {
            type: 'line',
            shape: {
              x1: api.coord([1.35, 0])[0],
              y1: api.coord([0, -4.5])[1],
              x2: api.coord([1.65, 0])[0],
              y2: api.coord([0, -4.5])[1],
            },
            style: {
              stroke: '#FFFFFF',
              lineWidth: 1,
              opacity: 0.3,
            },
          },
          {
            type: 'line',
            shape: {
              x1: api.coord([1.35, 0])[0],
              y1: api.coord([0, -1.5])[1],
              x2: api.coord([1.65, 0])[0],
              y2: api.coord([0, -1.5])[1],
            },
            style: {
              stroke: '#FFFFFF',
              lineWidth: 1,
              opacity: 0.3,
            },
          },
          {
            type: 'line',
            shape: {
              x1: api.coord([1.35, 0])[0],
              y1: api.coord([0, 4.5])[1],
              x2: api.coord([1.65, 0])[0],
              y2: api.coord([0, 4.5])[1],
            },
            style: {
              stroke: '#FFFFFF',
              lineWidth: 1,
              opacity: 0.3,
            },
          },
          {
            type: 'line',
            shape: {
              x1: api.coord([1.35, 0])[0],
              y1: api.coord([0, 1.5])[1],
              x2: api.coord([1.65, 0])[0],
              y2: api.coord([0, 1.5])[1],
            },
            style: {
              stroke: '#FFFFFF',
              lineWidth: 1,
              opacity: 0.3,
            },
          },
        ],
      },
      // vertical lines
      {
        type: 'group',
        children: [
          {
            type: 'line',
            shape: {
              x1: api.coord([1.5, 0])[0],
              y1: api.coord([0, -4.25])[1],
              x2: api.coord([1.5, 0])[0],
              y2: api.coord([0, -4.75])[1],
            },
            style: {
              stroke: '#FFFFFF',
              lineWidth: 1,
              opacity: 0.3,
            },
          },
          {
            type: 'line',
            shape: {
              x1: api.coord([1.5, 0])[0],
              y1: api.coord([0, -1.25])[1],
              x2: api.coord([1.5, 0])[0],
              y2: api.coord([0, -1.75])[1],
            },
            style: {
              stroke: '#FFFFFF',
              lineWidth: 1,
              opacity: 0.3,
            },
          },
          {
            type: 'line',
            shape: {
              x1: api.coord([1.5, 0])[0],
              y1: api.coord([0, 4.25])[1],
              x2: api.coord([1.5, 0])[0],
              y2: api.coord([0, 4.75])[1],
            },
            style: {
              stroke: '#FFFFFF',
              lineWidth: 1,
              opacity: 0.3,
            },
          },
          {
            type: 'line',
            shape: {
              x1: api.coord([1.5, 0])[0],
              y1: api.coord([0, 1.25])[1],
              x2: api.coord([1.5, 0])[0],
              y2: api.coord([0, 1.75])[1],
            },
            style: {
              stroke: '#FFFFFF',
              lineWidth: 1,
              opacity: 0.3,
            },
          },
        ],
      },
      // 4 quarter
      // horizontal lines
      {
        type: 'group',
        children: [
          {
            type: 'line',
            shape: {
              x1: api.coord([4.35, 0])[0],
              y1: api.coord([0, -4.5])[1],
              x2: api.coord([4.65, 0])[0],
              y2: api.coord([0, -4.5])[1],
            },
            style: {
              stroke: '#FFFFFF',
              lineWidth: 1,
              opacity: 0.3,
            },
          },
          {
            type: 'line',
            shape: {
              x1: api.coord([4.35, 0])[0],
              y1: api.coord([0, -1.5])[1],
              x2: api.coord([4.65, 0])[0],
              y2: api.coord([0, -1.5])[1],
            },
            style: {
              stroke: '#FFFFFF',
              lineWidth: 1,
              opacity: 0.3,
            },
          },
          {
            type: 'line',
            shape: {
              x1: api.coord([4.35, 0])[0],
              y1: api.coord([0, 4.5])[1],
              x2: api.coord([4.65, 0])[0],
              y2: api.coord([0, 4.5])[1],
            },
            style: {
              stroke: '#FFFFFF',
              lineWidth: 1,
              opacity: 0.3,
            },
          },
          {
            type: 'line',
            shape: {
              x1: api.coord([4.35, 0])[0],
              y1: api.coord([0, 1.5])[1],
              x2: api.coord([4.65, 0])[0],
              y2: api.coord([0, 1.5])[1],
            },
            style: {
              stroke: '#FFFFFF',
              lineWidth: 1,
              opacity: 0.3,
            },
          },
        ],
      },
      // vertical lines
      {
        type: 'group',
        children: [
          {
            type: 'line',
            shape: {
              x1: api.coord([4.5, 0])[0],
              y1: api.coord([0, -4.25])[1],
              x2: api.coord([4.5, 0])[0],
              y2: api.coord([0, -4.75])[1],
            },
            style: {
              stroke: '#FFFFFF',
              lineWidth: 1,
              opacity: 0.3,
            },
          },
          {
            type: 'line',
            shape: {
              x1: api.coord([4.5, 0])[0],
              y1: api.coord([0, -1.25])[1],
              x2: api.coord([4.5, 0])[0],
              y2: api.coord([0, -1.75])[1],
            },
            style: {
              stroke: '#FFFFFF',
              lineWidth: 1,
              opacity: 0.3,
            },
          },
          {
            type: 'line',
            shape: {
              x1: api.coord([4.5, 0])[0],
              y1: api.coord([0, 4.25])[1],
              x2: api.coord([4.5, 0])[0],
              y2: api.coord([0, 4.75])[1],
            },
            style: {
              stroke: '#FFFFFF',
              lineWidth: 1,
              opacity: 0.3,
            },
          },
          {
            type: 'line',
            shape: {
              x1: api.coord([4.5, 0])[0],
              y1: api.coord([0, 1.25])[1],
              x2: api.coord([4.5, 0])[0],
              y2: api.coord([0, 1.75])[1],
            },
            style: {
              stroke: '#FFFFFF',
              lineWidth: 1,
              opacity: 0.3,
            },
          },
        ],
      },
      // lines at the end of the axis
      {
        type: 'group',
        children: [
          {
            type: 'line',
            shape: {
              x1: api.coord([6, 0])[0],
              y1: api.coord([0, 0.3])[1],
              x2: api.coord([6, 0])[0],
              y2: api.coord([0, -0.3])[1],
            },
            style: {
              stroke: '#FFFFFF',
              lineWidth: 1,
              opacity: 0.3,
            },
          },
          {
            type: 'line',
            shape: {
              x1: api.coord([-6, 0])[0],
              y1: api.coord([0, 0.3])[1],
              x2: api.coord([-6, 0])[0],
              y2: api.coord([0, -0.3])[1],
            },
            style: {
              stroke: '#FFFFFF',
              lineWidth: 1,
              opacity: 0.3,
            },
          },
          {
            type: 'line',
            shape: {
              x1: api.coord([0.2, 0])[0],
              y1: api.coord([0, 6])[1],
              x2: api.coord([-0.2, 0])[0],
              y2: api.coord([0, 6])[1],
            },
            style: {
              stroke: '#FFFFFF',
              lineWidth: 1,
              opacity: 0.3,
            },
          },
          {
            type: 'line',
            shape: {
              x1: api.coord([0.2, 0])[0],
              y1: api.coord([0, -6])[1],
              x2: api.coord([-0.2, 0])[0],
              y2: api.coord([0, -6])[1],
            },
            style: {
              stroke: '#FFFFFF',
              lineWidth: 1,
              opacity: 0.3,
            },
          },
        ],
      },
    ],
  };
};
