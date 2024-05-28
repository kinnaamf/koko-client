<template>
  <div>
    <Header />
    <div class="max-sm:h-[392px] max-sm:bg-center max-sm:relative w-screen h-screen bg-no-repeat bg-cover bg-[url('https://s3-alpha-sig.figma.com/img/910d/85b8/edf03fa17303a30fcc69cd9edf6cbc6a?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pxQXTgKOcolR1TucDuq3gltuNC15yf7MhIVFC1jGsOeVubkg25pyvgwll9lth2BQAX4zxhJhxBjDndqT~POh5DxWWWI2pzAhWGy9eWzOVpuLWTOIt45apdEM49d-rF4BJ9o31NuswrvzqwHAV5YWrrGEhrKsi4syg3irAmOhBo0KbZ0jK93fx6qfuc5l5NgdpzBAErv-Qpuw91kXXMvUw4ZkoWKFjUUe0Md-Xf7SW4ezEXfUnvhRjHrdiptUBvmxVZLkdGJ~jq6Uv8gC4cWfPzxbYVlT6llMrOPFtvfD8HfuqNNwlgcKt8Yuw3vabCLQ7-JxOgk4QWhiWlgURvMhwg__')]">
      <h2 class="text-white uppercase text-6xl font-bold absolute top-1/2 left-10">Amps</h2>
    </div>
    <div class="bg-footer-dark h-10 flex items-center justify-end text-white px-40">
      <button class="flex gap-3 bg-white p-2">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" x="0" y="0" viewBox="0 0 32 32" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M6 10a4 4 0 0 0 0-8 4 4 0 0 0 0 8zm0-6a2 2 0 0 1 0 4 2 2 0 0 1 0-4zm20 8a4 4 0 0 0 0 8 4 4 0 0 0 0-8zm0 6a2 2 0 0 1 0-4 2 2 0 0 1 0 4zM6 22a4 4 0 0 0 0 8 4 4 0 0 0 0-8zm0 6a2 2 0 0 1 0-4 2 2 0 0 1 0 4zm6-23h17a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2zM3 15h17a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm26 12H12a1 1 0 0 1 0-2h17a1 1 0 0 1 0 2z" fill="#000000" opacity="1" data-original="#ffffff" class=""></path></g></svg>
        <span class="text-black">FILTER</span>
      </button>
    </div>
    <div class="px-40 flex items-center justify-end py-2 bg-[#232323]">
      <form action="" class="text-right  text-white uppercase">
        <div class="">
          <div class="flex flex-column">
            <h4 class="text-xl">Color</h4>
            <label for="blackngold">
              Black and Gold
              <input type="checkbox" id="blackngold" name="blackngold" @change="handleColorFilter">
            </label>
            <label for="blacknbrass">
              Black and Brass
              <input type="checkbox" id="blacknbrass" name="blacknbrass" @change="handleColorFilter">
            </label>
          </div>
          <div class="flex flex-column">
            <h4 class="text-xl">Price</h4>
            <label for="ascending">
              Expensive first
              <input type="checkbox" id="ascending" name="ascending" @change="handlePriceFilter">
            </label>
            <label for="descending">
              Cheap first
              <input type="checkbox" id="descending" name="descending" @change="handlePriceFilter">
            </label>
          </div>
          <div class="flex flex-column">
            <h4 class="text-xl">Rating</h4>
            <label for="3-and-more">
              3 stars and more
              <input type="checkbox" id="3-and-more" name="3-and-more" @change="handleRatingFilter">
            </label>
            <label for="4-and-more">
              4 stars and more
              <input type="checkbox" id="4-and-more" name="4-and-more" @change="handleRatingFilter">
            </label>
          </div>
        </div>
      </form>
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
      <div v-for="(amp, index) in filteredAmps" :key="amp.name" class="bg-neutral-700 relative" @click="goToItem(amp)">
        <div v-if="index != 7" class="bg-neutral-700">
          <div>
            <img :src="getImagePath(amp.image)" :alt="amp.name" class="w-full h-[600px] object-cover" />
          </div>
          <div class="p-3">
            <h2 class="text-xl font-medium">{{ amp.name }}</h2>
            <h3 class="font-medium text-13px mt-1">{{ amp.price }}</h3>
          </div>
        </div>
        <div v-if="(index == 7)">
          <div class="text-5xl font-extrabold">
            <h2>CLASSIC SOUNDS, <br>
              CONTEMPORARY <br>
              FEATURES</h2>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Amps from '@/images/amps/amps.json';
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      Amps,
      filters: {
        color: [],
        price: '',
        rating: ''
      }
    };
  },
  computed: {
    filteredAmps() {
      let filtered = this.Amps;

      if (this.filters.color.length > 0) {
        filtered = filtered.filter(amp => this.filters.color.toLowerCase().includes(amp.color));
      }

      if (this.filters.price === 'ascending') {
        filtered = filtered.sort((a, b) => a.price - b.price);
      } else if (this.filters.price === 'descending') {
        filtered = filtered.sort((a, b) => b.price - a.price);
      }

      if (this.filters.rating === '3+') {
        filtered = filtered.filter(amp => amp.rating >= 3);
      } else if (this.filters.rating === '4+') {
        filtered = filtered.filter(amp => amp.rating >= 4);
      }

      return filtered;
    }
  },
  methods: {
    getImagePath(image) {
      return (`src/images/amps/${image}`);
    },
    goToItem(item) {
      this.$router.push({ path: `/amps/item/${item.id}`, params: { item } });
    },
    handleColorFilter(event) {
      const selectedColor = event.target.id;
      if (event.target.checked) {
        this.filters.color.push(selectedColor);
      } else {
        const index = this.filters.color.indexOf(selectedColor);
        if (index !== -1) {
          this.filters.color.splice(index, 1);
        }
      }
    },
    handlePriceFilter(event) {
      this.filters.price = event.target.id;
    },
    handleRatingFilter(event) {
      this.filters.rating = event.target.id;
    }
  }
}
</script>

<style scoped>
.grid > *:nth-child(9) {
  object-fit: cover;
  height: 680px;
  position: relative;
  width: 640px;
  background-image: url('src/images/amps/images-1.png');
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  pointer-events: none;
}
</style>