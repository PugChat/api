import { generalRequest, getRequest } from '../../utilities';
import {url, port, entryPoint ,notificationPort , notificationEntryPoint,usersPort,usersEntryPoint, statesPort, statesEntryPoint, multimediaPort, multimediaEntryPoint,chatPort,chatEntryPoint,authPort,authEntryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;
const NOTIFICATION_URL = `http://${url}:${notificationPort}/${notificationEntryPoint}`;
const USERS_URL = `http://${url}:${usersPort}/${usersEntryPoint}`;
const STATES_URL = `http://${url}:${statesPort}/${statesEntryPoint}`;
const MULTIMEDIA_URL =`http://${url}:${multimediaPort}/${multimediaEntryPoint}`;
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
			generalRequest(`${STATES_URL}/${id}`, 'GET'),
		allFiles: (_,) => 
			generalRequest(`${MULTIMEDIA_URL}`, 'GET'),
		getFile: (_, {id}) => 
			generalRequest(`${MULTIMEDIA_URL}/${id}`, 'GET'),
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
			generalRequest(`${STATES_URL}/`, 'POST', State),
		deleteState: (_, {id}) =>
			generalRequest(`${STATES_URL}/${id}`, 'DELETE'),
		createFile: (_,{File}) => 
			generalRequest(`${MULTIMEDIA_URL}`, 'POST',File),
		updateFile: (_,{id,File}) => 
			generalRequest(`${MULTIMEDIA_URL}/${id}`, 'PUT',File),
		deleteFile: (_,{id}) => 
			generalRequest(`${MULTIMEDIA_URL}/${id}`, 'DELETE'),
	
	}
};

export default resolvers;
