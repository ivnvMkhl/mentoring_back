import { FastifyInstance, RouteOptions } from 'fastify';
import { getMentiList } from '../../view/meti/menti.view.js';
import { getLessons } from '../../view/lesson/lesson.view.js';
import { SchemaID } from './webserver.interfaces.js';

const lessonsRoute: RouteOptions = {
    method: 'GET',
    url: '/lessons',
    schema: {
        description: 'list of lessons',
        tags: ['lesson'],
        response: {
            200: { $ref: `${SchemaID.LESSONS}#` },
        },
    },
    handler: getLessons,
};

const mentiListRoute: RouteOptions = {
    method: 'GET',
    url: '/menti',
    schema: {
        description: 'list of menti',
        tags: ['menti'],
        response: {
            200: { $ref: `${SchemaID.MENTI_LIST}#` },
        },
    },
    handler: getMentiList,
};

const routes = [lessonsRoute, mentiListRoute];

const initEndpoints = (server: FastifyInstance) => {
    routes.forEach((route) => server.route(route));
};

export { initEndpoints };
