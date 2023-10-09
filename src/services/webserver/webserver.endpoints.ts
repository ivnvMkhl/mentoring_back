import { FastifyInstance, RouteHandlerMethod, RouteOptions } from 'fastify';
import { getMentiList } from '../../view/meti/menti.view.js';
import { getLessons } from '../../view/lesson/lesson.view.js';
import { SchemaID, SwaggerTag } from './webserver.interfaces.js';
import { getUser } from '../../view/user/user.vew.js';

const RESPONSE_ERROR_DESCRIPTION = 'Error response';
const RESPONSE_SUCCESFUL_DESCRIPTION = 'Succesful response';

const routes: Record<string, RouteOptions> = {
    lessonsRoute: {
        method: 'GET',
        url: '/lessons',
        schema: {
            description: 'list of lessons',
            tags: [SwaggerTag.LESSON],
            response: {
                200: { $ref: `${SchemaID.LESSONS}#`, description: RESPONSE_SUCCESFUL_DESCRIPTION },
                400: { $ref: `${SchemaID.RESPONSE_ERROR}#`, description: RESPONSE_ERROR_DESCRIPTION },
            },
        },
        handler: getLessons,
    },
    mentiListRoute: {
        method: 'GET',
        url: '/menti',
        schema: {
            description: 'list of menti',
            tags: [SwaggerTag.MENTI],
            response: {
                200: { $ref: `${SchemaID.MENTI_LIST}#`, description: RESPONSE_SUCCESFUL_DESCRIPTION },
                400: { $ref: `${SchemaID.RESPONSE_ERROR}#`, description: RESPONSE_ERROR_DESCRIPTION },
            },
        },
        handler: getMentiList,
    },
    auth: {
        method: 'POST',
        url: '/auth',
        schema: {
            description: 'auth user by email',
            tags: [SwaggerTag.AUTH],
            body: {
                type: 'object',
                properties: {
                    login: { type: 'string' },
                    password: { type: 'string' },
                },
            },
            response: {
                200: { $ref: `${SchemaID.USER_INFO}#`, description: RESPONSE_SUCCESFUL_DESCRIPTION },
                400: { $ref: `${SchemaID.RESPONSE_ERROR}#`, description: RESPONSE_ERROR_DESCRIPTION },
            },
        },
        handler: getUser as RouteHandlerMethod,
    },
};

const initEndpoints = (server: FastifyInstance) => {
    Object.values(routes).forEach((route) => server.route(route));
};

export { initEndpoints };
