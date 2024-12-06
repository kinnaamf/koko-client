<template>
  <div>
    <Header />
    <div class="max-sm:h-[392px] max-sm:bg-center max-sm:relative w-screen h-screen bg-no-repeat bg-cover bg-[url('http://localhost:81/images/amps/bg.png')]">
      <h2 class="text-white uppercase text-7xl font-black absolute top-1/2 left-10">Amps</h2>
    </div>
    <div class="bg-footer-dark h-10 flex items-center text-white px-40 max-sm:bg-white" @click="showMe">
      <button class="flex gap-3 bg-white p-2 max-sm:bg-white">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" x="0" y="0" viewBox="0 0 32 32" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M6 10a4 4 0 0 0 0-8 4 4 0 0 0 0 8zm0-6a2 2 0 0 1 0 4 2 2 0 0 1 0-4zm20 8a4 4 0 0 0 0 8 4 4 0 0 0 0-8zm0 6a2 2 0 0 1 0-4 2 2 0 0 1 0 4zM6 22a4 4 0 0 0 0 8 4 4 0 0 0 0-8zm0 6a2 2 0 0 1 0-4 2 2 0 1 0 0 4zm6-23h17a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2zM3 15h17a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm26 12H12a1 1 0 0 1 0-2h17a1 1 0 0 1 0 2z" fill="#000000" opacity="1" data-original="#ffffff" class=""></path></g></svg>
        <span class="text-black max-sm:bg-white">FILTER</span>
      </button>
    </div>
    <div class="px-40 py-2 bg-[#232323] max-sm:px-5 flex gap-10 turn text-white uppercase max-sm:flex-col max-sm:justify-center max-sm:px-0 max-sm:w-[430px]">
      <!-- Фильтры -->
      <div class="flex flex-col">
        <h3 class="text-xl ml-5">Color</h3>
        <div class="flex gap-3 items-center">
          <input type="checkbox" name="bb" id="bb" @change="toggleFilter('color', 'Black and Brass')">
          <label for="bb">Black and Brass</label>
        </div>
        <div class="flex gap-3 items-center">
          <input type="checkbox" name="bg" id="bg" @change="toggleFilter('color', 'Black and Gold')">
          <label for="bg">Black and Gold</label>
        </div>
      </div>
      <div class="flex flex-col">
        <h3 class="text-xl ml-5">Type</h3>
        <div class="flex gap-3 items-center">
          <input type="checkbox" name="head" id="head" @change="toggleFilter('type', 'head')">
          <label for="head">Head</label>
        </div>
        <div class="flex gap-3 items-center">
          <input type="checkbox" name="combo" id="combo" @change="toggleFilter('type', 'combo')">
          <label for="combo">Combo</label>
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
        <input id="labels-range-input" type="range" v-model="priceRange" min="0" max="2000" class="w-full h-2 bg-[#363636] rounded-lg appearance-none cursor-pointer dark:bg-[#363636]">
        <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">Min ($ 50)</span>
        <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">$ 500</span>
        <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">$ 1000</span>
        <span class="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">Max ($ 2000)</span>
      </div>
    </div>
    <div class="grid grid-cols-3 text-white bg-neutral-700 max-sm:grid-cols-1">
      <div class="bg-neutral-700">
        <div class="pl-5 pt-4 gap-4 pr-16">
          <h2 class="text-2xl font-extrabold">POWERING YOUR SOUND, ELEVATING <br> YOUR PERFORMANCE.</h2>
          <p class="text-14px font-regular mt-3 leading-none">
            Your amplifier is the heartbeat of your performance, boosting your input and enhancing sound quality and volume. With various types and configurations available – Marshall caters to a diverse range of needs, from home practice to large venue performances.
          </p>
        </div>
      </div>
      <div v-for="(amp, index) in filteredAmps" :key="amp.id" class="bg-neutral-700 relative" @click="goToItem(amp)">
        <div v-if="index != 7" class="bg-neutral-700">
          <div>
            <img :src="getImagePath(amp.image)" :alt="amp.name" class="w-full h-[600px] object-cover" />
          </div>
          <div class="p-3">
            <h2 class="text-xl font-medium">{{ amp.name }}</h2>
            <h3 class="font-medium text-13px mt-1">{{ amp.price }}</h3>
          </div>
        </div>
      </div>
    </div>
    <ScrollButton/>
    <Footer />
  </div>
</template>

<script>
import { getItems } from "@/services/ApiService.js";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ScrollButton from "@/components/ScrollButton.vue";

export default {
  components: {
    Header,
    Footer,
    ScrollButton
  },
  data() {
    return {
      amps: [],
      filters: {
        color: [],
        price: [],
        rating: [],
        type: []
      },
      priceRange: 1000
    };
  },
  methods: {
    getImagePath(image) {
      return (`http://localhost:81/images/amps/${image}`);
    },
    goToItem(item) {
      this.$router.push({ path: `/amps/item/${item.id}`, params: { item } });
    },
    toggleFilter(filterType, value) {
      if (this.filters[filterType].includes(value)) {
        this.filters[filterType] = this.filters[filterType].filter(v => v !== value);
      } else {
        this.filters[filterType].push(value);
      }
    },
    loadItems() {
      getItems()
          .then(data => {
            console.log('Received items:', data); // Отладка
            this.amps = data;
          })
          .catch(error => {
            console.error('Error loading items:', error);
          });
    }
  },
  created() {
    this.loadItems();
  },
  computed: {
    filteredAmps() {
      let filtered = this.amps;

      // Проверка на наличие amps (если это массив)
      if (!Array.isArray(filtered)) {
        console.error('Expected amps to be an array, but got:', filtered);
        return [];
      }

      // Фильтрация по цвету
      if (this.filters.color && this.filters.color.length > 0) {
        filtered = filtered.filter(amp => this.filters.color.includes(amp.color));
      }

      // Фильтрация по рейтингу
      if (this.filters.rating && this.filters.rating.length > 0) {
        filtered = filtered.filter(amp => {
          const rating = parseFloat(amp.rating);

          if (this.filters.rating.includes('three-more')) {
            return rating >= 3;
          } else if (this.filters.rating.includes('three-less')) {
            return rating < 3;
          }

          return true; // если не включены фильтры, возвращаем всё
        });
      }

      // Фильтрация по типу
      if (this.filters.type && this.filters.type.length > 0) {
        filtered = filtered.filter(amp => this.filters.type.includes(amp.type));
      }

      // Фильтрация по цене
      if (this.priceRange !== undefined && this.priceRange !== null) {
        filtered = filtered.filter(amp => amp.price <= this.priceRange);
      }

      return filtered;
    }
  }

}
</script>

<style scoped>

</style>
