<template>
    <div class="search-header">
        <div class="search-box flex">
            <span class="iconfont icon-shouye"></span>
            <span>下水道疏通器</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "searchHeader"
    }
</script>

<style scoped>
.search-header{
    width:100%;
    padding:0.08rem  0.12rem;
    background-color:white;
    position:fixed;
    z-index:10;
}
.search-box{
    position: relative;
}
.search-box{
    width:3.45rem;
    height:0.38rem;
    margin:0 auto;
    background-color:#ededed;
    font-size:0.15rem;
    color:#909090;
    outline: none;
    border:0;
    border-radius:0.1rem;
    justify-content: center;
    align-items: center;
}
.search-box .icon-shouye{
    margin-right:0.06rem;
}
</style>