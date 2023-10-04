import fetchLib, { RequestInit as LibRequestInit } from 'node-fetch';

type Fetch = typeof fetchLib;
type RequestInit = LibRequestInit;

const fetch: Fetch = (...args) => {
    return fetchLib(...args);
};

export { fetch };
export type { Fetch, RequestInit };
