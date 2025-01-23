<!--<template>-->
<!--  <HeaderC/>-->
<!--  <div class="bg-gray-200 h-screen px-40 pt-52 max-sm:px-0 max-sm:pt-10">-->
<!--    <h1 class="uppercase text-4xl font-extrabold ml-10">Your Bag</h1>-->
<!--    <div v-if="!localStorageIsEmpty" class="flex items-start justify-between mt-10 max-sm:flex-col max-sm:gap-5">-->
<!--      <div class="flex max-sm:flex-col flex-col gap-5 max-sm:h-max">-->
<!--        <div v-for="item in cartItems" :key="item.id" class="bg-white flex w-[540px] max-sm:w-[430px]">-->
<!--          <img :src="getImagePath(item)" alt="Item Image" class="w-[160px] h-[160px] max-sm:h-[172px]">-->
<!--          <div class="flex gap-10 py-3 px-3 ">-->
<!--            <div class="flex flex-col gap-2 font-medium">-->
<!--              <span class="max-sm:text-sm">{{ item.name }}</span>-->
<!--              <span class="text-zinc-600 max-sm:text-sm">{{ item.color }}</span>-->
<!--              <span>{{ item.price }}</span>-->
<!--            </div>-->
<!--            <div class="flex items-start">-->
<!--              <div class="flex items-center gap-3">-->
<!--                <button type="button" @click="decreaseQuantity(item.id)">-->
<!--                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                    <g clip-path="url(#clip0_36_1311)">-->
<!--                      <path d="M1.19991 11.2001H18.7998C18.9575 11.2001 19.1135 11.1691 19.2591 11.1088C19.4048 11.0484 19.5371 10.96 19.6485 10.8486C19.76 10.7371 19.8484 10.6048 19.9087 10.4592C19.969 10.3135 20 10.1575 20 9.99986C20 9.84225 19.969 9.68618 19.9087 9.54057C19.8483 9.39495 19.7599 9.26265 19.6485 9.1512C19.5371 9.03976 19.4048 8.95136 19.2591 8.89105C19.1135 8.83075 18.9575 8.79972 18.7998 8.79974H1.19991C0.884032 8.80344 0.582343 8.93151 0.360277 9.15619C0.13821 9.38087 0.0136719 9.68404 0.0136719 9.99994C0.0136719 10.3158 0.13821 10.619 0.360277 10.8437C0.582343 11.0684 0.884032 11.1964 1.19991 11.2001Z" fill="black"/>-->
<!--                    </g>-->
<!--                    <defs>-->
<!--                      <clipPath id="clip0_36_1311">-->
<!--                        <rect width="20" height="20" fill="white"/>-->
<!--                      </clipPath>-->
<!--                    </defs>-->
<!--                  </svg>-->
<!--                </button>-->
<!--                <p class="text-2xl font-medium">{{ item.quantity }}</p>-->
<!--                <button type="button" @click="increaseQuantity(item.id)">-->
<!--                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                    <g clip-path="url(#clip0_36_1308)">-->
<!--                      <path d="M19.2188 9.21875H10.7812V0.78125C10.7812 0.349766 10.4315 0 10 0C9.56852 0 9.21875 0.349766 9.21875 0.78125V9.21875H0.78125C0.349766 9.21875 0 9.56852 0 10C0 10.4315 0.349766 10.7812 0.78125 10.7812H9.21875V19.2188C9.21875 19.6502 9.56852 20 10 20C10.4315 20 10.7812 19.6502 10.7812 19.2188V10.7812H19.2188C19.6502 10.7812 20 10.4315 20 10C20 9.56852 19.6502 9.21875 19.2188 9.21875Z" fill="black"/>-->
<!--                    </g>-->
<!--                    <defs>-->
<!--                      <clipPath id="clip0_36_1308">-->
<!--                        <rect width="20" height="20" fill="white"/>-->
<!--                      </clipPath>-->
<!--                    </defs>-->
<!--                  </svg>-->
<!--                </button>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div>-->
<!--              <button type="button" @click="removeItem(item.id)">-->
<!--                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">-->
<!--                  <path d="M17.0312 2.34375H14.1016V1.75781C14.1016 0.788555 13.313 0 12.3438 0H7.65625C6.68699 0 5.89844 0.788555 5.89844 1.75781V2.34375H2.96875C1.99949 2.34375 1.21094 3.1323 1.21094 4.10156C1.21094 4.88 1.71973 5.54145 2.42207 5.77191L3.46719 18.3881C3.54246 19.292 4.31191 20 5.21891 20H14.7811C15.6881 20 16.4576 19.292 16.5329 18.3879L17.5779 5.77187C18.2803 5.54145 18.7891 4.88 18.7891 4.10156C18.7891 3.1323 18.0005 2.34375 17.0312 2.34375ZM7.07031 1.75781C7.07031 1.43473 7.33316 1.17188 7.65625 1.17188H12.3438C12.6668 1.17188 12.9297 1.43473 12.9297 1.75781V2.34375H7.07031V1.75781ZM15.365 18.2909C15.3399 18.5921 15.0834 18.8281 14.7811 18.8281H5.21891C4.9166 18.8281 4.66012 18.5921 4.63508 18.2911L3.60523 5.85938H16.3948L15.365 18.2909ZM17.0312 4.6875H2.96875C2.64566 4.6875 2.38281 4.42465 2.38281 4.10156C2.38281 3.77848 2.64566 3.51562 2.96875 3.51562H17.0312C17.3543 3.51562 17.6172 3.77848 17.6172 4.10156C17.6172 4.42465 17.3543 4.6875 17.0312 4.6875Z" fill="black"/>-->
<!--                  <path d="M7.65516 17.034L7.06923 7.5809C7.04919 7.25789 6.76962 7.01222 6.44817 7.03234C6.12516 7.05238 5.87958 7.33043 5.89958 7.6534L6.48551 17.1066C6.50477 17.4172 6.76274 17.6562 7.06977 17.6562C7.40911 17.6562 7.67598 17.3705 7.65516 17.034ZM10 7.03125C9.67645 7.03125 9.41411 7.29359 9.41411 7.61719V17.0703C9.41411 17.3939 9.67645 17.6562 10 17.6562C10.3236 17.6562 10.586 17.3939 10.586 17.0703V7.61719C10.586 7.29359 10.3236 7.03125 10 7.03125ZM13.5519 7.03238C13.2296 7.01234 12.9508 7.25793 12.9308 7.58094L12.3449 17.0341C12.3249 17.357 12.5705 17.6351 12.8935 17.6551C13.2166 17.6751 13.4945 17.4294 13.5145 17.1066L14.1005 7.65343C14.1205 7.33043 13.8749 7.05238 13.5519 7.03238Z" fill="black"/>-->
<!--                </svg>-->
<!--              </button>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="bg-white w-[540px] max-sm:w-[430px] font-medium">-->
<!--        <div class="flex justify-between px-5 py-3 border-b">-->
<!--          <h3 class="uppercase text-zinc-600">Subtotal</h3>-->
<!--          <h3>$ {{ subtotal }}</h3>-->
<!--        </div>-->
<!--        <div class="flex justify-between px-5 py-3 border-b-1 border-b">-->
<!--          <h3 class="uppercase text-zinc-600">Shipping</h3>-->
<!--          <h3 v-if="this.shipping != 0" class="uppercase">$ {{ shipping }}</h3>-->
<!--          <h3 v-else class="uppercase">Free</h3>-->
<!--        </div>-->
<!--        <div class="flex text-5xl justify-between py-3 px-5 font-bold">-->
<!--          <h1 class="uppercase">Total</h1>-->
<!--          <h3>$ {{ total }}</h3>-->
<!--        </div>-->
<!--        <div class="px-5">-->
<!--          <p>VAT (20%) and import duties included</p>-->
<!--        </div>-->
<!--        <div class="px-5 mt-10">-->
<!--          <button type="button" class="max-sm:flex max-sm:items-center max-sm:justify-center max-sm:py-10  text-white w-full text-2xl h-10 bg-black">-->
<!--            CHECKOUT-->
<!--          </button>-->
<!--        </div>-->
<!--        <div>-->
<!--          <h3 class="text-zinc-500 pb-6 pt-8 px-5">Read about our Terms of purchase policy <a href="" class="underline">here</a></h3>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div v-else class="uppercase relative" style="left:50%; top:20%; transform: translate(-50%, -50%)">-->
<!--      <h1 class="text-[160px] opacity-15 max-sm:text-[42px] rotate-12 text-nowrap font-extrabold">Your cart is empty</h1>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import HeaderC from '@/components/HeaderC.vue';-->
<!--export default {-->
<!--  components: {-->
<!--    HeaderC-->
<!--  },-->
<!--  data() {-->
<!--    return {-->
<!--      cartItems: [],-->
<!--      localStorageIsEmpty: false-->
<!--    };-->
<!--  },-->
<!--  computed: {-->
<!--    subtotal() {-->
<!--      return this.cartItems.reduce((acc, item) => acc + (String(item.price).substr(2) || 0) * item.quantity, 0);-->
<!--    },-->
<!--    shipping() {-->
<!--      return this.subtotal > 100 ? 0 : 20;-->
<!--    },-->
<!--    total() {-->
<!--      return this.subtotal + this.shipping;-->
<!--    }-->
<!--  },-->
<!--  created() {-->
<!--    const cartData = localStorage.getItem('cart');-->
<!--    this.cartItems = cartData ? JSON.parse(cartData) : [];-->
<!--    this.localStorageIsEmpty = this.cartItems.length === 0;-->
<!--  },-->
<!--  methods: {-->
<!--    increaseQuantity(id) {-->
<!--      const item = this.cartItems.find(item => item.id === id);-->
<!--      if (item) item.quantity++;-->
<!--      this.updateLocalStorage();-->
<!--    },-->
<!--    decreaseQuantity(id) {-->
<!--      const item = this.cartItems.find(item => item.id === id);-->
<!--      if (item && item.quantity > 1) item.quantity&#45;&#45;;-->
<!--      this.updateLocalStorage();-->
<!--    },-->
<!--    removeItem(id) {-->
<!--      this.cartItems = this.cartItems.filter(item => item.id !== id);-->
<!--      this.updateLocalStorage();-->
<!--    },-->
<!--    updateLocalStorage() {-->
<!--      localStorage.setItem('cart', JSON.stringify(this.cartItems));-->
<!--      this.localStorageIsEmpty = this.cartItems.length === 0;-->
<!--    },-->
<!--    getImagePath(item) {-->
<!--      const basePaths = {-->
<!--        Amps: 'http://localhost:81/images/amps',-->
<!--        Cameras: 'http://localhost:81/images/cameras',-->
<!--        Headphones: 'http://localhost:81/images/headphones',-->
<!--        Speakers: 'http://localhost:81/images/speakers',-->
<!--        Videocameras: 'http://localhost:81/images/video',-->
<!--      };-->
<!--      return `${basePaths[item.category] || 'http://localhost:81/images'}/${item.image}`;-->
<!--    }-->
<!--  }-->
<!--};-->

