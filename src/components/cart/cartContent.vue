<template>
    <div>
        <div class="cart-content">
            <!--商品信息-->
            <pdd-cart-content-info/>
            <pdd-cart-content-info/>
        </div>
        <!--结算按钮-->
        <pdd-cart-content-set/>
    </div>
</template>

<script>
    import cartContentInfo from '../cart/cartContentInfo'
    import cartContentSet from '../cart/cartContentSet'
    export default {
        name: "cartContent",
        components:{
            "pdd-cart-content-info":cartContentInfo,
            "pdd-cart-content-set":cartContentSet,
        }
    }
</script>

<style scoped>
    .cart-content{
        padding:0 0.12rem;
        margin-top:-0.84rem;
        font-size:0.14rem;
        color:#989898;
    }











</style>