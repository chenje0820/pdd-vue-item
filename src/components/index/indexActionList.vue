<template>
    <div>
        <li class="action-item action-gif" :indexActionItemList = 'indexActionItemList' v-for="(item,index) in indexActionItemList" :key ='index'>
            <img :src="item.Img" alt="">
            <p>{{item.title}}</p>
            <div class="action-gif-item"><img :src="item.gifImg" alt=""></div>
        </li>
    </div>
</template>

<script>
    export default {
        name: "indexActionList",
        props:["indexActionItemList"]
    }
</script>

<style scoped>

    .action-item{
        white-space: nowrap;
        display: inline-block;
        width:0.72rem;
        text-align:center;
    }
    .action-item img{
        width:0.4rem;
        height:0.4rem;
        margin:0 auto;
    }
    .action-item>p{
        line-height:0.25rem;
    }
    .action-gif{
        position: relative;
    }
    .action-gif-item img{
        width:0.175rem;
        height:0.175rem;
        position:absolute;
        right:6px;
        top:0;
    }
</style>