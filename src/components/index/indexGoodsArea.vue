<template>
    <div class="goods-area">
        <router-link
                v-for="(item,index) in indexGoodsArea"
                :key ="index"
                :to = "{name:'Detail',query:{id:item.goodsId}}"
        >
            <div class="goods-list">
                <div class="goods-pic"><img :src="item.goodsImg" alt=""></div>
                <div class="goods-detail">
                    <div class="goods-dire">{{item.goodsDire}}</div>
                    <div>
                        <div class="goods-tips">
                            <span v-for="t in item.goodsTips" >{{t}}</span>
                        </div>
                        <div class="goods-price-persons">
                            <div class="goods-price-left">
                                <span class="price-sign">￥</span>
                                <span class="goods-price">{{item.goodsPrice}}</span>
                                <span class="goods-num">{{item.goodsNum}}</span>
                            </div>
                            <div class="person-photo">
                                <img class="img-bottom" v-for = "u in item.personPhotos" :src="u" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "indexGoodsArea",
        props:["indexGoodsArea"],
        methods:{

        }

    }
</script>

<style scoped>
    .goods-area{
        margin-top:10px;
        padding-top:7px;
        font-size:0.14rem;
        color:#272728;
        background-color:white;
    }
    .goods-area a{
        color:#021825;
    }
    .goods-list{
        padding:7px 0.12rem 0;
        height:1.68rem;

    }
    .goods-pic img{
        width:1.56rem;
        height:1.56rem;
        float:left;
    }
    .goods-detail{
        float:right;
        height:94%;
        width:1.88rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-bottom:7px;
        border-bottom:1px solid #f3f3f3;
    }
    .goods-dire{
        line-height:0.2rem;
        max-height:0.4rem;
        overflow: hidden;
    }
    .goods-price-persons{
        display:flex;
        justify-content: space-between;
        align-items: center;
    }
    .goods-price-left{
        display: flex;
        align-items: center;
    }
    .goods-price ,.price-sign{
        color:#e44940;
    }
    .price-sign{
        font-size:0.13rem;
    }
    .goods-price{
        font-size:0.2rem;
        font-weight:600 ;
    }
    .goods-num{
        font-size:0.12rem;
        color:#9e9e9e;
        margin-left:5px;
    }
    .person-photo{
        position:relative;
    }
    .person-photo img{
        width:0.22rem;
        height:0.22rem;
        border-radius:50%;
    }
    .img-bottom{
        margin-right:-8px;
    }
    .goods-tips span{
        margin-right: .04rem;
        margin-bottom: .02rem;
        background: rgba(255,87,6, 0.08);
        color: #FF5706;
        display: inline-block;
        height: .14rem;
        line-height: .14rem;
        padding: 0 .02rem;
        font-size: .12rem;
        border-radius: .02rem;
    }

</style>