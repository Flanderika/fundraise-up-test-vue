<template>
  <div class="form__group" :class="{ 'form__group--centered': centered }">
    <label class="form__label">
      <slot name="label" />
    </label>

    <div class="form__inputs">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseFormGroup",
  props: {
    centered: {
      type: Boolean,
    },
  },
};
</script>
