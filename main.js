const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Socks',
            brand: 'Vue Mastery',
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50, onSale: true },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0, onSale: false },
            ],
            activeVariantIndex: 0
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateVariantByIndex(index) {
            if (index !== this.activeVariantIndex) {
                this.activeVariantIndex = index   
            }
        }
    },
    computed: {
        title(){
            return `${this.brand} ${this.product}`
        },
        variantImage(){
            return this.variants[this.activeVariantIndex].image
        },
        inStock(){
            return this.variants[this.activeVariantIndex].quantity > 0
        },
        saleMessage() {
            return `${this.title} is on sale!` 
        },
        onSale() {
            return this.variants[this.activeVariantIndex].onSale && this.inStock
        }
    }
})
