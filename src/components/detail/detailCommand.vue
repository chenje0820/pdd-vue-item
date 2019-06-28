<template>
    <div>
        <div class="shop-command">
            <div class="command-tit">
                <div>商品评价(<span>826</span>)</div>
                <div class="command-tit-right">
                    <span>查看全部</span>
                    <span class="iconfont icon-youjiantou"></span>
                </div>
            </div>
            <div class="command-content">
                <div class="coommand-tips">
                    <span>质量很好(236)</span>
                    <span>做工很好(97)</span>
                    <span>客服态度很好(91)</span>
                </div>
                <div class="person-commmand">
                    <div class="command-person-photo">
                        <span><img src="https://t20img.yangkeduo.com/a/5b51b13f0a8ede5ea1913414c32fe89fca459271-1547624911?imageMogr2/thumbnail/100x" alt=""></span>
                        <span>祺^O^祺</span>
                    </div>
                    <div class="command-info">鞋子已经收到了，价格很便宜，购买的很划算，颜色也很喜欢， 下次介绍朋友过来购买，</div>
                </div>
                <div class="person-commmand">
                    <div class="command-person-photo">
                        <span><img src="https://t20img.yangkeduo.com/a/5b51b13f0a8ede5ea1913414c32fe89fca459271-1547624911?imageMogr2/thumbnail/100x" alt=""></span>
                        <span>祺^O^祺</span>
                    </div>
                    <div class="command-info">鞋子已经收到了，价格很便宜，购买的很划算，颜色也很喜欢， 下次介绍朋友过来购买，</div>
                </div>
            </div>
        </div>
        <div class="problem-resolve">
            <div class="problem-resolve-tit">
                <div>卖家客服答疑(10)</div>
                <div class="resolve-tit-right">
                    <span>查看全部</span>
                    <span class="iconfont icon-youjiantou"></span>
                </div>
            </div>
            <div class="problem-content">
                <div class="problem-list">
                    <div class="problem-list-left">
                        <span><img src="https://t20img.yangkeduo.com/a/5b51b13f0a8ede5ea1913414c32fe89fca459271-1547624911?imageMogr2/thumbnail/100x" alt=""></span>
                        <span>什么是脚踏？</span>
                    </div>
                    <div class="problem-list-right">2人同问</div>
                </div>
                <div class="problem-list">
                    <div class="problem-list-left">
                        <span><img src="https://t20img.yangkeduo.com/a/5b51b13f0a8ede5ea1913414c32fe89fca459271-1547624911?imageMogr2/thumbnail/100x" alt=""></span>
                        <span>什么是脚踏？</span>
                    </div>
                    <div class="problem-list-right">2人同问</div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
    export default {
        name: "detailCommand"
    }
</script>

<style scoped>
.shop-command,.problem-resolve{
    margin-top:0.12rem;
    background-color:white;
}
.command-tit,.problem-resolve-tit {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.12rem;
    line-height: 0.36rem;
    border-bottom: 1px solid #f2f2f2;
    box-sizing: border-box;
}
    .command-tit-right,.resolve-tit-right{
        color:#969696;
    }
    .command-content,.problem-content{
        padding:0 0.12rem;
        padding-bottom:0.1rem;
    }
    .coommand-tips{
        pedding:0.05rem 0 0;
    }
    .person-commmand{
        margin-top:0.05rem;
    }
    .coommand-tips span{
        margin:0.08rem  0.08rem 0.08rem 0;
        display: inline-block;
        line-height:0.3rem;
        padding:0 0.08rem;
        background-color:#fdefee;
        color:#454749 ;
    }
    .command-person-photo,.problem-list-left{
        line-height:0.24rem;
        display: flex;
        align-items: center;
    }
    .command-person-photo img,.problem-list-left img{
        width:0.24rem;
        height:0.24rem;
        border-radius:50%;
        margin-right:0.08rem;
    }
    .command-info{
        line-height:0.22rem;
        border-bottom:1px solid #f2f2f2;
        padding-bottom:0.1rem;
    }
    .problem-content{
        padding-top:0.02rem;
    }
    .problem-list{
        display:flex;
        justify-content: space-between;
        align-items: center;
        padding:0.05rem 0;
    }
    .problem-list-left img{
        width:0.16rem;
        height:0.16rem;
    }
</style>