<template>
  <div :id="id" class="modal" :class="showModal?'show':''">
    
    <div class="modal-content">
      <div class="modal-title">
        <span>Modal title</span>
        <span class="close" @click="hide">&times;</span>
      </div>
      <slot />
    </div>
  </div>
</template>

<script setup>
import { useModalStore } from '@/stores/modal';
import { computed, ref, watch } from 'vue';

const modalStore = useModalStore()

const props = defineProps({
  id: {
    required: true,
    type: String,
    default: ""
  },
  closeOnEscape: {
    type: Boolean,
    default: true
  },
  closeOnClickOutside: {
    type: Boolean,
    default: true,
  },
  title: {
    type: String,
    default: ''
  },
})

const showModal = computed( ()=>{
  return modalStore.isModalOpen(props.id)
} )

function hide(){
  modalStore.hideModal(props.id)
}
watch(
  showModal,
  function(newValue){
    if (!props.id){
      throw "Modal id has not been provided"
    }
    if (newValue){
      modalStore.showModal(props.id)
    }else{
      modalStore.hideModal(props.id)
    }
  }
)



</script>