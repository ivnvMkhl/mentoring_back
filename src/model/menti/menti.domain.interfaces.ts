import { BaseQueryRecord } from '../../services/notion/notion.interfaces.js';

import {
    DatabaseQuery,
    EmailProperty,
    MultiSelectProperty,
    PhoneNumberProperty,
    PropertyType,
    RelationProperty,
    RichTextProperty,
    SelectProperty,
    TitleProperty,
    UniqueIdProperty,
} from '../../services/notion/notion.interfaces.js';

const MENTI_LIST_RELATION = '📖 Mentoring';

export enum MentiRecordKeys {
    ID = 'ID',
    GRADE = 'Grade',
    EMAIL = 'Email',
    TELEGRAM = 'Telegram',
    LOCATION = 'Location',
    PHONE = 'Phone',
    NAME = 'Name',
}

export type MentiListQueryKeys = {
    [MENTI_LIST_RELATION]: { type: PropertyType.relation; [PropertyType.relation]: RelationProperty };
    [MentiRecordKeys.ID]: { type: PropertyType.unique_id; [PropertyType.unique_id]: UniqueIdProperty };
    [MentiRecordKeys.GRADE]: { type: PropertyType.select; [PropertyType.select]: SelectProperty };
    [MentiRecordKeys.EMAIL]: { type: PropertyType.email; [PropertyType.email]: EmailProperty };
    [MentiRecordKeys.TELEGRAM]: { type: PropertyType.rich_text; [PropertyType.rich_text]: RichTextProperty };
    [MentiRecordKeys.LOCATION]: { type: PropertyType.multi_select; [PropertyType.multi_select]: MultiSelectProperty };
    [MentiRecordKeys.PHONE]: { type: PropertyType.phone_number; [PropertyType.phone_number]: PhoneNumberProperty };
    [MentiRecordKeys.NAME]: { type: PropertyType.title; [PropertyType.title]: TitleProperty };
};

export type MentiListQuery = DatabaseQuery<MentiListQueryKeys>;

export type MentiRecord = Pick<BaseQueryRecord, 'created_time' | 'last_edited_time'> & {
    [MentiRecordKeys.ID]: number | null;
    [MentiRecordKeys.GRADE]: string | null;
    [MentiRecordKeys.EMAIL]: string | null;
    [MentiRecordKeys.TELEGRAM]: string | null;
    [MentiRecordKeys.LOCATION]: (string | null)[];
    [MentiRecordKeys.PHONE]: string | null;
    [MentiRecordKeys.NAME]: string | null;
};

export type MentiList = MentiRecord[];
