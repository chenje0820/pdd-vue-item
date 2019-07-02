<template>
    <div>
        <div id="main">
            <!--shopList-->
            <pdd-support-content :indexGoodsArea="indexGoodsArea"/>
            <!--没有更多-->
            <pdd-support-noMore/>
        </div>
    </div>

</template>

<script>
    import footerBar from '../components/common/footerBar'
    import supportContent from '../components/support/supportContent'
    import supportSearch from '../components/support/supportSearch'
    export default {
        name: "Support",
        components:{
            "pdd-support-content":supportContent,
            "pdd-support-noMore":supportSearch,
        },
        created(){
            this.$http.get("data/index.json").then((data)=>{
                // console.log(data)
                data = data.data
                this.indexGoodsArea = data.indexGoodsArea;
                console.log(this.indexGoodsArea)

            })
        },
        data(){
            return{
                indexGoodsArea:[]
            }
        }
        // created() {
        //     this.$http.get('data/index.json').then((data)=>{
        //         data= data.data;
        //         console.log(data)
        //         this.indexHeaderNav = data.indexHeaderNav;
        //         this.indexHeaderBanner = data.indexHeaderBanner;
        //         this.indexActionItem = data.indexActionItem;
        //         this.indexNew = data.indexNew;
        //         this.indexGrandsArea = data.indexGrandsArea[0];
        //         this.indexFooter = data.indexFooter;
        //         console.log(this.indexGrandsArea)
        //     }).catch((error)=>{
        //         console.log(error)
        //     })
        // }
    }
</script>

<style scoped>
#main{
    height:100%;
    width:100%;
    padding-top:0;
}
</style>