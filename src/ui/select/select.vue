<template>
  <select v-model="selectedValue" class="p-1 px-2">
    <option disabled value="">Выберите значение</option>
    <option v-for="option in options" :key="option" :value="option.value">
      {{ option.title }}
    </option>
  </select>
</template>

<script>
export default {
  name: "ui-select",
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
  },
  emits: ["update:modelValue"],
  data() {
    return {
      selectedValue: "",
    };
  },
  watch: {
    selectedValue(newValue) {
      this.$emit("update:modelValue", newValue);
    },
  },
};
</script>
