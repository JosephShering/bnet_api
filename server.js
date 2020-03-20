const {ApolloServer} = require('apollo-server');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const Services = require('./bnet/services');

module.exports = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    async context(req) {
        if(!Services.BnetService.token) {
            await Services.OAuthService.authorize();
        }

        return {
            ...req,
            Services    
        };
    }
})