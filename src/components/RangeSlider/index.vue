<template>
  <div class="range">
    <div class="range__row range__row--space-between">
      <div v-if="!!$slots.tl" class="range__col">
        <slot name="tl"></slot>
      </div>

      <div v-if="!!$slots.tm" class="range__col">
        <slot name="tm"></slot>
      </div>

      <div v-if="!!$slots.tr" class="range__col">
        <slot name="tr"></slot>
      </div>
    </div>

    <div class="range__row">
      <div v-if="!!$slots.ml" class="range__col">
        <slot name="ml"></slot>
      </div>

      <div class="range__col range__col--input">
        <div class="range__input">
          <div class="range__input-wrapper">
            <input
              ref="slider"
              type="range"
              :min="min"
              :max="max"
              :value="value"
              @input="(event) => onInput(event)"
              class="range__input-control"
            />
            <div
              ref="sliderFill"
              class="range__input-fill"
              :style="`width: ${fillWidth}%`"
            />
          </div>
        </div>
      </div>

      <div v-if="!!$slots.mr" class="range__col">
        <slot name="mr"></slot>
      </div>
    </div>

    <div class="range__row range__row--space-between">
      <div v-if="!!$slots.bl" class="range__col">
        <slot name="bl"></slot>
      </div>

      <div v-if="!!$slots.bm" class="range__col">
        <slot name="bm"></slot>
      </div>

      <div v-if="!!$slots.br" class="range__col">
        <slot name="br"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RangeSlider",
  props: {
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    value: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    fillWidth() {
      return ((this.value - this.min) / (this.max - this.min)) * 100;
    },
  },
  methods: {
    onInput(event) {
      this.$emit("input", parseInt(event.target.value, 10));
    },
  },
};
</script>
