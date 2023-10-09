import { RouteHandlerMethod } from 'fastify';
import { userAdapter } from '../../adapter/user/user.adapter.js';

export const getUserList: RouteHandlerMethod = async (request, reply) => {
    try {
        reply.header('Access-Control-Allow-Origin', '*');
        reply.header('Access-Control-Allow-Methods', 'GET');
        reply.status(200);
        return await userAdapter.getUserList(true);
    } catch (error: Error | unknown) {
        if (error instanceof Error) {
            reply.status(400);
            return error;
        }
    }
};
