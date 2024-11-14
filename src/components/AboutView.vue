<script>
  import Header from "@/components/Header.vue";

  export default {
    components: {
      Header,
    },
    data() {
      return {

      }
    },
    methods: {
      goToHome() {
        this.$router.push("/");
      },
      goToAmps() {
        this.$router.push("/#/amps");
      },
      goToSpeakers() {
        this.$router.push("/speakers");
      },
      goToHeadphones() {
        this.$router.push("/headphones");
      },
      goToCameras() {
        this.$router.push("/cameras");
      },
      goToAction() {
        this.$router.push("/video");
      }
    }
  }
</script>

<template>
  <Header></Header>
  <div class="bg-neutral-100 flex flex-col justify-center items-center py-16 gap-6">
    <button type="button" @click="goToHome" class="uppercase bg-black text-white px-4 py-1 font-medium text-sm w-max">homepage</button>
    <h1 class="uppercase text-5xl font-black">we are koko</h1>
  </div>
  <div class="bg-[url('/src/images/about/1.png')] w-screen h-screen bg-black"></div>
  <div class="flex flex-col justify-center py-16 gap-6">
    <p class="self-center font-medium text-xl">
      For over six decades, the legacy of Marshall has grown – chord to chord, person to <br>
      person, generation to generation. It all started in 1962, when Jim Marshall built his first <br>
      ever amp. Since then, we’ve never stopped amplifying music for artists and fans. With <br>
      each passing decade, we have honed our craft, ensuring that our reputation for <br>
      legendary sound and iconic design remains unparalleled. Today, the Marshall name <br>
      spans professional music equipment, consumer electronics, and a record label, all <br>
      delivering exceptional audio experiences worldwide. <br><br><br>
      This is the home of loud.
    </p>
  </div>
  <div class="ml-32">
    <h2 class="uppercase font-bold text-5xl">amps</h2>
    <p class="mt-8 text-neutral-500 font-medium text-xl">
      With our legendary amps, you always take centre stage. They <br>
      boost input and enhance sound quality, without fail. We offer <br>
      various types and configurations to meet every playing need, <br>
      from home practice to large venue performances. <br><br><br>
      <span class="uppercase text-sm text-black"><a href="" @click="">find your sound</a></span>
    </p>
    <div @click="goToAmps" class="bg-[url('/src/images/about/amps_desktop.avif')] mt-16 imm w-9/12 bg-cover bg-black relative right-32">
    </div>
  </div>
</template>

<style scoped>
  .imm {
    height: 750px;
  }
</style>