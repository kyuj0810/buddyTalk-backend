import { gql } from 'apollo-server';

export default gql`
  type Mutation {
    createRoutine(
      username: String!
      email: String!
      password: String!
    ): MutationResponse!
  }
`;
