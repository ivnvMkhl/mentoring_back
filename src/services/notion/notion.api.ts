import { DatabaseQuery } from './notion.interfaces.js';

class NotionApi {
    private baseApi: string;
    private token: string;
    private tokenPrefix = 'Bearer ';

    constructor(baseApi: string, token: string) {
        this.baseApi = baseApi;
        this.token = token;
    }

    get headers() {
        return {
            Authorization: this.tokenPrefix + this.token,
            'Content-Type': 'application/json',
            'Notion-Version': '2022-06-28',
        };
    }

    async databaseQuery<Keys>(tableId: string, payload?: any): Promise<DatabaseQuery<Keys>> {
        const url = `${this.baseApi}/databases/${tableId}/query`;
        const fetchInit: RequestInit = { method: 'POST', headers: this.headers, body: payload };

        return await fetch(url, fetchInit).then((response) => response.json());
    }
}

export { NotionApi };
