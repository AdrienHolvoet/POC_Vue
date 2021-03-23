<template>
  <div class="container">
    <h1>{{ $t("home.title") }}</h1>
    <img class="img_logo" alt="Vue logo" src="../assets/img/logo.png" />
    <CheckpointsHome />
  </div>
</template>

<script>
import CheckpointsHome from "../components/CheckpointsHome";
export default {
  name: "App",
  components: {
    CheckpointsHome
  }
};
</script>

<style scoped>
.container {
  text-align: center;
}

.img_logo {
  width: 200px;
}
</style>
