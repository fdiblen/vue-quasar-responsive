<template>
  <div class="step">
    <div>Step {{ $route.params.id }}</div>
    <q-btn to="/step/1"> Step 1</q-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'StepView',
  components: {
  }
})
</script>
