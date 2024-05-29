<template>
  <Header />
  <div class="bg-dark-marsh">
    <div class="py-40 max-sm:py-20">
      <div class="flex flex-col px-80 max-sm:px-0 text-white">
        <div class="flex max-sm:flex-col gap-10">
          <div>
            <img :src="itemImage" alt="">
          </div>
          <div class="flex mt-20">
            <div class="flex flex-col gap-10 max-sm:gap-3">
              <div class="flex justify-between max-sm:px-2">
                <h2 class="text-5xl uppercase font-bold">{{ item.name }}</h2>
                <div class="flex items-center gap-3">
                  <span class="ml-10">{{ item.rating }}</span>
                  <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.7713 18.75C13.5328 18.7502 13.2979 18.6899 13.087 18.5745L9.17031 16.4454C9.13996 16.4286 9.10608 16.4198 9.07166 16.4198C9.03724 16.4198 9.00336 16.4286 8.973 16.4454L5.05691 18.5745C4.81423 18.7066 4.54066 18.7658 4.26714 18.7454C3.99362 18.725 3.73108 18.6259 3.50922 18.4592C3.28736 18.2925 3.11504 18.0649 3.01176 17.8021C2.90848 17.5394 2.87835 17.252 2.9248 16.9724L3.67258 12.4626C3.67832 12.4273 3.6756 12.391 3.66464 12.357C3.65369 12.323 3.63484 12.2923 3.60974 12.2676L0.443938 9.07193C0.24738 8.87387 0.108386 8.62282 0.0427034 8.34725C-0.0229789 8.07167 -0.0127235 7.78257 0.0723075 7.51271C0.157339 7.24285 0.313746 7.00302 0.523808 6.82038C0.733871 6.63775 0.98919 6.51962 1.26084 6.47937L5.63628 5.82229C5.67033 5.81717 5.70265 5.80354 5.73046 5.78259C5.75827 5.76164 5.78073 5.734 5.79589 5.70206L7.75205 1.59777C7.87321 1.34333 8.06083 1.12907 8.29367 0.979241C8.5265 0.829411 8.79524 0.75 9.06946 0.75C9.34368 0.75 9.61242 0.829411 9.84525 0.979241C10.0781 1.12907 10.2657 1.34333 10.3869 1.59777L12.3443 5.70076C12.3596 5.7326 12.3821 5.76016 12.4099 5.78109C12.4376 5.80202 12.4699 5.81571 12.5039 5.821L16.8831 6.47872C17.1546 6.5192 17.4098 6.63746 17.6197 6.82012C17.8296 7.00278 17.9859 7.24255 18.0709 7.51232C18.1559 7.78208 18.1662 8.07106 18.1007 8.34657C18.0351 8.62207 17.8963 8.87311 17.7 9.07128L14.5311 12.265C14.5061 12.2898 14.4873 12.3205 14.4763 12.3545C14.4654 12.3884 14.4626 12.4247 14.4682 12.46L15.216 16.9698C15.252 17.1878 15.2416 17.4111 15.1856 17.6245C15.1296 17.8378 15.0294 18.036 14.8918 18.2052C14.7542 18.3744 14.5827 18.5105 14.3891 18.6042C14.1955 18.6978 13.9845 18.7467 13.7707 18.7474L13.7713 18.75ZM9.07166 15.1195C9.30998 15.1194 9.5447 15.1797 9.75534 15.295L13.6714 17.4235C13.7061 17.444 13.7458 17.4534 13.7857 17.4505C13.8255 17.4476 13.8636 17.4325 13.8951 17.4072C13.9281 17.3839 13.9536 17.3511 13.9687 17.3128C13.9838 17.2746 13.9877 17.2326 13.98 17.1921L13.2316 12.6816C13.1916 12.4389 13.2091 12.1897 13.2827 11.9555C13.3562 11.7213 13.4836 11.5091 13.6538 11.3369L16.8228 8.14254C16.8511 8.11388 16.8711 8.07762 16.8805 8.03784C16.8899 7.99806 16.8884 7.95635 16.8761 7.91742C16.8638 7.87849 16.8412 7.84388 16.8109 7.81751C16.7807 7.79114 16.7438 7.77405 16.7046 7.76818L12.3261 7.1098C12.0903 7.0745 11.8664 6.98036 11.6738 6.83554C11.4811 6.69071 11.3254 6.49954 11.2201 6.27854L9.26017 2.1749C9.24262 2.13818 9.21549 2.10726 9.18185 2.08565C9.1482 2.06403 9.10938 2.05258 9.06977 2.05258C9.03016 2.05258 8.99135 2.06403 8.9577 2.08565C8.92406 2.10726 8.89692 2.13818 8.87937 2.1749L6.92321 6.27724C6.81789 6.49832 6.66209 6.68954 6.46929 6.83438C6.27648 6.97921 6.05247 7.0733 5.81663 7.1085L1.43867 7.76818C1.3994 7.77392 1.36248 7.79096 1.33212 7.81734C1.30175 7.84372 1.27916 7.8784 1.26691 7.91741C1.25467 7.95643 1.25326 7.99821 1.26285 8.03801C1.27244 8.07781 1.29265 8.11403 1.32116 8.14254L4.48948 11.3369C4.65974 11.5091 4.7871 11.7213 4.86065 11.9555C4.9342 12.1897 4.95173 12.4389 4.91175 12.6816L4.16335 17.1921C4.15656 17.2326 4.1609 17.2743 4.17589 17.3124C4.19087 17.3505 4.2159 17.3835 4.24811 17.4076C4.28033 17.4317 4.31844 17.446 4.35811 17.4488C4.39778 17.4516 4.43742 17.4428 4.47251 17.4235L8.38798 15.2943C8.59877 15.1795 8.83342 15.1195 9.07166 15.1195Z" fill="white"/>
                  </svg>
                </div>
              </div>
              <div class="text-5xl font-extrabold">
                <h2 class="max-sm:px-2">{{ item.price }}</h2>
              </div>
              <div class="flex gap-10 text-zinc-400">
                <h3 class="max-sm:px-2">{{ item.shortDescription }}</h3>
                <a href="" class="underline">More details</a>
              </div>
              <div>
                <h3 class="max-sm:px-2">{{ item.color }}</h3>
              </div>
              <div>
                <button type="button" @click="toCart" class="max-sm:w-screen bg-white text-black py-3 px-40 uppercase font-bold">
                  Add to bag
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="description" class="mt-40 mb-10">
          <h2 class="text-xl text-center max-sm:px-2">{{ item.description }}</h2>
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
import Speakers from '@/images/speakers/speakers.json';
import Cameras from '@/images/cameras/cameras.json';
import Action from '@/images/videocameras/video.json'

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
      return `/src/images/${this.itemType}/${this.item.image}`;
    },
    itemType() {
      const path = this.$route.path;
      if (path.includes('headphones')) return 'headphones';
      if (path.includes('speakers')) return 'speakers';
      if (path.includes('amps')) return 'amps';
      if (path.includes('cameras')) return 'cameras';
      if (path.includes('action-cameras')) return 'action-cameras';
      return '';
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
    toCart() {
      let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

      const exists = cartItems.findIndex(item => item.id === this.item.id);

      if (exists !== -1) {
        cartItems[exists].quantity++;
      } else {
        this.item.quantity = 1;
        cartItems.push(this.item);
      }

      localStorage.setItem('cart', JSON.stringify(cartItems));
    },
    loadItem() {
      let items;
      switch (this.itemType) {
        case 'headphones':
          items = Headphones;
          break;
        case 'speakers':
          items = Speakers;
          break;
        case 'amps':
          items = Amps;
          break;
        case 'cameras':
          items = Cameras;
          break;
        case 'action-cameras':
          items = Action;
          break;
        default:
          items = [];
      }
      this.item = items.find(item => item.id === parseInt(this.$route.params.id)) || {};
      if (this.item.name) {
        document.title = this.item.name;
      }
      console.log(this.item.name)
    }
  }
}
</script>

<style scoped>

</style>
