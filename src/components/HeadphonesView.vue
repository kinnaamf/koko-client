<template>
  <div>
    <Header />
    <div class="w-screen h-screen bg-no-repeat bg-cover bg-center bg-[url('https://s3-alpha-sig.figma.com/img/df5f/65f3/f1beeb4c1d6dd81ca799754a22aa1919?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZfjqZc~PdsfWvYotxAfUYv8LhT0U6GFVrdJbeZ2q3YAFmujWNli9SvuVy9ODHw1IrRkTc24FsM40v3DkpJKX~Zrq-ORVsDuruEDwzF6PsdOxrm4ilU67pMI95XhTLoIENWr09Sz417O3bK779T2CPdjNeGXq-fbLLkSR7iqxCGZoTzvJnj3hdCWOIJ1ZbtKbtHXSOxl0mTefLyF2UnKjwned8nersnAjkc4t8j0vMacbsVOXl-UnH0q8mUpYsBQiBFCbwHahkwJo3BWLJAdXnBiY2McwdD6cWZkWPc5zcWWjqMVOVc-fYk3B5U6u97yeqLLDY7AXYiklYlGPHDJD2w__')]">
      <h2 class="text-white uppercase text-6xl font-bold absolute top-1/2 left-10">Headphones</h2>
    </div>
    <div class="bg-footer-dark h-10"></div>
    <div class="grid grid-cols-3 text-white bg-neutral-700 [&>*:nth-child(8)]:col-span-2 [&>*:nth-child(16)]:col-span-2">
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
      <div v-for="headphones in Headphones" :key="headphones.id">
        <div>
          <img :src="getImagePath(headphones.image)" :alt="headphones.name" class="w-full h-[600px] object-cover" />
        </div>
        <div class="p-3">
          <h2 class="text-xl font-medium">{{ headphones.name }}</h2>
          <h3 class="font-medium text-13px mt-1">{{ headphones.price }}</h3>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Headphones from '@/images/headphones/headphones.json'
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      Headphones,
    };
  },
  methods: {
    getImagePath(image) {
      return (`src/images/headphones/${image}`);
    }
  }

}
</script>

<style>

</style>
