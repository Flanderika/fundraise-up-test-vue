<template>
  <div class="text-with-icon" :class="{ 'text-with-icon--green': colorGreen }">
    <div v-if="iconPrepend" class="text-with-icon__icon">
      <base-icon :iconName="iconPrepend" />
    </div>

    <div :class="`text-with-icon__text text-with-icon__text--size-${textSize}`">
      <slot />
    </div>

    <div v-if="iconAppend" class="text-with-icon__icon">
      <base-icon :iconName="iconAppend" />
    </div>
  </div>
</template>

<script>
import BaseIcon from "../Icon";

export default {
  name: "TextWithIcon",
  components: {
    BaseIcon,
  },
  props: {
    colorGreen: {
      type: Boolean,
      default: false,
    },
    iconPrepend: {
      type: String,
    },
    iconAppend: {
      type: String,
    },
    textSize: {
      type: String,
      validator: function (value) {
        return ["small", "normal"].includes(value);
      },
      default: "normal",
    },
  },
};
</script>
