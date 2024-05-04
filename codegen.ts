import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "schema.gql",
  documents: ["./src/**/*.tsx", "./src/components/**/*.tsx"],
  generates: {
    "src/services/gql/": {
      preset: "client",
    },
  },
};

export default config;
