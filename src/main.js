import Vue from "vue";
import App from './app.vue';
import router from './router.utils.js';
import '../resolveModule.js';

var app = new Vue({
  el: '#app',
  components: {
    App
  },
  template: `
  <div>
    <h1>Main Page</h1>
    <router-view></router-view>
  </div>`,
  router
});
console.log(app);