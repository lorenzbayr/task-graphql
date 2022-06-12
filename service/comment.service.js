import { users } from "../data/user.js";
import { talks } from "../data/talk.js";
import { comments } from "../data/comment.js";

const getCommentAuthor = (authorId) => {
  return users().find((u) => u.id == authorId);
};

const getThumbsUpBy = (thumbsUpByIds) => {
  const ids = thumbsUpByIds.toString().split(",");
  return users().filter((u) => ids.includes(u.id.toString()));
};

const getTCommentTalk = (talkId) => {
  return talks().find((t) => t.id == talkId);
};

const getCommentAnswerTo = (commentId) => {
  return comments().find((c) => c.id == commentId);
};

const getCommentResponses = (commentId) => {
  return comments().filter((c) => c.answertTo == commentId);
};

export {
  getCommentAuthor,
  getThumbsUpBy,
  getTCommentTalk,
  getCommentAnswerTo,
  getCommentResponses,
};
