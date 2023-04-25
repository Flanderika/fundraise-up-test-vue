<template>
  <div class="burger" :class="{ active: isMenuOpen }" @click="toggleMenu">
    <div
      :class="{
        burger__line: true,
        'burger__line-1': true,
      }"
    ></div>
    <div
      :class="{
        burger__line: true,
        'burger__line-2': true,
      }"
    ></div>
    <div
      :class="{
        burger__line: true,
        'burger__line-3': true,
      }"
    ></div>

    <div v-if="isMenuOpen" class="burger__menu">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "BurgerMenu",
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>
