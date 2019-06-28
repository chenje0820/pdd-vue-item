<template>
    <header>
        <ul class="nav-bar" >
            <li class="nav-bar-item"
                v-for="(item,index) in indexHeaderNav"
                :key = 'index'
                v-bind:class="{active:index==isActive}"
                @click = "checkedItem(index)"
            ><span>{{item}}</span></li>
        </ul>
    </header>

</template>

<script>
    export default {
        name: "indexHeader",
        props:["indexHeaderNav"],
        data(){
            return{
                isActive:-1,
            }
        },
        methods:{
            checkedItem(index){
                this.isActive = index;
            },
        },
    }
</script>

<style scoped>
.nav-bar{
    padding-left:0;
}
.nav-bar .nav-bar-item:nth-child(1){
    color:red;
    border-bottom:1px solid red;
}
header{
    width:100%;
    height:0.42rem;
    line-height:0.40rem;
    font-size:0.16rem;
    color:#444444;
    background-color:white;
    position:fixed;
    top:0;
    z-index:10;
}
.nav-bar {
    display: flex;
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
}
.nav-bar-item{
    margin-left:0.2rem;
}
.nav-bar-item>span{
    display:inline-block;
}
.nav-bar-item:hover span{
    color:#e02e24;
    border-bottom:2px solid #e02e24;
}
.first{
    margin-left:0;
}
/*.first span{*/
/*    color:#e02e24;*/
/*    border-bottom:2px solid #e02e24;*/
/*}*/
    .nav-bar-item .active{
        color:#e02e24;
        border-bottom:2px solid #e02e24;
    }
</style>