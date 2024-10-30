<template>
  <sidebar-component />
  <router-view />
  <login-modal />
</template>
<script setup>
import SidebarComponent from './components/layout/SidebarComponent.vue';
import LoginModal from './components/auth/LoginModal.vue';

</script>
