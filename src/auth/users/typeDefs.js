export const usersTypeDef = `
type User {
    id: Int!
    firstName: String!
    lastName: String!
    username: String!
    password: String!
}
input UserInput {
    firstName: String!
    lastName: String!
    username: String!
    password: String!
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

export const usersQueries = `
    allUsers: [User]!
    userById(id: Int!): User!
    notificationById(user_id: Int!): [[Notification]!]
`;

export const notificationQueries = `
   notificationById(user_id: Int!): [[Notification]!]
`;

export const usersMutations = `
    createUser(user: UserInput!): User!
    updateUser(id: Int!, user: UserInput!): User!
    deleteUser(id: Int!): Int
`;

export const notificationMutations = `
    createNotification(notification: NotificationInput!):[Notification]
    deleteNotification(user_id: Int!):Int
`;