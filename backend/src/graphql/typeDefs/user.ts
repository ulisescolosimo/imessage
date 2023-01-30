import { gql } from 'apollo-server-core';

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
  }

  type Query {
    searchUsers(username: String!): [User]!
  }

  type Mutation {
    createUsername(username: String!): CreateUserResponse
  }

  type CreateUserResponse {
    success: Boolean, error: String
  }
`;

export default typeDefs;