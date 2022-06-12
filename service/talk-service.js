import { setTalks, talks } from "../data/talk.js";
import { users } from "../data/user.js";
import { feedbacks } from "../data/feedback.js";
import { comments } from "../data/comment.js";

const getTalk = (id) => talks().find((t) => t.id == id);

const getTalks = (filter) => {
  let result = talks();
  if (filter) {
    const { type } = filter;
    if (type) {
      result = result.filter((r) => r.type === type);
    }
  }
  return result;
};

const createTalk = (data) => {
  const id = talks().reduce((a, t) => (t.id >= a ? t.id + 1 : a), 0);
  const newTalk = { id, ...data };
  setTalks([...talks(), newTalk]);
  return newTalk;
};

const updateTalk = (id, data) => {
  const talkToUpdate = talks().find((t) => t.id == id);
  if (!talkToUpdate) {
    throw new Error(`Talk with ID ${id} not found`);
  }
  const updatedTalk = { ...talkToUpdate, ...data };
  setTalks(talks().map((t) => (t.id == id ? updatedTalk : t)));
  return updatedTalk;
};

const deleteTalk = (id) => {
  const talkToDelete = talks().find((t) => t.id == id);
  if (!talkToDelete) {
    throw new Error(`Talk with ID ${id} not found`);
  }
  setTalks(talks().filter((t) => t.id != id));
  return talkToDelete;
};

const getSpeaker = (speakerId) => users().find((u) => u.id === speakerId);

const getParticipants = (participants) => {
  const participantIds = participants.split(",");
  return participantIds.map((id) => users().find((u) => u.id == id));
};

const getFeedback = (id) => feedbacks().filter((f) => f.talk == id);

const getTalkRating = (id) => {
  const list = feedbacks()
    .filter((f) => f.talk == id)
    .map((f) => f.rating);
  return list.reduce((a, r) => a + r, 0) / list.length;
};

const getTalkComments = (id) => comments().filter((c) => c.talk == id);

export {
  getTalk,
  getTalks,
  createTalk,
  updateTalk,
  deleteTalk,
  getSpeaker,
  getParticipants,
  getFeedback,
  getTalkRating,
  getTalkComments,
};
