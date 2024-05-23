<template>
  <div>
    <Header />
    <div class="w-screen h-screen bg-no-repeat bg-cover bg-[url('https://s3-alpha-sig.figma.com/img/c173/5350/e52d9cc33b976b60938e70d0f985de92?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZU8Ac6iXRh-Qd~ZfkpAbmA~IwgdiLK9-ttV5g3zqXyqh5~Fmu5GgC5pss3zr4-VXwQ35j-KShicJ6DacddsI8Ys0sE0jN3l~FzbVMKC1d1IumWwaG7OAnd3qHopl2VgFlE52Hb1eDPcoVses2CmKlFtRwCOs6pXeE-K~V6ddzZD2yqcZm1ZG8dvj-Y2uC~nVYiAkgHqW--JrDaMngWSljApc6U-ZzRckbO0euHoIkfggT2p117ZmZYXc5MvGkMHvprtXfgw0lMueycVksDpeiD5zILoSF2POTzwWL4Cty9y3Eh00hxFEGTpX7vNFig8kJNHEeqbtl6eslsx0qXnEKA__')]">
      <h2 class="text-white uppercase text-6xl font-bold absolute top-1/2 left-10">Action Cameras</h2>
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
          <div class="bg-neutral-700">
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
    </div>
    <Footer />
  </div>
</template>

<script>
import Cameras from '@/images/videocameras/video.json'
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
      return (`src/images/videocameras/${image}`);
    }
  }

}
</script>

<style>

</style>
