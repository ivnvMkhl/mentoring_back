import { LessonList, LessonListQuery } from './lesson.domain.interfaces.js';

class LessonDomain {
    lessonListQuery?: LessonListQuery;
    lessonList?: LessonList;
}

const lessonDomain = new LessonDomain();

export { lessonDomain };
