<template>
    <ul class="content-info-body">
        <li class="per-info" v-for="(u,index) in searchContent.searchContentList[0].cShopImgs" :key ="index">
            <a href="#">
                <img :src="u.cShopImg" alt="">
                <p>{{u.cShopDire}}</p>
            </a>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "searchContent",
        props:["searchContent"],
        mounted() {

        }
    }
</script>

<style scoped>
    .look-more{
        color:#999999;
    }
    .content-info-body{
        justify-content: center;
        flex-wrap: wrap;
    }
    .per-info{
        height:0.90rem;
        width:33.33%;
        text-align:center;
        display: inline-block;
    }
    .per-info img{
        width:0.6rem;
        height:0.6rem;

    }
    .per-info a{
        color:#242425;
    }
    .per-info p{
        margin-bottom:0.14rem;
    }
</style>