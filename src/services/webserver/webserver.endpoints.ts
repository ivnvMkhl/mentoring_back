import { FastifyInstance, RouteOptions } from 'fastify';
import { getMentiList } from '../../view/meti/menti.view.js';
import { getLessons } from '../../view/lesson/lesson.view.js';
import { SchemaID } from './webserver.interfaces.js';
import { getUserList } from '../../view/user/user.vew.js';

const RESPONSE_ERROR_DESCRIPTION = 'Error response';
const RESPONSE_SUCCESFUL_DESCRIPTION = 'Succesful response';

const routes: Record<string, RouteOptions> = {
    lessonsRoute: {
        method: 'GET',
        url: '/lessons',
        schema: {
            description: 'list of lessons',
            tags: ['lesson'],
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
            tags: ['menti'],
            response: {
                200: { $ref: `${SchemaID.MENTI_LIST}#`, description: RESPONSE_SUCCESFUL_DESCRIPTION },
                400: { $ref: `${SchemaID.RESPONSE_ERROR}#`, description: RESPONSE_ERROR_DESCRIPTION },
            },
        },
        handler: getMentiList,
    },
    userListRoute: {
        method: 'GET',
        url: '/user',
        handler: getUserList,
    },
};

const initEndpoints = (server: FastifyInstance) => {
    Object.values(routes).forEach((route) => server.route(route));
};

export { initEndpoints };
