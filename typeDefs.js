import {gql} from "apollo-server-core";

const typeDefs = gql`
    type Query {
        readCurrentTalk: String
    }

    type Mutation {
        updateCurrentTalk(newTalk: String): String
    }

    type Subscription {
        currentTalkChanges: String
    }
`;

export { typeDefs };
