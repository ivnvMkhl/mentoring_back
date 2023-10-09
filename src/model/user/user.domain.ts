import { UserList, UserListQuery } from './user.interfaces.js';

class UserDomain {
    userListQuery?: UserListQuery;
    userList?: UserList;
}

const userDomain = new UserDomain();

export { userDomain };
