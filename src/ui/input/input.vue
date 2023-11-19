<template>
  <input
    class="input"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  name: "ui-input",
  props: {
    modelValue: {
      type: [String, Number],
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
      default: "Введите значение",
    },
  },
  emits: ["update:modelValue"],
};
</script>

<style scoped>
.input {
  @apply p-1 border border-sky-500 border-solid rounded;
}
</style>
