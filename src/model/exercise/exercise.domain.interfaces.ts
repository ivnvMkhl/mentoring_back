import {
    BaseQueryRecord,
    DatabaseQuery,
    PropertyType,
    RelationProperty,
    RichTextProperty,
    SelectProperty,
    UniqueIdProperty,
} from '../../services/notion/notion.interfaces.js';

export type Exercises = Pick<BaseQueryRecord, 'created_time' | 'last_edited_time'> &
    Record<string, string | null | number | (string | null)[]>;

export type ExercisesQueryKeys = {
    name: { type: PropertyType.relation; [PropertyType.relation]: RelationProperty };
    difficulty: { type: PropertyType.select; [PropertyType.select]: SelectProperty };
    topic: { type: PropertyType.select; [PropertyType.select]: SelectProperty };
    content: { type: PropertyType.rich_text; [PropertyType.rich_text]: RichTextProperty };
    code: { type: PropertyType.rich_text; [PropertyType.rich_text]: RichTextProperty };
};

export type ExercisesQuery = DatabaseQuery<ExercisesQueryKeys>;
