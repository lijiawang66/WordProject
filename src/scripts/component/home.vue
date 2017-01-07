<template id="">
  <div class="container">
    <header>
  		<ul>
  			<div class="search">
          <router-link to="/search">
            <i class="yo-ico">&#xe502;</i>
            <input type="text" name="name" value="" placeholder="全场6.66">
          </router-link>
  			</div>
  			<li class="yo-ico">&#xf0050;</li>
  		</ul>
  	</header>

  	<section>
      <div id="index-scroll">
        <div class="scroll-container">

          <div class="head hide">
            <img src="/images/arrow.png" width="40" height="40"/>
            <span>下拉刷新...</span>
          </div>
          <div class="bobyloader">
            <nav>
              <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="i in banner"><img :src="i" /></div>
                </div>
                <div class="swiper-pagination"></div>
              </div>
              <ul>
                <li class="active">
                  <i class="yo-ico">&#xe627;</i>
                  <b>热销TOP</b>
                </li>
                <li>
                  <i class="yo-ico">&#xe641;</i>
                  <b>本周特惠</b>
                </li>
                <li>
                  <i class="yo-ico">&#xe90b;</i>
                  <b>农场传供</b>
                </li>
                <li>
                  <i class="yo-ico">&#xe814;</i>
                  <b>手机专享</b>
                </li>
                <li>
                  <i class="yo-ico">&#xe600;</i>
                  <b>包邮到家</b>
                </li>
              </ul>
            </nav>

            <!-- 超值购 -->
            <div class="ValuePurchase">
              <div class="title">
                <h2>超值购</h2>
                <p>今日主打热卖 今日必抢</p>
              </div>
              <div class="ImgPurchase">
                <div class="ImgPur" v-for="item in list">
                  <i><img :src="item.img" /></i>
                  <span>{{item.title}}</span>
                  <span>{{item.price}}</span>
                </div>
              </div>
            </div>

            <!--banner title  -->
            <div class="adv1">
              <span>
                  <img src="/images/title1.jpg" alt="" />
              </span>
              <span>
                    <img src="/images/title3.jpg" alt="" />
              </span>
            </div>

            <!--为你推荐  -->
            <div class="adv2">
              <div class="loadup">
                <h2>为你推荐</h2>
                <p>品质生活，安心之选</p>
              </div>
              <div class="guessList">
                <div class="scroll-container">
                <div class="product" v-for="pro in product">
                  <div class="p-img">
                    <img :src="pro.img">
                  </div>
                  <div class="p-item">
                    <span>{{pro.title}}</span>
                    <span>{{pro.price}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="foot hide">
            <img src="/images/arrow.png" width="40" height="40"/>
            <span>上拉加载更多...</span>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>
<script>
  var common = require('../utils/util.common.js');
  module.exports = {
    data: function () {
      return {
        swiper1: null,
        list: [],
        product:[],
        banner:[
            "/images/banner.jpg","/images/banner3.jpg","/images/banner4.jpg"
        ]
      }
    },
    mounted: function () {
      fetch('/api/list').then(response => response.json())
      .then(res => {
        var that = this
        that.list = res
        var swiper = new Swiper ('.swiper-container', {
          loop: true,
          autoplay : 2000
        })
      })
      .catch(e => console.log("Oops, error", e))

      fetch('/api/product').then(response => response.json())
      .then(res => {
        var that = this;
        that.product = res;
        // common.isAllLoaded('#index-scroll', function () {
        //   common.scroll(that);
        // })
      }).catch(e => console.log("Oops, error", e))
    }

  }
</script>
