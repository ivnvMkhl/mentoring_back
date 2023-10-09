import { envService } from '../../services/env/index.js';
import { notionApi } from '../../services/notion/index.js';
import { mapQueryToPlainRecord } from '../../services/notion/notion.utils.js';
import { userDomain } from '../../model/user/user.domain.js';
import { UserList, UserListQueryKeys } from '../../model/user/user.interfaces.js';

export const userAdapter = {
    calculateQueryToUserList() {
        if (userDomain.userListQuery) {
            userDomain.userList = mapQueryToPlainRecord<UserList>(userDomain.userListQuery, true);
        } else {
            console.error('not found userDomain.userListQuery');
        }
    },

    async loadUserList() {
        try {
            userDomain.userListQuery = await notionApi.databaseQuery<UserListQueryKeys>(
                envService.variables.USER_LIST_TABLE_ID,
            );
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            }
        }
    },

    async getUserList(refresh?: boolean) {
        if (!userDomain.userList || refresh) {
            await userAdapter.loadUserList();
            userAdapter.calculateQueryToUserList();
            return userDomain.userList;
        }
        return userDomain.userList;
    },
};
