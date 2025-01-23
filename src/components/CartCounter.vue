<template>
  <div class="cart-counter">
    <span v-if="cartCount > 0" class="cart-badge">{{ cartCount }}</span>
  </div>
</template>

<script>
import { cartStore } from "@/store/store.js";

export default {
  computed: {
    cartCount() {
      return cartStore.getCartCount();
    }
  }
};
</script>

<style scoped>
.cart-counter {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right:190px;
  top: 42px;
  width: 10px;
  height: 10px;
  text-align: center;
  background-color: #333;
  border-radius: 100%;
  padding: 10px;
  color: white;
  font-size: 10px;
}

.cart-badge {
  font-weight: bold;
}
</style>
