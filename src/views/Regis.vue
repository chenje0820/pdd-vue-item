<template>
    <div id="main">
        <div class="regis-header flex">
            <div class="dire flex">
                <a href="/index"><</a>
                <div class="signs">快速注册</div>
            </div>
            <div>帮助</div>
        </div>
       <div class="regis-form">
            <div class="regis-tips flex">
                <input type="text" placeholder="请输入手机号">
                <span class="btns delete-btn"></span>
            </div>
           <div class="regis-tips flex">
               <input type="text" placeholder="请输入手机号">
               <span class="btns">获取验证码</span>
           </div>
           <button >同意协议并注册</button>
           <div class="regis-xieyi-tips">阅读并同意相关条例</div>
       </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Swiper from "swiper"
    // import indexHeader from "../components/index/indexHeader"

    export default {
        name: 'index',
        components: {
            // "pdd-index-header":indexHeader,

        },
    }
</script>

<style scoped>
    #main{
        width:100%;
        height:100%;
        background-color:white;
        padding:0 0.08rem;
    }
    .dire{
        align-items: center;
    }
    .regis-header{
        line-height:0.56rem;
        justify-content: space-between;
        align-items: center;
        font-size:0.18rem;
    }
    .signs{
        margin-left:0.1rem;
    }

    .regis-tips{
        margin:0.2rem 0;
    }


    .regis-form{
        padding-top:0.5rem;
    }
    .regis-tips{
        line-height:0.42rem;
        border-bottom:1px solid orangered;
        justify-content: space-between;
        padding-right: 0.1rem;
    }
    .regis-tips input{
        display:inline-block;
        line-height:0.2rem;
        width: 70%;
        border:0;
        outline: none;
    }
    .btns{
        width: 30%;
        text-align: right;
    }
    .delete-btn{
        width:0.2rem;
        height:0.2rem;
        background-color:blue;
        padding-right:0.05rem;
    }
    button{
        width:100%;
        line-height:0.4rem;
        margin-top:0.3rem;
        outline: none;
        border:0;
        border-radius:0.2rem;
        color:white;
        font-size:0.18rem;
        background-color:rgba(255,115,76,.8);
    }
    .regis-xieyi-tips {
        margin-top: 0.12rem;
        padding-left: 0.2rem;
        color:gainsboro;
    }

</style>
