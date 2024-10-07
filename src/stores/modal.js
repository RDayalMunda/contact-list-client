import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useModalStore = defineStore('modalStore', () => {
  const modalList = ref([])

  function isModalOpen(modalId){
    return modalList.value.find( item => item == modalId )
  }

  function showModal(modalId){
    const isOpen = isModalOpen(modalId)
    if (!isOpen){
      console.log('to show modal')
      modalList.value.push( modalId )
    }
  }

  function hideModal(modalId){
    const modalIndex = modalList.value.findIndex( item => modalId )
    if (modalIndex != -1){
      modalList.value.splice( modalIndex, 1 )
    }
  }
  return { modalList, showModal, hideModal, isModalOpen }
})
