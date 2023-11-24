import { ApolloClient, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
    uri: "https://mmm-pr5e.onrender.com",
    cache: new InMemoryCache(),
  });

  export default client;