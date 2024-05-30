<template>
  <div>
    <Header />
    <div class="max-sm:h-[392px] max-sm:bg-center max-sm:relative w-screen h-screen bg-no-repeat bg-cover bg-center bg-[url('https://s3-alpha-sig.figma.com/img/0573/3111/3d2604981615f64b5044c22be4d17965?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SEoC7P8GrdKd8axINB3AepLs8mDfz73KxRMRlQUN1g2qiwheqrqt7rEcs2NBVfv2kOJoLeXnTOfaMD2Ue51JLPlDBsjIxIK6B9fL28jbIBOYgjyllnInmekgDhK0655YwWt5heq7bDj3Xw1RzXXZ0uz3udltTscbFSlYavuCwsQPAxiToO0qrNqu68lWhDP7SjZjc7ec3bSdpL4FyDHk-g7K8eJLe8Fz5K0o3nh4hzt~t1LGlUyovdKv14F6ZuGXDhdu6ZpYrjUgtW69Sh-gmt5-oGzM7nWDUW98PpFryztkYk99P0MUB1pFeWdO8YoPEujR0PmYA~W1-lElMXhbpw__')]">
      <h2 class="text-white uppercase text-6xl font-bold absolute top-1/2 left-10">Cameras</h2>
    </div>
    <div class="bg-footer-dark h-10 flex items-center justify-end text-white px-40 " @click="showMe">
      <button class="flex gap-3 bg-white p-2">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" x="0" y="0" viewBox="0 0 32 32" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M6 10a4 4 0 0 0 0-8 4 4 0 0 0 0 8zm0-6a2 2 0 0 1 0 4 2 2 0 0 1 0-4zm20 8a4 4 0 0 0 0 8 4 4 0 0 0 0-8zm0 6a2 2 0 0 1 0-4 2 2 0 0 1 0 4zM6 22a4 4 0 0 0 0 8 4 4 0 0 0 0-8zm0 6a2 2 0 0 1 0-4 2 2 0 1 0 0 4zm6-23h17a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2zM3 15h17a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm26 12H12a1 1 0 0 1 0-2h17a1 1 0 0 1 0 2z" fill="#000000" opacity="1" data-original="#ffffff" class=""></path></g></svg>
        <span class="text-black">FILTER</span>
      </button>
    </div>
    <div class="grid grid-cols-3 max-sm:grid-cols-1 max-sm:[&>*:nth-child(7)]:col-span-1 text-white [&>*:nth-child(7)]:col-span-2 [&>*:nth-child(7)]:pointer-events-none bg-neutral-700">
      <div class="bg-neutral-700">
        <div class="pl-5 pt-4 gap-4 pr-32">
          <h2 class="text-2xl font-extrabold">
            EXPLORE THE DIVERSE WORLD OF
            MARSHALL HEADPHONES TO FIND
            YOUR IDEAL MATCH.
          </h2>
          <p class="text-14px font-regular mt-3 leading-none">
            Whether you lean towards wireless convenience, traditional wired setups, or immersive noise cancellation, discover the perfect pair that suits your preferences. Your music, your way.
          </p>
        </div>
      </div>
      <div v-for="(action, index) in Action" :key="action.id" @click="goToItem(action)" class="bg-neutral-700 relative">
        <div>
          <img :src="getImagePath(action.image)" :alt="action.name" class="w-full h-[600px] object-cover" />
        </div>
        <div class="p-3">
          <h2 class="text-xl font-medium">{{ action.name }}</h2>
          <h3 class="font-medium text-13px mt-1">{{ action.price }}</h3>
        </div>
      </div>
    </div>
    <ScrollButton/>
    <Footer />
  </div>
</template>

<script>
import Action from '@/images/videocameras/video.json'
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ScrollButton from "@/components/ScrollButton.vue"
export default {
  components: {
    Header,
    Footer,
    ScrollButton
  },
  data() {
    return {
      Action,

    };
  },
  methods: {
    getImagePath(image) {
      return (`src/images/videocameras/${image}`);
    },
    goToItem(item) {
      this.$router.push({ path: `/action-cameras/item/${item.id}`, params: { item } });
    }
  }

}
</script>

<style>

</style>
