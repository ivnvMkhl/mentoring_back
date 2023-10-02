import { MentiList, MentiListQuery, MentiListQueryKeys } from './../../model/menti/menti.domain.interfaces.js';
import { mentiDomain } from '../../model/menti/menti.domain.js';
import { envService } from '../../services/env/index.js';
import { notionApi } from '../../services/notion/index.js';
import { mapQueryToPlainRecord } from '../../services/notion/notion.utils.js';

export const mentiAdapter = {
    calculateQueryToMentiList() {
        if (mentiDomain.mentiListQuery) {
            mentiDomain.mentiList = mapQueryToPlainRecord<MentiList>(mentiDomain.mentiListQuery, true);
        } else {
            console.error('not found mentiDomain.mentiListQuery');
        }
    },

    async loadMentiList() {
        mentiDomain.mentiListQuery = await notionApi.databaseQuery<MentiListQueryKeys>(
            envService.variables.MENTI_LIST_TABLE_ID,
        );
    },

    async getMentiList(refresh?: boolean) {
        if (!mentiDomain.mentiList || refresh) {
            await mentiAdapter.loadMentiList();
            mentiAdapter.calculateQueryToMentiList();
            return mentiDomain.mentiList;
        }
        return mentiDomain.mentiList;
    },
};
