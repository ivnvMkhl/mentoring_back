import { envService } from '../env/index.js';
import { fetch } from '../http/http.service.js';
import { NotionApi } from './notion.api.js';

const { BASE_API, NOTION_TOKEN } = envService.variables;

const notionApi = new NotionApi(fetch, BASE_API, NOTION_TOKEN);

export { notionApi };
