<template>
  <div>
    <Header />
    <div class="max-sm:h-[392px] max-sm:bg-center max-sm:relative w-screen h-screen bg-no-repeat bg-cover bg-center bg-[url('https://s3-alpha-sig.figma.com/img/c173/5350/e52d9cc33b976b60938e70d0f985de92?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HCOQK~mmCQdnoFJ54kBUeB44r6BvGrIzFaLmdQa2SfgvPfopTh45Ei0niASiwa11tpkWAdpsVAsRHyWJKI~oqBHQjuNPCMdGMaC64ZAyul4h4~Ou6TJ170paHnu8kPHZ9ZV8fhSHkbOS-INsfqfstnPqGLwsoOyKG2qxb35~TNUdVYKgZ81KgKKbslqsM1OAR9baOkmnti2Q6~rkNY9yn5ogriOlEXzYpIQKOfVsbP~yAK6-Ifr8C7kpIkc7i6Pk2sp3RHmtGTEETiIykEXfZRHnifcp5XEUqM47Fd0qjKs2VdSaxb6ebffcZbnuR7kISFcticMnFB-~TVhHS6bgrA__')]">
      <h2 class="text-white uppercase text-6xl font-bold absolute top-1/2 left-10">Cameras</h2>
    </div>
    <div class="bg-footer-dark h-10 flex items-center max-sm:bg-white justify-end text-white px-40 max-sm:bg-white max-sm:w-screen" @click="showMe">
      <button class="flex gap-3 bg-white p-2 max-sm:bg-white">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" x="0" y="0" viewBox="0 0 32 32" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M6 10a4 4 0 0 0 0-8 4 4 0 0 0 0 8zm0-6a2 2 0 0 1 0 4 2 2 0 0 1 0-4zm20 8a4 4 0 0 0 0 8 4 4 0 0 0 0-8zm0 6a2 2 0 0 1 0-4 2 2 0 0 1 0 4zM6 22a4 4 0 0 0 0 8 4 4 0 0 0 0-8zm0 6a2 2 0 0 1 0-4 2 2 0 1 0 0 4zm6-23h17a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2zM3 15h17a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm26 12H12a1 1 0 0 1 0-2h17a1 1 0 0 1 0 2z" fill="#000000" opacity="1" data-original="#ffffff" class=""></path></g></svg>
        <span class="text-black max-sm:bg-white">FILTER</span>
      </button>
    </div>
    <div class="px-40 py-2 bg-[#232323] max-sm:px-5 flex gap-10 turn text-white uppercase max-sm:flex-col max-sm:justify-center max-sm:px-0 max-sm:w-[430px]">
      <!-- -->
      <div class="flex flex-col">
        <h3 class="text-xl ml-5">Edition</h3>
        <div class="flex gap-3 items-center">
          <input type="checkbox" name="black" id="black" @change="toggleFilter('edition', 'black')">
          <label for="black">Black</label>
        </div>
        <div class="flex gap-3 items-center">
          <input type="checkbox" name="white" id="white" @change="toggleFilter('edition', 'white')">
          <label for="white">White</label>
        </div>
        <div class="flex gap-3 items-center">
          <input type="checkbox" name="creator" id="creator" @change="toggleFilter('edition', 'creator')">
          <label for="creator">Creator</label>
        </div>
      </div>
      <div class="flex flex-col">
        <h3 class="text-xl ml-5">Rating</h3>
        <div class="flex gap-3 items-center">
          <input type="checkbox" name="three-less" id="three-less" @change="toggleFilter('rating', 'three-less')">
          <label for="three-less">Less than 3 stars</label>
        </div>
        <div class="flex gap-3 items-center">
          <input type="checkbox" name="three-more" id="three-more" @change="toggleFilter('rating', 'three-more')">
          <label for="three-more">More than 3 stars</label>
        </div>
      </div>
      <div class="relative mb-6 w-[500px] max-sm:w-full">
        <h3 class="text-xl ml-5">Price</h3>
        <label for="labels-range-input" class="sr-only"></label>
        <input id="labels-range-input" type="range" v-model="priceRange" min="200" max="1000" class="w-full h-2 bg-[#363636] rounded-lg appearance-none cursor-pointer dark:bg-[#363636]">
        <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">Min ($ 200)</span>
        <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">$ 500</span>
        <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">$ 700</span>
        <span class="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">Max ($ 1000)</span>
      </div>
      <!-- -->
    </div>
    <div class="grid grid-cols-3 max-sm:grid-cols-1 text-white bg-neutral-700">
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
      <div v-for="(action, index) in filteredVideo" :key="action.id" @click="goToItem(action)" class="bg-neutral-700 relative">
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
import Action from '@/images/video/video.json'
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
      filters: {
        edition: [],
        price: [],
        rating: [],
      },
      priceRange: 1000
    };
  },
  computed: {
    filteredVideo() {
      let filtered = this.Action;

      if (this.filters.edition.length > 0) {
        filtered = filtered.filter(camera => this.filters.edition.includes(camera.edition));
      }

      if (this.filters.rating.length > 0) {
        filtered = filtered.filter(camera => {
          const rating = parseFloat(camera.rating);
          if (this.filters.rating.includes('three-more')) {
            return rating >= 3;
          } else if (this.filters.rating.includes('three-less')) {
            return rating < 3;
          }
        });
      }

      filtered = filtered.filter(camera => {
        return this.priceRange >= String(camera.price).substr(2);
      });

      return filtered;
    }
  },
  methods: {
    getImagePath(image) {
      return (`src/images/video/${image}`);
    },
    goToItem(item) {
      this.$router.push({ path: `/video/item/${item.id}`, params: { item } });
    },
    toggleFilter(filterType, value) {
      if (this.filters[filterType].includes(value)) {
        this.filters[filterType] = this.filters[filterType].filter(v => v !== value);
      } else {
        this.filters[filterType].push(value);
      }
    }
  }
}
</script>

<style>

</style>
