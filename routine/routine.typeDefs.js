import { gql } from 'apollo-server';

export default gql`
  type Routine {
    id: Int!
    title: String!
    days: Int!
    hashtags: Hashtag[]
    user: User
    userId: Int!
    routineDetail: RoutineDetail[]
    userRoutine:  UserRoutine[]
  }
`;
