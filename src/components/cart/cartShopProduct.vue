<template>
    <div class="store-body">
        <pdd-cart-shop-product-list
                :key="pid"
                :sid="sid"
                :pid="pid"
                v-for="(product,pid) in data"
                :data="product"
                @add = "add"
                @minus = "minus"
                @pCheck = "pCheck"

        />
    </div>
</template>
<script>
    import cartShopProductList from "../../components/cart/cartShopProductList"
    export default {
        name: "cartShopProduct",
        props:["data","sid"],
        components:{
            "pdd-cart-shop-product-list":cartShopProductList
        },
        methods:{
            add(sid,pid){
                this.$emit("add",sid,pid)
            },
            minus(sid,pid){
                this.$emit("minus",sid,pid)
            },
            pCheck(sid){
                this.$emit("pCheck",sid)
            }
        }

    }
</script>

<style scoped>

</style>