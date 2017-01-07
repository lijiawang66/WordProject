require('./styles/usage/app.scss');

var layout = require('./scripts/tpls/layout.html');
var common = require('./scripts/utils/util.common.js');
common.render(layout);
// components
import index from "./scripts/component/index.vue";
import home from "./scripts/component/home.vue";
import list from "./scripts/component/list.vue";
import car from "./scripts/component/car.vue";
import my from "./scripts/component/my.vue";
import search from "./scripts/component/Search.vue";

// vue router 2
const routes = [{
    path: '/',
    component: index,
    children: [{
        path: '/',
        component: home
    },
    {
      path:'/list',
      component:list
   }  ,
    {
      path:'/car',
      component:car
    },
    {
      path:'/my',
      component:my
    }
  ]
},
  {
    path: '/search',
    component: search
  }
]

const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
})

const app = new Vue({
    router
}).$mount('#app')
