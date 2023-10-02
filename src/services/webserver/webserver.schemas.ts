import { FastifyInstance } from 'fastify';
import { SchemaID } from './webserver.interfaces.js';

const schemas = {
    responseError: {
        $id: SchemaID.RESPONSE_ERROR,
        type: 'object',
        required: ['statusCode', 'error', 'message'],
        properties: {
            statusCode: { type: 'number' },
            error: { type: 'string' },
            message: { type: 'string' },
        },
    },
    lessons: {
        $id: SchemaID.LESSONS,
        type: 'array',
        items: {
            type: 'object',
            required: ['id', 'created_time', 'last_edited_time'],
            properties: {
                id: { type: 'string' },
                created_time: { type: 'string' },
                last_edited_time: { type: 'string' },
                relations: { type: 'array', items: { type: 'string' } },
                ID: { type: 'number' },
                Donate: { type: 'number' },
                Date: { type: 'string' },
            },
        },
    },
    mentiList: {
        $id: SchemaID.MENTI_LIST,
        type: 'array',
        items: {
            type: 'object',
            required: ['id', 'created_time', 'last_edited_time'],
            properties: {
                id: { type: 'string' },
                created_time: { type: 'string' },
                last_edited_time: { type: 'string' },
                relations: { type: 'array', items: { type: 'string' } },
                ID: { type: 'number' },
                Grade: { type: 'string' },
                Email: { type: 'string' },
                Telegram: { type: 'string' },
                Location: { type: 'array', items: { type: 'string' } },
                Phone: { type: 'string' },
                Name: { type: 'string' },
            },
        },
    },
} as const;

export const initSchemas = (server: FastifyInstance) => {
    Object.values(schemas).forEach((schema) => server.addSchema(schema));
};
