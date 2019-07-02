<template>
<div class="main-body">
    <!--店铺信息-->
    <pdd-cart-shop-list
        :data="shop"
        :sid="sid"
        v-for="(shop,sid) in data"
        :key="sid"

        @add = "add"
        @minus = "minus"
        @sCheck = "shopCheck"
        @pCheck = "pCheck"
    />
</div>
</template>

<script>
    import cartShopSet from "./cartShopSet"
    import cartShopList from "../../components/cart/cartShopList"
    export default {
        name: "cartShop",
        //用来接收从父组件传过来的数据
        props:["data"],
        components:{
            "pdd-cart-shop-set":cartShopSet,
            "pdd-cart-shop-list":cartShopList

        },
        methods:{
            add(sid,pid){
                this.$emit("add",sid,pid)
            },
            minus(sid,pid){
                this.$emit("minus",sid,pid)
            },
            shopCheck(sid){
                this.$emit("sCheck",sid)
            },
            pCheck(sid){
                this.$emit("pCheck",sid)
            }
        }
    }
</script>

<style scoped>
.main-body{
    margin-bottom:0.50rem;
    margin-top:-1rem;
}

</style>