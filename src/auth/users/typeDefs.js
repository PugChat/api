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

export const usersQueries = `
    allUsers: [User]!
    userById(id: Int!): User!
`;

export const notificationQueries = `
   notificationById(user_id: Int!): [[Notification]!]
`;

export const usersMutations = `
createUser(user: UserInput!): User!
deleteUser(id: Int!): Int
updateUser(user: UserInput!): User!
`;

export const notificationMutations = `
    createNotification(notification: NotificationInput!):[Notification]
    deleteNotification(user_id: Int!):Int
`;