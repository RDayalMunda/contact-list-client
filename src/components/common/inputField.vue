<template>

  <div class="input-container">
    <label :for="componentId">{{ label }}</label>
    <input :id="componentId" v-model="model" :placeholder="placeholder" v-input-directive />
  </div>

</template>

<script setup>
import { computed, useId } from 'vue';



const model = defineModel()
const id = useId()
const componentId = computed(() => {
  return props.id ? props.id : id
})

const props = defineProps({
  id: String,
  label: {
    type: String,
    default: ""
  },
  placeholder: {
    type: String,
    default: ""
  },
  type: {
    type: String,
    default: "text"
  },
  mask: {
    type: Function,
    default: null
  }
})

function onlyNumber(value){
  return value.replace(/\D/g, "");
}

const newValueEvaluator = computed( ()=>{
  if (props.type === 'number') return onlyNumber
  if (typeof props.mask === 'function') return props.mask
  return (value)=> value 
} )

const vInputDirective = {
  beforeMount(el, binding, node) {
    el.addEventListener("input", (e) => {
      
      // const cleanedValue = props.mask(el.value)
      const newValue = newValueEvaluator.value(el.value)
      node.props["onUpdate:modelValue"](newValue);
    });
  },
}

</script>

<style scoped>
.input-container {
  display: flex;
  flex-direction: column;
}
</style>