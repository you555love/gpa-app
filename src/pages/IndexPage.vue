<template>
  <!-- <q-page class="flex flex-center">
    <div class="flex-center">
      <div class="text-center text-indigo-10 text-h4 text-italic">First Row</div>
      <div class="text-center text-body1 text-weight-bolder text-accent">Second Row</div>
      <div class="text-caption q-mt-md text-light-blue-14 text-center">Third Row</div>
    </div>
  </q-page> -->
  <!-- <q-page padding> -->
  <!-- <div>{{ msg.toLocaleUpperCase() }}</div>
    <div>{{ isActive ? 'Open' : 'Close' }}</div>
    <div>{{ 5 + 3 }}</div>
    <img src="'/images/catwithmusic.png'" />
    <q-btn :color="my_color" icon="check" label="OK" @click="onClick" />
    <div>v-if="islogged">Welcome</div>
    <div> v-else>Please Login</div>
    <div v-if="islogged">Welcome</div>
    <div v-else>Please Login</div>
    <div v-if="score >= 80">Great Job!</div>
    <div v-else-if="score >= 50">Pass</div>
    <div v-else>Fail</div>
    <div v-show="isvisible">Show or hide</div>
    <q-btn color="primary" :label="isvisible ? 'Hide' : 'Show'" @click="isvisible = !isvisible" /> 
        <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }} - {{ item.Price }} Baht</li>
      <br />
      <li v-for="(item, index) in items" :key="index">
        {{ index + 1 }}. {{ item.name }} - {{ item.Price }} Baht
      </li>
    </ul>
   </q-page> -->

  <q-page padding>
    <form @reset="onReset" @submit.prevent="onSubmit">
      <div class="q-gutter-md">
        <q-input type="text" label="Your Username" v-model="username"></q-input>
        <q-input type="email" label="Your Email" v-model="email" @keyup.alt.enter="onReset">
        </q-input>
        <q-select v-model="role" :options="roleOptions" label="Role"></q-select>
        <q-btn color="green" type="submit" label="Submit" />
        <q-btn color="grey" type="reset" label="RESET" />
      </div>
    </form>
  </q-page>
</template>

<script setup>
// import { ref } from 'vue'
// const username = ref('')
// const email = ref('')
// const role = ref(null)
// const roleOptions = ['Student', 'Teacher', 'Staff']
// const onReset = () => {
//   username.value = ''
//   email.value = ''
//   role.value = null
// }
// const onSubmit = () => {
//   if (!username.value || !email.value) {
//     alert('Username or email is empty')
//     return
//   }
//   console.log('Form was Submitted: ', {
//     username: username.value,
//     email: email.value,
//     role: role.value,
//   })
//   alert('Data Saved')
// }
// const items = ref([
//   { id: 1, name: 'ProductA', Price: 100 },
//   { id: 2, name: 'ProductB', Price: 200 },
//   { id: 3, name: 'ProductC', Price: 300 },
// ])
// const isvisible = ref(true)
// const islogged = ref(true)
// const score = ref(49)
// import { useMeta } from 'quasar'
// useMeta({ title: 'Main Page' })
// const my_color = ref('green')
// const msg = ref('Hello Vue! How you doing')
// const isActive = ref(false)
// console.log(msg.value)
// Array
// const items = ref(['apple', 'Banana', 1100, 25.5])
// items.value.push(100)
// console.log(items.value)
// //Object
// const product = ref({
//   id: 1,
//   name: 'Laptop',
//   price: 15000,
// })
// console.log(product.value)
// reactive
// const user = reactive({ name: 'Jack', age: 20 })
// console.log(user.name, user.age)
// const { name, age } = toRefs(user)
// console.log(name.value, age.value)
</script>
