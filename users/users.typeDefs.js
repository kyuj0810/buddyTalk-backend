import { gql } from 'apollo-server';

export default gql`
  type User {
    id: Int!
    username: String!
  }

  type Query {
    users: [User]
  }
`;
