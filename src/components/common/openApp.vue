<template>
    <div class="open-app">
        <div >在App打开</div>
        <span>></span>
    </div>
</template>

<script>
    export default {
        name: "openApp"
    }
</script>

<style scoped>
    .open-app{
        position:fixed;
        top:0.5rem;
        right:0;
        display: flex;
        align-items: center;
        justify-content: center;
        width:0.9rem;
        height:0.32rem;
        color:white;
        background-color:#e02e24;
        line-height:0.32rem;
        font-size:0.13rem;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        z-index:100;
    }
</style>