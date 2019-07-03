<template>
    <div>
        <div class="content-info-list"
             v-for="(item,index) in searchContent"
             :key="index"
             :id="item.idName"
        >
            <!--part1s-->
            <pdd-search-content-area-list-tit :searchContent ="item"/>
            <!--part2-->
            <pdd-search-content-area-list-img :searchContent ="item"/>
            <!--part3-->
            <pdd-search-content-area-list-shops :searchContent ="item"/>
        </div>
    </div>
</template>

<script>
    import searchContentArealListTit from "../../../components/search/searchContent/searchContentArealListTit"
    import searchContentAreaListShops from "../../../components/search/searchContent/searchContentAreaListShops"
    import searchContentAreaListImg  from "../../../components/search/searchContent/searchContentAreaListImg"
    export default {
        name: "SearchContentAreaList",
        props:["searchContent","num"],
        components:{
            "pdd-search-content-area-list-tit":searchContentArealListTit,
            "pdd-search-content-area-list-shops":searchContentAreaListShops,
            "pdd-search-content-area-list-img":searchContentAreaListImg
        }
    }
</script>

<style scoped>



</style>