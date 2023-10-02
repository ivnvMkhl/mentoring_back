import {
    BaseQueryRecord,
    DatabaseQuery,
    DateProperty,
    NumberProperty,
    PropertyType,
    RelationProperty,
    TitleProperty,
    UniqueIdProperty,
} from '../../services/notion/notion.interfaces.js';

export type LessonList = Pick<BaseQueryRecord, 'created_time' | 'last_edited_time'> &
    Record<string, string | null | number | (string | null)[]>;

export type LessonListQueryKeys = {
    ['Menti name']: { type: PropertyType.relation; [PropertyType.relation]: RelationProperty };
    ID: { type: PropertyType.unique_id; [PropertyType.unique_id]: UniqueIdProperty };
    Donate: { type: PropertyType.number; [PropertyType.number]: NumberProperty };
    Date: { type: PropertyType.date; [PropertyType.date]: DateProperty };
    UUID: { type: PropertyType.title; [PropertyType.title]: TitleProperty };
};

export type LessonListQuery = DatabaseQuery<LessonListQueryKeys>;
