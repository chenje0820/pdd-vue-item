<template>
    <div>
        <div class="content-img flex" >
            <img :src="searchContent.titImg" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "searchContentAreaListImg",
        props:["searchContent","num"]
    }
</script>

<style scoped>
    .content-img{
        margin-bottom:0.16rem;
    }
    .content-img img{
        width: 2.90rem;
        height: .8rem;
        max-width:100%;
        padding:0 0.14rem
    }
</style>