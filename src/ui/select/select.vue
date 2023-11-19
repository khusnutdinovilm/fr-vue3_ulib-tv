<template>
  <select v-model="selectedValue" class="p-1 px-2">
    <option disabled value="">Выберите значение</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.title }}
    </option>
  </select>
</template>

<script lang="ts">
export default {
  name: "ui-select",
};
</script>

<script setup lang="ts">
import { SelectProps } from "@/types/props";

import { ref, watch } from "vue";

defineProps<SelectProps>();

const emits = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const selectedValue = ref<string>("");

watch(selectedValue, (newValue) => {
  emits("update:modelValue", newValue);
});
</script>
