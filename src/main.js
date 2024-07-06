import { createApp } from "vue";
import App from "./App.vue";
import uiComponents from "./components/Ui";
import router from "./router/router";
import store from './store'
import derectives from "./directives";

const app = createApp(App);

uiComponents.forEach(component => {
	app.component(component.name, component);
});

derectives.forEach(derective => {
	app.directive(derective.name, derective);
});

app.use(router).use(store).mount("#app");
