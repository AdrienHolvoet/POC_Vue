<script>
import { getAllCheckpoints } from "@/services/checkpoints.api";

export default {
  name: "CheckpointsHome",
  methods: {
    getAll() {
      getAllCheckpoints().then(data => {
        this.checkpoints = data.data;
      });
    }
  },
  data() {
    return {
      checkpoints: []
    };
  },
  mounted() {
    this.getAll();
  }
};
</script>

<template>
  <div class="container">
    <div v-for="checkpoint in checkpoints" :key="checkpoint.name">
      <div class="card">
        <span>{{ checkpoint.publicId }}</span>
        <span class="name">{{ checkpoint.name }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
span {
  padding: 5px;
}

.container {
  padding: 1px;
  display: flex;
  justify-content: center;
  flex-direction: row;
}

.name {
  font-size: 20px;
}

.card {
  border: 1px solid black;
  padding: 1em;
  margin: 5px;
}
</style>
