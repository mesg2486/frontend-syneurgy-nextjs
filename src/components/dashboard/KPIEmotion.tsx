import { Team } from "@/services/gql/graphql";
import React from "react";

export default function KPIEmotionsDisplay({
  activeTeamData,
}: {
  activeTeamData: Team | null | undefined;
}) {
  const kpis = activeTeamData?.kpis;
  const kpiFields = [
    {
      name: "Engagement",
      value: kpis?.engagement,
      prevValue: kpis?.prevEngagement,
      diffValue: kpis?.diffEngagement,
    },
    {
      name: "Alignment",
      value: kpis?.alignment,
      prevValue: kpis?.prevAlignment,
      diffValue: kpis?.diffAlignment,
    },
    {
      name: "Agency",
      value: kpis?.agency,
      prevValue: kpis?.prevAgency,
      diffValue: kpis?.diffAgency,
    },
    {
      name: "Stress",
      value: kpis?.stress,
      prevValue: kpis?.prevStress,
      diffValue: kpis?.diffStress,
    },
    {
      name: "Burnout",
      value: kpis?.burnout,
      prevValue: kpis?.prevBurnout,
      diffValue: kpis?.diffBurnout,
    },
  ];

  return (
    <div className="p-4 text-[9px] space-y-2 text-white rounded-md">
      {kpiFields.map((kpi) => (
        <div
          key={kpi.name}
          className="flex items-center justify-between gap-1 p-2 rounded-md bg-white/10"
        >
          <span className="font-medium">{kpi.name}</span>
          <div className="flex items-center space-x-4">
            <span className="font-semibold">{kpi.value}</span>
            <span
              className={
                Number(kpi?.diffValue) >= 0
                  ? "text-green-500 flex items-center"
                  : "text-red-500 flex items-center"
              }
            >
              {Number(kpi?.diffValue) >= 0 ? "↑" : "↓"}{" "}
              {(Number(kpi.diffValue) / Number(kpi.value)) * 100}%
            </span>
            <div>{kpi.prevValue}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
