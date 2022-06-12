import { ApolloServer } from "apollo-server-express";
import { createServer } from "http";
import express from "express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { WebSocketServer } from "ws";
import { useServer } from "graphql-ws/lib/use/ws";
import { typeDefs } from "./typeDefs.js";
import { resolvers } from "./resolvers.js";

async function startApolloServer(typeDefs, resolvers) {
  const schema = makeExecutableSchema({ typeDefs, resolvers });

  const app = express();
  const httpServer = createServer(app);

  const wsServer = new WebSocketServer({
    server: httpServer,
    path: "/graphql",
  });

  const serverCleanup = useServer({ schema }, wsServer);

  const server = new ApolloServer({
    schema,
    csrfPrevention: true,
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      {
        async serverWillStart() {
          return {
            async drainServer() {
              await serverCleanup.dispose();
            },
          };
        },
      },
    ],
  });

  await server.start();
  server.applyMiddleware({ app });

  const port = process.env.PORT || 4000;

  httpServer.listen(port, () => {
    console.log(`Server is now listening on http://localhost:${port}`);
  });
}

startApolloServer(typeDefs, resolvers);
