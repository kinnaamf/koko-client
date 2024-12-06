<template>
  <Header/>
  <div class="bg-dark-marsh px-40 uppercase text-white py-40 max-sm:p-0 max-sm:pt-20 max-sm:pb-8">
    <div>
      <h2 class="text-8xl font-bold max-sm:text-5xl max-sm:text-center">Audio Devices</h2>
    </div>
    <div class="flex flex-col gap-20 mt-20">
      <div class="flex justify-between max-sm:flex-col">
        <div>
          <a href="/#/cameras">
            <img src="http://localhost:81/images/categories/video/camera.png"
                 alt=""
                 class="w-1200px h-430px max-sm:w-[430] max-sm:h-[200px]" >
          </a>
        </div>
        <div class="flex flex-col gap-5">
          <a href="/#/cameras" class="text-right max-sm:text-left max-sm:bg-black max-sm:p-2">
            <h3 class="text-7xl font-bold max-sm:text-2xl">Cameras</h3>
            <h4 class="font-bold text-zinc-600 max-sm:text-sm">View all cameras page</h4>
          </a>
        </div>
      </div>
      <div class="flex max-sm:flex-col-reverse justify-between">
        <div class="flex flex-col gap-5">
          <a href="/#/video" class="text-left  max-sm:text-left max-sm:bg-black max-sm:p-2">
            <h3 class="text-7xl font-bold max-sm:text-2xl">Video Cameras</h3>
            <h4 class="font-bold text-zinc-600 max-sm:text-sm">EXPLORE ALL Video Cameras PAGE</h4>
          </a>
        </div>
        <div>
          <a href="/#/video">
            <img src="http://localhost:81/images/categories/video/video.png"
                 alt=""
                 class="w-1200px h-430px max-sm:w-[430] max-sm:h-[200px]" >
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