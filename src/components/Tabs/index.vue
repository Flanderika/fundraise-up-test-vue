<template>
  <div class="tabs">
    <div class="tabs__nav" ref="tabsNav">
      <div class="tabs__nav-wrap">
        <ul class="tabs__nav-list list list--resetted" ref="tabsList">
          <li
            class="tabs__nav-item"
            v-for="(tab, index) in tabs"
            :key="tab.name"
          >
            <input
              class="tabs__nav-item-control"
              type="radio"
              :checked="index === activeTabIndex"
              :id="tab.name"
              :name="'tab-' + uniqueId"
              :value="index"
              @change="() => activateTab(index)"
            />
            <label :for="tab.name" class="tabs__nav-item-label">{{
              tab.title
            }}</label>
          </li>
        </ul>
      </div>
    </div>
    <div class="tabs__content">
      <div
        class="tabs__content-item"
        :id="'tab-' + tab.name"
        v-for="(tab, index) in tabs"
        :key="tab.name"
        :aria-hidden="activeTabIndex !== index"
        :style="{ display: activeTabIndex === index ? 'block' : 'none' }"
      >
        <div :id="`content-${tab.name}`">
          <slot :name="tab.name"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseTabs",
  props: {
    tabs: {
      type: Array,
      required: true,
      validator: (value) => {
        return value.every(
          (tab) => Object.hasOwn(tab, "title") && Object.hasOwn(tab, "name")
        );
      },
    },
    uniqueId: {
      type: String,
      default: "",
    },
    value: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      activeTabIndex: this.value,
    };
  },
  watch: {
    value() {
      this.activeTabIndex = this.value;
    },
  },
  methods: {
    activateTab(index) {
      this.$emit("input", index);
      this.activeTabIndex = index;
    },
  },
};
</script>
