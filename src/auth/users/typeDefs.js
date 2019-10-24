export const usersTypeDef = `
    type User {
        id: Int!
        mail: String!
        password: String!
        username: String!
        verification: Boolean!
        active: Boolean!
    }
    input UserInput {
        id: Int
        mail: String!
        password: String!
        username: String!
        verification: Boolean
        active: Boolean
        password_confirmation: String!
    }

`;

export const notificationTypeDef= `
    type Notification{
        id: Int
        message: String
        sender_id: Int
        chat_id: Int
        user_id: Int
    }
    input NotificationInput {
        message: String
        sender_id: Int
        chat_id: Int
        users: [Int]
    }
`;

export const chatTypeDef=`

`;

export const multimediaTypeDef=`
    type File{
    id: Int!,
    userid: Int,
    name: String,
    link: String,
    chatID: Int
    }
    type FileInput{
        userid: Int,
        name: String,
        link: String,
        chatID: Int
    }
`;


export const authTypeDef=`

`;

export const stateTypeDef=`
    type State{
        id: Int!
        id_user: String!
        about: String
        image: String
        created_at: String
    }
    input StateInput{
        id_user: String!
        about: String
        image: String
    }
`;

export const usersQueries = `
    allUsers: [User]!
    userById(id: Int!): User!
`;

export const usersMutations = `
    createUser(user: UserInput!): User!
    deleteUser(id: Int!): Int
    updateUser(user: UserInput!): User!
`;

export const notificationQueries = `
   notificationById(user_id: Int!): [[Notification]!]
`;

export const notificationMutations = `
    createNotification(notification: NotificationInput!):[Notification]
    deleteNotification(user_id: Int!):Int
`;

export const chatQueries=`
    

`;

export const chatMutations=`

`;

export const multimediaQueries=`
    allFiles():[File] 
    getFile(id:Int!):File
`;

export const multimediaMutations=`
    createFile(File: FileInput!):String
    updateFile(id:Int!, File: FileInput!):String
    deleteFile(id:Int!):String
`;


export const authQueries=`

`;

export const authMutations=`

`;


export const stateQueries=`
    allStates: [State]
    stateById(id: Int!): State!
`;

export const stateMutations=`
    createState(State: StateInput!): State!
    deleteState(id: Int!): Int
`;