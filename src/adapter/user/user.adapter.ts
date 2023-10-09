import { envService } from '../../services/env/index.js';
import { notionApi } from '../../services/notion/index.js';
import { mapQueryToPlainRecord } from '../../services/notion/notion.utils.js';
import { userDomain } from '../../model/user/user.domain.js';
import { UserList, UserListQueryKeys, UserRecordKeys } from '../../model/user/user.interfaces.js';

export const userAdapter = {
    async loadUser(login: string) {
        try {
            userDomain.userQuery = await notionApi.databaseQuery<UserListQueryKeys>(
                envService.variables.USER_LIST_TABLE_ID,
                {
                    filter: {
                        property: UserRecordKeys.EMAIL,
                        rich_text: {
                            equals: login,
                        },
                    },
                },
            );
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            }
        }
    },

    validateUser(login: string, password: string) {
        if (userDomain.userQuery) {
            const user = mapQueryToPlainRecord<UserList>(userDomain.userQuery, true)[0];
            if (!user || password !== user[UserRecordKeys.PASSWORD]) {
                throw new Error(`unauthorized, ${login}`);
            }
            userDomain.user = user;
        } else {
            console.error('not found userDomain.userListQuery');
        }
    },

    async getUser(login: string, password: string) {
        try {
            await userAdapter.loadUser(login);
            userAdapter.validateUser(login, password);
            return userDomain.user;
        } catch (error) {
            throw error;
        }
    },
};
