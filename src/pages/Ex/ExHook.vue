<template>
  <div class="q-ma-md"></div>
  <q-btn color="primary" icon="add" label="Add" @click="increment" />
</template>
<script setup>
import { ref, onMounted, onUpdated, onUnmounted } from 'vue'
const timer = ref(null)
const count = ref(0)
const increment = () => {
  count.value++
}

onMounted(() => {
  console.log('onMounted: Component loaded.')
  timer.value = setInterval(() => {
    console.log('Timer working...')
  }, 5000)
})

onUnmounted(() => {
  console.log('remove component')
  clearInterval(timer.value)
})

onUpdated(() => {
  console.log('count=', count.value)
})
// const increment = () => {
//   count.value++
// }
</script>
