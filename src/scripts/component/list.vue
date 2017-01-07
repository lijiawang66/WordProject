
<template id="">
  <div class="list">
    <header>
  		<ul>
  			<div class="search">
          <router-link to="/search">
            <i class="yo-ico">&#xe502;</i>
            <input type="text" name="name" value="" placeholder="全场6.66">
          </router-link>
  			</div>
  		</ul>
  	</header>
    <section>
      <div class="product_list">
        <ul>
          <li v-for="item in product_item">
            <img :src="item.img" alt="" />
            <span>{{item.title}}</span>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
  var common = require('../utils/util.common.js');
  module.exports = {
    data: function () {
      return {
        product_item:[]
      }
    },
    mounted: function () {
      fetch('/api/product_item').then(response => response.json())
      .then(res => {
        var that = this
        that.product_item = res
      })
      .catch(e => console.log("Oops, error", e))
    }

  }
</script>
