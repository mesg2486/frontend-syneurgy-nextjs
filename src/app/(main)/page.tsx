"use client";

import Explore from "@/components/homepage/Explore";
import Features from "@/components/homepage/Features";
import Hero from "@/components/homepage/Hero";
import Process from "@/components/homepage/Process";
import { GET_USER } from "@/contexts/onboarding.context";
import { gql } from "@/services/clients/graphql.client";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { data: session, status } = useSession();

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["user", session?.user.sub],
    queryFn: async () => {
      return await gql.request(GET_USER, {
        sub: String(session?.user.sub),
      });
    },
    enabled: !!session?.user,
  });

  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;
    if (isLoading) return;
    if (!data?.user) return;
    if (data.user.onboarded) return;
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
