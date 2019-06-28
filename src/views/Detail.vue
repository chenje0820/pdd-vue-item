<template>
    <div>
        <div>
            <div id="main">
                <!--轮播图部分-->
                <pdd-detail-bannner/>
                <!--购买信息-->
                <pdd-detail-buy-info/>
                <!--拼单情况-->
                <pdd-detail-spell-order/>
                <!--评论区-->
                <pdd-detail-command/>
                <!--店铺详情-->
                <pdd-detail-store/>
                <!--商品的具体详情-->
                <pdd-detail-info/>
            </div>
            <pdd-detail-footer/>
            <!--选择商品类型-->
            <div class="choose-shop-type">
                <div class="shop-type-box">
                    <div class="shop-type-header">
                        <div class="shop-header-box clearfix">
                            <div class="shop-imgs Left-u"><img src="//t00img.yangkeduo.com/goods/images/2019-05-21/9e1e3c6752a3ef81107bd6f3f16863de.jpeg?imageMogr2/sharpen/1%7CimageView2/2/w/300/q/70/format/webp" alt=""></div>
                            <ul class="Left-u header-info">
                                <li class="price-info flex">
                                    <span>￥37.1-144</span>
                                    <span class="iconfont icon-youjiantou close-btn"></span>
                                </li>
                                <li>备填信息</li>
                                <li>请选择&nbsp;颜色&nbsp;尺寸</li>
                            </ul>
                        </div>
                    </div>
                    <div class="shop-mian-info">
                        <div class="type-tips">
                            <div class="type-tips-topic">颜色</div>
                            <ul class="type-tips-list">
                                <li>111111</li>
                                <li>2222</li>
                                <li>333333333</li>
                                <li>444444</li>
                                <li>555555555555</li>
                                <li>66666</li>
                                <li>77777777</li>
                                <li>888888</li>
                                <li>9999</li>
                            </ul>
                        </div>
                        <div class="type-tips">
                            <div class="type-tips-topic">尺寸</div>
                            <ul class="type-tips-list">
                                <li>111111</li>
                                <li>2222</li>
                                <li>333333333</li>
                                <li>444444</li>
                                <li>555555555555</li>
                                <li>66666</li>
                                <li>77777777</li>
                                <li>888888</li>
                                <li>9999</li>
                            </ul>
                        </div>
                        <div class="type-tips num-tip flex">
                            <div class="type-tips-topic">数量</div>
                            <div class="change-num flex">
                                <span>-</span>
                                <input class="num-box" type="text" value="1">
                                <span>+</span>
                            </div>
                        </div>
                    </div>
                    <div class="make-sure">确定</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // import Jquery from 'jquery'
    import detailBanner from '../components/detail/detailBanner'
    import detailBuyInfo from '../components/detail/detailBuyInfo'
    import detailSpellOrder from '../components/detail/detailSpellOrder'
    import detailStore from '../components/detail/detailStore'
    import detailCommand from '../components/detail/detailCommand'
    import detailnfo from '../components/detail/detailnfo'
    import detailFooter from '../components/detail/detailFooter'
    export default {
        name: "tuijian",
        components:{
            'pdd-detail-bannner':detailBanner,
            'pdd-detail-buy-info':detailBuyInfo,
            'pdd-detail-spell-order':detailSpellOrder,
            'pdd-detail-command':detailCommand,
            'pdd-detail-store':detailStore,
            'pdd-detail-info':detailnfo,
            'pdd-detail-footer':detailFooter
        },
        data(){
            return{

            }
        },
        mounted() {
            this.__hiddlePage()
            this.__openChoose()
        },
        methods:{
            __hiddlePage(){
                let closeBtn = document.querySelector(".close-btn")
                closeBtn.onclick = function(){
                    document.querySelector(".choose-shop-type").style.display="none"
                }
                // $(".close-btn").click(
                //     function () {
                //        alert(1)
                //     }
                // )
            },
            __openChoose(){
                let openBtn = document.querySelector(".detail-buy-btn")
                console.log(openBtn.length)
                document.querySelector(".choose-shop-type").style.display="none"
                for(let i=0;i<openBtn.length;i++){
                    openBtn(i).onclick = function(){
                        document.querySelector(".choose-shop-type").style.display="block"
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .choose-shop-type{
        width:100%;
        /*max-width: 640px;*/
        height:100%;
        background-color:rgba(0,0,0,.7);
        position:fixed;
        top:0;
        z-index: 200;
        display: none;
    }
    .shop-type-box{
        width:100%;
        /*max-width:640px;*/
        height: 4.8rem;
        background-color:white;
        position:fixed;
        bottom:0;
        z-index:220;
        display: flex;
        flex-direction: column;
    }
    .shop-type-header{
        padding-top:0.09rem;

    }
    .shop-header-box{
        padding:0 0.12rem 0.1rem;
        border-bottom:1px solid #f4f4f4;
    }
    .shop-imgs img{
        width:1rem;
        height:1rem;
        border-radius:4px;
        position:absolute;
        top:-0.3rem;
    }
    .header-info{
        margin-left:1.14rem;
        width:2.4rem;
    }
    .price-info{
        justify-content: space-between;
        line-height:0.22rem;
        color:#da0400;
        font-size:0.13rem;
    }
    .icon-youjiantou{
        color:#dadada;
    }
    .shop-mian-info{
        padding-left:0.12rem;
    }
    .type-tips{
        padding-bottom:0.06rem;
        padding-right: 0.12rem;
        border-bottom:1px solid #f5f5f5;
    }
    .type-tips-topic{
        padding:0.1rem 0;
    }
    .type-tips-list li{
        display: inline-block;
        padding:0.08rem;
        background-color:#f5f5f5;
        margin-right:0.15rem;
        margin-bottom:0.08rem;
    }
    .num-tip{
        height:0.6rem;
        justify-content: space-between;
        align-items: center;
    }
    .change-num span{
        width:0.32rem;
        text-align: center;
        line-height:0.26rem;
        height: 0.26rem;
        color:#616264;
        background-color:#f2f2f2;
        font-size:0.12rem;
        border-radius: 4px;
    }
    .num-box{
        width:0.34rem;
        outline: none;
        border: none;
        text-align: center;
    }
    .shop-mian-info{
        overflow-x: auto;
        overflow-y: auto;
    }
    .make-sure{
        width:100%;
        height:0.48rem;
        text-align:center;
        line-height:0.48rem;
        background-color:#e02e24;
        color:white;
        font-size:0.18rem;
    }

</style>