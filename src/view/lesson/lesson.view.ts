import { RouteHandlerMethod } from 'fastify';
import { lessonAdapter } from '../../adapter/lesson/lesson.menti.js';

export const getLessons: RouteHandlerMethod = async (request, reply) => {
    return await lessonAdapter.getLessonList();
};
