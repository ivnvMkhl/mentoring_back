import { DateProperty } from './../../services/notion/notion.interfaces.js';
import {
    BaseQueryRecord,
    DatabaseQuery,
    PropertyType,
    RichTextProperty,
    SelectProperty,
    TitleProperty,
} from '../../services/notion/notion.interfaces.js';

export enum UserRecordKeys {
    EMAIL = 'email',
    USER_NAME = 'user_name',
    ROLE = 'role',
    FULL_NAME = 'full_name',
    REGISTARATION_AT = 'registration_at',
    PASSWORD = 'password',
}

export type UserListQueryKeys = {
    [UserRecordKeys.EMAIL]: { type: PropertyType.title; [PropertyType.title]: TitleProperty };
    [UserRecordKeys.USER_NAME]: { type: PropertyType.rich_text; [PropertyType.rich_text]: RichTextProperty };
    [UserRecordKeys.ROLE]: { type: PropertyType.select; [PropertyType.select]: SelectProperty };
    [UserRecordKeys.FULL_NAME]: { type: PropertyType.rich_text; [PropertyType.rich_text]: RichTextProperty };
    [UserRecordKeys.REGISTARATION_AT]: { type: PropertyType.date; [PropertyType.date]: DateProperty };
    [UserRecordKeys.PASSWORD]: { type: PropertyType.rich_text; [PropertyType.rich_text]: RichTextProperty };
};

export type UserListQuery = DatabaseQuery<UserListQueryKeys>;

export type UserRecord = Pick<BaseQueryRecord, 'created_time' | 'last_edited_time'> & {
    [UserRecordKeys.USER_NAME]: string | null;
    [UserRecordKeys.ROLE]: string | null;
    [UserRecordKeys.FULL_NAME]: string | null;
    [UserRecordKeys.REGISTARATION_AT]: string | null;
    [UserRecordKeys.PASSWORD]: string | null;
};

export type UserList = UserRecord[];
