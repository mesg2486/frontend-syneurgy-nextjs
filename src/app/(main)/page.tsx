"use client";

import Explore from "@/components/homepage/Explore";
import Features from "@/components/homepage/Features";
import Hero from "@/components/homepage/Hero";
import Process from "@/components/homepage/Process";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;
    if (!session?.user) return;
    if (session.user.onboarded) return;
    router.push("/auth/onboarding");
  }, [session, router, status]);

  return (
    <>
      <Hero />
      <Features />
      <Process />
      <Explore />
    </>
  );
}
