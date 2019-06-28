<template>
    <div id="main">
        <pdd-index-search/>
    </div>
</template>

<script>
    import indexSearch from '../components/index/indexSearch'
    export default {
        name: "Login",
        components:{
            'pdd-index-search':indexSearch,
        }
    }
</script>

<style scoped>
#main{
    bacground-color:white;
}
</style>