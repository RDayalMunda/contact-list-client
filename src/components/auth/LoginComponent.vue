<template>
  <div>
    <pre>{{credentials}}</pre>
    <input-field
      label="Username"
      placeholder="Enter username"
      v-model="credentials.name"
    />
    <input v-model="credentials.password" />
    <button>Login</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import InputField from '../common/inputField.vue';

const credentials = ref({
  name: '',
  password: ''
})
</script>