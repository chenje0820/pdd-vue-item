<template>
    <div class="grands-list">
        <div class="grands-item" v-for="(item,index) in indexGrandsShopsInfo" :key = "index">
            <a href="#">
                <div><img :src="item.gImg" alt=""></div>
                <div class="grand-item-price">
                    <span class="price sign">{{item.gNowPrice}}</span>
                    <s class="price old-price">{{item.gOldPrice}}</s>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "indexGrandsShopsInfo",
        props:["indexGrandsShopsInfo"]
    }
</script>

<style scoped>
    .grands-list{
        display: flex;
        overflow-x: auto;
        padding:0 0.12rem 0.1rem;
        box-sizing: border-box;
    }

    .grands-item{
        margin-right: 5px;
        flex-shrink: 0;
    }
    .grands-item img{
        height:1.13rem;
        margin-bottom:0.1rem;
        float:left;
    }
    .grand-item-price{
        text-align:center;
        color:#e34138;
        font-weight: 600;
        font-size:0.1rem;
    }
    .old-price{
        color:#898989;
        font-weight: 200;
    }
</style>