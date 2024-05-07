import { GraphQLClient } from "graphql-request";

type AuthHeaderProps = {
  authorization?: string;
};

export const gql = new GraphQLClient(
  "https://7zflynclavcbzipgs6zirmskfu.appsync-api.us-east-2.amazonaws.com/graphql",
  {
    headers: () => {
      //   const authHeaders = {} as AuthHeaderProps;

      //   authHeaders["authorization"] = `Bearer ${""}`;

      return {
        "Content-Type": "application/json",
        "x-api-key": "da2-lgztuiuikje4phabqmindvci5i",
        // ..authHeaders
      };
    },
  },
);
