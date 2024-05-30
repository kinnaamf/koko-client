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
            <img src="https://s3-alpha-sig.figma.com/img/c66f/2afb/a10d029b14ff79c6d939995e16008ca3?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RHdwjSu9TM8Hx6a43uxRknFSTdjvI2Ocn11ZI5pv4HZwdj6SIixPhIAjA3XdXJea8CVzMeQ6oex38I7dCtCJGaNxtFc6RRtC4kvnndCqtXPd5evAvM~2PT24HQ3Z4ekV7BnKDvK~yvRcMjSp7ASlPWQfOdKsqKselEd-YqSD7ZWdgu8Qxxfq4NuaECddOojcI3GFX0VnErTw78ldjg~mOq1HfcKFOzE8lsrUQdu87PnjIDiG0g7S7Ap8MXQ59Eg1zMF~M70F-b3iUSdp19ArFKoya~FbnDvJzcyGPK4bWI8JNZ2mg8z5i6eh1jrfikPs~HYi2TpB4hMtW9B1HfZhow__"
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
          <a href="/#/video" class="text-left  max-sm:text-left max-sm:bg-black max-sm:p-2">
            <h3 class="text-7xl font-bold max-sm:text-2xl">Video Cameras</h3>
            <h4 class="font-bold text-zinc-600 max-sm:text-sm">EXPLORE ALL Video Cameras PAGE</h4>
          </a>
        </div>
        <div>
          <a href="/#/video">
            <img src="https://s3-alpha-sig.figma.com/img/796c/842b/7f24a97801238688936c53e5bbd42184?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WiFioh~labMJUQNjG8yqlOsDJ8fnI5it1s9Nw-48hZUCfo17-RDwqXSoWqWToaItg3mZjH0L8Cx5hkyDgxdqBlh3gLgvjbqcQRuXcjScwr3CVNHmG3Vij0d1V2ZLFJnJxH1ojHLyT6Y7OvXDNQRfPFwDqfA9-AmC5yZMUTMUj0CT5QE4YqoypBKsRvK6FNZQXhH2pdHSPnSYw9Uv81NRINJpLY2~5lSm0slFs8x3lz564gUtNE4P8AXLZE6eS~o6F3k1oHrbYcD0CyYFJS~E47zIRPtPrHNBy8bZPJjHoOBxLVuDHl5u6PVEOJU4Xe74bK0jN-V3QYysk1IeJBOvGg__"
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