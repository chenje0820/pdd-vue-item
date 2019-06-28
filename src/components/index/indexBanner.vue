<template>
    <div class="banner">
        <div class="swiper-container" ref="swiperContainer1">
            <div class="swiper-wrapper">
                <div class="swiper-slide"  v-for="item in indexHeaderBanner" >
                    <img :src=item alt>
                </div>
            </div>
<!--             Add Pagination-->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.css'
    export default {
        name: "indexBanner",
        props:["indexHeaderBanner"],
        mounted(){
            this.__initSwiper()
        },
        methods:{
            __initSwiper(){
                new Swiper (this.$refs.swiperContainer1,{
                    observer:true ,//动态获取数据时必须加的
                    autoplay:{
                        delayTime:1000,
                    },
                    pagination: {
                    el: '.swiper-pagination',
                },
                })
            }
        }
    }
</script>
<style scoped>
    .swiper-container{
        width:100%;
        height:100%;
    }
    .banner{
        border-top:2px solid #e3dcd9;
        height:1.4rem;
    }
    .banner img{
        width:100%;
        float:left;
    }
    .swiper-container{
        position: relative;
    }
    .swiper-container>.swiper-pagination{
        text-align: right;
    }
    .banner .swiper-container .swiper-pagination-bullets{
        bottom: 0;
        text-align: right;
        width: 100%;
        height:20px;
        bottom: 0.05rem;
    }
    .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet{
        background:white;
    }
    .banner .swiper-container .swiper-pagination-bullet-active{
        background-color: red;
    }
</style>