<template>
  <div class="main-content">
    <h1>Home page</h1>
    <button @click="showLoginModal">Login?</button>
  </div>
</template>
<script setup>
import { useModalStore } from '@/stores/modal';


const modalStore = useModalStore()

function showLoginModal(){
  modalStore.showModal('login-modal')
}

</script>
