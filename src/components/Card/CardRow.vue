<template>
  <div
    class="card__row"
    :class="{
      'card__row--space-between': spaceBetween,
      'card__row--wrap': wrap,
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CardRow",
  props: {
    spaceBetween: {
      type: Boolean,
    },
    wrap: {
      type: Boolean,
    },
  },
};
</script>
