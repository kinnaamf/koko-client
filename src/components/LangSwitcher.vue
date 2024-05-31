<script>
import {getLocale} from "../utils.js";

export default {
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale
      this.$router.replace(this.$route.fullPath.replace(getLocale(), locale))
    }
  },
  data() {
    return {
      locales: ['en', 'ro']
    }
  }
}
</script>

<template>
  <div class="text-[#71717A] flex justify-center items-center gap-5">
    <button @click="setLocale(locale)" v-for="locale in locales" :class="this.$route.params.locale === locale ? 'font-bold' : ''">
      {{ locale.toUpperCase() }}
    </button>
  </div>
</template>

<style scoped>

</style>
