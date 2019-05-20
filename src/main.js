// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";

import { ToggleButton } from "vue-js-toggle-button";

Vue.component("ToggleButton", ToggleButton);
var resizebase64 = require("resize-base64");

console.log(resizebase64);

new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
