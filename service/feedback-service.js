import { feedbacks } from "../data/feedback.js";
import { users } from "../data/user.js";
import { talks } from "../data/talk.js";

const getFeedback = (id) => feedbacks().find((f) => f.id == id);

const getFeedbackUser = (id) => {
  return users().find((u) => u.id == getFeedback(id).user);
};

const getFeedbackTalk = (id) => {
  return talks().find((t) => t.id == getFeedback(id).talk);
};

export { getFeedbackUser, getFeedbackTalk };
