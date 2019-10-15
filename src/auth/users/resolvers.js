import { generalRequest, getRequest } from '../../utilities';
import {url, port, entryPoint ,notificationPort , notificationEntryPoint,usersPort,usersEntryPoint, statesPort, statesEntryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;
const NOTIFICATION_URL = `http://${url}:${notificationPort}/${notificationEntryPoint}`;
const USERS_URL = `http://${url}:${usersPort}/${usersEntryPoint}`;
const STATES_URL = `http://${url}:${statesPort}/${statesEntryPoint}`;

const resolvers = {
	Query: {
		allUsers: (_) =>
			generalRequest(`${USERS_URL}/index`, 'GET'),
		userById: (_, { id }) =>
			generalRequest(`${USERS_URL}/show?id=${id}`, 'GET'),
		notificationById: (_, { user_id }) =>
			generalRequest(`${NOTIFICATION_URL}/show?user_id=${user_id}`, 'GET'),
		allStates: (_) =>
			generalRequest(`${STATES_URL}`, 'GET'),
		stateById: (_, {id}) => 
			generalRequest(`${STATES_URL}/${id}`, 'GET')
	},
	Mutation: {
		createUser: (_, { user }) =>
			generalRequest(`${USERS_URL}/create`, 'POST', user),
		updateUser: (_, { id, user }) =>
			generalRequest(`${USERS_URL}/updated`, 'PUT', user),
		deleteUser: (_, { id }) =>
			generalRequest(`${USERS_URL}/update`, 'DELETE'),
		createNotification: (_, { notification }) =>
			generalRequest(`${NOTIFICATION_URL}/create`, 'POST',notification),
		deleteNotification: (_, { user_id }) =>
			generalRequest(`${NOTIFICATION_URL}/destroy?user_id=${user_id}`, 'DELETE'),
		createState: (_, {State}) =>
			generalRequest(`${STATES_URL}`, 'POST', State),
		deleteState: (_, {id}) =>
			generalRequest(`${STATES_URL}/${id}`, 'DELETE'),
	}
};

export default resolvers;
