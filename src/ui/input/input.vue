<template>
  <input class="input" :placeholder="placeholder" :value="modelValue" @input="updateValue" />
</template>

<script lang="ts">
export default {
  name: "ui-input",
};
</script>

<script setup lang="ts">
import { InputProps } from "@/types/props";

withDefaults(defineProps<InputProps>(), {
  placeholder: "Введите значение",
});

const emits = defineEmits<{
  (e: "update:modelValue", newValue: string): void;
}>();

const updateValue = (event: Event) =>
  emits("update:modelValue", (event.target as HTMLInputElement).value);
</script>

<style scoped>
.input {
  @apply p-1 border border-sky-500 border-solid rounded;
}
</style>
