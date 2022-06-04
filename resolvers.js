import { PubSub } from "graphql-subscriptions";

const pubSub = new PubSub();
const CURRENT_TALK_UPDATED = 'CURRENT_TALK_UPDATED';

let currentTalk = "Currently there is no talk";

const resolvers = {
    Query: {
        readCurrentTalk: () => currentTalk
    },
    Mutation: {
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
