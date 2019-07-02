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
            //店铺选中的时候，
            shopCheckAll(sid){
                let isChecked = this.data.shops[sid].checked;
                this.data.shops[sid].products.forEach((product,pid)=>{
                    product.checked = isChecked
                })
                this.data.checked = isChecked

            },

            //店铺选中状态跟随商品选中状态变化
            //有一个是false 全是false
            productSingleCheck(sid){
                let isChecked = this.data.shops.every((shop,sid,arr)=>{
                    let checked = shop.products.every((product,pid,arr)=>{
                        return product.checked == true
                    })
                    shop.checked = checked
                    return checked
                })
                this.data.checked = isChecked
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