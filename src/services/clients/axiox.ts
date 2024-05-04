import axios from "axios";

export const uploadServer = axios.create();
export const authServer = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});
export const s3Upload = axios.create();
