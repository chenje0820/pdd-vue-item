<template>
    <div>
        <!--header-->
        <pdd-index-header :indexHeaderNav = "indexHeaderNav"/>
        <div id="main">
        <!--banner-->
            <pdd-index-banner :indexHeaderBanner ="indexHeaderBanner"/>
            <!--action-->
            <pdd-index-action :indexActionItem ='indexActionItem'/>
            <!-- new -->
            <pdd-index-new :indexNew = "indexNew"/>
            <!-- goods-area -->
            <pdd-index-goods-area :indexGoodsArea ="indexGoodsArea"/>
            <!-- grands-area -->
            <pdd-index-grands-area :indexGrandsArea ="indexGrandsArea"/>
            <!-- goods-area -->
            <!-- grands-area -->
            <!--search-more-info-->
            <pdd-index-search/>
            <!--footerBar-->
        </div>
        <!--回到顶部-->
        <pdd-come-top/>
        <!--openApp-->
        <pdd-open-app/>
    </div>
</template>

<script>
// @ is an alias to /src
import Swiper from "swiper"
import indexHeader from "../components/index/indexHeader"
import indexBanner from "../components/index/indexBanner"
import indexAction from "../components/index/indexAction"
import indexNew from "../components/index/indexNew"
import indexGoodsArea from "../components/index/indexGoodsArea"
import indexGrandsArea from "../components/index/indexGrandsArea"

import indexSearch from "../components/index/indexSearch"
import footerBar from "../components/common/footerBar"
import comeTop from "../components/common/comeTop"
import openApp from "../components/common/openApp"

export default {
  name: 'index',
  components: {
      "pdd-index-header":indexHeader,
      "pdd-index-banner":indexBanner,
      "pdd-index-action":indexAction,
      "pdd-index-new":indexNew,
      "pdd-index-goods-area":indexGoodsArea,
      "pdd-index-grands-area":indexGrandsArea,
      "pdd-index-search":indexSearch,
      "pdd-footer-bar":footerBar,
      "pdd-come-top":comeTop,
      'pdd-open-app':openApp,
  },
    mounted() {
        this.$http.get('data/index.json').then((data)=>{
            data= data.data;
            console.log(data)
            this.indexHeaderNav = data.indexHeaderNav;
            this.indexHeaderBanner = data.indexHeaderBanner;
            this.indexActionItem = data.indexActionItem;
            this.indexNew = data.indexNew;
            this.indexGoodsArea = data.indexGoodsArea;
            this.indexGrandsArea = data.indexGrandsArea[0];
            this.indexFooter = data.indexFooter;
            console.log(this.indexGrandsArea)
        }).catch((error)=>{
            console.log(error)
        })
    },
    data(){
      return{
          indexHeaderNav:[],
          indexHeaderBanner:[],
          indexActionItem:[],
          indexNew:[],
          indexGoodsArea:[],
          indexGrandsArea:[],
          indexFooter:[]
      }
    },
}
</script>

<style>
    #main{
        padding:0.42rem 0 0.5rem;
    }
    .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet{
        background-color:white;
    }
</style>
