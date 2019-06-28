<template>
    <div class="new">
        <ul class="new-tit">
            <li class="tit-left">
                <div class='new-share'>新人专享</div>
                <div class='line'>|</div>
                <div class='quan-img'><img src="images/quan.jpg" alt=""></div>
                <div>爆款热卖 包邮到家</div>
            </li>
            <li class="tit-right"><p>查看更多</p><span>></span></li>
        </ul>
        <ul class="new-content">
            <li class="content-left"><img src="images/n1.png" alt=""></li>
            <li class="content-c" v-for="(item,index) in indexNew" :key="index">
                <div><img :src="item.imgUrl" alt=""></div>
                <div class='c-name'>{{item.shopTit}}</div>
                <div class="c-price"><span class='c-price-label'>{{item.newLabel}}</span><span class='price'>{{item.newPrice}}</span></div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "indexNew",
        props:["indexNew"],
        data(){
            return{
                newInfo:[
                    {
                        imgUrl:'images/n2.jpg',
                        title:'新品夏威夷果',
                        label:'新人价',
                        price:8.9,
                    },
                    {
                        imgUrl:'images/n3.jpg',
                        title:'宜马高级餐具合金筷子防滑不发霉耐高温',
                        label:'新人价',
                        price:5.2,
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .new{
        margin-top:10px;
        padding:0 12px;
        padding-bottom:12px;
        background-color:white;
    }
    .new-tit{
        font-size:0.14rem;
        color:#9c9c9c;
        line-height:0.4rem;
        display:flex;
        justify-content:space-between;
        align-items: baseline;
    }
    .tit-left , .tit-right{
        display: flex;
    }
    .new-share{
        font-size:0.16rem;
        font-weight:600;
        color:black;
    }
    .line{
        margin:0 8px;
    }
    .quan-img{
        margin-top:2px;
        margin-right:5px;
    }
    .tit-right span{
        width:0.16rem;
        text-align:center;
    }
    .new-content{
        display:flex;
    }
    .content-left img{
        width:1.1rem;
        float:left;
    }
    .content-c{
        margin-left:10px;
        color:#151516;
        font-size:.13rem;
        text-align:center;
        width:1.11rem;

    }
    .content-c img{
        width:1.11rem;
        height:1.11rem;
    }
    .c-name{
        line-height:0.3rem;
        width:100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .c-price{
        color:red;
        font-weight:600;
    }
    .c-price-label{
        color:white;
        background-color:red;
        width:0.45rem;
        height:0.17rem;
        text-align: center;
    }
    .price::before{
        content: "￥"
    }
</style>