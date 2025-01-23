<template>
  <Header/>
  <div class="bg-dark-marsh text-white flex flex-col overflow-x-hidden">
    <div class="max-sm:h-[392px] max-sm:bg-center bg-[url('https://cdn.mos.cms.futurecdn.net/hrBDrVTe4KmHkDSgmKM58k-1200-80.jpg')] w-screen h-screen bg-no-repeat bg-cover overflow-clip overflow-hidden"></div>
    <div class="px-40 flex flex-col self-center">
      <div>
        <div class="mt-40 d-flex flex-column align-items-center max-sm:mt-10">
          <h1 class="text-5xl text-center font-bold max-sm:text-2xl">
            LEGENDARY SOUND, BUILT <br>
            FOR THE ROAD
          </h1>
          <p class="text-13px mt-12">
            {{ $t('homepage_ambassadors')}}
          </p>
        </div>
      </div>
      <div class="self-center justify-center w-10/12 h-fit max-sm:w-screen max-sm:mt-2">
        <img class="object-fill max-sm:object-contain mt-16 h-[900px] max-sm:h-[280px]"
             src="http://localhost:81/images/main/1.png"
             alt="Something went wrong">
      </div>
      <div class="uppercase max-sm:gap-0 flex flex-col items-center gap-24 text-4xl font-bold mt-24">
        <div class="flex gap-40 max-sm:gap-0 max-sm:0 max-sm:flex-col max-sm:items-start">
          <div @click="goToAmps" class="h-[540px] w-[430px] max-sm:items-start max-sm:w-screen max-sm:h-[390px] bg-cover bg-[url('http://localhost:81/images/main/amps.png')]" style="cursor: pointer">
            <h3 class="mt-5 ml-5">Amps</h3>
          </div>
          <div @click="goToSpeakers" class="h-[540px] w-[430px] max-sm:h-[390px] bg-cover bg-[url('http://localhost:81/images/main/speakers.png')]" style="cursor: pointer">
            <h3 class="mt-5 ml-5">Speakers</h3>
          </div>
          <div @click="goToHeadphones" class="h-[540px] w-[430px] max-sm:h-[390px] bg-cover max-sm:bg-center bg-[url('http://localhost:81/images/main/headphones.png')]" style="cursor: pointer">
            <h3 class="mt-5 ml-5">Headphones</h3>
          </div>
        </div>
        <div class="flex justify-center gap-40 max-sm:gap-0 max-sm:flex-col max-sm:w-[430px]">
          <div @click="goToCameras" class="h-[540px] w-[430px] max-sm:h-[390px] bg-cover bg-center bg-[url('http://localhost:81/images/main/cameras.png')]" style="cursor: pointer">
            <h3 class="mt-5 ml-5">Cameras</h3>
          </div>
            <div @click="goToAction" class="h-[540px] max-sm:bg-right bg-right w-[430px] max-sm:h-[390px] bg-cover bg-no-repeat bg-[url('http://localhost:81/images/main/action.png')]" style="cursor: pointer">
              <h3 class="mt-5 ml-5">Action Cameras</h3>
            </div>
        </div>
      </div>
      <div class="flex bg-white max-sm:bg-black max-sm:bg-none max-sm:pl-40 text-black py-24 px-40 justify-between max-sm:px-0 max-sm:py-0 max-sm:mt-10 mt-40 uppercase font-bold w-screen">
        <div class="flex max-sm:bg-dark-marsh">
          <div class="flex flex-column items-center max-sm:items-start max-sm:bg-blend-overlay max-sm:gap-0 max-sm:w-[430px] max-sm:flex-row gap-10">
            <div class="text-5xl">
              <h2 class="max-sm:text-white max-sm:self-center max-sm:pl-3">An icon forever</h2>
            </div>
            <div class="text-[13px] max-sm:text-white max-sm:self-center">
              <a href="/#/headphones/item/15">Shop MAJOR V</a>
            </div>
            <div class="bg-cover w-[540px] h-[540px] max-sm:w-[430px] max-sm:h-[390px]">
              <a href="/#/headphones/item/15">
                <img src="http://localhost:81/images/main/majorv.png" alt="">
              </a>
            </div>
          </div>
        </div>
        <div class="flex mt-40 max-sm:mt-10 max-sm:hidden">
          <div class="flex flex-column items-center gap-10 max-sm:block">
            <div class="text-5xl text-center">
              <h2>
                ALL SOUND, NO <br>
                FUSS
              </h2>
            </div>
            <div class="text-[13px]">
              <a href="/#/headphones/item/16">SHOP MAJOR IV</a>
            </div>
            <div class="w-[720px] h-[720px] max-sm:w-[430px] max-sm:h-[390px]">
              <a href="/#/headphones/item/16">
                <img src="http://localhost:81/images/main/minoriv.png" alt="">
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="px-40 mt-20 flex flex-column items-center max-sm:px-0 max-sm:grid max-sm:grid-cols-2 max-sm:pr-[430px]">
        <div class="max-sm:pl-[800px] max-sm:pb-[1300px] max-sm:overflow-wrap">
          <h1 class="text-[120px] max-sm:w-[430px] uppercase font-bold max-sm:text-4xl">In the Spotlight</h1>
        </div>
        <div class="flex gap-40 max-sm:gap-0 max-sm:flex-col">
          <div class="flex flex-column items-center gap-2 w-[640px] max-sm:w-[430px] h-[640px] mt-28 max-sm:px-3 max-sm:mb-3">
            <div class="w-[640px] h-[640px] max-sm:w-[430px] bg-[url('http://localhost:81/images/main/mggold.png')]"></div>
            <div class="uppercase text-2xl self-start font-bold">
              <a href="">MG Gold</a>
            </div>
            <div>
              <p class="text-gray-marsh text-lg self-start font-medium">Simplicity at its best. The MG Gold series has all the features you need for practice or performing on stage.</p>
            </div>
            <div class="self-start font-medium uppercase">
              <a href="">Explore the range</a>
            </div>
          </div>

          <div class="flex flex-column items-center gap-2 w-[640px] h-[640px] max-sm:px-3 max-sm:w-[430px]">
            <div class="w-[640px] h-[640px] bg-cover bg-[url('http://localhost:81/images/main/angus.png')]"></div>
            <div class="uppercase text-2xl self-start font-bold">
              <a href="">GUITAR HEROES: ANGUS YOUNG</a>
            </div>
            <div>
              <p class="text-gray-marsh text-lg self-start font-medium">Get to know the AC/DC guitarist who shredded and duck-walked his way into the Rock and Roll Hall of Fame.</p>
            </div>
            <div class="self-start font-medium uppercase">
              <a href="">Dive In</a>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-column items-start px-40 gap-2 my-16 max-sm:my-8">
        <div class="w-[1600px] bg-no-repeat max-sm:w-[430px] max-sm:h-[390px] h-[720px] bg-cover bg-[url('http://localhost:81/images/main/vinyl.png')]"></div>
        <div class="uppercase text-2xl self-start font-bold max-sm:p-3">
          <a href="">UNITED THROUGH MUSIC</a>
        </div>
        <div class="max-sm:p-3">
          <p class="text-gray-marsh text-lg font-medium self-start">Koko would be nothing without the music community. That’s why <br>
            we’re committed to amplifying the voices of up-and-coming artists <br>
            and grassroots collectives from across the world.</p>
        </div>
        <div class="self-start font-medium uppercase max-sm:px-3">
          <a href="">Explore</a>
        </div>
      </div>
    </div>
  </div>
  <ScrollButton/>
  <Footer/>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue"
import ScrollButton from "@/components/ScrollButton.vue"
import ampsView from "@/components/AmpsView.vue";
export default {
  computed: {
    ampsView() {
      return ampsView
    }
  },
  components: {
    Header,
    Footer,
    ScrollButton
  },
  methods: {
    goToAmps() {
      this.$router.push("/amps");
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

<style>

</style>
