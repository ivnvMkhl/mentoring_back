import {
    FastifySchema,
    RawReplyDefaultExpression,
    RawRequestDefaultExpression,
    RawServerDefault,
    RouteGenericInterface,
    RouteHandlerMethod,
} from 'fastify';
import { userAdapter } from '../../adapter/user/user.adapter.js';
import { UserRecordKeys } from '../../model/user/user.interfaces.js';

export const getUser: RouteHandlerMethod<
    RawServerDefault,
    RawRequestDefaultExpression,
    RawReplyDefaultExpression,
    RouteGenericInterface,
    unknown,
    FastifySchema,
    { input: unknown; output: { login: string; password: string } }
> = async (request, reply) => {
    try {
        const { body } = request;
        if (!body.login || !body.password) {
            throw new Error('Invalid login or password');
        }
        reply.header('Access-Control-Allow-Origin', '*');
        reply.header('Access-Control-Allow-Methods', 'GET');
        reply.status(200);
        const userInfo = { ...(await userAdapter.getUser(body.login, body.password)) };
        delete userInfo[UserRecordKeys.PASSWORD];
        return userInfo;
    } catch (error: Error | unknown) {
        if (error instanceof Error) {
            reply.status(403);
            return error;
        }
    }
};
