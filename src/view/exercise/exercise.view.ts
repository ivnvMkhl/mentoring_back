import { RouteHandlerMethod } from 'fastify';
import { exerciseAdapter } from '../../adapter/exercise/exercise.adapter.js';

export const getExercises: RouteHandlerMethod = async (request, reply) => {
    try {
        reply.header('Access-Control-Allow-Origin', '*');
        reply.header('Access-Control-Allow-Methods', 'GET');
        reply.status(200);
        return await exerciseAdapter.getExercises(true);
    } catch (error: Error | unknown) {
        if (error instanceof Error) {
            reply.status(400);
            return error;
        }
    }
};
