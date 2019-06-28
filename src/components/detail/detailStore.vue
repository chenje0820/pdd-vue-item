<template>
    <div class="store-info">
        <div class="store-sign">
            <div class="store-sign-left flex">
                <div class="store-logo"><img src="../../../public/images/store-logo.jpg" alt=""></div>
                <div>
                    <div class="store-name"><span>杰洛克家具旗舰店</span><span class="guan-fang">官方</span></div>
                    <div class="store-shop-name flex">
                        <div>商品数量:<span>74</span></div>
                        <div>已拼:<span>2.5万件</span></div>
                    </div>
                </div>
            </div>
            <div class="store-sign-right">进店逛逛</div>
        </div>
        <div class="store-direction">
            <div ><span>描述相符</span><span class="h">高</span></div>
            <div ><span>服务态度</span><span class="h">高</span></div>
            <div><span>物流服务</span><span class="h">高</span></div>
        </div>
        <div class="store-shoppings">
            <div class="store-shop-items">
                <a href="#">
                    <div class="per-shop-img">
                        <img src="//omsproductionimg.yangkeduo.com/images/2017-09-18/f1538c34542efe70d317a339766610bb.jpeg" alt="">
                    </div>
                    <p class="store-shop-dire">中式实木电视柜伸</p>
                    <div class="store-shop-price-num flex">
                        <span class="store-shop-price"><span>￥</span>1079.1</span>
                        <span class="has-spell-num">已拼526件</span>
                    </div>
                </a>
            </div>
            <div class="store-shop-items">
                <a href="#">
                    <div class="per-shop-img">
                        <img src="//omsproductionimg.yangkeduo.com/images/2017-09-18/f1538c34542efe70d317a339766610bb.jpeg" alt="">
                    </div>
                    <p class="store-shop-dire">中式实木电视柜伸</p>
                    <div class="store-shop-price-num flex">
                        <span class="store-shop-price"><span>￥</span>1079.1</span>
                        <span class="has-spell-num">已拼526件</span>
                    </div>
                </a>
            </div>
            <div class="store-shop-items">
                <a href="#">
                    <div class="per-shop-img">
                        <img src="//omsproductionimg.yangkeduo.com/images/2017-09-18/f1538c34542efe70d317a339766610bb.jpeg" alt="">
                    </div>
                    <p class="store-shop-dire">中式实木电视柜伸</p>
                    <div class="store-shop-price-num flex">
                        <span class="store-shop-price"><span>￥</span>1079.1</span>
                        <span class="has-spell-num">已拼526件</span>
                    </div>
                </a>
            </div>
            <div class="store-shop-items">
                <a href="#">
                    <div class="per-shop-img">
                        <img src="//omsproductionimg.yangkeduo.com/images/2017-09-18/f1538c34542efe70d317a339766610bb.jpeg" alt="">
                    </div>
                    <p class="store-shop-dire">中式实木电视柜伸</p>
                    <div class="store-shop-price-num flex">
                        <span class="store-shop-price"><span>￥</span>1079.1</span>
                        <span class="has-spell-num">已拼526件</span>
                    </div>
                </a>
            </div>
            <div class="store-shop-items">
                <a href="#">
                    <div class="per-shop-img">
                        <img src="//omsproductionimg.yangkeduo.com/images/2017-09-18/f1538c34542efe70d317a339766610bb.jpeg" alt="">
                    </div>
                    <p class="store-shop-dire">中式实木电视柜伸</p>
                    <div class="store-shop-price-num flex">
                        <span class="store-shop-price"><span>￥</span>1079.1</span>
                        <span class="has-spell-num">已拼526件</span>
                    </div>
                </a>
            </div>
            <div class="store-shop-items">
                <a href="#">
                    <div class="per-shop-img">
                        <img src="//omsproductionimg.yangkeduo.com/images/2017-09-18/f1538c34542efe70d317a339766610bb.jpeg" alt="">
                    </div>
                    <p class="store-shop-dire">中式实木电视柜伸</p>
                    <div class="store-shop-price-num flex">
                        <span class="store-shop-price"><span>￥</span>1079.1</span>
                        <span class="has-spell-num">已拼526件</span>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "detailStore"
    }
</script>
<style scoped>
    .store-info{
        margin-top:0.18rem;
        background-color:white;
        padding:0.13rem 0 0.12rem  0.1rem;
    }
    .store-sign{
        padding-right:0.12rem;
        display:flex;
        justify-content: space-between;
        align-items: center;
    }
    .store-logo img{
        width:0.4rem;
        height:0.4rem;
        border:2px solid #ebebeb;
        border-radius:0.04rem;
        margin-right:0.08rem;
    }
    .store-name{
        font-weight:600;
    }
    .guan-fang{
        width:0.3rem;
        height:0.16rem;
        background-color:#e3ba77;
        color:#83542a;
    }
    .store-shop-name{
        font-size:0.12rem;
        color:#8b8b8b;
    }
    .store-shop-name div:nth-child(1){
        margin-right:0.15rem;
    }
    .store-sign-right{
        width:0.68rem;
        height:0.26rem;
        line-height:0.26rem;
        text-align:center;
        font-weight:600;
        border:1px solid #9d9d9d;
        border-radius:4px;
    }
    .store-direction{
        margin-top:0.1rem;
        display:flex;
        justify-content: space-around;
        align-items: center;
        color:#404043;
    }
    .store-direction .h{
        color:#ea6e66;
        background-color:#fcd9d9;
    }
    .store-shoppings{
    }
    .store-shop-items{
        display:inline-block;
        width:1.11rem;
        margin:0.1rem 0.1rem 0 0;
    }
    .per-shop-img img{
        width:1.11rem;
        height:1.11rem;
    }
    .store-shop-dire{
        line-height:0.25rem;
        color:black;
        white-space: nowrap;
        overflow: hidden;
        font-size:0.12rem;
        font-weight:600;
    }
    .store-shop-price-num{
        color:#d70000;
        font-size:0.1rem;
        font-weight:600;
        justify-content: space-between;
    }
    .has-spell-num{
        color:#8b8b8b;
    }
</style>