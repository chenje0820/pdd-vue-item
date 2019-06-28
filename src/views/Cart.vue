<template>
    <div>
        <div id="main">
            <!--header-->
            <pdd-cart-header/>
            <!--content-->
            <pdd-cart-content/>
            <!--resetBtn-->
        </div>
        <!--footer部分-->
    </div>
</template>

<script>
    import carHeader from "../components/cart/cartHeader"
    import cartContent from "../components/cart/cartContent"
    import footerBar from "../components/common/footerBar"
    export default {
        name: "Cart",
        components: {
            "pdd-cart-header":carHeader,
            "pdd-cart-content":cartContent,
            "pdd-cart-header":carHeader,
            "pdd-footer-bar":footerBar,
        },
    }
</script>

<style scoped>
#main{
    padding-top:0;
}
</style>