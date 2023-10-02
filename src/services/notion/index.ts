import { envService } from '../env/index.js';
import { NotionApi } from './notion.api.js';

const { BASE_API, TOKEN } = envService.variables;

const notionApi = new NotionApi(BASE_API, TOKEN);

export { notionApi };
