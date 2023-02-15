import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "ant-design-vue/dist/antd.css";
import { Button } from "ant-design-vue";
import plugins from "@/plugins/plugins";

const app = createApp(App);

// pinia store
app.use(createPinia());

// vue-router
app.use(router);

// 全局注入自定义指令
plugins(app);

// ant-design-vue全局注入，按需引入
app.use(Button);

app.mount("#app");
