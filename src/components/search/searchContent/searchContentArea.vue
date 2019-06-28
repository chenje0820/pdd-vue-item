<template>
    <section class="search-content-body flex">
        <div class="content-main">
            <!--组件-->
            <pdd-search-content-area-list :searchContent="searchContent"/>
        </div>
    </section>
</template>

<script>
    import searchContentAreaList from "../../../components/search/searchContent/searchContentAreaList"
    export default {
        name: "SearchContentArea",
        props:["searchContent","num"],
        components:{
            "pdd-search-content-area-list":searchContentAreaList,
        }
    }
</script>

<style scoped>
    .search-content-body{
        height:84vh;
        width:77%;
        background-color:white;
        flex-direction: column;
        padding-top:0.05rem;
    }
    .content-main{
        flex:1;
        overflow-y: auto;
    }


</style>