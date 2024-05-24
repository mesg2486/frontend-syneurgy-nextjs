import Home from "@/components/homepage";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { fetchql } from "@/services/clients/fetch";
import { Session, getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function page() {
  const session: Session | null = await getServerSession(authOptions as any);

  const { data, errors } = await fetchql(
    `
  query getUser($sub: ID!){
    user: getUser(sub: $sub) {
      step
      onboarded
    }
  }`,
    { sub: session?.user.sub },
  );

  if (data?.user && data.user.onboarded === false) redirect("/auth/onboarding");

  return <Home />;
}
