<template>
  <div class="radio">
    <ul class="radio__list list list--resetted">
      <li class="radio__item" v-for="option in options" :key="option.id">
        <label class="radio__label" :for="option.id">
          <span class="radio__inner">
            <input
              type="radio"
              class="radio__input"
              :checked="option.id === selectedOption?.id"
              :name="'radio-' + uniqueId"
              :value="option.value"
              :id="option.id"
              @change="() => onChange(option)"
            />
            <span class="radio__icon"></span>
          </span>

          <span class="radio__text">{{ option.title }}</span>
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
import { validateArrayOfObjects } from "../../utils";

export default {
  name: "RadioInput",
  props: {
    options: {
      type: Array,
      required: true,
      validator: (value) =>
        validateArrayOfObjects({ value, propNames: ["title", "value", "id"] }),
    },
    uniqueId: {
      type: String,
      default: "",
    },
    value: {
      type: Object,
    },
  },
  data() {
    return {
      selectedOption: this.value,
    };
  },
  watch: {
    value(newVal) {
      this.selectedOption = newVal;
    },
  },
  methods: {
    onChange(option) {
      this.selectedOption = option;
      this.$emit("input", option);
    },
  },
};
</script>
