import { gql } from 'apollo-server';

export default gql`
  type Mutation {
    createRoutine(title: String!): MutationResponse!
  }
`;
