import { envService } from '../env/index.js';
import { fetch } from '../http/http.service.js';
import { NotionApi } from './notion.api.js';

const { BASE_API, TOKEN } = envService.variables;

const notionApi = new NotionApi(fetch, BASE_API, TOKEN);

export { notionApi };
