// ./components/NavLink.vue
<script>
export default {
  name: "NavLink",
  props: {
    url: String,
    text: String
  }
};
</script>

<template>
  <router-link class="padding" :to="url">{{ $t(text) }}</router-link>
</template>

<style scoped>
.padding {
  padding: 5px;
}
</style>
