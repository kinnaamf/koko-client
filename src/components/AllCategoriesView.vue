<template>
  <Header/>
  <div class="bg-dark-marsh">
    <div class="flex flex-col py-20 gap-20">
      <div class="flex text-white px-40 text-nowrap items-center gap-80">
        <div class="flex items-center">
          <div>
            <a href="">
              <img src="https://s3-alpha-sig.figma.com/img/ec09/ef4b/70f5d3add144791dabb25dd75a885a64?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W7hZjCX3tm6-srxxbGOlLCxaQDhEPSLwXBTD9HQB2UEvyFhMNLKNMO~Mlj66RCCkkNNMt5auYS2i3mRkxKyzOrx5G8APtHRT8kN5DHIgJGfAKxhh~a22p0FipGlkhhS0nqnCaJ5kJzkXtl-47ejCNL96eEq6f3n~XPzidcAQxBp~Or47vAhv36QQ4pGVF3QCJdWMLxJqNsKzlPKtnQmd6hukfflWgBJA0kMwLtYIGGylURP0nsMVHOMb0WPK2~RDzwqUKD55f713CYrancRa95iQ~3e05PgGaVqreg1JNfdQIKCJnL4zQowErybnLMAnD77Jkvq7D2sVzCaLOGse8A__"
                   alt="" class="w-[1200px] h-[600px]">
            </a>
          </div>
          <div class="rotate-90">
            <a href="" class="uppercase text-7xl bg-black px-6 py-3">Audio Devices</a>
          </div>
        </div>
      </div>
      <div class="flex text-white px-40 text-nowrap items-center">
        <div class="flex items-center">
          <div class="rotate-90">
            <a href="" class="uppercase text-7xl bg-black px-6 py-3">Video Devices</a>
          </div>
          <div>
            <a href="">
              <img src="https://s3-alpha-sig.figma.com/img/d9f2/89c8/ad7555654f2d62b3cec72e8cf86acf25?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DojXqvVNx4pce3xbBbWzqzftBZcPmOSe2ta87qVB9FJLb315zFx93GIjd~xBF9jCJI2ZtEdXmw5ntZ6xYtTN5Kzxo78NFeCNOijjb5GgpKnVLOZoyQw-2IwMFw8bU6l5L16ldKJtsWpyNeXVc70FA8bbLOcz0T2QovCBazChGdwLjoYbmgiQZpochR7392NgpKGkU297IvbLYWZgKbvZw3UdBe90MOGKhllyPn~jBOEysNiWoiDSyMIPN8tDyGTE8CEwBUaG1uvl~hqRA3OsWipq2T~HccQ656nBJSHn6KP4-B0bLYjmXjqXHDV054uiPVur4VDH2Ix7IoWfJt19~g__"
                   alt="" class="w-[1200px] h-[600px]">
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  <Footer/>
</template>
<script>
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>
<style scoped>

</style>