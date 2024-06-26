import { gql } from 'apollo-server';

export default gql`
  type User {
    id: Int!
    username: String!
    email: String!
    avatar: String
    createdAt: String!
    updatedAt: String!
  }
`;
