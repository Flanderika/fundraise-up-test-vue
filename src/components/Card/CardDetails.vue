<template>
  <div class="card__details">
    <div class="card__details-title">{{ title }}</div>

    <div class="card__details-value">
      <slot name="cardDetailValue"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardDetails",
  props: {
    title: {
      type: String,
      require: true,
    },
  },
};
</script>
