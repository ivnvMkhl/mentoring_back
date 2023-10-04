import fastify from 'fastify';
import { initEndpoints } from './webserver.endpoints.js';
import { envService } from '../env/index.js';
import swagger from '@fastify/swagger';
import swaggerUi from '@fastify/swagger-ui';
import { initSchemas } from './webserver.schemas.js';
import { SwaggerTag } from './webserver.interfaces.js';

const server = fastify();
const { PORT } = envService.variables;
const serverOtions = { port: PORT };
const serverInit = (err: Error | null) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.info(`Server listening at ${PORT}`);
};
const swaggerUiOptions = {
    routePrefix: '/docs',
    exposeRoute: true,
};

const swaggerOptions = {
    swagger: {
        info: {
            title: 'Mentoring API',
            description: '',
            version: '0.0.1',
        },
        // host: 'http://127.0.0.1:8080',
        enableCORS: false,
        schemes: ['http', 'https'],
        consumes: ['application/json'],
        produces: ['application/json'],
        tags: Object.values(SwaggerTag).map((name: string) => ({ name })),
    },
};

const initWebServer = async () => {
    server.register(swagger, swaggerOptions);
    server.register(swaggerUi, swaggerUiOptions);
    server.register((server, options, done) => {
        initSchemas(server);
        initEndpoints(server);
        done();
    });

    server.listen(serverOtions, serverInit);
    await server.ready();
    server.swagger();
};

export { initWebServer };
