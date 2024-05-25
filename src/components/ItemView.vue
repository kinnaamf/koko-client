<template>
  <Header />
  <div class="bg-dark-marsh">
    <div class="py-40">
      <div class="flex flex-col px-80 text-white">
        <div class="flex gap-10">
          <div>
            <img :src="itemImage" alt="">
          </div>
          <div class="flex mt-20">
            <div class="flex flex-col gap-10">
              <div class="flex justify-between">
                <h2 class="text-5xl uppercase font-bold">{{ item.name }}</h2>
                <div class="flex items-center gap-3">
                  <span>{{ item.rating }}</span>
                  <!-- Удалите или измените здесь иконку рейтинга, если это не применимо к вашим наушникам -->
                </div>
              </div>
              <div class="text-5xl font-extrabold">
                <h2>{{ item.price }}</h2>
              </div>
              <div class="flex gap-10 text-zinc-400">
                <h3>{{ item.shortDescription }}</h3>
                <a href="" class="underline">More details</a>
              </div>
              <div>
                <h3>{{ item.color }}</h3>
              </div>
              <div>
                <button type="button" class="bg-white text-black py-3 px-40 uppercase font-bold">
                  Add to bag
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="description" class="mt-40 mb-10">
          <h2 class="text-xl text-center">{{ item.description }}</h2>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Amps from '@/images/amps/amps.json';
import Headphones from '@/images/headphones/headphones.json';
import { useRouter } from 'vue-router';

export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      item: {}
    };
  },
  computed: {
    itemImage() {
      return this.item.image ? `/src/images/${this.itemType}/${this.item.image}` : '';
    },
    itemType() {
      return this.$route.path.includes('headphones') ? 'headphones' : 'amps';
    }
  },
  created() {
    this.loadItem();
  },
  mounted() {
    this.$nextTick(() => {
      window.scrollTo(0, 0);
    });
  },
  methods: {
    loadItem() {
      const items = this.itemType === 'headphones' ? Headphones : Amps;
      this.item = items.find(item => item.id === parseInt(this.$route.params.id)) || {};
    }
  }
}
</script>

<style scoped>

</style>
