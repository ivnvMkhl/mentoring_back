import { Exercises, ExercisesQuery } from './exercise.domain.interfaces.js';

class ExerciseDomain {
    exercisesQuery?: ExercisesQuery;
    exercises?: Exercises;
}

const exerciseDomain = new ExerciseDomain();

export { exerciseDomain };
