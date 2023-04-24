<template>
  <button
    class="button"
    :class="{
      'button--simple': simple,
      'button--primary': primary,
      'button--secondary': secondary,
    }"
    @click="onClick"
  >
    <div v-if="iconPrepend" class="button__icon">
      <base-icon :iconName="iconPrepend" />
    </div>

    <div class="button__text">
      <slot></slot>
    </div>

    <div v-if="iconAppend" class="button__icon">
      <base-icon :iconName="iconAppend" />
    </div>
  </button>
</template>

<script>
import BaseIcon from "../Icon";

export default {
  name: "CustomButton",
  components: {
    BaseIcon,
  },
  props: {
    primary: {
      type: Boolean,
      default: false,
    },
    simple: {
      type: Boolean,
      default: false,
    },
    secondary: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      require: true,
    },
    iconPrepend: {
      type: String,
    },
    iconAppend: {
      type: String,
    },
  },
  methods: {
    onClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>
