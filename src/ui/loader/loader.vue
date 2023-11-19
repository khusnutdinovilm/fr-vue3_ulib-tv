<template>
  <!-- <div class="loader"> -->
  <span class="loader__spiner" :style="spinerStyle"></span>
  <!-- </div> -->
</template>

<script>
export default {
  name: "ui-loader",
  props: {
    size: {
      type: Number,
      required: false,
    },
    borderWidth: {
      type: Number,
      required: false,
      default: 1,
    },
  },

  computed: {
    spinerStyle() {
      return {
        borderWidth: `${this.borderWidth}px`,
        width: this.size ? `${this.size}px` : "inherit",
        height: this.size ? `${this.size}px` : "inherit",
      };
    },
  },
};
</script>

<style>
.loader {
  @apply flex justify-center items-center;
}
.loader__spiner {
  @apply inline-block;
  @apply border-solid border-sky-900;
  border-radius: 50%;
  border-bottom-color: #6467e2;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
