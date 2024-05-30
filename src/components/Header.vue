<template>
  <header>
    <div class="uppercase max-sm:px-4 px-40 flex flex-wrap text-nowrap justify-between items-center h-8" style="background: #27272A">
      <div class="text-l max-sm:text-sm">
        <h3 style="color: #71717A">Fast Global Shipping</h3>
      </div>
      <div class="flex gap-5 text-l max-sm:text-sm">
        <div>
          <a class="uppercase text-l max-sm:text-sm max-sm:hidden" style="color: #71717A" href="/#/login">{{ getUsername }}</a>
        </div>
        <div class="bg-transparent text-[#71717A]">
          <select name="select" class="appearance-none bg-transparent uppercase" id="select" @change="changeLocale">
          <option value="en" :selected="currentLocale === 'en'">United Kingdom | English</option>
            <option value="ro" :selected="currentLocale === 'ro'">România | Română</option>
          </select>
        </div>
      </div>
    </div>
    <div class="h-10 flex items-center px-40 justify-between max-sm:hidden max-lg:hidden" style="background-color: #F9FAFB">
      <div>
        <a href="/homepage">
          <img src="/src/assets/logo.svg" alt="Koko">
        </a>
      </div>
      <div class="flex max-sm:flex-row gap-10 max-sm:gap-10 items-center">
        <div class="flex max-sm:flex-none">
          <ul class="flex text-nowrap max-sm:flex-nowrap gap-4 max-sm:gap-5 font-medium uppercase text-l max-sm:text-sm">
            <li><a href="" class="pointer-events-none text-zinc-500">{{ $t('header_stores') }}</a></li>
            <li><a href="/#/categories">{{ $t('header_categories') }}</a></li>
            <li><a href="/#/audio-devices">{{ $t('header_audio') }}</a></li>
            <li><a href="/#/video-devices">{{ $t('header_video') }}</a></li>
            <li><a href="/#/about">{{ $t('header_about') }}</a></li>
            <li><a href="/#/contact">{{ $t('header_contact') }}</a></li>
            <li><a href="/#/faq">{{ $t('header_faq') }}</a></li>
          </ul>
        </div>
        <div class="flex gap-5 items-center">
          <button @click="makeVisible">
            <svg width="17" height="17" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M13.1908 7.3454C13.1908 10.5737 10.5737 13.1908 7.3454 13.1908C4.11707 13.1908 1.5 10.5737 1.5 7.3454C1.5 4.11707 4.11707 1.5 7.3454 1.5C10.5737 1.5 13.1908 4.11707 13.1908 7.3454ZM11.8195 12.5265C10.6196 13.5635 9.05577 14.1908 7.3454 14.1908C3.56479 14.1908 0.5 11.126 0.5 7.3454C0.5 3.56479 3.56479 0.5 7.3454 0.5C11.126 0.5 14.1908 3.56479 14.1908 7.3454C14.1908 9.0557 13.5636 10.6195 12.5266 11.8194L16.5002 15.793L15.7931 16.5001L11.8195 12.5265Z" fill="#000000"/>
            </svg>
          </button>
          <div class="hidden typo absolute left-0 bg-white w-screen flex items-center justify-between px-40 gap-3">
            <div class="flex gap-3">
              <button @click="makeVisible">
                <svg width="17" height="17" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.1908 7.3454C13.1908 10.5737 10.5737 13.1908 7.3454 13.1908C4.11707 13.1908 1.5 10.5737 1.5 7.3454C1.5 4.11707 4.11707 1.5 7.3454 1.5C10.5737 1.5 13.1908 4.11707 13.1908 7.3454ZM11.8195 12.5265C10.6196 13.5635 9.05577 14.1908 7.3454 14.1908C3.56479 14.1908 0.5 11.126 0.5 7.3454C0.5 3.56479 3.56479 0.5 7.3454 0.5C11.126 0.5 14.1908 3.56479 14.1908 7.3454C14.1908 9.0557 13.5636 10.6195 12.5266 11.8194L16.5002 15.793L15.7931 16.5001L11.8195 12.5265Z" fill="#000000"/>
                </svg>
              </button>
              <label for="">
                <input type="text" placeholder="Search" class="focus:outline-0 font-medium w-[400px]" v-model="showItems">
              </label>
              <div class="search-result flex flex-col gap-3" v-show="showItems && filteredItems.length">
                <a class="ml-3 text-zinc-500" href="/#/search">Products ({{ filteredItems.length }})</a>
                <ul class="grid grid-cols-6 gap-10 justify-between">
                  <li v-for="item in filteredItems" class=" w-[150px]" :key="item.id">
                    <a :href="getItemUrl(item)">
                      <img :src="getImagePath(item)" alt="image" class="w-[150px] h-[150px]">
                      <h2 class="font-medium">{{ item.name }}</h2>
                      <h2>{{item.price}}</h2>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="flex">
              <button @click="makeVisible">
                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 1.5L25.5 25.5M1.5 25.5L25.5 1.5" stroke="black" stroke-width="2"/>
                </svg>
              </button>
            </div>
          </div>
          <div>
            <a href="/#/cart" class="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13" fill="none">
                <path d="M4 4H2.5C1.39543 4 0.5 4.89543 0.5 6V10.5C0.5 11.6046 1.39543 12.5 2.5 12.5H13.5C14.6046 12.5 15.5 11.6046 15.5 10.5V6C15.5 4.89543 14.6046 4 13.5 4H4ZM4 4V2.5C4 1.39543 4.89543 0.5 6 0.5H10C11.1046 0.5 12 1.39543 12 2.5V3.5" stroke="black"/>
              </svg>
              <span v-if="cartStore.totalItems > 0" class="bg-black text-white rounded-full w-[25px] flex self-center justify-center">{{ cartStore.totalItems }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="max-sm:visible max-lg:visible relative z-10">
      <div class="hidden bg-transparent max-sm:flex justify-start items-start absolute">
        <div class="bg-white max-sm:w-screen p-2 pr-3 flex flex-col gap-3">
          <div class="flex items-center gap-3 justify-between">
            <button type="button" class="rotate-180 items-center gap-2 font-medium flex bg-white" @click="toggleMenu">
              <span class="rotate-180">Menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" x="0" y="0" viewBox="0 0 40 40" style="enable-background:new 0 0 512 512" xml:space="preserve"><g><g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><path d="M3.75 10c0-.69.56-1.25 1.25-1.25h30a1.25 1.25 0 1 1 0 2.5H5c-.69 0-1.25-.56-1.25-1.25zM3.75 30c0-.69.56-1.25 1.25-1.25h30a1.25 1.25 0 1 1 0 2.5H5c-.69 0-1.25-.56-1.25-1.25zM10.417 20c0-.69.56-1.25 1.25-1.25H35a1.25 1.25 0 1 1 0 2.5H11.667c-.69 0-1.25-.56-1.25-1.25z" fill="#000000" opacity="1" data-original="#000000"></path></g></g></svg>
            </button>
            <div class="w-48 max-sm:w-[20rem] h-7">
              <label class="relative block">
                <span class="sr-only">Search</span>
                <span class="absolute inset-y-0 right-0 flex items-center pr-2 hover:cursor-pointer">
                <a href="/#/cart">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.1908 7.3454C13.1908 10.5737 10.5737 13.1908 7.3454 13.1908C4.11707 13.1908 1.5 10.5737 1.5 7.3454C1.5 4.11707 4.11707 1.5 7.3454 1.5C10.5737 1.5 13.1908 4.11707 13.1908 7.3454ZM11.8195 12.5265C10.6196 13.5635 9.05577 14.1908 7.3454 14.1908C3.56479 14.1908 0.5 11.126 0.5 7.3454C0.5 3.56479 3.56479 0.5 7.3454 0.5C11.126 0.5 14.1908 3.56479 14.1908 7.3454C14.1908 9.0557 13.5636 10.6195 12.5266 11.8194L16.5002 15.793L15.7931 16.5001L11.8195 12.5265Z" fill="#A1A1AA"/>
                  </svg>
                </a>
              </span>
                <input class="w-full h-7 placeholder:text-gray-400 block border-marsh bg-transparent border-1 py-2 pl-3 pr-3 focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1 max-sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
              </label>
            </div>
            <div class="flex items-center">
              <a href="/#/cart">
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="18" viewBox="0 0 16 13" fill="none">
                  <path d="M4 4H2.5C1.39543 4 0.5 4.89543 0.5 6V10.5C0.5 11.6046 1.39543 12.5 2.5 12.5H13.5C14.6046 12.5 15.5 11.6046 15.5 10.5V6C15.5 4.89543 14.6046 4 13.5 4H4ZM4 4V2.5C4 1.39543 4.89543 0.5 6 0.5H10C11.1046 0.5 12 1.39543 12 2.5V3.5" stroke="black"/>
                </svg>
              </a>
            </div>
          </div>
          <div v-if="isMenuOpen" class="ease-in-out duration-300 bg-white">
            <ul class="flex flex-col gap-4 max-sm:gap-5 font-medium uppercase text-l max-sm:text-sm">
              <li><a href="/#/" class="bg-white">Back to Homepage</a></li>
              <li><a href="" class="pointer-events-none bg-white text-zinc-500">Our Stores</a></li>
              <li><a href="/#/categories" class="bg-white">All Categories</a></li>
              <li><a href="/#/audio-devices" class="bg-white">Audio Devices</a></li>
              <li><a href="/#/video-devices" class="bg-white">Video Devices</a></li>
              <li><a href="/#/about" class="bg-white">About Us</a></li>
              <li><a href="/#/contact" class="bg-white">Contact</a></li>
              <li><a href="/#/faq" class="bg-white">Faq</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import { cartStore } from "@/store/cartStore.js";
import Items from "/src/images/items.json"

export default {
  setup() {
    return { cartStore };
  },
  name: 'Header',
  data() {
    return {
      isMenuOpen: false,
      Items,
      showItems: ''
    }
  },
  computed: {
    getUsername() {
      const usersJson = localStorage.getItem('users');
      if (usersJson) {
        const users = JSON.parse(usersJson);
        const user = users.find(user => user.username);
        return user ? user.username : 'ACCOUNT';
      }
      return 'ACCOUNT';
    },
    cartStore() {
      return cartStore
    },
    filteredItems() {
      return this.Items.filter(item => item.name.toLowerCase().includes(this.showItems.toLowerCase()));
    }
  },
  methods: {
    getImagePath(item) {
      let basePath = '';

      switch (item.category) {
        case 'Amps':
          basePath = 'src/images/amps';
          break;
        case 'Cameras':
          basePath = 'src/images/cameras';
          break;
        case 'Headphones':
          basePath = 'src/images/headphones';
          break;
        case 'Speakers':
          basePath = 'src/images/speakers';
          break;
        case 'Videocameras':
          basePath = 'src/images/videocameras';
          break;
        default:
          basePath = 'src/images';
      }

      return `${basePath}/${item.image}`;
    },
    getCategory(item) {
      const id = item.id;

      if (id >= 0 && id <= 10) {
        return 'amps';
      } else if (id >= 16 && id <= 33) {
        return 'headphones';
      } else if (id >= 34 && id <= 56) {
        return 'speakers';
      } else if (id >= 57 && id <= 63) {
        return 'videocameras';
      } else if (id >= 11 && id <= 15) {
        return 'cameras';
      } else {
        return 'other';
      }
    },
    getItemUrl(item) {
      switch (this.getCategory(item)) {
        case 'amps':
          return `/#/amps/item/${item.id}`;
        case 'headphones':
          return `/#/headphones/item/${item.id}`;
        case 'speakers':
          return `/#/speakers/item/${item.id}`;
        case 'videocameras':
          return `/#/videocameras/item/${item.id}`;
        case 'cameras':
          return `/#/cameras/item/${item.id}`;
        default:
          return '#';
      }
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    makeVisible() {
      let x = document.querySelector('.typo');
      x.classList.toggle('hidden');
      x.classList.add('duration-100');
    },
  },
  created() {
  }
}
</script>


<style scoped>
.search-result {
  position: absolute;
  background-color: white;
  border: 1px solid #ddd;
  height: auto;
  z-index: 1000;
  margin-top: 2rem;
  padding: 0.5rem;
  width: 1560px;
  overflow:scroll;
}

.search-result li:last-child {
  border-bottom: none;
}
.search-result li:hover {
  background-color: #f5f5f5;
  cursor: pointer;
}
#select {
  border: none !important;
  outline:none !important;
}
</style>
