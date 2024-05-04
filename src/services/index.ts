// Response Generic Type
export interface Response<T> {
  status: number;
  msg: string;
  data: T;
}
