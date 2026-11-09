<template>
  <div class="q-ma-md">
    <q-btn icon="today" label="Load Data" @click="loadData" />
  </div>
</template>
<script setup>
// เข้าไปดูเพิ่มเติมได้ที่ loading plugin Quasar
import { useQuasar } from 'quasar'
const $q = useQuasar()
const loadData = () => {
  $q.loading.show()
  //   $q.loading.show({
  //     spinner: null,
  //     message: `<div class = 'text-center'>
  //             <img src ='https://i.pinimg.com/originals/98/ab/40/98ab407e11091e0b0ee0c4110142db27.gif'
  //             style='width: 200px; height: 150px; border-radius: 10px;'>
  //             <div class='q-mt-md text-h6'> กำลังโหลดจ้า^^<div>
  //             <div>`,
  //     html: true,
  //     backgroundColor: 'grey',
  //     messageColor: 'dark',
  //   })
  //   $q.loading.show({
  //     message: 'loading data...',
  //     spinner: QSpinnerFacebook,
  //     spinnerColor: 'yellow',
  //     spinnerSize: 140,
  //     backgroundColor: 'blue',
  //     messageColor: 'white',
  //   })

  setTimeout(() => {
    $q.loading.hide()
    $q.loading({ type: 'positive', message: 'load Data Success' })
  }, 3000) //จำนวนเวลาที่รอ
}
</script>
