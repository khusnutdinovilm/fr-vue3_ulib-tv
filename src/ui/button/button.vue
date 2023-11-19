<template>
  <button class="btn" :class="classList" :disabled="disabled">
    <slot />
  </button>
</template>

<script>
export default {
  name: "ui-button",
  props: {
    status: {
      type: String,
      required: false,
      default: "primary",
      validate: (value) => ["primary", "danger"].includes(value),
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classList() {
      const classList = {
        "btn-primary": this.status === "primary" && !this.disabled,
        "btn-danger": this.status === "danger" && !this.disabled,
      };
      return classList;
    },
  },
};
</script>

<style scoped>
.btn {
  @apply p-1 px-3.5 text-white rounded-2xl;
}

.btn-primary {
  @apply bg-sky-600 hover:bg-sky-900 active:bg-sky-800;
}

.btn-danger {
  @apply bg-red-700 hover:bg-red-900 active:bg-red-800;
}

.btn:disabled,
.btn[disabled] {
  @apply bg-gray-700 cursor-default;
}
</style>
