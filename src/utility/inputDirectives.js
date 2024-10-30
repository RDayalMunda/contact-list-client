export const onlyNumber = {
  mounted(el, binding, node) {
    console.log("on before Mount", el, binding);
    el.addEventListener("input", (e) => {
      const cleanedValue = el.value.replace(/\D/g, "");
      node.props["onUpdate:modelValue"](cleanedValue);
    });
  },
};
