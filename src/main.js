// import create from vue
import { createApp } from "vue";
// import createPinia from pinia for store usage
import { createPinia } from "pinia";

// import App component
import App from "./App.vue";
// import router for application routing
import router from "./router";

// import assets
import "./assets/index.css";
import "vue-select/dist/vue-select.css";

/**
 * creates app
 * @type {App<Element>}
 */
const app = createApp(App);

// use createPinia and store
app.use(createPinia());
app.use(router);

// mounts the vue in id app
app.mount("#app");
