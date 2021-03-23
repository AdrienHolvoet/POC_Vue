import Vue from "vue";
import App from "./App.vue";

import router from "./router";
import "../src/assets/css/global.css";
import i18n from "./i18n";
import Notifications from "vue-notification";

Vue.use(Notifications);

Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount("#app");
