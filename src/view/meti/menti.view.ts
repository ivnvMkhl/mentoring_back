import { RouteHandlerMethod } from 'fastify';
import { mentiAdapter } from '../../adapter/menti/menti.adapter.js';

export const getMentiList: RouteHandlerMethod = async (request, reply) => {
    try {
        reply.status(200);
        return await mentiAdapter.getMentiList(true);
    } catch (error: Error | unknown) {
        if (error instanceof Error) {
            reply.status(400);
            return error;
        }
    }
};