<!--</script>-->

<!--<style scoped>-->
<!--</style>-->


<!--&lt;!&ndash;<template>&ndash;&gt;-->
<!--&lt;!&ndash;  <HeaderC />&ndash;&gt;-->
<!--&lt;!&ndash;  <div class="bg-gray-200 w-screen h-screen px-40 pt-52 max-sm:px-0 max-sm:pt-10">&ndash;&gt;-->
<!--&lt;!&ndash;    <h1 class="uppercase text-4xl font-extrabold ml-10" v-if="!localStorageIsEmpty">Your Bag</h1>&ndash;&gt;-->
<!--&lt;!&ndash;    <div v-if="!localStorageIsEmpty" class="flex items-start justify-between mt-10 max-sm:flex-col max-sm:gap-5">&ndash;&gt;-->
<!--&lt;!&ndash;      <div class="flex max-sm:flex-col flex-col gap-5 max-sm:h-max">&ndash;&gt;-->
<!--&lt;!&ndash;        <div v-for="item in cart" :key="item?.id" v-if="item" class="bg-white flex w-[540px] max-sm:w-[430px]">&ndash;&gt;-->
<!--&lt;!&ndash;          <img :src="getImage(item)" alt="Item Image" class="w-[160px] h-[160px] max-sm:h-[172px]">&ndash;&gt;-->
<!--&lt;!&ndash;          <div class="flex gap-10 py-3 px-3">&ndash;&gt;-->
<!--&lt;!&ndash;            <div class="flex flex-col gap-2 font-medium">&ndash;&gt;-->
<!--&lt;!&ndash;              <span class="max-sm:text-sm">{{ item.name }}</span>&ndash;&gt;-->
<!--&lt;!&ndash;              <span class="text-zinc-600 max-sm:text-sm">{{ item.color }}</span>&ndash;&gt;-->
<!--&lt;!&ndash;              <span>{{ item.price }}</span>&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--&lt;!&ndash;            <div class="flex items-start">&ndash;&gt;-->
<!--&lt;!&ndash;              <div class="flex items-center gap-3">&ndash;&gt;-->
<!--&lt;!&ndash;                <button type="button" @click="decreaseQuantity(item.id)">&ndash;&gt;-->

