import { Fetch, RequestInit } from './../http/http.service.js';
import { DatabaseQuery } from './notion.interfaces.js';

class NotionApi {
    private fetch: Fetch;
    private baseApi: string;
    private token: string;
    private tokenPrefix = 'Bearer ';

    constructor(fetch: Fetch, baseApi: string, token: string) {
        this.fetch = fetch;
        this.baseApi = baseApi;
        this.token = token;
    }

    get headers() {
        return {
            Authorization: this.tokenPrefix + this.token,
            'Content-Type': 'application/json',
            'Notion-Version': '2022-06-28',
            Accept: '*/*',
        };
    }

    async databaseQuery<Keys>(tableId: string, payload?: any): Promise<DatabaseQuery<Keys>> {
        const url = `${this.baseApi}/databases/${tableId}/query`;
        const fetchInit: RequestInit = { method: 'POST', headers: this.headers, body: JSON.stringify(payload) };

        return await this.fetch(url, fetchInit).then((response) => {
            switch (response.status) {
                case 200:
                    return response.json() as Promise<DatabaseQuery<Keys>>;
                default:
                    throw new Error(`failed to fetch database query: ${response.status} ${response.statusText}`);
            }
        });
    }
}

export { NotionApi };
