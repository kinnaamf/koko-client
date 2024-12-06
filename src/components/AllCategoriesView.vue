  <template>
  <Header/>
  <div class="bg-dark-marsh">
    <div class="flex flex-col py-20 gap-20 max-sm:gap-10">
      <div class="flex text-white px-40 max-sm:px-0 max-sm:gap-0 text-nowrap items-center gap-80">
        <div class="flex items-center max-sm:flex-col max-sm:items-start">
          <div>
            <a href="/#/audio-devices">
              <img src="http://localhost:81/images/categories/audio.png"
                   alt="No image found" class="w-[1200px] h-[600px] max-sm:w-[430px] max-sm:h-[272px] max-sm:object-contain z-50">
            </a>
          </div>
          <div class="rotate-90 max-sm:rotate-0">
            <a href="/#/audio-devices" class="uppercase max-sm:relative max-sm:bottom-3 px-4 text-7xl max-sm:text-2xl bg-black max-sm:px-36 max-sm:py-2 max-sm:text-center max-sm:font-bold">Audio Devices</a>
          </div>
        </div>
      </div>
      <div class="flex text-white px-40 max-sm:px-0 max-sm:gap-0 text-nowrap items-center">
        <div class="flex items-center max-sm:flex-col-reverse max-sm:items-start">
          <div class="rotate-90 max-sm:rotate-0">
            <a href="/#/video-devices" class="uppercase max-sm:relative max-sm:bottom-3 px-4 text-7xl max-sm:text-2xl bg-black max-sm:px-36 max-sm:py-2 max-sm:text-center max-sm:font-bold">Video Devices</a>
          </div>
          <div>
            <a href="/#/video-devices">
              <img src="http://localhost:81/images/categories/video.png"
                   alt="" class="w-[1200px] h-[600px] max-sm:w-[430px] max-sm:h-[272px]">
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  <Footer/>
</template>
<script>
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>
<style scoped>

</style>