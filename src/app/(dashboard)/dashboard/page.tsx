import DashMain from "@/components/dashboard/DashMain";
import Meetings from "@/components/dashboard/Meetings";
import Dashnav from "@/components/layout/Dashnav";

export default function Home() {
  return (
    <>
      <Dashnav />
      <DashMain />
      <Meetings />
    </>
  );
}
