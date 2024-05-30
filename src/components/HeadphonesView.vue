<template>
  <div>
    <Header />
    <div class="max-sm:h-[392px] max-sm:bg-center max-sm:relative w-screen h-screen bg-no-repeat bg-cover bg-center bg-[url('https://s3-alpha-sig.figma.com/img/df5f/65f3/f1beeb4c1d6dd81ca799754a22aa1919?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZfjqZc~PdsfWvYotxAfUYv8LhT0U6GFVrdJbeZ2q3YAFmujWNli9SvuVy9ODHw1IrRkTc24FsM40v3DkpJKX~Zrq-ORVsDuruEDwzF6PsdOxrm4ilU67pMI95XhTLoIENWr09Sz417O3bK779T2CPdjNeGXq-fbLLkSR7iqxCGZoTzvJnj3hdCWOIJ1ZbtKbtHXSOxl0mTefLyF2UnKjwned8nersnAjkc4t8j0vMacbsVOXl-UnH0q8mUpYsBQiBFCbwHahkwJo3BWLJAdXnBiY2McwdD6cWZkWPc5zcWWjqMVOVc-fYk3B5U6u97yeqLLDY7AXYiklYlGPHDJD2w__')]">
      <h2 class="text-white uppercase text-6xl font-bold absolute top-1/2 left-10">Headphones</h2>
    </div>
    <div class="bg-footer-dark h-10 flex items-center justify-end text-white px-40 " @click="showMe">
      <button class="flex gap-3 bg-white p-2">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" x="0" y="0" viewBox="0 0 32 32" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M6 10a4 4 0 0 0 0-8 4 4 0 0 0 0 8zm0-6a2 2 0 0 1 0 4 2 2 0 0 1 0-4zm20 8a4 4 0 0 0 0 8 4 4 0 0 0 0-8zm0 6a2 2 0 0 1 0-4 2 2 0 0 1 0 4zM6 22a4 4 0 0 0 0 8 4 4 0 0 0 0-8zm0 6a2 2 0 0 1 0-4 2 2 0 1 0 0 4zm6-23h17a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2zM3 15h17a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm26 12H12a1 1 0 0 1 0-2h17a1 1 0 0 1 0 2z" fill="#000000" opacity="1" data-original="#ffffff" class=""></path></g></svg>
        <span class="text-black">FILTER</span>
      </button>
    </div>
    <div class="px-40 flex items-center justify-end py-2 bg-[#232323] turn">
      <form action="" class="text-right text-white uppercase">
        <div class="flex gap-20">
          <div class="flex flex-column justify-between">
            <h4 class="text-xl">Color</h4>
            <div class="flex gap-3">
              <label for="Black" class="text-sm font-bold">
                Black
                <input type="checkbox" id="black" name="black" @change="toggleFilter('color', 'Black')">
              </label>
              <label for="blackngold" class="text-sm font-bold">
                Black and Gold
                <input type="checkbox" id="blackngold" name="blackngold" @change="toggleFilter('color', 'Black and Gold')">
              </label>
              <label for="brown" class="text-sm font-bold">
                Brown
                <input type="checkbox" id="brown" name="brown" @change="toggleFilter('color', 'Brown')">
              </label>
              <label for="burgundy" class="text-sm font-bold">
                Burgundy
                <input type="checkbox" id="burgundy" name="burgundy" @change="toggleFilter('color', 'Burgundy')">
              </label>
            </div>
            <div class="flex gap-3 justify-end">
              <label for="white" class="text-sm font-bold">
                White
                <input type="checkbox" id="white" name="white" @change="toggleFilter('color', 'White')">
              </label>
              <label for="silver" class="text-sm font-bold">
                Silver
                <input type="checkbox" id="silver" name="silver" @change="toggleFilter('color', 'Silver')">
              </label>
              <label for="space" class="text-sm font-bold">
                Space
                <input type="checkbox" id="space" name="space" @change="toggleFilter('color', 'Space')">
              </label>
              <label for="cream" class="text-sm font-bold">
                Cream
                <input type="checkbox" id="cream" name="cream" @change="toggleFilter('color', 'Cream')">
              </label></div>
          </div>
          <div class="flex flex-column">
            <h4 class="text-xl">Type</h4>
            <label for="earbuds" class="text-sm font-bold">
              Earbuds
              <input type="checkbox" id="earbuds" name="earbuds" @change="toggleFilter('price', 'Earbuds')">
            </label>
            <label for="onear" class="text-sm font-bold">
              On-Ear
              <input type="checkbox" id="onear" name="onear" @change="toggleFilter('price', 'On-Ear')">
            </label>
          </div>
          <div class="flex flex-column">
            <h4 class="text-xl">Connection type</h4>
            <label for="wireless" class="text-sm font-bold">
              Bluetooth/Wireless
              <input type="checkbox" id="wireless" name="wireless" @change="toggleFilter('price', 'Bluetooth/Wireless')">
            </label>
            <label for="wire" class="text-sm font-bold">
              Wire/Mini-Jack 3.5mm
              <input type="checkbox" id="wire" name="wire" @change="toggleFilter('price', 'Wire/Mini-Jack 3.5mm')">
            </label>
          </div>
          <div class="flex flex-column">
            <h4 class="text-xl">Price</h4>
            <label for="descending" class="text-sm font-bold">
              Expensive first
              <input type="checkbox" id="descending" name="descending" @change="toggleFilter('price', 'descending')">
            </label>
            <label for="ascending" class="text-sm font-bold">
              Cheap first
              <input type="checkbox" id="ascending" name="ascending" @change="toggleFilter('price', 'ascending')">
            </label>
          </div>
          <div class="flex flex-column">
            <h4 class="text-xl">Rating</h4>
            <label for="3stars" class="text-sm font-bold">
              3 stars and more
              <input type="checkbox" id="3stars" name="3stars" @change="toggleFilter('rating', '3')">
            </label>
            <label for="4stars" class="text-sm font-bold">
              4 stars and more
              <input type="checkbox" id="4stars" name="4stars" @change="toggleFilter('rating', '4')">
            </label>
          </div>
        </div>
      </form>
    </div>
    <div class="grid grid-cols-3 max-sm:grid-cols-1 text-white bg-neutral-700 [&>*:nth-child(8)]:col-span-2 [&>*:nth-child(16)]:col-span-2">
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
      <div v-for="headphones in filteredHeadphones" :key="headphones.id" @click="goToItem(headphones)">
        <div>
          <img :src="getImagePath(headphones.image)" :alt="headphones.name" class="w-full h-[600px] object-cover" />
        </div>
        <div class="p-3">
          <h2 class="text-xl font-medium">{{ headphones.name }}</h2>
          <h3 class="font-medium text-13px mt-1">{{ headphones.price }}</h3>
        </div>
      </div>
    </div>
    <ScrollButton/>
    <Footer />
  </div>
