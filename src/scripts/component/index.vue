<template id="">
  <div class="m-index" id="m-index">
    <router-view></router-view>
    <footer>
      <ul>
        <li @click="changeNav(i)" :class="{active: i==navIndex}" v-for="(fn,i) in footerNav">
          <router-link :to="fn.router">
            <i class="yo-ico" v-html="fn.ico"></i>
            <b>{{fn.title}}</b>
          </router-link>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
module.exports = {
  data: function () {
    return {
      navIndex: 0,
      footerNav: [
        {
          router: '/',
          ico: '&#xe602;',
          title: '首页'
        },
        {
          router: '/list',
          ico: '&#xe696;',
          title: '分类'
        },
        {
          router: '/car',
          ico: '&#xe60a;',
          title: '购物车'
        },
        {
          router: '/my',
          ico: '&#xe629;',
          title: '我的'
        }
      ]
    }
  },
  methods: {
    changeNav: function (index) {
      this.navIndex = index;
    }
  }
}
</script>
