<template>
    <footer class="footer-bar">
        <ul class="flex">
            <router-link
                active-class="active"
                :to="item.path"
                tag="li"
                v-for="(item,index) in indexFooter"
                @click.native="handleChange(index)"
            >
                <span v-html="item.iconfont" class="iconfont" ></span>
                <span>{{item.title}}</span>
            </router-link>
        </ul>
    </footer>
</template>

<script>
    export default {
        name: "footerBar",
        props:["indexFooter"],
        methods:{
            handleChange(index){
                this.flag = index;
            }
        }
    }
</script>

<style scoped>
    .footer-bar{
        width:100%;
        background-color:#ffffff;
        border-bottom:2px solid #f3f3f3;
        font-size:0.12rem;
        color:#5d5d5d;
        display:flex;
        align-items: center;
        position:fixed;
        bottom:0;
        z-index:20;
    }
    .footer-bar .iconfont{
        font-size:0.22rem;
    }
    .footer-bar>ul{
        width:100%;
    }
    .footer-bar>ul>li{
        display: inline-block;
        width: 20%;
        text-align: center;
        margin: 0 auto;
        padding: 0.05rem 0;
    }
.footer-bar>ul>li>span{
    display: block;
}
    .footer-bar .active{
        color:#e02e24;
    }
</style>