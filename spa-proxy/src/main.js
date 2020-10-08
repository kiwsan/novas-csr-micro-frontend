import Vue from "vue";
import VueRouter from "vue-router";
import Nova from "nova-vue-bridge";
import { loadScript } from "nova-helpers";

import App from "./App.vue";
import Home from "./components/HelloWorld";

import "bulma";

Vue.use(VueRouter);

Vue.config.productionTip = false;

import entryPoints from "./views.json";

document.addEventListener("NovaMount", ({ detail }) => {
  const { name } = detail;

  const script = entryPoints[name];

  if (script) {
    loadScript(script);
  }
});

const routes = [
  { path: "/", component: Home },
  {
    path: "/vue",
    component: Nova,
    props: { name: "VueJs", data: { title: "VueJs" } },
  },
  {
    path: "/react",
    component: Nova,
    props: { name: "ReactJs", data: { title: "ReactJs" } },
  },
  {
    path: "/vue2",
    component: Nova,
    props: { name: "VueJs2", data: { title: "VueJs2" } },
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
