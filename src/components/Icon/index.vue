<template>
  <svg :class="`icon icon--${iconName}`">
    <use :xlink:href="`assets/icons/sprite.svg#icon-${iconName}`"></use>
  </svg>
</template>

<script>
export default {
  name: "BaseIcon",
  props: {
    iconName: {
      type: String,
      require: true,
    },
  },
};
</script>
