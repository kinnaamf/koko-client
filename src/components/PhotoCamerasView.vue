<template>
  <Header></Header>

  <!-- Заголовок и фон -->
  <div class="max-sm:h-[392px] max-sm:bg-center max-sm:relative
              bg-no-repeat bg-cover bg-[url('http://localhost:81/images/video/bg.png')]
              w-screen h-screen">
    <h2 class="text-white uppercase text-7xl font-black absolute top-1/2 left-10">Photo Cameras</h2>
  </div>

  <!-- Кнопка Filters -->
  <div class="flex justify-start pl-24 bg-dark-marsh">
    <button
        @click="toggleFilters"
        class="bg-neutral-300 text-black font-medium uppercase flex items-center gap-2 px-4 py-2 shadow-md hover:bg-neutral-400 transition">
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" x="0" y="0" viewBox="0 0 32 32" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M6 10a4 4 0 0 0 0-8 4 4 0 0 0 0 8zm0-6a2 2 0 0 1 0 4 2 2 0 0 1 0-4zm20 8a4 4 0 0 0 0 8 4 4 0 0 0 0-8zm0 6a2 2 0 0 1 0-4 2 2 0 0 1 0 4zM6 22a4 4 0 0 0 0 8 4 4 0 0 0 0-8zm0 6a2 2 0 0 1 0-4 2 2 0 1 0 0 4zm6-23h17a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2zM3 15h17a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm26 12H12a1 1 0 0 1 0-2h17a1 1 0 0 1 0 2z" fill="#000000" opacity="1" data-original="#ffffff" class=""></path></g></svg>
      Filters
    </button>
  </div>

  <!-- Фильтры -->
  <div v-show="showFilters" class="bg-[#383434] text-white p-4 transition-all duration-300 ease-in-out">
    <div class="flex flex-col sm:flex-row gap-20">
      <!-- Фильтр по цене -->
      <div class="flex flex-col gap-2 w-full sm:w-1/3">
        <label for="price" class="text-lg font-bold">Price Range</label>
        <div id="price-range" class="w-full h-2 my-4"></div>
        <div class="flex gap-4 mt-2">
          <input type="number" v-model="filters.minPrice" class="w-1/2 p-2 text-black" :max="filters.maxPrice" />
          <input type="number" v-model="filters.maxPrice" class="w-1/2 p-2 text-black" :min="filters.minPrice" />
        </div>
        <p class="text-sm mt-2">Price: ${{ filters.minPrice }} - ${{ filters.maxPrice }}</p>
      </div>


    </div>
  </div>

  <!-- Список усилителей -->
  <div v-if="loading" class="text-white text-center py-10">Loading...</div>
  <div v-else class="bg-[#383434] text-white grid grid-cols-3 gap-4 p-4">
    <div v-for="camera in filteredCameras" :key="camera.id" class="camera-item cursor-pointer bg-[#2e2e2e] rounded-lg p-4" @click="goToItem(camera)">
      <img :src="'http://localhost:81/images/' + camera.image" :alt="camera.name" class="w-full h-auto rounded-md" />
      <div class="flex flex-col gap-4 p-4">
        <h2 class="text-l font-bold">{{ camera.name }}</h2>
        <p class="text-l font-bold">Price: {{ camera.price }}</p>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";

export default {
  components: { Footer, Header },
  data() {
    return {
      cameras: [],
      loading: true,
      showFilters: false,
      filters: {
        minPrice: 0,
        maxPrice: 2000,
        color: [],
        type: [],
      },
    };
  },
  mounted() {
    this.fetchCamerasData();
    this.initPriceRangeSlider();
  },
  computed: {
    filteredCameras() {
      return this.cameras.filter(camera => {
        const priceMatch =
            parseFloat(camera.price.replace('$', '').replace(',', '')) >= this.filters.minPrice &&
            parseFloat(camera.price.replace('$', '').replace(',', '')) <= this.filters.maxPrice;

        const colorMatch = this.filters.color.length === 0 || this.filters.color.includes(camera.color);

        return priceMatch && colorMatch;
      });
    },
  },
  methods: {
    async fetchCamerasData() {
      try {
        const response = await fetch('http://localhost:81/cameras.php');
        if (response.ok) {
          const data = await response.json();
          this.cameras = data;
        } else {
          console.error('Failed to load data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        this.loading = false;
      }
    },

    initPriceRangeSlider() {
      const slider = document.getElementById("price-range");
      noUiSlider.create(slider, {
        start: [this.filters.minPrice, this.filters.maxPrice],
        connect: true,
        range: {
          min: 0,
          max: 2000,
        },
        step: 10,
      });

      slider.noUiSlider.on('update', (values) => {
        this.filters.minPrice = parseInt(values[0]);
        this.filters.maxPrice = parseInt(values[1]);
      });
    },

    toggleFilters() {
      this.showFilters = !this.showFilters;
    },

    goToItem(item) {
      localStorage.setItem('selected item', JSON.stringify(item));

      this.$router.push({path: `/video/item/${item.id}`, params: { item }})
    }
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

* {
  font-family: 'Roboto', sans-serif;
}

.camera-item img {
  max-width: 100%;
  height: auto;
}

.camera-item {
  background-color: #2e2e2e;
  border-radius: 10px;
}

input[type="checkbox"]:checked {
  background-color: white;
}

input[type="checkbox"] {
  accent-color: #fff;
}

.nouislider {
  background: #ddd;
  border-radius: 10px;
}

.nouislider .noUi-connect {
  background: #4caf50;
}
</style>