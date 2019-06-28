<template>
    <div class="cart-shop-item">
        <div class="store-tit flex">
            <div class="store-tit-left flex">
                <div class="sec-btn"></div>
                <div><img src="../../../public/images/store-t1.png" alt=""></div>
                <p>小巴黎潮流女装</p>
                <span>></span>
            </div>
            <div class="take_q">领券</div>
        </div>
        <div class="shop-info flex">
            <div class="shop-info-left flex">
                <div class="sec-btn"></div>
                <div><img src="../../../public/images/s1.jpeg" alt=""></div>
            </div>
            <div class="shop-info-right">
                <div>高级感衣服高级感衣服高级感衣服高级感衣服高级感衣服高级感衣服高级感衣服高级感衣服高级感衣服</div>
                <div class="select-kind flex">
                    <span>黑色带礼盒</span>
                    <span>↓</span>
                </div>
                <div class="tip"></div>
                <div class='select-price-num flex'>
                    <div class="price sign"><span>98</span></div>
                    <div class="change-num">
                        <span>-</span>
                        <input type="text" value="1">
                        <span>+</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "cartContentChild"
    }
</script>
<style scoped>
    .cart-shop-item{
        background-color:white;
        border-radius:0.1rem;
        margin-bottom:0.13rem;
    }
    .store-tit{
        justify-content: space-between;
        line-height:0.44rem;
        border-bottom:2px solid #ffead5;
        box-sizing: border-box;
        padding:0 0.12rem;
    }
    .store-tit-left,.store-tit{
        align-items: center;
    }
    .sec-btn{
        float:left;
        width:0.22rem;
        height:0.22rem;
        background-image: url("../../../public/images/choose-btn.png");
        background-size:100% ;
    }
    .store-tit-left img{
        float:left;
        width:0.16rem;
        height:0.16rem;
        margin:0 0.1rem;
    }
    .store-tit-left p{
        color:#333333;
    }
    .shop-info{
        padding:0.05rem 0.12rem 0.1rem;
        width:100%;
    }
    .shop-info-left{
        width:1.25rem;
        height:0.92rem;
        align-items: center;
    }
    .shop-info-left img{
        width:0.89rem;
        height:0.89rem;
        margin-left:0.12rem;
    }
    .shop-info-right{
        margin-left:0.12rem;
        overflow: hidden;
    }
    .shop-info-right div:nth-of-type(1){
        margin-top:0.06rem;
        font-size:0.12rem;
        max-height:0.32rem;
        overflow: hidden;
    }
    .select-kind{
        width:0.9rem;
        padding:0.05rem 0;
        justify-content: center;
        color:#999999;
        background-color:#f9f9f9;
        margin-top:0.1rem;
        font-size:0.12rem;
    }
    .tip{
        height:0.32rem;
        color:#ff743d;
        line-height:0.32rem;
    }
    .select-price-num{
        justify-content: space-between;
    }
    .select-price-num .price{
        color:#ff743d;
        font-size:0.14rem;
    }
    .change-num{
        height:0.24rem;
        box-sizing: border-box;
        border:1px solid #efefef;
    }
    .change-num span{
        display: inline-block;
        width:0.24rem;
        height:0.24rem;
        text-align:center;
    }
    .change-num input{
        width:0.4rem;
        height:0.23rem;
        box-sizing: border-box;
        border:1px solid #efefef;
        outline: none;
        text-align:center
    }
</style>