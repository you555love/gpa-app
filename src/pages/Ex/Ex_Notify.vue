<template>
  <div class="q-pa-md"></div>
  <q-btn icon="save" label="save" @click="saveNote" />
</template>
<script setup>
import { useQuasar } from 'quasar'
const $q = useQuasar()
const saveNote = () => {
  $q.notify({
    type: 'positive',
    message: 'Save Completed',
    position: 'top-right',
    timeout: 2000,
    icon: 'print',
  })
}
</script>
