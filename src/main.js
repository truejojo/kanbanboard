import { createApp } from "vue";
import App from "./App.vue";

import logger from "./mixins/logger";
import focus from "./directives/focus";

import "bootstrap/dist/css/bootstrap.css";

createApp(App).mixin(logger).directive("focus", focus).mount("#app");

import "bootstrap/dist/js/bootstrap.js";
