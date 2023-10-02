import { MentiList, MentiListQuery } from './menti.domain.interfaces.js';

class MentiDomain {
    mentiListQuery?: MentiListQuery;
    mentiList?: MentiList;
}

const mentiDomain = new MentiDomain();

export { mentiDomain };
