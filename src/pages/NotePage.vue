<template>
  <h4>Note Page</h4>
  <div v-for="item in notes" :key="item.id">
    <div>
      {{ item.id }} - {{ item.name }}
      <q-icon name="description" @click="viewNote(item)" />
    </div>
  </div>
  <div>
    <q-btn color="primary" icon="New" label="New Note" @click="$router.push({ name: 'NewNote' })" />
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const notes = ref([
  { id: 1, name: 'task1' },
  { id: 2, name: 'task2' },
])
const viewNote = (item) => {
  router.push({
    name: 'NoteDetail',
    params: { id: item.id },
  })
}
</script>
