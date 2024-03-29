import { generalRequest, getRequest } from '../../utilities';
import {url, port, entryPoint,notificationUrl,authUrl,usersUrl,statesUrl,multimediaUrl,notificationPort,chatUrl,notificationEntryPoint,usersPort,usersEntryPoint, statesPort, statesEntryPoint, multimediaPort, multimediaEntryPoint,chatPort,chatEntryPoint,authPort,authEntryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;
const AUTH_URL = `http://${authUrl}:${authPort}`;
const NOTIFICATION_URL = `http://${notificationUrl}:${notificationPort}/${notificationEntryPoint}`;
const USERS_URL = `http://${usersUrl}:${usersPort}/${usersEntryPoint}`;
const STATES_URL = `http://${statesUrl}:${statesPort}/${statesEntryPoint}`;
const MULTIMEDIA_URL =`http://${multimediaUrl}:${multimediaPort}/${multimediaEntryPoint}`;
const CHAT_URL = `http://${chatUrl}:${chatPort}/${chatEntryPoint}`;
const resolvers = {
	Query: {
		allUsers: (_) =>
			generalRequest(`${USERS_URL}/index`, 'GET'),
		userById: (_, { id }) =>
			generalRequest(`${USERS_URL}/show?id=${id}`, 'GET'),
		userByUsername: (_, { username }) =>
			generalRequest(`${USERS_URL}/findByUsername?username=${username}`, 'GET'),		
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
		getChatBetween: (_) =>
			generalRequest(`${CHAT_URL}`, 'GET'),
		signin: (_,{ user })=>		    
	        generalRequest(`${AUTH_URL}/api/signin/${user.userName}/${user.password}`, 'GET')	
	},
	Mutation: {
		createAuthUser: (_, { user}) =>
            generalRequest(`${AUTH_URL}/signup/${user.userName}/${user.password}`, 'POST'),
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
			generalRequest(`${MULTIMEDIA_URL}/`, 'POST',File),
		updateFile: (_,{File}) => 
			generalRequest(`${MULTIMEDIA_URL}/${File.id}`, 'PUT',File),
		deleteFile: (_,{id}) => 
			generalRequest(`${MULTIMEDIA_URL}/${id}`, 'DELETE'),
		createChat: (_, { Chat }) =>
			generalRequest(`${CHAT_URL}/`, 'POST', Chat),
	}
};

export default resolvers;
