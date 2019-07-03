<template>
    <div>
        <div id="mian" class="clearfix">
            <!--登录头像-->
            <div class="account flex bgcolor">
                <img src="../../public/images/mine-p1.jpg" alt="">
                <a href="/regis" class="login-www">登录或注册</a>
            </div>
            <!--我的订单-->
            <div class="my-order bgcolor">
                <div class="my-order-tit flex">
                    <h3>我的订单</h3>
                    <div><span>查看更多</span><span class="iconfont icon-icon-youjiantou">></span>
                    </div>
                </div>
                <div class="my-order-server">
                    <!--物流服务项-->
                    <pdd-mine-serve :serverIcon="serverIcon1"/>
                </div>
            </div>
            <!--prat2-->
            <div class="serve-list1 bgcolor">
                <pdd-mine-serve :serverIcon="serverIcon2"/>
            </div>
            <!--part3-->
            <div class="serve-list1 bgcolor">
                <pdd-mine-serve :serverIcon="serverIcon3"/>
            </div>
            <!--精选推荐-->
            <div class="select-recommand bgcolor">
                <div class="select-recommand-tit">
                    <span class="iconfont icon-xiaoxi"></span>
                    <span>精选推荐</span>
                </div>
                <pdd-mine-rec-product :indexGoodsArea="indexGoodsArea"/>
            </div>
        </div>
    </div>
      </template>
    <script>
    import mineServe from '../components/mine/mineServe'
    import mineRecProduct from '../components/mine/mineRecProduct'
    export default {
    name: "mine",
    components: {
        "pdd-mine-serve":mineServe,
        'pdd-mine-rec-product':mineRecProduct,
        },
        created(){
            this.$http.get("data/mine.json").then((data)=>{
                data= data.data
                this.serverIcon1 = data.serverIcon1,
                this.serverIcon2 = data.serverIcon2,
                this.serverIcon3 = data.serverIcon3,
                this.indexGoodsArea =data.indexGoodsArea
            }).catch((error)=>{
                console.log(error)
            })
        },
        data(){
            return{
                "serverIcon1":[],
                "serverIcon2":[],
                "serverIcon3":[],
                "indexGoodsArea":[]
            }
        }
    }
    </script>

      <style scoped>
          #mian{
              padding-bottom:0.52rem;
          }
      .account{
          padding:0 0.12rem;
          border:1px solid #f8f8f8;
          height:0.93rem;
          min-height:0.93rem;
          align-items: center;
      }
    .account img{
        margin: 0 0.12rem 0 0.05rem;
    }
    .login-www{
        display: inline-block;
        width:1.04rem;
        height:0.32rem;
        line-height:0.32rem;
        text-align:center;
        border:1px solid #f09a96;
        color:#df2a20;
        font-size:0.15rem;
        border-radius: 0.16rem;
    }

    .my-order{
        padding:0.12rem 0.12rem 0.1rem;
    }
    .my-order-tit{
        line-height:0.3rem;
        justify-content: space-between;
    }
    .my-order-tit span{
        color:#a3a3a3;
        font-size:0.12rem;
    }
    .my-order-tit span:nth-child(1){
        margin-right:0.1rem;
    }
    .my-order-tit h3{
        font-weight: 500;
        color:#1d1d1e;
        font-size:0.18rem;
    }

      .flex{
        flex-wrap: wrap;
    }
    .flex>li{
        width:20%;
        height:0.76rem;
        text-align: center;
        color:#444547;
        font-size:0.12rem;
    }
    .flex>li .iconfont{
        display: inline-block;
        font-size:0.26rem;
        margin:0.1rem 0;
        color:#8c8c8c;
    }

      .serve-list1{
        margin-top:0.1rem;
        padding:0.1rem 0.12rem;
    }
    .select-recommand-tit {
        height: 0.45rem;
        line-height: 0.45rem;
        text-align: center;
        color: #da0600;
        font-size: 0.14rem;
        margin-top: 0.12rem;
    }
      .select-recommand-tit span{
          margin-right:0.1rem;
      }

</style>