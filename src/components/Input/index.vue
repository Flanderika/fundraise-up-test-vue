<template>
  <div
    class="input"
    :class="{
      'input--size-normal': sizeSmall,
      'input--size-normal': sizeNormal,
      'input--size-big': sizeBig,
      'input--size-huge': sizeHuge,
    }"
  >
    <div class="input__wrap">
      <div v-if="hasIcon" class="input__icon">
        <base-icon :iconName="hasIcon" />
      </div>

      <input
        class="input__field"
        :type="type"
        :value="value"
        @input="handleInput"
        :placeholder="placeholder"
      />
    </div>
  </div>
</template>

<script>
import BaseIcon from "../Icon";

export default {
  name: "BaseInput",
  components: {
    BaseIcon,
  },
  props: {
    type: {
      type: String,
      default: "text",
    },
    value: {
      type: [String, Number],
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    hasIcon: {
      type: String,
    },
    sizeSmall: {
      type: Boolean,
    },
    sizeNormal: {
      type: Boolean,
    },
    sizeMedium: {
      type: Boolean,
    },
    sizeBig: {
      type: Boolean,
    },
    sizeHuge: {
      type: Boolean,
    },
  },
  methods: {
    handleInput(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>
