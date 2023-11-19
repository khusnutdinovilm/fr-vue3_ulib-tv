import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";

import ui from "@/ui";
import shared from "@/components/shared";

import directives from "@/directives";

const app = createApp(App);

[...ui, ...shared].forEach((component) => app.component(component.name, component));
directives.forEach((directive) => app.directive(directive.name, directive));

app.use(store).use(router).mount("#app");
