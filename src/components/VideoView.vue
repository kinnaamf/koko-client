<template>
  <Header/>
  <div class="bg-dark-marsh px-40 uppercase text-white py-40 max-sm:p-0 max-sm:pt-20 max-sm:pb-8">
    <div>
      <h2 class="text-8xl font-bold max-sm:text-5xl max-sm:text-center">Audio Devices</h2>
    </div>
    <div class="flex flex-col gap-20 mt-20">
      <div class="flex justify-between max-sm:flex-col">
        <div>
          <a href="/#/cameras">
            <img src="https://s3-alpha-sig.figma.com/img/9152/3199/0e68e1e92cfd7d05312a543d1609899f?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K6Xu5CKvGddEFWe~54ct7Nzz9trppnLcE9DuoJ4~SFa7hu0x2JFfwV8vtp~P4~Bn7FSaEzoXNmhrqxjvRhYBmQD1YNQ73dfcB9m4cU9Qk1kXsxe4Xu2nQQM4O24FNc4MMtV1PUgWBrgN9EQPy5tP9iSsc7hDOUsW354waa1wYU2qqFC09dPocPC4FuJojl0mIOwAY5s6sqf1DCPEpHzzmi0Z-bUPPA0QzWf1~2R6AZyzLa2Gqoq4-jN8A64W4zbNslVC2PI9rLajI7W90W3SrNC-cLN8n3cm5moOF8hsAfWR6V33-O7XVoOCh4Eph6kCh2H6zTthBfSKN5MGn3OrKA__"
                 alt=""
                 class="w-1200px h-430px max-sm:w-[430] max-sm:h-[200px]" >
          </a>
        </div>
        <div class="flex flex-col gap-5">
          <a href="/#/cameras" class="text-right max-sm:text-left max-sm:bg-black max-sm:p-2">
            <h3 class="text-7xl font-bold max-sm:text-2xl">Cameras</h3>
            <h4 class="font-bold text-zinc-600 max-sm:text-sm">View all cameras page</h4>
          </a>
        </div>
      </div>
      <div class="flex max-sm:flex-col-reverse justify-between">
        <div class="flex flex-col gap-5">
          <a href="/#/action-cameras" class="text-left  max-sm:text-left max-sm:bg-black max-sm:p-2">
            <h3 class="text-7xl font-bold max-sm:text-2xl">Video Cameras</h3>
            <h4 class="font-bold text-zinc-600 max-sm:text-sm">EXPLORE ALL Video Cameras PAGE</h4>
          </a>
        </div>
        <div>
          <a href="/#/action-cameras">
            <img src="https://s3-alpha-sig.figma.com/img/272c/c852/be23f86934038210be7ae6e9e053dc37?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mP17yyt~ef1ZjuH2V1~O~ySincHLJVWRz4v2gXdRlB7adjjyEeCGjYofGI0Jc1XxrxvheX72NLOgSY9Zq-xXONABIOHtsVylGQ7LxDjShRJ4Wy0UQARab5~w37hg9B0tVeZdxqdfCM8o5Ci-5cn2ktmcvgDc-XMo7uwwWbkCRiG0SquGazRtRB0k5uDeXs6CTutfafUsHtlq-9RcUziMGMaYSsUfNBnMbjkRv5O-NeyFibDlWIKQKGACWnDXN172gQyWZ2jdJHhXrx7UBpWylQVz4ExPk7lWhmel0JKJEEH4Pk8jZdvBju8baVAi6FbGxYgSpCcnvvQEXi09hZGY2A__"
                 alt=""
                 class="w-1200px h-430px max-sm:w-[430] max-sm:h-[200px]" >
          </a>
        </div>
      </div>
    </div>
  </div>
  <ScrollButton/>
  <Footer/>
</template>
<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
import ScrollButton from "@/components/ScrollButton.vue"

export default {
  components: {
    Header,
    Footer,
    ScrollButton
  }
}
</script>
<style scoped>

</style>