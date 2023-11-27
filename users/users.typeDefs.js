import { gql } from 'apollo-server';

export default gql`
  type User {
    id: Int!
    username: String!
    email: String!
    password: String!
    avatar: String
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    users: [User]
  }
`;
