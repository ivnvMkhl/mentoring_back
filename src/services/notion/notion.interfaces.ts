export enum PropertyType {
    relation = 'relation',
    unique_id = 'unique_id',
    select = 'select',
    email = 'email',
    rich_text = 'rich_text',
    multi_select = 'multi_select',
    phone_number = 'phone_number',
    title = 'title',
    text = 'text',
    number = 'number',
    date = 'date',
}

export type NumberProperty = number | null;
export type EmailProperty = string | null;
export type PhoneNumberProperty = string | null;
export type RelationProperty = { id: string }[];
export type UniqueIdProperty = { prefix: string | null; number: number | null };
export type DateProperty = { start: string | null; end: string | null; time_zone: string | null };
export type SelectProperty = { id: string; name: string | null; color: string | null };
export type MultiSelectProperty = SelectProperty[];
export type TitleProperty = RichTextProperty;
export type RichTextProperty = {
    type: PropertyType.text;
    [PropertyType.text]: {
        content: string | null;
        link: string | null;
    };
    annotations: {
        bold: boolean;
        italic: boolean;
        strikethrough: boolean;
        underline: boolean;
        code: boolean;
        color: string;
    };
    plain_text: string | null;
    href: string | null;
}[];

export type Properties<Keys> = {
    [K in keyof Keys]: { id: string } & Keys[K];
};

export type DatabaseQuery<Keys = any> = {
    results: BaseQueryRecord<Keys>[];
    object: string;
    has_more: boolean;
    type: string;
    next_cursor: unknown;
    page_or_database: unknown;
};

export type BaseQueryRecord<Keys = any> = {
    object: string;
    id: string;
    created_time: string;
    last_edited_time: string;
    created_by: {
        object: string;
        id: string;
    };
    last_edited_by: {
        object: string;
        id: string;
    };
    cover: unknown;
    icon: unknown;
    parent: {
        type: string;
        database_id: string;
    };
    archived: boolean;
    properties: Properties<Keys>;
    url: string;
    public_url: string | null;
};
