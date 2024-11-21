"use client";

import React from "react";
import DashMain from "./DashMain";
import DetailedData from "./DetailedData";
import Meetings from "./Meetings";

export default function Dashboard() {
  return (
    <div>
      <DashMain />
      <DetailedData />
      <Meetings />
    </div>
  );
}
