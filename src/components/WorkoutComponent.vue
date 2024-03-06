<script setup lang="ts">
import { ref, computed } from 'vue';
import WorkoutCard from './WorkoutCard.vue';
import WorkoutTab from './WorkoutTab.vue';
import { workout } from '../mock/WorkoutMock';
import { type WorkoutKey } from '../type/WorkoutMockTypes';

const selectedWorkout = ref<WorkoutKey>('perna');
const filteredWorkout = computed(() => {
    return workout[selectedWorkout.value];
});
</script>

<template>
  <div>
    <select v-model="selectedWorkout">
      <option value="perna">Perna</option>
      <option value="abdmen+gluteos">Abdômen e Glúteos</option>
    </select>

    <WorkoutTab :selectedWorkout="selectedWorkout"/>

    <WorkoutCard v-if="filteredWorkout" :workouts="filteredWorkout"  :selectedWorkout="selectedWorkout" />
  </div>
</template>