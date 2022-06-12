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
    averageRating: Float
    type: TypeOfTalk
    speaker: User
    participants: [User]
    feedback: [Feedback]
    """
    TODO
    """
    comments: [Comment]
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
  input TalkFilterInput {
    type: TypeOfTalk
  }

  type User {
    id: ID
    name: String
    surname: String
    birthday: Date
    email: String
    speaksAt(filter: TalkFilterInput): [Talk]
    participates(filter: TalkFilterInput): [Talk]
    """
    TODO
    """
    gaveFeedback: [Feedback]
    """
    TODO
    """
    comments: [Comment]
  }

  type Feedback {
    id: ID
    rating: Float!
    content: String
    author: User
    talk: Talk
  }

  type Comment {
    id: ID!
    content: String!
    author: User!
    thumbsUpBy: [User]
    """
    TODO
    """
    talk: Talk
    """
    TODO
    """
    answerTo: Comment
    """
    TODO
    """
    responses: [Comment]
  }

  type Query {
    readUser(id: ID!): User
    readUsers: [User]
    readTalk(id: ID!): Talk
    readTalks(filter: TalkFilterInput): [Talk]
    readCurrentTalk: String!
  }

  type Mutation {
    """
    Create a new Talk
    """
    createTalk(data: TalkCreateInput!): Talk
    updateTalk(id: ID!, data: TalkUpdateInput!): Talk
    deleteTalk(id: ID!): Talk
    updateCurrentTalk(newTalk: String!): String!
  }

  type Subscription {
    currentTalkChanges: String
  }
`;

export { typeDefs };
