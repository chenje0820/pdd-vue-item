<template>
    <div class="detail-buy-info">
        <div class="shop-price">
            <div class="shop-price-left">
                <div class="price-dire"><span class="now-price sign">1249.2</span><span class="recover-price">即将恢复1388元</span></div>
                <div>已拼3732件</div>
            </div>
            <div class="grands-spec-buy"><p>品牌特卖</p><span class="trangle"></span></div>
        </div>
        <ul class="detail-dire">
            <li class="support-tip">支持分期，低至111.9元/期</li>
            <li class="shop-dire-txt">
                <span>
                    <img src="//t00img.yangkeduo.com/goods/images/2018-12-29/e01ec845d67c3717fd0581da8dbf86bd.png?imageMogr2/quality/70 " alt="">
                    <span class="shop-dire-txt-info">
                        <span>杰洛克实木沙发冬夏两用小户型套装中式现代客厅整装储物组合家具</span>
                        <span class="send-shop-install">送货入户并安装</span>
                    </span>
                </span>
            </li>
            <li class="shop-dire-txt take-quan">
                <div>
                    <span class="quan">领券</span>
                    <span class="quan-list">满1000元减10元</span>
                    <span class="quan-list">满2000元减20元</span>
                </div>
                <div><span class="iconfont icon-youjiantou"></span></div>
            </li>
            <li class="shop-dire-txt settlement-tip">
                <div class="settlement-tip-info">
                    <span >全场包邮</span>
                    <span class="dot"></span>
                    <span>7天退换</span>
                    <span class="dot"></span>
                    <span>假一赔十</span>
                </div>
                <div><span class="iconfont icon-youjiantou"></span></div>
            </li>
        </ul>
    </div>

</template>

<script>
    export default {
        name: "detailBuyInfo"
    }
</script>

<style scoped>
    .iconfont{
        color:#ededed;
    }
    .detail-buy-info{
        background-color:white;
    }
    .shop-price{
        color:#ffe2c0;
        min-height:0.65rem;
        height:0.65rem;
        display:flex;
    }
    .shop-price-left,.grands-spec-buy{
        height:100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .shop-price-left{
        flex:1;
        padding-left:0.13rem;
        background-color:#393649;
    }
    .price-dire{
        display: flex;
        align-items: center;
    }
    .now-price{
        font-size:0.22rem;
        font-weight: 600;
    }
    .recover-price{
        width:1.06rem;
        height:0.22rem;
        line-height:0.22rem;
        margin-left:8px;
        text-align:center;
        font-size:0.12rem;
        color:#171834;
        background-color:#ffe2c0;
        border-radius:0.13rem;
    }
    .grands-spec-buy{
        width:20%;
        text-align:center;
        background-color:#2d2a3b;
        position:relative;
    }
    .trangle{
        width:0;
        height:0;
        border:10px solid transparent;
        border-right-color:#2d2a3b;
        position:absolute;
        left:-0.19rem;
        top:36%;
        z-index:10;
    }
    .detail-dire{
        padding:0 0.14rem;
    }
    .detail-dire .support-tip{
        color:#de2116;
        line-height:0.27rem;
    }
    .shop-dire-txt{
        width:100%;
        position:relative;
        display:flex;
        align-items: baseline;
        line-height:0.24rem;
        max-height:0.48rem;
        overflow: hidden;
        display:flex;
        justify-content: space-between;
    }
    .shop-dire-txt img{
        position:absolute;
        left:0;
        top:5px;
        width:0.4rem;
        height:0.16rem;
    }
    .shop-dire-txt-info{
        margin-left:0.42rem;
        font-weight: bolder;
    }
    .send-shop-install{
        padding:2px;
        width:0.88rem;
        background-color:#25b513;
        color:#ffffff;
        font-weight: 200;
        border-radius:4px;
        margin-left:5px;

    }
    .take-quan{
        padding:8px 0;
        border-bottom:2px solid #ededed;
    }
    .quan{
        width:0.32rem;
        height:0.18rem;
        background-color:#e02f25;
        color:#ffffff;
        padding:4px;
        border-radius:4px;
        margin-right:4px;
        font-size:0.12rem;
    }
    .quan-list{
        color:#e02f25;
        border:1px solid #e02f25;
        padding:4px;
        margin-left:4px;
        border-radius:4px;
    }
    .settlement-tip{
        padding:0.11rem 0;
    }
    .settlement-tip .dot{
        width:4px;
        height:4px;
        border-radius:50%;
        margin:0 0.16rem;
        background-color:#757678;
    }
    .settlement-tip-info{
        display:flex;
        align-items: center;
        color:#757678;
    }
</style>