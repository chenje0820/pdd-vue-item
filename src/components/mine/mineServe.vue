<template>
    <ul class="flex">
        <li v-for="item in serverIcon" :key = 'item.id'>
            <span v-html="item.iconfont" class="iconfont"></span>
            <p>{{item.title}}</p>
        </li>
    </ul>
</template>
<script>
    export default {
        name: "mineServe",
        data(){
            return{
                serverIcon:[
                    {
                        iconfont:'&#xe636',
                        title:'待付款'
                    },
                    {
                        iconfont:'&#xe636',
                        title:'待分享'
                    },
                    {
                        iconfont:'&#xe636',
                        title:'待发货'
                    },
                    {
                        iconfont:'&#xe636',
                        title:'待收货'
                    },
                    {
                        iconfont:'&#xe636',
                        title:'待评价'
                    },
                ],
                serverIcon1:[
                    {
                        iconfont:'&#xe613',
                        title:'待付款'
                    },
                    {
                        iconfont:'&#xe613',
                        title:'待分享'
                    },
                    {
                        iconfont:'&#xe613',
                        title:'待发货'
                    },
                    {
                        iconfont:'&#xe613',
                        title:'待收货'
                    },
                    {
                        iconfont:'&#xe613',
                        title:'待评价'
                    },
                ],
                serverIcon1:[
                    {
                        iconfont:'&#xe603',
                        title:'待付款'
                    },
                    {
                        iconfont:'&#xe603',
                        title:'待分享'
                    },
                    {
                        iconfont:'&#xe603',
                        title:'待发货'
                    },
                    {
                        iconfont:'&#xe603',
                        title:'待收货'
                    },
                    {
                        iconfont:'&#xe603',
                        title:'待评价'
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    .flex{
        flex-wrap: wrap;
    }
    .flex>li{
        width:20%;
        height:0.76rem;
        text-align: center;
        color:#444547;
        font-size:0.12rem;
    }
    .flex>li .iconfont{
        display: inline-block;
        font-size:0.26rem;
        margin:0.1rem 0;
        color:#8c8c8c;
    }


</style>