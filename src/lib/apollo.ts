import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4puoygq2e3j01xs21nxeizh/master",
  cache: new InMemoryCache(),
});
