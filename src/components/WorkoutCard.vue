<script setup lang="ts">
import { WorkoutType, Workouts } from '../type/WorkoutMockTypes';




  defineProps<{
    selectedWorkout: keyof WorkoutType,
    workouts: Workouts[]
  }>()

  function renderTitleWorkout  (title: keyof WorkoutType)  {
    if(title === 'abdmen+gluteos') {
      return "Abdomen e Glúteos"
    }
    if(title === 'perna'){
      return "Perna"
    }
    if(title === 'superiores'){
      return "Superiores"
    }
  }
</script>

<template>
    <el-card class="box-card">
      <template #header>
        <div class="card-header pink">
          <span>{{ renderTitleWorkout(selectedWorkout) }}</span>
        </div>
      </template>
      <div v-for="exercise in workouts" :key="exercise.workout" >
        <p class="text">{{ exercise.workout }}</p>
        <p class="description item">{{ exercise.description }}</p>
      </div>
    </el-card>
</template>

<style>
.card-header {
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--pink);
  font-size: 18px;
}

.text {
  font-size: 14px;
  font-weight: 500;
}

.item {
  margin-bottom: 18px;
}

.description {
  font-weight: 300; 
}

.box-card {
  width: 480px;
}
</style>