<template>
    <pdd-support-shop-list class="suppot-content" :indexGoodsArea="indexGoodsArea"/>
</template>

<script>
    import mineRecProduct from '../../components/mine/mineRecProduct'
    export default {
        name: "supportCContent",
        props:["indexGoodsArea"],
        components:{
            'pdd-support-shop-list':mineRecProduct,
        }
    }
</script>

<style scoped>
    .suppot-content{
        background-color:white;
    }
</style>