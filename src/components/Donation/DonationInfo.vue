<template>
  <div class="donation-info">
    <div class="donation-info__row">
      <div class="donation-info__title">
        <slot name="title"></slot>
      </div>
    </div>

    <div class="donation-info__row">
      <div class="donation-info__value">
        <span class="donation-info__value-main">$20.60 USD</span>
        <span class="donation-info__value-sub">≈ €17.92 EUR</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DonationInfo",
};
</script>
