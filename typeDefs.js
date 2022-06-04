import {gql} from "apollo-server-core";

const typeDefs = gql`
    scalar Date
    
    enum TypeOfTalk {
        PRESENTATION,
        WORKSHOP,
        LIGHTNING_TALK
    }
    
    type Talk {
        id: ID
        title: String
        abstract: String
        start: Date
        duration: Int
        type: TypeOfTalk
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
    }
    
    type Query {
        readUsers: [User]
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
