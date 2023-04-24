<template>
  <div class="donation-id">
    <div class="donation-id__title">ID</div>

    <div class="donation-id__value">
      <custom-button simple iconAppend="snippet">
        {{ value }}
      </custom-button>
    </div>
  </div>
</template>

<script>
import CustomButton from "../Button";

export default {
  name: "DonationId",
  components: {
    CustomButton,
  },
  props: {
    value: {
      type: String,
      required: true,
    },
  },
};
</script>
