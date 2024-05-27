<template>
  <div>
    <Header />
    <div class="w-screen h-screen bg-no-repeat bg-cover bg-[url('https://s3-alpha-sig.figma.com/img/910d/85b8/edf03fa17303a30fcc69cd9edf6cbc6a?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pxQXTgKOcolR1TucDuq3gltuNC15yf7MhIVFC1jGsOeVubkg25pyvgwll9lth2BQAX4zxhJhxBjDndqT~POh5DxWWWI2pzAhWGy9eWzOVpuLWTOIt45apdEM49d-rF4BJ9o31NuswrvzqwHAV5YWrrGEhrKsi4syg3irAmOhBo0KbZ0jK93fx6qfuc5l5NgdpzBAErv-Qpuw91kXXMvUw4ZkoWKFjUUe0Md-Xf7SW4ezEXfUnvhRjHrdiptUBvmxVZLkdGJ~jq6Uv8gC4cWfPzxbYVlT6llMrOPFtvfD8HfuqNNwlgcKt8Yuw3vabCLQ7-JxOgk4QWhiWlgURvMhwg__')]">
      <h2 class="text-white uppercase text-6xl font-bold absolute top-1/2 left-10">Amps</h2>
    </div>
    <div class="bg-footer-dark h-10"></div>
    <div class="grid grid-cols-3 text-white bg-neutral-700">
      <div class="bg-neutral-700">
        <div class="pl-5 pt-4 gap-4 pr-16">
          <h2 class="text-2xl font-extrabold">POWERING YOUR SOUND, ELEVATING <br> YOUR PERFORMANCE.</h2>
          <p class="text-14px font-regular mt-3 leading-none">
            Your amplifier is the heartbeat of your performance, boosting your input and enhancing sound quality and volume. With various types and configurations available – Marshall caters to a diverse range of needs, from home practice to large venue performances.
          </p>
        </div>
      </div>
      <div v-for="(amp, index) in Amps" :key="amp.name" class="bg-neutral-700 relative" @click="goToItem(amp)">
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
    };
  },
  methods: {
    getImagePath(image) {
      return (`src/images/amps/${image}`);
    },
    goToItem(item) {
      this.$router.push({ path: `/amps/item/${item.id}`, params: { item } });
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
