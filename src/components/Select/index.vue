<template>
  <div
    class="select"
    :class="{
      'select--simple': isSimple,
      'select--size-normal': sizeSmall,
      'select--size-normal': sizeNormal,
      'select--size-big': sizeBig,
      'select--size-huge': sizeHuge,
    }"
  >
    <div class="select__wrap">
      <select class="select__input" v-model="selectedValue">
        <option
          class="select__option"
          v-for="option in options"
          :value="option.value"
          :key="option.value"
          :selected="selectedValue === option.value"
          @click="() => onChange(option)"
        >
          {{ option.title }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import { validateArrayOfObjects } from "../../utils";

export default {
  name: "SelectInput",
  props: {
    options: {
      type: Array,
      required: true,
      validator: (value) =>
        validateArrayOfObjects({ value, propNames: ["title", "value"] }),
    },
    value: {
      type: Object,
    },
    isSimple: {
      type: Boolean,
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
  data() {
    return {
      selectedValue: this.value?.value || this.options[0]?.value || null,
    };
  },
  watch: {
    value(newVal) {
      this.selectedValue = newVal?.value;
    },
    selectedValue: {
      handler(val) {
        const option = this.options.find((el) => el.value === val);
        this.$emit("input", option || null);
      },
      immediate: true,
    },
  },
};
</script>
