<template>
  <div>
    <select v-model="selectedTraining">
      <option value="perna">Perna</option>
      <option value="abdmen+gluteos">Abdômen e Glúteos</option>
    </select>

    <div v-for="exercise in filteredTraining" :key="exercise.train">
      <p>{{ exercise.train }}</p>
      <img :src="exercise.image" alt="Imagem do exercício">
    </div>
  </div>
</template>
  
  <script setup lang="ts">
  import { defineComponent, ref, computed } from 'vue';
  import { WorkoutKey } from "../type/WorkoutMockTypes"

  
  
  </script>
  