<!--&lt;!&ndash;                </button>&ndash;&gt;-->
<!--&lt;!&ndash;                <p class="text-2xl font-medium">{{ item.quantity }}</p>&ndash;&gt;-->
<!--&lt;!&ndash;                <button type="button" @click="increaseQuantity(item.id)">&ndash;&gt;-->

<!--&lt;!&ndash;                </button>&ndash;&gt;-->
<!--&lt;!&ndash;              </div>&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--&lt;!&ndash;            <div>&ndash;&gt;-->
<!--&lt;!&ndash;              <button type="button" @click="removeItem(item.id)">&ndash;&gt;-->

<!--&lt;!&ndash;              </button>&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--&lt;!&ndash;          </div>&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--&lt;!&ndash;      </div>&ndash;&gt;-->
<!--&lt;!&ndash;      <div class="bg-white w-[540px] max-sm:w-[430px] font-medium">&ndash;&gt;-->
<!--&lt;!&ndash;        <div class="flex justify-between px-5 py-3 border-b">&ndash;&gt;-->
<!--&lt;!&ndash;          <h3 class="uppercase text-zinc-600">Subtotal</h3>&ndash;&gt;-->
<!--&lt;!&ndash;          <h3>$ {{ subtotal }}</h3>&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--&lt;!&ndash;        <div class="flex justify-between px-5 py-3 border-b-1 border-b">&ndash;&gt;-->
<!--&lt;!&ndash;          <h3 class="uppercase text-zinc-600">Shipping</h3>&ndash;&gt;-->
<!--&lt;!&ndash;          <h3 v-if="shipping !== 0" class="uppercase">$ {{ shipping }}</h3>&ndash;&gt;-->
<!--&lt;!&ndash;          <h3 v-else class="uppercase">Free</h3>&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--&lt;!&ndash;        <div class="flex text-5xl justify-between py-3 px-5 font-bold">&ndash;&gt;-->
<!--&lt;!&ndash;          <h1 class="uppercase">Total</h1>&ndash;&gt;-->
<!--&lt;!&ndash;          <h3>$ {{ total }}</h3>&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--&lt;!&ndash;        <div class="px-5">&ndash;&gt;-->
<!--&lt;!&ndash;          <p>VAT (20%) and import duties included</p>&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--&lt;!&ndash;        <div class="px-5 mt-10">&ndash;&gt;-->
<!--&lt;!&ndash;          <button type="button" class="max-sm:flex max-sm:items-center max-sm:justify-center max-sm:py-10 text-white w-full text-2xl h-10 bg-black">&ndash;&gt;-->
<!--&lt;!&ndash;            CHECKOUT&ndash;&gt;-->
<!--&lt;!&ndash;          </button>&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--&lt;!&ndash;        <div>&ndash;&gt;-->
<!--&lt;!&ndash;          <h3 class="text-zinc-500 pb-6 pt-8 px-5">Read about our Terms of purchase policy <a href="" class="underline">here</a></h3>&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--&lt;!&ndash;      </div>&ndash;&gt;-->
<!--&lt;!&ndash;    </div>&ndash;&gt;-->
<!--&lt;!&ndash;    <div v-else class="uppercase relative" style="left:50%; top:20%; transform: translate(-50%, -50%)">&ndash;&gt;-->
<!--&lt;!&ndash;      <h1 class="text-[160px] opacity-15 max-sm:text-[42px] rotate-12 text-nowrap font-extrabold">Your cart is empty</h1>&ndash;&gt;-->
<!--&lt;!&ndash;    </div>&ndash;&gt;-->
<!--&lt;!&ndash;  </div>&ndash;&gt;-->
<!--&lt;!&ndash;  <button @click="getCart">XXXXXXXXXXXXXX</button>&ndash;&gt;-->
<!--&lt;!&ndash;</template>&ndash;&gt;-->

