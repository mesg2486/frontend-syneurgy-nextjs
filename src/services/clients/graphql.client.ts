import { GraphQLClient } from "graphql-request";

type AuthHeaderProps = {
  authorization?: string;
};

export const gql = new GraphQLClient(
  "https://6mdp4qo2uvgr7mj4rteiysnfru.appsync-api.us-east-1.amazonaws.com/graphql",
  {
    headers: () => {
      //   const authHeaders = {} as AuthHeaderProps;

      //   authHeaders["authorization"] = `Bearer ${""}`;

      return {
        "Content-Type": "application/json",
        "x-api-key": "da2-vvjwiegjhfgptczgojzjb5lcxe",
        // ..authHeaders
      };
    },
  },
);
