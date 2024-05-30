<template>
  <button @click="scrollToTop" class="scroll-top-button position-fixed bottom-5 w-[40px] h-[40px] right-5 bg-zinc-600 hover:bg-zinc-400 text-white rounded-full rotate-180" title="goUp">
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
      <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm0 4.727a.889.889 0 0 1 .883.883v10.11l3.78-3.782a.883.883 0 1 1 1.248 1.247l-5.614 5.613a.892.892 0 0 1-1.247 0L6.089 12.985a.883.883 0 1 1 1.248-1.247l3.78 3.782V5.61a.889.889 0 0 1 .883-.883z"/>
    </svg>
  </button>
</template>

<script>
export default {
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollTopButton = document.querySelector('.scroll-top-button');
      if (window.pageYOffset > 50) {
        scrollTopButton.style.display = 'block';
      } else {
        scrollTopButton.style.display = 'none';
      }
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
}
</script>

<style>

</style>
