<template>
  <q-page padding>
    <q-btn label="Save" color="Primary" text-color="black" icon="pets unelevated"> </q-btn>
    <q-btn outline label="No BG" />
    <!--  -->
    <q-separator spaced="16px" color="red" />
    <!--  -->
    <q-btn round icon="collapse" />
    <q-space />
    <q-btn rounded label="Confirm"></q-btn>
    <!--  -->
    <q-separator spaced="16px" />
    <!--  -->
    <q-btn-group push>
      <q-btn push label="One" />
      <q-btn push label="Two" />
      <q-btn push label="Three" />
    </q-btn-group>
    <!--  -->
    <q-separator spaced="16px" color="blue" />
    <!--  -->
    <q-btn
      :loading="isSaving"
      color="primary"
      :label="isSaving ? 'Saving...' : 'Saved'"
      @click="save"
    >
      <template v-slot:loading>
        <q-spinner-dots color="White" size="3rem" :thckness="5" class="on-left" />Saving...
      </template>
    </q-btn>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
const isSaving = ref(false)
const save = async () => {
  isSaving.value = true
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log('Data Saved')
  } catch (error) {
    console.log('Error: ', error)
  } finally {
    isSaving.value = false
  }
}
</script>
