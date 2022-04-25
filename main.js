const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    computed: {

    },
    methods: {
        updateCartById({id, add}) {
            add ? this.cart.push(id) : this.cart.pop()
        },
        emptyCart() {
            console.log('emptyCart', this.cart.length === 0)
            return this.cart.length === 0
        }
    }
})
