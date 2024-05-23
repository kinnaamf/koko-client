<template>
  <div>
    <Header />
    <div class="w-screen h-screen bg-no-repeat bg-cover bg-center bg-[url('https://s3-alpha-sig.figma.com/img/0573/3111/3d2604981615f64b5044c22be4d17965?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SEoC7P8GrdKd8axINB3AepLs8mDfz73KxRMRlQUN1g2qiwheqrqt7rEcs2NBVfv2kOJoLeXnTOfaMD2Ue51JLPlDBsjIxIK6B9fL28jbIBOYgjyllnInmekgDhK0655YwWt5heq7bDj3Xw1RzXXZ0uz3udltTscbFSlYavuCwsQPAxiToO0qrNqu68lWhDP7SjZjc7ec3bSdpL4FyDHk-g7K8eJLe8Fz5K0o3nh4hzt~t1LGlUyovdKv14F6ZuGXDhdu6ZpYrjUgtW69Sh-gmt5-oGzM7nWDUW98PpFryztkYk99P0MUB1pFeWdO8YoPEujR0PmYA~W1-lElMXhbpw__')]">
      <h2 class="text-white uppercase text-6xl font-bold absolute top-1/2 left-10">Cameras</h2>
    </div>
    <div class="bg-footer-dark h-10"></div>
    <div class="grid grid-cols-3 text-white [&>*:nth-child(7)]:col-span-2 bg-neutral-700">
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
      <div v-for="(camera, index) in Cameras" :key="camera.id" class="bg-neutral-700 relative">
        <div v-if="(index !=7)">
            <div>
              <img :src="getImagePath(camera.image)" :alt="camera.name" class="w-full h-[600px] object-cover" />
            </div>
            <div class="p-3">
              <h2 class="text-xl font-medium">{{ camera.name }}</h2>
              <h3 class="font-medium text-13px mt-1">{{ camera.price }}</h3>
            </div>
          </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Cameras from '@/images/cameras/cameras.json'
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      Cameras,
    };
  },
  methods: {
    getImagePath(image) {
      return (`src/images/cameras/${image}`);
    }
  }

}
</script>

<style>

</style>
