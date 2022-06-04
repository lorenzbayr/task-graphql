import { gql } from "apollo-server-core";

const typeDefs = gql`
  scalar Date

  enum TypeOfTalk {
    PRESENTATION
    WORKSHOP
    LIGHTNING_TALK
  }

  type Talk {
    id: ID
    title: String
    abstract: String
    start: Date
    duration: Int
    rating: Float
    type: TypeOfTalk
    speaker: User
    participants: [User]
    feedback: [Feedback]
  }

  input TalkCreateInput {
    title: String!
    abstract: String!
    start: Date
    duration: Int
    type: TypeOfTalk
  }
  input TalkUpdateInput {
    title: String
    abstract: String
    start: Date
    duration: Int
    type: TypeOfTalk
  }

  type User {
    id: ID
    name: String
    surname: String
    birthday: Date
    email: String
    speaksAt: [Talk]
    participates: [Talk]
  }

  type Feedback {
    id: ID
    rating: Float!
    content: String
    user: User
    talk: Talk
  }

  type Query {
    readUser(id: ID): User
    readUsers: [User]
    readTalk(id: ID): Talk
    readTalks: [Talk]
    readCurrentTalk: String
  }

  type Mutation {
    createTalk(data: TalkCreateInput): Talk
    updateTalk(id: ID, data: TalkUpdateInput): Talk
    deleteTalk(id: ID): Talk
    updateCurrentTalk(newTalk: String): String
  }

  type Subscription {
    currentTalkChanges: String
  }
`;

export { typeDefs };
