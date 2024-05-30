import { reactive } from 'vue';

export const cartStore = reactive({
    items: JSON.parse(localStorage.getItem('cart')) || [],

    addToCart(item) {
        const existingItem = this.items.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            this.items.push({ ...item, quantity: 1 });
        }
        localStorage.setItem('cart', JSON.stringify(this.items));
    },

    get totalItems() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    },
});
