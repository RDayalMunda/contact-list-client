<template>
  <sidebar-component />
  <router-view />
  <login-component />
</template>
<script setup>
import SidebarComponent from './components/layout/SidebarComponent.vue';
import LoginComponent from './components/auth/LoginComponent.vue';

</script>
