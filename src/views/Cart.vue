<template>
    <div>
        <div id="main">
            <!--header-->
            <pdd-cart-header/>
            <!--content-->
            <!--使用data.shops传值之前，要做判断，因为data是异步加载的，第一次渲染的时候data里面是空的，获取的shops也是空的-->
            <pdd-cart-shop
                    @add = "addNum"
                    @minus = "minusNum"
                    @sCheck = "shopCheckAll"
                    @pCheck = "productSingleCheck"
                    v-if="data.shops"
                    :data = "data.shops"
            />
            <!--set结算按钮-->
            <pdd-cart-shop-set
                    :data = "data"
                    @cCheck = "cartCheckAll"
            />
        </div>
        <!--footer部分-->
    </div>
</template>

<script>
    import cartHeader from "../components/cart/cartHeader"
    import cartShop from "../components/cart/cartShop"
    import cartShopSet from "../components/cart/cartShopSet"
    export default {
        name: "Cart",
        components: {
            "pdd-cart-header":cartHeader,

            "pdd-cart-shop":cartShop,

            "pdd-cart-shop-set":cartShopSet
        },
        created(){
            this.$http.get("data/cart.json").then((data)=>{
                data = data.data
                this.data = data
                // console.log(this.data)
            }).catch((error)=>{
                console.log(error)
            })
        },
        data() {
            return {
                data: []
            }
        },
        methods:{
            //默认的全选中状态
            cartCheckAll(){
               let isChecked = this.data.checked;
               this.data.shops.forEach((shop,sid)=>{
                   shop.checked = isChecked;
                   shop.products.forEach((product,pid)=>{
                       product.checked = isChecked
                   })
               })
            },
            //
            shopCheckAll(sid){
                let isChecked = this.data.shops[sid].checked;
                this.data.shops[sid].products.forEach((product,pid)=>{
                    product.checked = isChecked
                })
                for(let i=0;i<this.data.shops.length;i++){
                    if(!this.data.shops[i].checked){
                        this.data.checked = false;
                        return
                    }
                    this.data.checked = true;

                }
            },

            //
            //有一个是false 全是false
            productSingleCheck(sid){
                for(let i=0;i<this.data.shops[sid].products.length;i++){
                    if(!this.data.shops[sid].products[i].checked){
                        this.data.shops[sid].checked = false;
                        this.data.checked = false;
                        return;
                    }
                }
                this.data.shops[sid].checked = true;
                for(let k=0;k<this.data.shops.length;k++){
                    if(!this.data.shops[k].checked){
                        this.data.checked = false;
                        return;
                    }
                    this.data.checked = true;
                }
            },

            addNum(sid,pid){
                this.data.shops[sid].products[pid].num++
            },
            minusNum(sid,pid){
                if(this.data.shops[sid].products[pid].num <=1){
                    this.data.shops[sid].products[pid].num = 1

                }else{
                    this.data.shops[sid].products[pid].num--
                }
            },
        }
    }
</script>

<style scoped>
#main{
    padding-top:0;
}
</style>
<!--https://www.cnblogs.com/woshidouzia/p/9284200.html-->