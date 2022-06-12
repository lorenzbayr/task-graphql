import { PubSub } from "graphql-subscriptions";
import {
  getTalksUserParticipatesAt,
  getTalksUserSpeaksAt,
  getUser,
  getUsers,
} from "./service/user-service.js";
import {
  createTalk,
  updateTalk,
  getTalks,
  deleteTalk,
  getSpeaker,
  getParticipants,
  getTalk,
  getFeedback,
  getTalkRating,
  getTalkComments,
} from "./service/talk-service.js";
import {
  getFeedbackTalk,
  getFeedbackUser,
} from "./service/feedback-service.js";
import {
  getCommentAnswerTo,
  getCommentAuthor,
  getCommentResponses,
  getTCommentTalk,
  getThumbsUpBy
} from "./service/comment.service.js";

const pubSub = new PubSub();
const CURRENT_TALK_UPDATED = "CURRENT_TALK_UPDATED";

let currentTalk = "Currently there is no talk";

const resolvers = {
  Talk: {
    speaker: (parent) => getSpeaker(parent.speaker),
    participants: (parent) => getParticipants(parent.participants),
    feedback: (parent) => getFeedback(parent.id),
    averageRating: (parent) => getTalkRating(parent.id),
    comments: (parent) => getTalkComments(parent.id),
  },
  User: {
    speaksAt: (parent, { filter }) => getTalksUserSpeaksAt(parent.id, filter),
    participates: (parent) => getTalksUserParticipatesAt(parent.id),
  },
  Feedback: {
    author: (parent) => getFeedbackUser(parent.id),
    talk: (parent) => getFeedbackTalk(parent.id),
  },
  Comment: {
    author: (parent) => getCommentAuthor(parent.author),
    thumbsUpBy: (parent) => getThumbsUpBy(parent.thumbsUpBy),
    talk: (parent) => getTCommentTalk(parent.talk),
    answerTo: (parent) => getCommentAnswerTo(parent.answerTo),
    responses: (parent) => getCommentResponses(parent.id)
  },
  Query: {
    readUser: (_, { id }) => getUser(id),
    readUsers: () => getUsers(),
    readTalks: (_, { filter }) => getTalks(filter),
    readTalk: (_, { id }) => getTalk(id),
    readCurrentTalk: () => currentTalk,
  },
  Mutation: {
    createTalk: (_, { data }) => createTalk(data),
    updateTalk: (_, { id, data }) => updateTalk(id, data),
    deleteTalk: (_, { id }) => deleteTalk(id),
    updateCurrentTalk: (_, { newTalk }) => {
      currentTalk = newTalk;
      pubSub.publish(CURRENT_TALK_UPDATED, currentTalk);
      return currentTalk;
    },
  },
  Subscription: {
    currentTalkChanges: {
      subscribe: () => pubSub.asyncIterator([CURRENT_TALK_UPDATED]),
      resolve: (currentTalk) => currentTalk,
    },
  },
};

export { resolvers };
