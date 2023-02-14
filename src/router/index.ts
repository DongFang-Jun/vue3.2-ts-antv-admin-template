import { createRouter, createWebHistory } from "vue-router";
import { constantRouterMap } from "@/config/router.config";

const createRouterFun = () =>
  createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: constantRouterMap,
  });

const router = createRouterFun();

// 定义一个resetRouter 方法，在退出登录后或token过期后 需要重新登录时，调用即可
export function resetRouter() {
  const newRouter = createRouterFun();
  router.matcher = newRouter.matcher;
}

export default router;
