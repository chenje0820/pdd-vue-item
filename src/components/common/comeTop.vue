<template>
    <a href="#">
        <div class="come-top">
            <div class="come-top-btn"><span class="iconfont icon-youjiantou-copy"></span><p class="Top">顶部</p></div>
        </div>
    </a>
</template>

<script>
    export default {
        name: "indexComeTop",
        mounted () {
            window.addEventListener('scroll', this.scrollToTop)
        },
        methods:{
            scrollToTop(el) {
                let topBtn = document.querySelector('.come-top');
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                let browserHeight = window.outerHeight;
                if (scrollTop > browserHeight) {
                    topBtn.style.display = 'block';

                } else {
                    topBtn.style.display = 'none';
                }
            },
        },
        // 离开该页面需要移除这个监听的事件，不然会报错;
        destroyed () {
            window.removeEventListener('scroll', this.scrollToTop);
        }
    }
</script>

<style scoped>
    .come-top{
        position:fixed;
        right:0.1rem;
        bottom:.76rem;
        color:#666;
        font-size:0.12rem;
        z-index:20;

    }
    .come-top-btn{
        width:0.42rem;
        height:0.42rem;
        text-align: center;
        background-color:white;
        border-radius: 50%;
        border:1px solid #fafafa;
    }

</style>