<template>
    <ul class="flex">
        <li
                v-for="item in serverIcon"
                :key = 'item.id'
        >
            <span v-html="item.iconfont" class="iconfont" :class="item.Cla"  ></span>
            <p>{{item.title}}</p>
        </li>
    </ul>
</template>
<script>
    export default {
        name: "mineServe",
        props:["serverIcon"],
        data(){
            return{

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

    .flex .Satic{
        color:#666!important;
    }
    .flex .Red{
        color:#e02e24!important;
    }
    .flex .Orange{
        color:orange!important;
    }

</style>