<template>
  <div class="main-sidebar">
    <template v-for="item in menuItems" :key="item.id">
      <div
        class="sidebar-item"
        :class="isActive(item.routeName)?'active':''"
        @click="navigate(item.routeName)"
      >
        {{ item.name }}
      </div>
    </template>
  </div>
</template>
<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';


const router = useRouter()
const route = useRoute()
const menuItems = computed(() => ([
  {
    id: "Home",
    name: "Home",
    routeName: "home"
  },
  {
    id: "About",
    name: "About",
    routeName: "about"
  }
]))

async function navigate(routeName) {
  await router.push({ name: routeName })
}

function isActive(routeName){
  return route.name == routeName
}

</script>