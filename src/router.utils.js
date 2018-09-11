import Vue from 'vue';
import Router from 'vue-router';

const routes = [];

// require.context自动化注册所有路由配置
// const requireComponent = require.context('@/modules', true, /\.router.js$/);

// requireComponent.keys().forEach((fileName) => {
//   const routerConfig = requireComponent(fileName);
//   routes.push(...routerConfig.default);
// });

Vue.use(Router);

const router = new Router({
  routes
});

export default router;
