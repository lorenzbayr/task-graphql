import { users } from "../data/user.js";
import { talks } from "../data/talk.js";

const getUser = (id) => users().find((u) => u.id == id);

const getUsers = () => users();

const getTalksUserSpeaksAt = (id, filter) => {
  console.log(filter);
  let result = talks().filter((t) => t.speaker === id);
  if (filter) {
    const { type } = filter;
    if (type) {
      result = result.filter((r) => r.type === type);
    }
  }
  return result;
};

const getTalksUserParticipatesAt = (id) =>
  talks().filter((t) => {
    return t.participants
      .split(",")
      .map((id) => id.trim())
      .includes(id.toString());
  });

export { getUser, getUsers, getTalksUserSpeaksAt, getTalksUserParticipatesAt };
