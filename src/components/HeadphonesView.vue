<template>
  <div>
    <Header />
    <div class="max-sm:h-[392px] max-sm:bg-center max-sm:relative w-screen h-screen bg-no-repeat bg-cover bg-center bg-[url('http://localhost:81/images/headphones/bg.png')]">
      <h2 class="text-white uppercase text-7xl font-black absolute top-1/2 left-10">Headphones</h2>
    </div>
    <div class="bg-footer-dark h-10 flex items-center justify-end text-white px-40 " @click="showMe">
      <button class="flex gap-3 bg-white p-2">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" x="0" y="0" viewBox="0 0 32 32" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M6 10a4 4 0 0 0 0-8 4 4 0 0 0 0 8zm0-6a2 2 0 0 1 0 4 2 2 0 0 1 0-4zm20 8a4 4 0 0 0 0 8 4 4 0 0 0 0-8zm0 6a2 2 0 0 1 0-4 2 2 0 0 1 0 4zM6 22a4 4 0 0 0 0 8 4 4 0 0 0 0-8zm0 6a2 2 0 0 1 0-4 2 2 0 1 0 0 4zm6-23h17a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2zM3 15h17a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm26 12H12a1 1 0 0 1 0-2h17a1 1 0 0 1 0 2z" fill="#000000" opacity="1" data-original="#ffffff" class=""></path></g></svg>
        <span class="text-black max-sm:bg-white">FILTER</span>
      </button>
    </div>
    <div class="px-40 py-2 bg-[#232323] max-sm:px-5 flex gap-10 turn text-white uppercase max-sm:flex-col max-sm:justify-center max-sm:px-0 max-sm:w-[430px]">
      <!-- -->
      <div class="flex items-center gap-2">
        <div class="flex flex-col">
          <h3 class="text-xl ml-5">Color</h3>
          <div class="flex gap-3 items-center">
            <input type="checkbox" name="black" id="black" @change="toggleFilter('color', 'Black')">
            <label for="black">Black</label>
          </div>
          <div class="flex gap-3 items-center">
            <input type="checkbox" name="brown" id="brown" @change="toggleFilter('color', 'Brown')">
            <label for="brown">Brown</label>
          </div>
          <div class="flex gap-3 items-center">
            <input type="checkbox" name="white" id="white" @change="toggleFilter('color', 'White')">
            <label for="white">White</label>
          </div>
          <div class="flex gap-3 items-center">
            <input type="checkbox" name="silver" id="silver" @change="toggleFilter('color', 'Silver')">
            <label for="silver">Silver</label>
          </div>
      </div>
        <div>
          <div class="flex gap-3 items-center">
            <input type="checkbox" name="cream" id="cream" @change="toggleFilter('color', 'Cream')">
            <label for="cream">Cream</label>
          </div>
          <div class="flex gap-3 items-center">
            <input type="checkbox" name="space" id="space" @change="toggleFilter('color', 'Space')">
            <label for="space">Space</label>
          </div>
          <div class="flex gap-3 items-center">
            <input type="checkbox" name="burgundy" id="burgundy" @change="toggleFilter('color', 'Burgundy')">
            <label for="burgundy">Burgundy</label>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <h3 class="text-xl ml-5">Type</h3>
        <div class="flex gap-3 items-center">
          <input type="checkbox" name="onear" id="onear" @change="toggleFilter('type', 'On-Ear')">
          <label for="onear">On-Ear</label>
        </div>
        <div class="flex gap-3 items-center">
          <input type="checkbox" name="earbuds" id="earbuds" @change="toggleFilter('type', 'Earbuds')">
          <label for="earbuds">Earbuds</label>
        </div>
      </div>
      <div class="flex flex-col">
        <h3 class="text-xl ml-5">Connection Type</h3>
        <div class="flex gap-3 items-center">
          <input type="checkbox" name="onear" id="onear" @change="toggleFilter('connectionType', 'On-Ear')">
          <label for="onear">Bluetooth/Wireless</label>
        </div>
        <div class="flex gap-3 items-center">
          <input type="checkbox" name="wire" id="wire" @change="toggleFilter('connectionType', 'Wire/Mini-Jack 3.5mm')">
          <label for="wire">Wire/Mini-Jack 3.5mm</label>
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
        <input id="labels-range-input" type="range" v-model="priceRange" min="50" max="800" class="w-full h-2 bg-[#363636] rounded-lg appearance-none cursor-pointer dark:bg-[#363636]">
        <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">Min ($ 50)</span>
        <span class="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">Max ($ 800)</span>
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
// import Headphones from 'http://localhost/koko/images/headphones/headphones.json'
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
      Headphones,
      filters: {
        color: [],
        price: [],
        rating: [],
        connectionType: [],
        type: []
      },
      priceRange: 500
    };
  },
  computed: {
    filteredHeadphones() {
      let filtered = this.Headphones;

      if (this.filters.color.length > 0) {
        filtered = filtered.filter(headphones => this.filters.color.includes(headphones.color));
      }

      if (this.filters.type.length > 0) {
        filtered = filtered.filter(headphones => this.filters.type.includes(headphones.type));
      }

      if (this.filters.connectionType.length > 0) {
        filtered = filtered.filter(headphones => this.filters.connectionType.includes(headphones.connectionType));
      }

      if (this.filters.rating.length > 0) {
        filtered = filtered.filter(headphones => {
          const rating = parseFloat(headphones.rating);
          if (this.filters.rating.includes('three-more')) {
            return rating >= 3;
          } else if (this.filters.rating.includes('three-less')) {
            return rating < 3;
          }
        });
      }

      filtered = filtered.filter(headphones => {
        return this.priceRange >= String(headphones.price).substr(2);
      });

      return filtered;
    }
  },
  methods: {
    showMe() {
      document.querySelector('.turn').classList.toggle('hidden');
    },
    getImagePath(image) {
      return (`http://localhost/koko/images/headphones/${image}`);
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
input[type="checkbox"] {
  border: 1px solid #4E4E4E;
  border-radius: 2px;
  width: 20px;
  height: 20px;
  appearance: none;
  background-color: #363636;
}
</style>