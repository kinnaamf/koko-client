import { reactive } from "vue";

export const cartStore = reactive({
    items: [],

    addToCart(item) {
        const existingItem = this.items.find(i => i.id === item.id);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            this.items.push({ ...item, quantity: 1 });
        }
    },

    getCartCount() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }
});
