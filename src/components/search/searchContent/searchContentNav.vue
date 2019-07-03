<template>
    <section class="search-content-nav flex">
        <div class="content-main">
<!--            <div class="active"><span>女裝</span><span class="line"></span></div>-->
            <div
                    class="per-shop-nav"
                    active-class="active"
                    v-for="(item,index) in searchContent"
                    :key ="index"
                    :class="{active:index == num}"
                    @click ="tab(index)"
            >
                <a :href="'#'+item.idName"><span>{{item.searchTitle}}</span><span class="line"></span></a>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "searchContentNav",
        props:["searchContent","num"],
        mounted() {
        },
        methods:{
            tab(index){
                this.num = index
            }
        }


    }
</script>

<style scoped>
    .search-content-nav{
        height:84vh;
        width:23%;
        background-color:#fafafa;
        flex-direction: column;
    }
    .content-main{
        flex:1;
        overflow-y: auto;
    }
    .content-main .active{
        color:red;
        background-color:white;

    }
    .search-content-nav div{
        flex:1;
        display: inline-block;
        width:100%;
        text-align: center;
        color:#3e3e3e;
        height:0.54rem;
        line-height:0.54rem;
        position:relative;
    }
    .line{
        height:0.26rem;
        width:0.03rem;
        background-color:#e3473e;
        position:absolute;
        left:0;
        top:0.14rem;
    }
    .line{
        display: none;
    }
    .search-content-nav .active .line{
        display: block;
    }
    /*.content-main .per-shop-nav:nth-child(1){*/
    /*    background-color:white;*/
    /*    color:#e3473e;*/
    /*}*/
    .content-main .per-shop-nav:nth-child(1) .line{
        display: block;
    }

</style>