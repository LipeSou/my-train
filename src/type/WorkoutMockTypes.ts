interface WorkoutMock {
    workout: string;
    image: string;
}

type WorkoutType = {
    'perna': WorkoutMock[];
    'abdmen+gluteos': WorkoutMock[];
};

type WorkoutKey = keyof WorkoutType;

export type {WorkoutMock, WorkoutType, WorkoutKey}