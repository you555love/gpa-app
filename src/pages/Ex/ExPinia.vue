<template>
  <q-page padding>
    <q-card class="q-pa-md">
      <q-card-section>
        <div class="text-h6">Authentication</div>
      </q-card-section>
      <q-card-section>
        <p>UID: {{ authstore.uid }}</p>
        <p>Username: {{ authstore.username }}</p>
        <p>Status: {{ authstore.loginStatus }}</p>
        <p>{{ authstore.welcomeMessage }}</p>
      </q-card-section>
      <q-card-section>
        <q-btn color="primary" label="Login" @click="authstore.login('Watee')"></q-btn>
        <q-btn color="negative" label="Logout" @click="authstore.logout"></q-btn>
      </q-card-section>
    </q-card>
  </q-page>
</template>
<script setup>
import { useAuthStore } from '@/stores/authstore'
const authstore = useAuthStore()
</script>
