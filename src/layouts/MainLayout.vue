<template>
  <q-layout view="hHh lpR fFf">
    <!-- <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <q-item clickable v-ripple><q-item-section>Dashboard</q-item-section></q-item>
      <q-item clickable v-ripple><q-item-section>Users</q-item-section></q-item>
      <q-item clickable v-ripple><q-item-section>Products</q-item-section></q-item>
      <q-item clickable v-ripple><q-item-section>Settings</q-item-section></q-item>
    </q-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
          <div>Watee Ch2</div>
        </q-toolbar-title>
        <div v-if="store.user">
          <q-btn size="sm" color="negative" icon="logout" @click="onLogout"></q-btn>
        </div>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup>
// import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useQuasar } from 'quasar'
import { useAuthStore } from '@/stores/auth-store'

const store = useAuthStore()
const router = useRouter()
const $q = useQuasar

const onLogout = () => {
  $q.dialog({
    title: 'Logout',
    message: 'Are you sure you want to logout?',
    cancel: true,
    persistent: true,
  }).onOk(() => {
    store.logout()
    $q.notify({
      type: 'positive',
      message: 'Logout success',
    })
    router.replace({ path: 'login' })
  })
}

// const rightDrawerOpen = ref(true)
// function toggleRightDrawer () {
//   rightDrawerOpen.value = !rightDrawerOpen.value
// }
</script>
