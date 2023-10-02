import { lessonDomain } from '../../model/lesson/lesson.domain.js';
import { envService } from '../../services/env/index.js';
import { notionApi } from '../../services/notion/index.js';
import { mapQueryToPlainRecord } from '../../services/notion/notion.utils.js';
import { LessonList, LessonListQueryKeys } from './../../model/lesson/lesson.domain.interfaces.js';

export const lessonAdapter = {
    calculateQueryToLessonList() {
        if (lessonDomain.lessonListQuery) {
            lessonDomain.lessonList = mapQueryToPlainRecord<LessonList>(lessonDomain.lessonListQuery, true);
        } else {
            console.error('not found lessonDomain.lessonListQuery');
        }
    },

    async loadLessonListQuery() {
        try {
            lessonDomain.lessonListQuery = await notionApi.databaseQuery<LessonListQueryKeys>(
                envService.variables.METORING_TABLE_ID,
            );
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            }
        }
    },

    async getLessonList(refresh?: boolean) {
        if (!lessonDomain.lessonList || refresh) {
            await lessonAdapter.loadLessonListQuery();
            lessonAdapter.calculateQueryToLessonList();
            return lessonDomain.lessonList;
        }
        return lessonDomain.lessonList;
    },
};
