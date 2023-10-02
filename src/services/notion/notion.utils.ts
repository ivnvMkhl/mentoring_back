import { DatabaseQuery, PropertyType, RelationProperty } from './notion.interfaces.js';

export const mapQueryToPlainRecord = <Record = any[]>(query: DatabaseQuery, includeRelations: boolean): Record => {
    return query.results.map(({ id, created_time, last_edited_time, properties }) => ({
        id,
        created_time,
        last_edited_time,
        ...Object.entries(properties).reduce((acc, [key, value]) => {
            switch (value.type) {
                case PropertyType.relation:
                    return includeRelations
                        ? { ...acc, relations: (value[value.type] as RelationProperty).map((relation) => relation.id) }
                        : acc;
                case PropertyType.unique_id:
                    return { ...acc, [key]: value[value.type].number };
                case PropertyType.select:
                    return { ...acc, [key]: value[value.type].name };
                case PropertyType.multi_select:
                    return { ...acc, [key]: value[value.type].map((val: any) => val.name) };
                case PropertyType.title: {
                    const textValues = value[value.type].map((textValue: any) => textValue.plain_text);
                    return { ...acc, [key]: textValues.length <= 1 ? textValues[0] : textValues };
                }
                case PropertyType.rich_text: {
                    const textValues = value[value.type].map((textValue: any) => textValue.plain_text);
                    return { ...acc, [key]: textValues.length <= 1 ? textValues[0] : textValues };
                }
                case PropertyType.email:
                    return { ...acc, [key]: value[value.type] };
                case PropertyType.phone_number:
                    return { ...acc, [key]: value[value.type] };
                case PropertyType.number:
                    return { ...acc, [key]: value[value.type] };
                case PropertyType.date:
                    return { ...acc, [key]: value[value.type].start };
                default:
                    return acc;
            }
        }, {}),
    })) as Record;
};
