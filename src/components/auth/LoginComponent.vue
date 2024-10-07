<template>
  <modal-wrapper id="login-modal">
    <div>
      <input v-model="credentials.name" />
      <input v-model="credentials.password" />
      <button>Login</button>
    </div>
  </modal-wrapper>
</template>

<script setup>
import { ref } from 'vue';

import ModalWrapper from '../common/ModalWrapper.vue';
const credentials = ref({
  name: '',
  password: ''
})
</script>