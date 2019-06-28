<template>
    <div>
        <div class="content-info-tit flex">
            <h4>{{searchContent.searchTitle}}</h4>
            <div class="look-more"><span>查看更多</span><span v-html="searchContent.iconfont" class="iconfont"></span></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "searchContentArealListTit",
        props:["searchContent"]
    }
</script>

<style scoped>
    .content-info-tit{
        padding:0 0.14rem;
        justify-content: space-between;
        line-height:0.4rem;
    }
</style>