import { gql } from 'apollo-server';

export default gql`
  type Mutation {
    editProfile(email: String, password: String): MutationResponse!
  }
`;
