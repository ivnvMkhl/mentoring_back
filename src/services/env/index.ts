import 'dotenv/config';
import { EnvService } from './env.service.js';

type EnvVariables = {
    PORT: number;
    BASE_API: string;
    TOKEN: string;
    METORING_TABLE_ID: string;
    MENTI_LIST_TABLE_ID: string;
};

const envService = new EnvService<EnvVariables>(process.env);

export { envService };
