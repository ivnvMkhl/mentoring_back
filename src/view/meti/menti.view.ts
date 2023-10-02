import { RouteHandlerMethod } from 'fastify';
import { mentiAdapter } from '../../adapter/menti/menti.adapter.js';

export const getMentiList: RouteHandlerMethod = async (request, reply) => {
    return await mentiAdapter.getMentiList(true);
};
