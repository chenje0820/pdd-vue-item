<template>
    <footer class="footer-bar detail-footer flex">
        <div class="btn-itm btn-itm-icon">
            <div><span class="iconfont icon-shouye"></span></div>
            <div>更多</div>
        </div>
        <div class="btn-itm btn-itm-icon">
            <div><span class="iconfont icon-tuijian"></span></div>
            <div>收藏</div>
        </div>
        <div class="btn-itm btn-itm-icon">
            <div><span class="iconfont icon-sousuo"></span></div>
            <div>客服</div>
        </div>
        <div class="btn-itm detail-buy-btn">
            <div><span class="sign">2299</span></div>
            <div>单独购买</div>
        </div>
        <div class="btn-itm detail-buy-btn send-buy">
            <div><span class="sign">1249</span></div>
            <div>发起拼单</div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "detailFooter",
        data(){
            return{
                tabbar:[
                    {
                        iconfont:"&#xe60e",
                        title:'更多',
                        path:'/index',
                    },
                    {
                        iconfont:"&#xe60e",
                        title:'收藏',
                        path:'/index',
                    },
                    {
                        iconfont:"&#xe60e",
                        title:'客服',
                        path:'/index',
                    },
                    {
                        iconfont:"&#xe60e",
                        title:'单独购买',
                        path:'/index',
                    },
                    {
                        iconfont:"&#xe60e",
                        title:'发起拼单',
                        path:'/index',
                    }
                ],
                flag:0,
            }
        },
        mounted(){
        },
        methods:{
            handleChange(index){
                this.flag = index;
            },

        }
    }
</script>

<style scoped>
.detail-footer {
    height: 0.54rem;
    border-top:2px solid #ededed;
    box-sizing: border-box;
    font-size:0.12rem;
    position: fixed;
    bottom:0;
    z-index:10;
    background-color:white;
    width:100%;

}
.btn-itm{
    text-align:center;
}
    .btn-itm-icon{
         flex:1;
     }
    .detail-footer .btn-itm{
        height:100%;
        padding-top:0.09rem;
    }
    .detail-buy-btn{
        width:1.07rem;
        background-color:#f3aba7;
        color:#ffffff;
        font-size:0.14rem;
    }
    .send-buy{
        background-color:#e02e24;

    }
</style>