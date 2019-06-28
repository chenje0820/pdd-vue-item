<template>
    <div class="set-money flex">
        <div class="flex">
            <div class="sec-btn"></div>
            <span class="all-choose">全选</span>
        </div>
        <div>
            合计：<span class="total-money sign">0</span>
            <span class="set-btn">结算(<span>0</span>)</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "cartContentSetBtn"
    }
</script>

<style scoped>
    .set-money{
        height:0.52rem;
        width:100%;
        justify-content: space-between;
        align-items: center;
        background-color:white;
        position:fixed;
        bottom:0.52rem;
        padding:0 0.12rem;
    }
    .all-choose{
        margin-left:0.12rem;
    }
    .total-money{
        margin-right:0.08rem;
        color:#ff4a00;
    }
    .set-btn{
        display:inline-block;
        text-align:center;
        line-height:0.4rem;
        font-size:0.14rem;
        border-radius:0.2rem;
        width:0.73rem;
        height:0.4rem;
        color:white;
        background-image: linear-gradient(-90deg, #FF5000 0%, #FF8400 100%)
    }
</style>