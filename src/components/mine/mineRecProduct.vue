<template>
    <ul class="recommand-products clearfix">
        <li class="products-item clearfix"
            v-for="(item,index) in indexGoodsArea"
            :key="index"
        >
            <a href="/detail">
                <div class="product-photo"><img :src="item.goodsImg" alt=""></div>
                <ul class="products-item-direc">
                    <li>{{item.goodsDire}}</li>
                    <li class="goods-tips">
                        <span v-for="(u,index) in item.goodsTips" :key="index">{{u}}</span>
                    </li>
                    <li>
                        <div class="goods-price-left">
                            <span class="price-sign">￥</span>
                            <span class="goods-price">{{item.goodsPrice}}</span>
                            <span class="goods-num">{{item.goodsNum}}</span>
                        </div>
                        <div class="person-photo" v-if="item.isPersonPhotos">
                            <img  v-for="(item3,index) in item.personPhotos" class="img-bottom" :src="item3" :key="index" alt="">
                        </div>
<!--                        <div class="find-btn">-->
<!--                            <a href="http://mobile.yangkeduo.com/relative_goods.html?goods_id=6928912&sim_count=32&refer_page_name=recommended&refer_page_id=10272_1561618696480_DVQTD84krI&refer_page_sn=10272" >-->
<!--                                <span>发现</span>-->
<!--                                <span class="iconfont">&#xe667;</span>-->
<!--                            </a>-->
<!--                        </div>-->
                    </li>
                </ul>
            </a>
        </li>
    </ul>
</template>
<script>
    export default {
        name: "mineRecProduct",
        props:["indexGoodsArea"]
    }
</script>

<style scoped>
    .recommand-products{
        flex-wrap: wrap;
    }
    .products-item{
        width:50%;
        float:left;
        border:1px solid #f8f9f8;
    }
    .product-photo>img{
        width: 1.85rem;
        height:1.85rem;
    }
    .products-item-direc{
        font-size:0.12rem;
        padding:0 0.1rem;
        color:black;
    }
    .products-item-direc li:nth-of-type(1){
        line-height: 0.26rem;
        white-space: nowrap;
        overflow: hidden;
    }
    .goods-tips{
        height:0.16rem;
        overflow:hidden;
    }
    .products-item-direc li:nth-of-type(2) span{
        margin-bottom:0.1rem;
        color:#ff6720;
        background-color:#ffefe6;
        border-radius:4px;
        margin-right: 5px;
    }
    .products-item-direc li:nth-of-type(3){
        display: flex;
        justify-content: space-between;
        margin:0.06rem 0 0.1rem;
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
        margin-right: 0.06rem;
    }
    .person-photo img{
        width:0.22rem;
        height:0.22rem;
        border-radius:50%;
    }
    .img-bottom{
        margin-right:-8px;
    }
    .find-btn{
        height:0.3rem;
        line-height:0.24rem;
        padding:0 0.03rem 0 0.05rem;
        border:1px solid #c6c6c6;
        border-right:none;
        margin-right:-0.10rem;
        text-align:center;
        border-top-left-radius: 0.1rem;
        border-bottom-left-radius: 0.1rem;
    }
    .find-btn a{
        color:#666;
    }
</style>