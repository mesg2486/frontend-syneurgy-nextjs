import Onboarding from "@/components/onboarding";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { fetchql } from "@/services/clients/fetch";
import { Session, getServerSession } from "next-auth";

export default async function AboutYou() {
  const session: Session | null = await getServerSession(authOptions as any);

  const { data, errors } = await fetchql(
    `
  query getUser($sub: ID!){
    user: getUser(sub: $sub) {
      step
    }
  }`,
    { sub: session?.user.sub },
  );

  console.log({ data, errors, session });

  return <Onboarding step={data?.user.step} />;
}
