<template>
    <div>
        <div class="shop-info flex">
            <div class="shop-info-left flex">
                <input
                        class="check goods-check goodsCheck"
                        type="checkbox"
                        v-model="data.checked"
                        @change = "pCheck(sid)"
                >
                <div><img :src="data.pic" alt=""></div>
            </div>
            <div class="shop-info-right">
                <div>{{data.title}}</div>
                <div class="select-kind flex">
                    <span >重量：{{data.attrs.weight}}</span>
                    <span >颜色：{{data.attrs.color}}</span>
                    <span >版本：{{data.attrs.version}}</span>
                </div>
                <div class="tip"></div>
                <div class='select-price-num flex'>
                    <div class="price sign"><span>{{data.price}}</span></div>
                    <div class="change-num">
                        <span @click = "minus(sid,pid)">-</span>
                        <input type="text" :value="data.num">
                        <span @click = "add(sid,pid)">+</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "cartShopProductList",
        /*data__商品信息 sid__  pid__ */
        props:["data","sid","pid"],
        methods:{
            add(sid,pid){
                this.$emit("add",sid,pid)
            },
            minus(sid,pid){
                this.$emit("minus",sid,pid)
            },
            pCheck(sid){
                this.$emit("pCheck",sid)
            }
        }
    }
</script>

<style scoped>
    .shop-info{
        padding:0.05rem 0.12rem 0.1rem;
        width:100%;

    }
    .shop-info-left{
        width:1.25rem;
        height:0.92rem;
        align-items: center;
    }
    .shop-info-left img{
        width:0.89rem;
        height:0.89rem;
        margin-left:0.12rem;
    }
    .shop-info-right{
        margin-left:0.12rem;
        padding-bottom:0.1rem;
        overflow: hidden;
        border-bottom: 1px solid #ff743d;
    }
    .shop-info-right div:nth-of-type(1){
        margin-top:0.06rem;
        font-size:0.12rem;
        max-height:0.32rem;
        overflow: hidden;
    }
    .select-kind span{
        justify-content: center;
        color:#999999;
        margin-right:0.05rem;
        background-color:#f9f9f9;
        margin-top:0.1rem;
        font-size:0.12rem;
    }
    .tip{
        height:0.32rem;
        color:#ff743d;
        line-height:0.32rem;
    }
    .select-price-num{
        justify-content: space-between;
    }
    .select-price-num .price{
        color:#ff743d;
        font-size:0.14rem;
    }
    .change-num{
        height:0.24rem;
        box-sizing: border-box;
        border:1px solid #efefef;
    }
    .change-num span{
        display: inline-block;
        width:0.24rem;
        text-align:center;
    }
    .change-num input{
        width:0.4rem;
        height:0.23rem;
        box-sizing: border-box;
        border:1px solid #efefef;
        outline: none;
        text-align:center
    }
    .goodsCheck{
        width: 0.22rem;
        height: 0.22rem;
        -webkit-appearance: none;
        background-size: 0.22rem 0.22rem;
        margin: 0;
        outline: none;
    }
</style>