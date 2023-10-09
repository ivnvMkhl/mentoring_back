import { UserListQuery, UserRecord } from './user.interfaces.js';

class UserDomain {
    userQuery?: UserListQuery;
    user?: UserRecord;
}

const userDomain = new UserDomain();

export { userDomain };
