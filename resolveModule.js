import router from './src/router.utils.js';
import App from './src/app.vue';

/**
 * 加载script脚本
 * path 路径
 */
const loadScript = path => new Promise(((resolve, reject) => {
  const script = document.createElement('script');
  script.src = path;
  script.async = true;
  script.onload = () => {
    resolve();
  };
  script.onerror = () => {
    reject();
  };
  document.body.appendChild(script);
}));
/**
 * 加载css文件
 * path 路径
 */
const loadCss = path => new Promise(((resolve, reject) => {
  const link = document.createElement('link');
  link.href = path;
  link.rel = 'stylesheet';
  link.type = "text/css";
  link.onload = () => {
    resolve();
  };
  link.onerror = () => {
    reject();
  };
  document.getElementsByTagName('head')[0].appendChild(link);
}));

const dashboardPath= './static/dashboardAsyncModule.js';
const aboutPath = './static/aboutAsyncModule.js';
const cssModule = './static/css/dashboardAsyncModule.a470c.css';

function asyncLoadModule (module, resolve) {
  loadScript(module.path).then(() => {

    if(module.cssPath) {
      loadCss(cssModule).then(() => {
        console.log('load css success!')
      });
    }
    
    console.log(window[module.name].default);
    resolve(window[module.name].default.module);
  });
}

const routers = [
  {
    path: '',
    component: App,
    children: [
      {
        path: 'dashboard',
        component: (resolve) => asyncLoadModule({
          name: 'dashboardAsyncModule',
          path: dashboardPath,
          cssPath: cssModule
        }, resolve)
      },
      {
        path: 'about',
        component: (resolve) => asyncLoadModule({
          name: 'aboutAsyncModule',
          path: aboutPath
        }, resolve)
      }
    ]
  }
];
router.addRoutes(routers);
