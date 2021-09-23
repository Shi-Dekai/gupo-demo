import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import "vant/lib/checkbox/style";
import "vant/lib/icon/style";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
