<template>
        <div class="swiper-container" ref="detailSwiper">
            <div class="swiper-wrapper" >
                <div class="swiper-slide" v-for="item in bannerList"><img :src="item" alt=""></div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination swiper-pergination-dire"></div>
        </div>
</template>

<script>
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.css'
    export default {
        name: "detailBanner",
        data(){
            return{
                bannerList:[
                    'http://t00img.yangkeduo.com/goods/images/2019-05-31/7612f60a-9079-4139-9e89-6c87a93a4210.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80',
                    "images/detail-b2.jpg",
                    "images/datail-b3.jpg",
                    "images/detail-b4.jpg",
                    "images/detail-b1.jpg",
                    'http://t00img.yangkeduo.com/goods/images/2019-05-07/f389bba5-a563-4209-908f-56d254332dd4.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80',
                    'http://t00img.yangkeduo.com/goods/images/2019-05-07/09963936-cf7c-4342-88a1-25d5e657a496.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80',
                    'http://t00img.yangkeduo.com/goods/images/2019-05-07/8cf324e0-a7e1-458a-ba84-13a6de4475dd.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80',
                ]
            }
        },
        mounted() {
            this.__initSwiper()
        },
        methods:{
            __initSwiper() {
                new Swiper(this.$refs.detailSwiper, {
                    // autoplay:true,
                    pagination: {
                        el: '.swiper-pagination',
                        type:"fraction"
                    },
                });
            }
        }
    }
</script>

<style scoped>
    .swiper-container {
        width:100%;
        height:auto;
    }
    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
    }
    .swiper-slide img{
        width:100%;
        height:100%;
        float:left;
    }
    .swiper-container .swiper-pergination-dire{
        width:50px;
        color:white;
        position:absolute;
        bottom:4%;
        left:80%;
    }

</style>