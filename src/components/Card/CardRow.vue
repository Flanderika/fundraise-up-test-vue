<template>
  <div class="card__row" :class="{ 'card__row--space-between': spaceBetween }">
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
  },
};
</script>
