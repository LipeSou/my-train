<script setup lang="ts">
import { ref, computed } from 'vue';
import { workout } from '../mock/WorkoutMock';
import { type WorkoutKey } from '../type/WorkoutMockTypes';
import WorkoutCard from './WorkoutCard.vue';

const selectedWorkout = ref<WorkoutKey>('perna');
const filteredWorkout = computed(() => {
    return workout[selectedWorkout.value];
});
</script>

<template>
  <div class="container">
    <el-tabs type="border-card" v-model="selectedWorkout" class="demo-tabs">
        <el-tab-pane label="Perna" name="perna">Perna</el-tab-pane>
        <el-tab-pane label="Abdomen e Glúteos" name="abdmen+gluteos">Abdomen e Glúteos</el-tab-pane>
        <el-tab-pane label="Superiores" name="superiores">Superiores</el-tab-pane>
        <WorkoutCard :selectedWorkout="selectedWorkout" :workouts="filteredWorkout"/>
    </el-tabs>
  </div>
</template>

<style>
.container{
  display: flex;
  align-items: center;
  justify-content: center;
}

.demo-tabs > .el-tabs__content {
  padding: 32px;
  font-size: 20px;
  font-weight: 600;
}

@media (width <= 768px) {
  .demo-tabs {
    width: 90vw;  
  }
}
</style>