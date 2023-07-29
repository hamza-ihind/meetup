const gql = require("graphql-tag");
const mongoose = require("mongoose");

// Destructured
const { ApolloServer } = require("apollo-server");
const { MONGODB } = require("./config.js");

// models
const Post = require("./models/Post.model.js");

const typeDefs = gql`
  type Post {
    id: ID!
    body: String!
    createdAt: String!
    username: String!
  }
  type Query {
    getPosts: [Post]
  }
`;

const resolvers = {
  Query: {
    async getPosts() {
      try {
        const posts = await Post.find();
        return posts;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(MONGODB, { useNewUrlParser: true })
  .then(() => {
    server.listen(5000, () => {
      console.log("connected to db & listening on port", 5000);
    });
  })
  .catch((error) => {
    console.log(error);
  });
