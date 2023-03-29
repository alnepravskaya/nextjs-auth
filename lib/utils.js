import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`,
    cache: new InMemoryCache(),
});
