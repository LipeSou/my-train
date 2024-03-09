<script lang="ts" setup>
import { ref } from 'vue'
import { PhImage } from "@phosphor-icons/vue";


const dialogVisible = ref(false)

const { workoutName } = defineProps<{
    workoutName: string,
    image?: string
  }>()
</script>


<template>
    <el-button plain @click="dialogVisible = true" class="button">
      <PhImage :size="32" color="#e44b8d"/>
    </el-button>
  
    <el-dialog
      v-model="dialogVisible"
      :title="workoutName"
      class="pink"
    >
      <el-image style="width: 100%; height: 100%" :src="image" :fit="'fill'" />
    </el-dialog>
  </template>
  
<style>
.el-dialog {
  width: 500px !important;
}
.el-dialog__title {
    color: var(--pink) !important;
}
.button {
  border: none !important;
}

@media (width <= 768px) {
  .el-dialog {
    width: 90vw !important;  
  }
}
</style>