import 'dotenv/config';
import { EnvService } from './env.service.js';

type EnvVariables = {
    PORT: number;
    BASE_API: string;
    NOTION_TOKEN: string;
    METORING_TABLE_ID: string;
    MENTI_LIST_TABLE_ID: string;
    USER_LIST_TABLE_ID: string;
    EXERCISES_TABLE_ID: string;
    USE_NATIVE_FETCH: boolean;
};

const envService = new EnvService<EnvVariables>(process.env);

export { envService };
