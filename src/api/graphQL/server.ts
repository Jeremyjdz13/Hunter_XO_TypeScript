// import { ApolloServer } from 'apollo-server';
// import typeDefs from './schema';
// import resolvers from './resolvers';

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: ({ req }) => {
//     // Extract the user information from the request headers or authentication token
//     // You may have a different way of handling authentication in your app
//     const user = getUserFromHeadersOrToken(req.headers.authorization);
//     return { user };
//   },
// });

// server.listen().then(({ url }) => {
//   console.log(`🚀 Server ready at ${url}`);
// });