<!--&lt;!&ndash;<script>&ndash;&gt;-->
<!--&lt;!&ndash;import HeaderC from '@/components/HeaderC.vue';&ndash;&gt;-->

<!--&lt;!&ndash;export default {&ndash;&gt;-->
<!--&lt;!&ndash;  components: {&ndash;&gt;-->
<!--&lt;!&ndash;    HeaderC,&ndash;&gt;-->
<!--&lt;!&ndash;  },&ndash;&gt;-->
<!--&lt;!&ndash;  data() {&ndash;&gt;-->
<!--&lt;!&ndash;    return {&ndash;&gt;-->
<!--&lt;!&ndash;      cart: []&ndash;&gt;-->
<!--&lt;!&ndash;    }&ndash;&gt;-->
<!--&lt;!&ndash;  },&ndash;&gt;-->
<!--&lt;!&ndash;  methods: {&ndash;&gt;-->
<!--&lt;!&ndash;    addToCart(item) {&ndash;&gt;-->
<!--&lt;!&ndash;      const cartData = localStorage.getItem('cart');&ndash;&gt;-->

<!--&lt;!&ndash;      try {&ndash;&gt;-->
<!--&lt;!&ndash;        const parsedData = JSON.parse(cartData);&ndash;&gt;-->

<!--&lt;!&ndash;        if(Array.isArray(parsedData)) {&ndash;&gt;-->
<!--&lt;!&ndash;          this.cart = parsedData;&ndash;&gt;-->
<!--&lt;!&ndash;        } else if (parsedData && typeof parsedData !== 'object') {&ndash;&gt;-->
<!--&lt;!&ndash;          this.cart = [parsedData];&ndash;&gt;-->
<!--&lt;!&ndash;        }&ndash;&gt;-->

<!--&lt;!&ndash;        console.log('cart: ', this.cart);&ndash;&gt;-->
<!--&lt;!&ndash;      }&ndash;&gt;-->
<!--&lt;!&ndash;      catch (error) {&ndash;&gt;-->
<!--&lt;!&ndash;        console.log('Error parsing cart data: ', error)&ndash;&gt;-->
<!--&lt;!&ndash;      }&ndash;&gt;-->
<!--&lt;!&ndash;    }&ndash;&gt;-->
<!--&lt;!&ndash;  },&ndash;&gt;-->
<!--&lt;!&ndash;  created() {&ndash;&gt;-->

<!--&lt;!&ndash;  },&ndash;&gt;-->
<!--&lt;!&ndash;  computed: {&ndash;&gt;-->

<!--&lt;!&ndash;  }&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->
<!--&lt;!&ndash;</script>&ndash;&gt;-->

<!--&lt;!&ndash;<style scoped>&ndash;&gt;-->

<!--&lt;!&ndash;</style>&ndash;&gt;-->



<template>
  <HeaderC />
  <div class="bg-gray-200 h-screen px-40 pt-52 max-sm:px-0 max-sm:pt-10">
    <h1 class="uppercase text-4xl font-extrabold ml-10">Your Bag</h1>
    <div v-if="!localStorageIsEmpty" class="flex items-start justify-between mt-10 max-sm:flex-col max-sm:gap-5">
      <div class="flex max-sm:flex-col flex-col gap-5 max-sm:h-max">
        <div v-for="item in cartItems" :key="item.id" v-if="item && item.id && item.name && item.price" class="bg-white flex w-[540px] max-sm:w-[430px]">
          <img :src="getImagePath(item)" alt="Item Image" class="w-[160px] h-[160px] max-sm:h-[172px]" />
          <div class="flex gap-10 py-3 px-3">
            <div class="flex flex-col gap-2 font-medium">
              <span class="max-sm:text-sm">{{ item.name || 'Unknown Item' }}</span>
              <span class="text-zinc-600 max-sm:text-sm">{{ item.color || 'Unknown Color' }}</span>
              <span>{{ item.price || '$0.00' }}</span>
            </div>
            <div class="flex items-start">
              <div class="flex items-center gap-3">
                <button type="button" @click="decreaseQuantity(item.id)">
                  -
                </button>
                <p class="text-2xl font-medium">{{ item.quantity }}</p>
                <button type="button" @click="increaseQuantity(item.id)">
                  +
                </button>
              </div>
            </div>
            <div>
              <button type="button" @click="removeItem(item.id)">
                remove
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white w-[540px] max-sm:w-[430px] font-medium">
        <div class="flex justify-between px-5 py-3 border-b">
          <h3 class="uppercase text-zinc-600">Subtotal</h3>
          <h3>$ {{ subtotal }}</h3>
        </div>
        <div class="flex justify-between px-5 py-3 border-b-1 border-b">
          <h3 class="uppercase text-zinc-600">Shipping</h3>
          <h3 v-if="shipping !== 0" class="uppercase">$ {{ shipping }}</h3>
          <h3 v-else class="uppercase">Free</h3>
        </div>
        <div class="flex text-5xl justify-between py-3 px-5 font-bold">
          <h1 class="uppercase">Total</h1>
          <h3>$ {{ total }}</h3>
        </div>
        <div class="px-5">
          <p>VAT (20%) and import duties included</p>
        </div>
        <div class="px-5 mt-10">
          <button type="button" class="max-sm:flex max-sm:items-center max-sm:justify-center max-sm:py-10 text-white w-full text-2xl h-10 bg-black">
            CHECKOUT
          </button>
        </div>
        <div>
          <h3 class="text-zinc-500 pb-6 pt-8 px-5">Read about our Terms of purchase policy <a href="" class="underline">here</a></h3>
        </div>
      </div>
    </div>
    <div v-else class="uppercase relative" style="left:50%; top:20%; transform: translate(-50%, -50%)">
      <h1 class="text-[160px] opacity-15 max-sm:text-[42px] rotate-12 text-nowrap font-extrabold">Your cart is empty</h1>
    </div>
  </div>
</template>

<script>
import HeaderC from '@/components/HeaderC.vue';

export default {
  components: {
    HeaderC
  },
  data() {
    return {
      cartItems: [],
      localStorageIsEmpty: false
    };
  },
  computed: {
    subtotal() {
      return this.cartItems.reduce((acc, item) => acc + (parseFloat(item.price) || 0) * item.quantity, 0);
    },
    shipping() {
      return this.subtotal > 100 ? 0 : 20;
    },
    total() {
      return this.subtotal + this.shipping;
    }
  },
  created() {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      try {
        this.cartItems = JSON.parse(cartData).filter(item => item && item.id && item.name && item.price);
      } catch (e) {
        console.error('Error parsing cart data from localStorage:', e);
        this.cartItems = [];
      }
    } else {
      this.cartItems = [];
    }
    this.localStorageIsEmpty = this.cartItems.length === 0;
  },
  methods: {
    increaseQuantity(id) {
      const item = this.cartItems.find(item => item.id === id);
      if (item) item.quantity++;
      this.updateLocalStorage();
    },
    decreaseQuantity(id) {
      const item = this.cartItems.find(item => item.id === id);
      if (item && item.quantity > 1) item.quantity--;
      this.updateLocalStorage();
    },
    removeItem(id) {
      this.cartItems = this.cartItems.filter(item => item.id !== id);
      this.updateLocalStorage();
    },
    updateLocalStorage() {
      localStorage.setItem('cart', JSON.stringify(this.cartItems));
      this.localStorageIsEmpty = this.cartItems.length === 0;
    },
    getImagePath(item) {
      const basePaths = {
        Amps: 'http://localhost:81/images/amps',
        Cameras: 'http://localhost:81/images/cameras',
        Headphones: 'http://localhost:81/images/headphones',
        Speakers: 'http://localhost:81/images/speakers',
        Videocameras: 'http://localhost:81/images/video'
      };
      return `${basePaths[item.category] || 'http://localhost:81/images'}/${item.image}`;
    }
  }
};
</script>

<style scoped>
</style>
