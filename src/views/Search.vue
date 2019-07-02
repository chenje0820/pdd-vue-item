<template>
    <div>
        <!--header-->
        <pdd-search-header/>
        <div id="main-body">
            <pdd-search-content :searchContent="searchContent"/>
        </div>
        <!--footer-->
    </div>
</template>

<script>
    import searchHeader from '../components/search/searchHeader'
    import searchContent from '../components/search/searchContent'
    export default {
        name: "Support",
        components:{
            'pdd-search-content':searchContent,
            'pdd-search-header':searchHeader
        },
        created(){
            this.$http.get("data/search.json").then((data)=>{
                data=data.data
                console.log(data)
                this.searchContent = data.searchContent
                this.n = data.num
                console.log(this.searchContent)
                // console.log(this.num)
            })
        },
        data(){
            return{
                "searchContent":[],
                "n":[]
            }
        }
    }
</script>

<style scoped>
#main-body{
    /*padding:0;*/
    padding:0.54rem 0 0.52rem;
    height:100vh;
    overflow-y: hidden;
}
</style>