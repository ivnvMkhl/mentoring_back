import { RouteHandlerMethod } from 'fastify';
import { lessonAdapter } from '../../adapter/lesson/lesson.menti.js';

export const getLessons: RouteHandlerMethod = async (request, reply) => {
    try {
        reply.status(200);
        return await lessonAdapter.getLessonList(true);
    } catch (error: Error | unknown) {
        if (error instanceof Error) {
            reply.status(400);
            return error;
        }
    }
};
