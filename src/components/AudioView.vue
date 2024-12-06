<template>
  <Header/>
  <div class="bg-dark-marsh px-40 max-sm:px-0 uppercase text-white py-40">
    <div>
      <h2 class="text-8xl font-bold max-sm:text-5xl max-sm:text-center">Audio Devices</h2>
    </div>
    <div class="flex flex-col gap-20 mt-20">
      <div class="flex justify-between">
        <div>
          <a href="/#/amps">
            <img src="http://localhost:81/images/categories/audio/amps.png"
                 alt=""
                 class="w-1200px h-430px max-sm:w-[200px] max-sm:h-[80px]" >
          </a>
        </div>
        <div class="flex flex-col gap-5 max-sm:p-3">
          <a href="/#/amps" class="text-right max-sm:text-left">
            <h3 class="text-7xl font-bold max-sm:text-2xl">Amps</h3>
            <h4 class="font-bold text-zinc-600 max-sm:text-sm">View all amps page</h4>
          </a>
        </div>
      </div>
      <div class="flex justify-between max-sm:p-3">
        <div class="flex flex-col gap-5 max-sm:text-left">
          <a href="/#/speakers" class="text-left">
            <h3 class="text-7xl font-bold max-sm:text-2xl">Speakers</h3>
            <h4 class="font-bold text-zinc-600 max-sm:text-sm">EXPLORE ALL SPEAKERS PAGE</h4>
          </a>
        </div>
        <div>
          <a href="/#/speakers">
            <img src="http://localhost:81/images/categories/audio/speakers.png"
                 alt=""
                 class="w-1200px h-430px max-sm:w-[200px] max-sm:h-[80px]" >
          </a>
        </div>
      </div>
      <div class="flex justify-between max-sm:p-3">
        <div>
          <a href="/#/headphones">
            <img src="http://localhost:81/images/categories/audio/headphones.png"
                 alt=""
                 class="w-1200px h-430px max-sm:w-[200px] max-sm:h-[80px]" >
          </a>
        </div>
        <div class="flex flex-col gap-5">
          <a href="/#/headphones" class="text-right">
            <h3 class="text-7xl font-bold max-sm:text-2xl">Headphones</h3>
            <h4 class="font-bold text-zinc-600 max-sm:text-sm">DIVE IN ALL HEADPHONES PAGE</h4>
          </a>
        </div>
      </div>
    </div>
  </div>
  <ScrollButton/>
  <Footer/>
</template>
<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
import ScrollButton from "@/components/ScrollButton.vue"

export default {
  components: {
    Header,
    Footer,
    ScrollButton
  }
}
</script>
<style scoped>

</style>