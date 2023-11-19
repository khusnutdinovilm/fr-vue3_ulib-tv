<template>
  <Teleport to="body">
    <div class="modal" v-if="showModal" @click.prevent="closeModal">
      <div class="modal__wrapper" @click.stop>
        <slot />
      </div>
    </div>
  </Teleport>
</template>

<script>
export default {
  name: "ui-modal",
  props: {
    showModal: {
      type: Boolean,
    },
  },
  emits: ["update:showModal"],
  methods: {
    closeModal() {
      this.$emit("update:showModal", false);
    },
  },
};
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
