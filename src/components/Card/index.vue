<template>
  <div class="card card--rounded card--shadow">
    <div class="card__body" :class="{ 'card__body--gutter': hasGutter }">
      <slot name="cardBody"></slot>
    </div>

    <div :class="`card__footer card__footer--${footerBackground}`">
      <slot name="cardFooter"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardSectioned",
  props: {
    footerBackground: {
      type: String,
      validator: function (value) {
        return ["gray", "yellow"].includes(value);
      },
      default: "gray",
    },
    hasGutter: {
      type: Boolean,
    },
  },
};
</script>
