import { gql } from "@/services/clients/graphql.client";
import { graphql } from "@/services/gql";
import { User } from "@/services/gql/graphql";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import React, { createContext, useContext, ReactNode } from "react";

const GET_USER = graphql(`
  query getUser($sub: ID!) {
    user: getUser(sub: $sub) {
      username
      updatedAt
      sub
      step
      status
      resultPrivacy
      position
      phone
      onboarded
      lastName
      lastLogin
      gender
      firstName
      firstTeam
      firstMeeting
      email
      createdAt
      country
      company
      avatar
    }
  }
`);

// Define the type for the context value
interface UserContextType {
  user: User;
  refetchUser: any;
  isUserLoading: boolean;
}

// Create a context
export const UserContext = createContext<UserContextType | undefined>(
  undefined,
);

// Create a provider component
export const OnboardingProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
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

  return (
    <UserContext.Provider
      value={{
        user: data?.user as User,
        refetchUser: refetch,
        isUserLoading: isLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to access user context
export const useOnboardingData = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
