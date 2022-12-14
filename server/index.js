const { ApolloServer } = require('apollo-server');
const { mongoose, mongo } = require('mongoose');

//modules
const typeDefs = require('./graphql/typeDefs');

const resolvers = require('./graphql/resolvers');
const { MONGODB } = require('./config');

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: ({ req }) => ({ req }),
});

mongoose.connect(MONGODB, { useNewUrlParser: true }).then(() => {
	console.log('connceted');
	return server.listen({ port: 5000 }).then((res) => {
		console.log(`Server running at ${res.url}`);
	});
});
