<template>
    <div class="cart-store">
        <!--店铺信息-->
        <div class="cart-store-list">
            <div class="store-tit flex">
                <div class="store-tit-left flex">
                    <input class="check goods-check shopCheck"
                           type="checkbox"
                           v-model = "data.checked"
                           @change="shopCheck(sid)"
                    >
                    <div><img src="../../../public/images/store-t1.png" alt=""></div>
                    <p>{{data.shopName}}</p>
                </div>
                <div class="take_q">
                    <span>领券</span>
                    <span>|</span>
                    <span>编辑</span>
                </div>
            </div>
            <!--商品列表-->
            <pdd-cart-shop-product
                    :data="data.products"
                    :sid="sid"
                    @add ="add"
                    @minus = "minus"
                    @pCheck = "pCheck"


            />
        </div>
    </div>
</template>

<script>
    import cartShopProduct from "../../components/cart/cartShopProduct"
    export default {
        name: "cartShopList",
        props:["data","sid"],
        components:{
            "pdd-cart-shop-product":cartShopProduct
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
    .cart-store{
        padding:0 0.12rem;
        font-size:0.14rem;
        color:#989898;
        margin-bottom:0.12rem;
    }
    .cart-store-list{
        background-color:white;
        border-radius:0.1rem;
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
    label{
        position:relative;
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
    .check{
        width: 0.22rem;
        height: 0.22rem;
        -webkit-appearance: none;
        margin: 0;
    }
</style>