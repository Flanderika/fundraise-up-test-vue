<template>
  <div class="aside-menu">
    <burger-menu v-if="isAdaptive">
      <nav class="aside-menu__nav card card--rounded card--shadow">
        <ul class="aside-menu__list list list--resetted">
          <li
            v-for="menuItem in menuItems"
            :key="menuItem.id"
            class="aside-menu__item"
          >
            <button class="aside-menu__button">
              <div class="aside-menu__button-icon">
                <base-icon :iconName="menuItem.icon"></base-icon>
              </div>

              <div class="aside-menu__button-text">{{ menuItem.label }}</div>
            </button>
          </li>
        </ul>
      </nav>
    </burger-menu>

    <nav
      v-if="isDesktop"
      class="aside-menu__nav card card--rounded card--shadow"
    >
      <ul class="aside-menu__list list list--resetted">
        <li
          v-for="menuItem in menuItems"
          :key="menuItem.id"
          class="aside-menu__item"
        >
          <button class="aside-menu__button">
            <div class="aside-menu__button-icon">
              <base-icon :iconName="menuItem.icon"></base-icon>
            </div>

            <div class="aside-menu__button-text">{{ menuItem.label }}</div>
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { windowSize } from "../../mixins";
import { validateArrayOfObjects } from "../../utils";

import BurgerMenu from "../Burger";
import BaseIcon from "../Icon";

export default {
  name: "AsideMenu",
  mixins: [windowSize],
  components: {
    BaseIcon,
    BurgerMenu,
  },
  props: {
    menuItems: {
      type: Array,
      required: true,
      validator: (value) =>
        validateArrayOfObjects({ value, propNames: ["label", "icon", "id"] }),
    },
    iconPrepend: {
      type: String,
    },
    iconAppend: {
      type: String,
    },
  },
};
</script>
