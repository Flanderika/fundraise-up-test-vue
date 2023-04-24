<template>
  <a class="link" :href="url">
    {{ label }}
  </a>
</template>

<script>
export default {
  name: "BaseLink",
  props: {
    label: {
      type: String,
    },
    url: {
      type: String,
    },
  },
};
</script>
