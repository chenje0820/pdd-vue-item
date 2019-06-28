<template>
    <section class="search-content flex">
        <pdd-search-content-nav :searchContent="searchContent"/>
        <pdd-search-content-area :searchContent="searchContent"/>
    </section>
</template>

<script>
    import SearchContentNav from '../../components/search/searchContent/searchContentNav'
    import SearchContentArea from './searchContent/searchContentArea'
    export default {
        name: "searchContent",
        props:["searchContent","num"],
        components:{
            'pdd-search-content-nav':SearchContentNav,
            'pdd-search-content-area':SearchContentArea,
        }
    }
</script>

<style scoped>
    .search-content{
         font-size:0.14rem;
         border-pottom:1px solid #eeeeee;
     }
    /*左邊*/



    .search-content-body .content-main div{
        height:0.5rem;
    }
</style>