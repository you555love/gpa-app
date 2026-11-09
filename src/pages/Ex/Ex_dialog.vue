<template>
  <q-btn color="primary" label="delete" @click="confirmDialog = true" />
  <q-dialog v-model="confirmDialog">
    <q-card style="min-width: 300px">
      <q-card-section class="row items-center">
        <q-icon name="warning" color="orange" size="40px" class="q-mr-md"></q-icon>
        <div>
          <div class="text-h6">Confrim</div>
          <div class="text-body-2">Are you sure to Delete?</div>
        </div>
      </q-card-section>
      <q-card-section>
        <q-btn label="Cancel" color="grey" glossy v-close-popup></q-btn>
        <q-btn label="Confrim Delete" color="negative" glossy @click="deleteAction"></q-btn>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<script setup>
import { ref } from 'vue'
const confirmDialog = ref(false)
const deleteAction = () => {
  console.log('delete seccess')
  confirmDialog.value = false
}
</script>
