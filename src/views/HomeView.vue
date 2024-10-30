<template>
  <div class="main-content">
    <h1>Home page</h1>
    <!-- <button @click="showLoginModal">Login?</button> -->
     <div>
      <pre>{{bindObj}}</pre>
     </div>
    <input-field
      v-model="bindObj.name"
      placeholder="Enter username"
      label="Username"
      :mask="capitalize"
    />
    <input-field
      v-model="bindObj.number"
      placeholder="Enter phone number"
      label="Phone number"
      type="number"
    />
  </div>
</template>
<script setup>
import InputField from '@/components/common/inputField.vue';
import { useModalStore } from '@/stores/modal';
import { ref } from 'vue';

const bindObj = ref({
  name: "",
  number: ""
})

function capitalize(value){
  return value.toUpperCase()
}

const modalStore = useModalStore()

function showLoginModal(){
  modalStore.showModal('login-modal')
}

</script>
