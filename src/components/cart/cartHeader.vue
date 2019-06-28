<template>
    <div class="cart-header">
        <div class="flex">
            <div>购物车(<span class="num">97</span>)</div>
            <div>管理</div>
        </div>
        <div>共<span class="num">97</span>件宝贝</div>
    </div>
</template>

<script>
    export default {
        name: "cartheader"
    }
</script>

<style scoped>
.cart-header{
    height:1.8rem;
    background-image: linear-gradient(-90deg, #FF5000 0%, #FF8400 100%);
    padding:0.12rem 0.12rem 0;
    color:white;
}
    .cart-header .flex{
        line-height:0.4rem;
        justify-content: space-between;
        align-items: center;
    }
.cart-header .flex div:nth-child(1){
    font-size:0.22rem;
    fonr-weight:500;
}
.cart-header .flex div:nth-child(2){
     font-size:0.14rem;
 }
.cart-header div:nth-of-type(2){
    font-size:0.12rem;
}
</style>