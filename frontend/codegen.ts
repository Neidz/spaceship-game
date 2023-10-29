import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    overwrite: true,
    schema: "http://localhost:3000/graphql",
    documents: ["src/gql/**/*.{ts,tsx}"],
    ignoreNoDocuments: true,
    generates: {
        "src/gql/generated/": {
            preset: "client",
            plugins: [],
        },
    },
};

export default config;
