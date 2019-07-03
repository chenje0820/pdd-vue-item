<template>
    <div class="spell-order">
        <div class="tit-tip spell-order-tit">
            <div class="order-tit-left">{{data.detailSpellCase.dTitle}}</div>
            <div class="order-tit-right">
                <span>查看更多</span>
                <span class="iconfont icon-youjiantou"></span>
            </div>
        </div>
        <div class="spell-banner">
            <div class="order-list-info flex"
                v-for="(item,index) in data.detailSpellCase.dSpellInfo"
                 :key = "index"
            >
                <div class="list-info-left flex">
                    <span><img :src="item.dPersonPhoto" alt=""></span>
                    <span>{{item.dPersonName}}</span>
                </div>
                <div class="list-info-right flex">
                    <div class="last-time">
                        <div class="has-person-num">还差<span class="person-num">{{data.needNum}}</span>拼成</div>
                        <div class="end-time">剩余<span>13</span>:<span>12</span>:<span>11</span></div>
                    </div>
                    <div class="make-order">去拼单</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.css'
    export default {
        name: "detailSpell",
        props:["data"],
        mounted() {
            this.__initSwiper()
        },
        methods:{
            __initSwiper(){
                new Swiper(this.$refs.spellBanner, {
                    direction: 'vertical',
                    autoplay:true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                });
            }
        }
    }
</script>

<style scoped>
    .spell-order {
        margin-top: 8px;
        background-color: white;
        color:#0d0d0e;
    }
    .tit-tip{
        display:flex;
        justify-content: space-between;
        align-items: center;
        padding:0 0.12rem;
        line-height:0.36rem;
        border-bottom:1px solid #f2f2f2;
        box-sizing: border-box;
    }
    .order-tit-right{
        color:#969696;
    }
    .spell-banner{
        /*widht:100%;*/
        padding-left:0.12rem;
        /*background-color:pink;*/
    }
    .order-list-info{
        height:0.6rem;
        padding-right:0.12rem;
        border-bottom:1px solid #f2f2f2;
    }
    .order-list-info, .list-info-left ,.list-info-right{
        justify-content: space-between;
        align-items: center;
    }
    .list-info-left img{
        width: 0.34rem;
        height:0.34rem;
        border-radius:50%;
        margin-right:0.1rem;
    }
    .end-time{
        color:#4a4b4d;
    }
    .make-order{
        width:0.68rem;
        height:0.3rem;
        text-align:center;
        line-height:0.3rem;
        color:white;
        background-color:#e02e24;
        border-radius:5px;
        margin-left:8px;
    }
    .person-num{
        color:#e02e24;
    }
    .has-person-num{
        font-weight: 600;
    }
</style>