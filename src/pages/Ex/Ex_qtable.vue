<template>
  <q-page class="q-pa-md">
    <q-table
      title="My Records"
      :rows="rows"
      :columns="columns"
      row-key="id"
      :filter="filterText"
      :pagination="pagination"
      :loading="isLoading"
      selection="multiple"
      v-model:selected="selected"
    >
      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filterText" placeholder="Search">
          <template v-slot:append><q-icon name="search" /></template>
        </q-input>
      </template>
      <template v-slot:body-cell-subjectScore="props">
        <q-td :props="props">
          <q-chip :color="props.row.score > 50 ? 'green' : 'red'" text-color="white">
            {{ props.row.score }}</q-chip
          >
        </q-td>
      </template>
    </q-table>
    <div>Selected value: {{ JSON.stringify(selected) }}</div>
  </q-page>
</template>
<script setup>
import { onMounted, ref } from 'vue'
const selected = ref([])
const isLoading = ref(true)
const filterText = ref('')
const pagination = ref({
  sortBy: 'subjectScore',
  descending: false,
  page: 1,
  rowsPerPage: 3,
})
const columns = [
  { name: 'subjectName', label: 'Name', field: 'name', align: 'left', sortable: true },
  { name: 'subjectScore', label: 'Score', field: 'score', align: 'center' },
]

const rows = [
  { id: 1, name: 'Math', score: 80 },
  { id: 2, name: 'English', score: 75 },
  { id: 3, name: 'Physic', score: 55 },
  { id: 4, name: 'Chemistry', score: 64 },
  { id: 5, name: 'Computer', score: 71 },
  { id: 6, name: 'Biology', score: 45 },
]
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 5000)
})
</script>
