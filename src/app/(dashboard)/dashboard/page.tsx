import DashMain from "@/components/dashboard/DashMain";
import DetailedData from "@/components/dashboard/DetailedData";
import Meetings from "@/components/dashboard/Meetings";

export default function Home() {
  return (
    <>
      <DashMain />
      <DetailedData />
      <Meetings />
    </>
  );
}
