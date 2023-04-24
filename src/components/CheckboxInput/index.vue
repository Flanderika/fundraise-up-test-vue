<template>
  <div class="checkbox">
    <ul class="checkbox__list list list--resetted">
      <li class="checkbox__item" v-for="option in options" :key="option.id">
        <label class="checkbox__label" :for="option.id">
          <span class="checkbox__inner">
            <input
              type="checkbox"
              class="checkbox__input"
              :checked="selectedOptionIDs.includes(option.id)"
              :name="'checkbox-' + uniqueId"
              :value="option.value"
              :id="option.id"
              @change="() => onChange(option)"
            />

            <span class="checkbox__icon">
              <base-icon iconName="check"></base-icon>
            </span>
          </span>
          <span class="checkbox__text">{{ option.title }}</span>
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
import { validateArrayOfObjects } from "../../utils";

import BaseIcon from "../Icon";

export default {
  name: "CheckboxInput",
  components: {
    BaseIcon,
  },
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
      type: Array,
      default: () => [],
      validator: (value) =>
        validateArrayOfObjects({ value, propNames: ["title", "value", "id"] }),
    },
  },
  data() {
    return {
      selectedOptions: this.value,
    };
  },
  watch: {
    value(newVal) {
      this.selectedOptions = newVal;
    },
  },
  computed: {
    selectedOptionIDs() {
      return this.selectedOptions.map((option) => option.id) || [];
    },
  },
  methods: {
    onChange(option) {
      const alreadySelected = this.selectedOptionIDs.includes(option.id);
      if (alreadySelected) {
        this.selectedOptions = this.selectedOptions.filter(
          (el) => el.id !== option.id
        );
      } else {
        this.selectedOptions = [...this.selectedOptions, option];
      }

      this.$emit("input", this.selectedOptions);
    },
  },
};
</script>
