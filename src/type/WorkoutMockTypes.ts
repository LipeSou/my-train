interface Workouts {
    workout: string;
    description: string;
}

type WorkoutType = {
    'perna': Workouts[];
    'abdmen+gluteos': Workouts[];
};

type WorkoutKey = keyof WorkoutType;

export type {Workouts, WorkoutType, WorkoutKey}