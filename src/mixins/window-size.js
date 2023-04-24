const windowSize = {
  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  computed: {
    isDesktop() {
      return this.windowWidth >= 1024;
    },
    isAdaptive() {
      return this.windowWidth < 1024;
    },
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
  },
};

export default windowSize;
