<template>
  <div class="header">
    <h1>{{ $t(title) }}</h1>
    <LocaleSwitcher />
  </div>
</template>

<style scoped>
.header {
  background-color: white;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
}

h1 {
  margin: 0;
}
</style>

<script>
import LocaleSwitcher from "./LocaleSwitcher";
export default {
  name: "Header",
  components: {
    LocaleSwitcher
  },
  props: {
    title: String
  }
};
</script>
