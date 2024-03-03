
<template>
    <el-tabs type="border-card" v-model="activeName" class="demo-tabs pink">
        <el-tab-pane label="Perna" name="perna">Perna</el-tab-pane>
        <el-tab-pane label="Abdomen e Glúteos" name="abdmen+gluteos">Abdomen e Glúteos</el-tab-pane>
    </el-tabs>
</template>
  
<script lang="ts" setup>
    import type { TabsPaneContext } from 'element-plus'
import { ref } from 'vue';

    const activeName = ref("perna")

    const handleClick = (tab: TabsPaneContext, event: Event) => {
        console.log(tab, event)
    }
</script>
<style>
  .demo-tabs > .el-tabs__content {
    padding: 32px;
    font-size: 20px;
    font-weight: 600;
  }
</style>
  