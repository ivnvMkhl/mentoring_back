import { Exercises, ExercisesQueryKeys } from '../../model/exercise/exercise.domain.interfaces.js';
import { exerciseDomain } from '../../model/exercise/exercise.domain.js';
import { envService } from '../../services/env/index.js';
import { notionApi } from '../../services/notion/index.js';
import { mapQueryToPlainRecord } from '../../services/notion/notion.utils.js';

export const exerciseAdapter = {
    calculateQueryToExerciseList() {
        if (exerciseDomain.exercisesQuery) {
            exerciseDomain.exercises = mapQueryToPlainRecord<Exercises>(exerciseDomain.exercisesQuery, true);
        } else {
            console.error('not found lessonDomain.lessonListQuery');
        }
    },

    async loadExerciseListQuery() {
        try {
            exerciseDomain.exercisesQuery = await notionApi.databaseQuery<ExercisesQueryKeys>(
                envService.variables.EXERCISES_TABLE_ID,
            );
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            }
        }
    },

    async getExercises(refresh?: boolean) {
        if (!exerciseDomain.exercises || refresh) {
            await exerciseAdapter.loadExerciseListQuery();
            exerciseAdapter.calculateQueryToExerciseList();
            return exerciseDomain.exercises;
        }
        return exerciseDomain.exercises;
    },
};