</template>

<script>
import Headphones from '@/images/headphones/headphones.json'
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import header from "@/components/Header.vue";
import ScrollButton from "@/components/ScrollButton.vue"
export default {
  components: {
    Header,
    Footer,
    ScrollButton
  },
  data() {
    return {
      Headphones,
      filters: {
        color: [],
        price: [],
        rating: [],
        connectionType: [],
        type: []
      }
    };
  },
  computed: {
    filteredHeadphones() {
      let filtered = this.Headphones;

      if (this.filters.color.length > 0) {
        filtered = filtered.filter(headphones => this.filters.color.includes(headphones.color));
      }

      if(this.filters.connectionType.length > 0) {
        filtered = filtered.filter(headphones => this.filters.connectionType.includes(headphones.connectionType))
      }

      if(this.filters.type.length > 0) {
        filtered = filtered.filter(headphones => this.filters.type.includes(headphones.type))
      }

      if (this.filters.rating.length > 0) {
        filtered = filtered.filter(headphones => {
          const rating = parseFloat(headphones.rating);
          return this.filters.rating.includes('3stars') ? rating >= 3 : rating >= 4;
        });
      }

      return filtered;
    }
  },
  methods: {
    showMe() {
      document.querySelector('.turn').classList.toggle('hidden');
    },
    getImagePath(image) {
      return (`src/images/headphones/${image}`);
    },
    goToItem(item) {
      this.$router.push({path: `/headphones/item/${item.id}`, params: { item }})
    },
    toggleFilter(filterType, value) {
      if (this.filters[filterType].includes(value)) {
        this.filters[filterType] = this.filters[filterType].filter(v => v !== value);
      } else {
        this.filters[filterType] = [value];
      }
    }
  }
}
</script>

<style>

</style>