import mitt from "mitt";
import type { Emitter } from "mitt";

type Events = {
  video_time_update: number;
  chart_time_update: number;
  legendSelect: string;
  legendAllSelect: string;
  legendUnSelect: string | string[];
  legendInverseSelect: string;
  legendHighlight: string;
  seekToSecond: number;
  playing: number;
  pause: boolean;
  duration: number;
  highlight_time_clicked: number;
  go_next: boolean;
  calendar_update: boolean;
  updated_user_component: boolean;
  subscription_count_changed: number;
};

const emitter: Emitter<Events> = mitt<Events>();

export function getEmitter() {
  return emitter;
}
