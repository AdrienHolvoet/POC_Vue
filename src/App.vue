<script>
import Header from "./components/Header.vue";
import NavLink from "./components/NavLink.vue";
import SockJsClient from "./components/SockJsClient";

export default {
  name: "App",
  components: {
    NavLink,
    Header,
    SockJsClient
  },
  methods: {
    notification: function() {},
    onMessage(notification) {
      this.$notify({
        title: notification.title,
        text: notification.text
      });
    }
  }
};
</script>

<template>
  <div id="app">
    <notifications />
    <SockJsClient topic="/topic/notifications" :onMessage="onMessage" />
    <Header title="home"></Header>
    <div id="nav">
      <NavLink url="/" text="home"> </NavLink>
      <NavLink url="/about" text="about"></NavLink>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
