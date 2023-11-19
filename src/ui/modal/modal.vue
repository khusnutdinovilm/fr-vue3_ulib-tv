<template>
  <Teleport to="body">
    <div class="modal" v-if="showModal" @click.prevent="closeModal">
      <div class="modal__wrapper" @click.stop>
        <slot />
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts">
export default {
  name: "ui-modal",
};
</script>
<script setup lang="ts">
import { ModalProps } from "@/types/props";

defineProps<ModalProps>();

const emits = defineEmits<{
  (e: "update:showModal", value: boolean): void;
}>();

const closeModal = () => emits("update:showModal", false);
</script>

<style>
.modal {
  @apply bg-black/50 backdrop-opacity-50;
  @apply fixed inset-x-0 inset-y-0;
  @apply flex cursor-pointer;
}

.modal__wrapper {
  @apply m-auto;
  @apply bg-white;
  @apply rounded-xl;
}
</style>
