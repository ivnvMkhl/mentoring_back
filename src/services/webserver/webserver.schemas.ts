import { FastifyInstance } from 'fastify';
import { SchemaID } from './webserver.interfaces.js';

const lessons = {
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
} as const;

const mentiList = {
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
} as const;

const schemas = [lessons, mentiList];

export const initSchemas = (server: FastifyInstance) => {
    schemas.forEach((schema) => server.addSchema(schema));
};
