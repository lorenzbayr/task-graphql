import { PubSub } from "graphql-subscriptions";
import {getUsers} from "./user-service.js";
import {createTalk, updateTalk, getTalks, deleteTalk} from "./talk-service.js";

const pubSub = new PubSub();
const CURRENT_TALK_UPDATED = 'CURRENT_TALK_UPDATED';

let currentTalk = "Currently there is no talk";

const resolvers = {
    Query: {
        readUsers: () => getUsers(),
        readTalks: () => getTalks(),
        readCurrentTalk: () => currentTalk
    },
    Mutation: {
        createTalk: (_, { data }) => createTalk(data),
        updateTalk: (_, { id, data }) => updateTalk(id, data),
        deleteTalk: (_, { id }) => deleteTalk(id),
        updateCurrentTalk: (_, { newTalk }) => {
            currentTalk = newTalk;
            pubSub.publish(CURRENT_TALK_UPDATED, currentTalk);
            return currentTalk;
        }
    },
    Subscription: {
        currentTalkChanges: {
            subscribe: () => pubSub.asyncIterator([CURRENT_TALK_UPDATED]),
            resolve: (currentTalk) => currentTalk
        }
    }
}

export { resolvers };
