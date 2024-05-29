<template>
  <div>
    <Header />
    <div class="max-sm:h-[392px] max-sm:bg-center max-sm:relative w-screen h-screen bg-no-repeat bg-cover bg-[url('https://s3-alpha-sig.figma.com/img/910d/85b8/edf03fa17303a30fcc69cd9edf6cbc6a?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pxQXTgKOcolR1TucDuq3gltuNC15yf7MhIVFC1jGsOeVubkg25pyvgwll9lth2BQAX4zxhJhxBjDndqT~POh5DxWWWI2pzAhWGy9eWzOVpuLWTOIt45apdEM49d-rF4BJ9o31NuswrvzqwHAV5YWrrGEhrKsi4syg3irAmOhBo0KbZ0jK93fx6qfuc5l5NgdpzBAErv-Qpuw91kXXMvUw4ZkoWKFjUUe0Md-Xf7SW4ezEXfUnvhRjHrdiptUBvmxVZLkdGJ~jq6Uv8gC4cWfPzxbYVlT6llMrOPFtvfD8HfuqNNwlgcKt8Yuw3vabCLQ7-JxOgk4QWhiWlgURvMhwg__')]">
      <h2 class="text-white uppercase text-6xl font-bold absolute top-1/2 left-10">Amps</h2>
    </div>
    <div class="bg-footer-dark h-10 flex items-center justify-end text-white px-40 " @click="showMe">
      <button class="flex gap-3 bg-white p-2">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" x="0" y="0" viewBox="0 0 32 32" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M6 10a4 4 0 0 0 0-8 4 4 0 0 0 0 8zm0-6a2 2 0 0 1 0 4 2 2 0 0 1 0-4zm20 8a4 4 0 0 0 0 8 4 4 0 0 0 0-8zm0 6a2 2 0 0 1 0-4 2 2 0 0 1 0 4zM6 22a4 4 0 0 0 0 8 4 4 0 0 0 0-8zm0 6a2 2 0 0 1 0-4 2 2 0 1 0 0 4zm6-23h17a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2zM3 15h17a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm26 12H12a1 1 0 0 1 0-2h17a1 1 0 0 1 0 2z" fill="#000000" opacity="1" data-original="#ffffff" class=""></path></g></svg>
        <span class="text-black">FILTER</span>
      </button>
    </div>
    <div class="grid grid-cols-3 max-sm:grid-cols-1 text-white bg-neutral-700">
      <div class="bg-neutral-700">
        <div class="pl-5 pt-4 gap-4 pr-16">
          <h2 class="text-2xl font-extrabold">ENJOY MARSHALL SOUND AT HOME <br>OR ON THE ROAD</h2>
          <p class="text-14px font-regular mt-3 leading-none">
            In a world that moves at the speed of life, your music should keep up. Our portable Bluetooth speakers redefine the way you experience sound. Compact, powerful, and designed for those who refuse to compromise on sound quality, these speakers let you take your music wherever the adventure leads.
          </p>
        </div>
      </div>
      <div v-for="(speakers, index) in Speakers" :key="speakers.name" class="bg-neutral-700 relative" @click="goToItem(speakers)">
        <div class="bg-neutral-700">
          <div>
            <img :src="getImagePath(speakers.image)" :alt="speakers.name" class="w-full h-[600px] object-cover" />
          </div>
          <div class="p-3">
            <h2 class="text-xl font-medium">{{ speakers.name }}</h2>
            <h3 class="font-medium text-13px mt-1">{{ speakers.price }}</h3>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Speakers from '@/images/speakers/speakers.json';
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      Speakers,
    };
  },
  methods: {
    getImagePath(image) {
      return (`src/images/speakers/${image}`);
    },
    goToItem(item) {
      this.$router.push({ path: `/speakers/item/${item.id}`, params: { item } });
    }
  }
}
</script>

<style scoped>

</style>
