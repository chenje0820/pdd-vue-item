<template>
        <div class="action" >
            <ul class="action-list" :indexActionItem="indexActionItem" v-for="(item,index) in indexActionItem" :key="index">
                <pdd-index-action-list :indexActionItemList="item.actionItem"/>
            </ul>
        </div>
</template>
<script>
    import indexActionList from '../../components/index/indexActionList'
    export default {
        name: "indexNew",
        props:['indexActionItem'],
        components:{
            "pdd-index-action-list":indexActionList,
        },

    }
</script>

<style scoped>
    .action{
        width:100%;
        padding:5px 0 16px;
        background-color: white;
        font-size:0.12rem;
        color:#656565;
        white-space: nowrap;
        overflow-x: auto;
        overflow-y: hidden;
        position:relative;
    }
    .action-list{
        width:3.65rem;
        margin-top:5px;
    }

</style>