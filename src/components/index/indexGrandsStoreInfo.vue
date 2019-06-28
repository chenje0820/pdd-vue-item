<template>
    <div>
        <div class="grands-tit">
            <div class="logo-img">
                <img :src="indexGrandsStoreInfo.gLogo" alt="">
                <ul >
                    <li class="person-name">{{indexGrandsStoreInfo[0].gName}}</li>
                    <li class="accout">
                        <span v-for="L in indexGrandsStoreInfo[0].gTips">{{L}}</span>
                    </li>
                </ul>
            </div>
            <div class="enter-store"><span>进店逛逛</span><span>></span></div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "indexGrandsStoreInfo",
        props:["indexGrandsStoreInfo"]
    }
</script>

<style scoped>
    .grands-tit{
        height:0.66rem;
        margin:0 5px;
        justify-content: space-between;
    }
    .logo-img ,.grands-tit{
        display: flex;
        align-items: center;
    }
    .logo-img img{
        width:0.4rem;
        height:0.4rem;
        margin-left:5px;
        margin-right:5px;
        border:1px solid #f1f1f1;
        box-shadow: 5px 5px 5px #f1f1f1;
    }
    .person-name{
        font-weight: 600;
        color:#333333;
    }
    .accout span{
        color:#e1342a;
    }
    .enter-store{
        float:right;
        color:#9e9e9e;
    }
</style>