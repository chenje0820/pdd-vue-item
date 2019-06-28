<template>
    <div class="goods-area grands-area">
        <pdd-index-grands-store-info v-if="indexGrandsArea.grandsStoreInfo" :indexGrandsStoreInfo="indexGrandsArea.grandsStoreInfo"/>
        <pdd-index-grands-shops-info :indexGrandsShopsInfo="indexGrandsArea.grandsShopsInfo"/>
    </div>
</template>

<script>
    import indexGrandsStoreInfo from "../../components/index/indexGrandsStoreInfo"
    import indexGrandsShopsInfo from "../../components/index/indexGrandsShopsInfo"
    export default {
        name: "indexGrandsArea",
        props:["indexGrandsArea"],
        components:{
            "pdd-index-grands-store-info":indexGrandsStoreInfo,
            "pdd-index-grands-shops-info":indexGrandsShopsInfo
        }
    }
</script>

<style scoped>
    .grands-area{
        background-color:white;
        margin-top:0.12rem;
    }



</style>