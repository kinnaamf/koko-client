<template>
<router-view></router-view>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import HeaderC from "@/components/HeaderC.vue";
import CartView from "@/components/CartView.vue";
export default {
  components: {
    Header,
    Footer,
    HeaderC,
    CartView
  }
}
</script>

<style>

</style>


