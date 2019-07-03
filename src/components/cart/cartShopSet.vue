<template>
    <div class="set-money flex">
        <div class="flex">
            <div class="sec-btn"></div>
            <input
                    class="check goods-check"
                    type="checkbox"
                    v-model="data.checked"
                    @change = "cartCheck"
            >
            全选
        </div>
        <div>
            合计：<span class="total-money sign">{{data|counter}}</span>
            <router-link
                    class="set-btn"
                    to="/regis"
            >结算(<span>{{data|counter}}</span>)</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "carShopSet",
        props:["data"],
        //用过滤器计算总价
        filters:{
            counter(data){
                let total = 0
                if(data.shops){
                    data.shops.forEach((shop,sid)=>{
                        shop.products.forEach((product,pid)=>{
                            //选中商品的价格之和
                            if(product.checked){
                                total += product.price*product.num
                            }
                        })
                    })
                }
                return total
            }
        },
        methods:{
            cartCheck(){
                this.$emit("cCheck")
            }
        }
    }
</script>

<style scoped>
    .set-money{
        height:0.52rem;
        line-height:0.4rem;
        width:100%;
        justify-content: space-between;
        align-items: center;
        background-color:white;
        position:fixed;
        bottom:0.50rem;
        padding:0 0.12rem;
    }
    .total-money{
        margin-right:0.08rem;
        color:#ff4a00;
    }
    .set-btn{
        display:inline-block;
        text-align:center;
        line-height:0.4rem;
        font-size:0.14rem;
        border-radius:0.2rem;
        height:0.4rem;
        padding:0 0.1rem;
        color:white;
        background-image: linear-gradient(-90deg, #FF5000 0%, #FF8400 100%)
    }

</style>