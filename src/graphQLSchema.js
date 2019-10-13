import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import {
	usersMutations,
	usersQueries,
	usersTypeDef,
	notificationMutations,
	notificationQueries,
	notificationTypeDef,
	chatMutations,
	chatQueries,
	chatTypeDef,
	multimediaMutations,
	multimediaQueries,
	multimediaTypeDef,
	authMutations,
	authQueries,
	authTypeDef,
	stateMutations,
	stateQueries,
	stateTypeDef
} from './auth/users/typeDefs';

import usersResolvers from './auth/users/resolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		usersTypeDef,
		notificationTypeDef,
		chatTypeDef,
		multimediaTypeDef,
		authTypeDef,
		stateTypeDef
	],
	[
		usersQueries,
		notificationQueries,
		chatQueries,
		multimediaQueries,
		authQueries,
		stateQueries
	],
	[
		usersMutations,
		notificationMutations,
		chatMutations,
		multimediaMutations,
		authMutations,
		stateMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		usersResolvers
	)
});
