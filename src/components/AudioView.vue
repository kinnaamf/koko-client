<template>
  <Header/>
  <div class="bg-dark-marsh px-40 max-sm:px-0 uppercase text-white py-40">
    <div>
      <h2 class="text-8xl font-bold max-sm:text-5xl max-sm:text-center">Audio Devices</h2>
    </div>
    <div class="flex flex-col gap-20 mt-20">
      <div class="flex justify-between">
        <div>
          <a href="/#/amps">
            <img src="https://s3-alpha-sig.figma.com/img/0397/d623/464f4bd41a2a1a35943bcbf38bc6e6ae?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZCYn6wa39WAuzUe6IQQorSAhNV3Qz5fzHw3cSpdFIlI09oNacLLbVeQvSpJpnfJRu4e9SUP~14qowvtduL9qZn7nMieCFo5DEGLdqz-a7ER~85T-KaZB9pvQm~6rnVv6StvRvcK66QwMZ8uqctINOXxEoPP6mUZTaZ6dFS5QVCig58g8i7SbxHsox3YbfaEQdCiB8kcr4JwZ9x-3Bep4WB3MIZQV1y3L3Oqnc3HThw2aMYHFw5e~Ml7EW18HpKrJKWYftssHdmApHB3uPoF6RVbBd6Qr0mA1GWF8YGy-W~CkI5qmcrkSX91cpvzPdcLtzPu~OWoCfPlacd9FFpqz9Q__"
                 alt=""
                 class="w-1200px h-430px max-sm:w-[200px] max-sm:h-[80px]" >
          </a>
        </div>
        <div class="flex flex-col gap-5 max-sm:p-3">
          <a href="/#/amps" class="text-right max-sm:text-left">
            <h3 class="text-7xl font-bold max-sm:text-2xl">Amps</h3>
            <h4 class="font-bold text-zinc-600 max-sm:text-sm">View all amps page</h4>
          </a>
        </div>
      </div>
      <div class="flex justify-between max-sm:p-3">
        <div class="flex flex-col gap-5 max-sm:text-left">
          <a href="/#/speakers" class="text-left">
            <h3 class="text-7xl font-bold max-sm:text-2xl">Speakers</h3>
            <h4 class="font-bold text-zinc-600 max-sm:text-sm">EXPLORE ALL SPEAKERS PAGE</h4>
          </a>
        </div>
        <div>
          <a href="/#/speakers">
            <img src="https://s3-alpha-sig.figma.com/img/31ba/450e/f883aeabfca5d3e81b79b092acc3b162?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kL3B7RQno3l2xBlbiqSsL9KA4VdgLDs-5McRH5M23bSD9g21aTeHEHzlztCdaqsu01JkmIeYLbb75eb4K1jfIEJ1DqrZbPtBxSx1LYDRyggr6L-ucAHhSMTKTM0Zh4GBqwCT6K-0FFQAfcb3PSSREUf7e9XM~Y7w1ZvyYoIvzGMeOVN-iXj6-bOF43l6uklef7-7GTr8kk9mRAmXObjQ91MToPLvZqsZnB6BBHNCQfCa7sgF~76TXHITA6TsmLA5RKwQrXQ5KOdDs8KSWsQfmQgtn5CjcdT8hY53nLCFePizvwrPHe0EiqaEuB6mVoufVINmTHraLkdFS4myKDc1GQ__"
                 alt=""
                 class="w-1200px h-430px max-sm:w-[200px] max-sm:h-[80px]" >
          </a>
        </div>
      </div>
      <div class="flex justify-between max-sm:p-3">
        <div>
          <a href="/#/headphones">
            <img src="https://s3-alpha-sig.figma.com/img/075e/a685/7b9b911a0db77332f2e2cf31b15ce389?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iep4lYn2MjNbae5HV5T-YuhayVKVB1iAsIkFlQlNZflofQcARfmfdKWAhc-8pFjmesv1a4f3XVyrcWi~PgKyLp030ivMRDiegEKv1r3vhc~KlQ~YxaELkopXTqtUpj9ZE3Ii76oNSr9v0vCMJx6keHorK9CJRj2b2fFNAk-3kaJ8T42F43dCNDM-C92S94xzjCTvRlchKur9gHa9CHidZHg7NFG9nm-xlKgpsj-1gedH12qjQW~-OQk49UKFPP-RvkQxDEKiBY6TS6xQbwhgvT5zxAgMGZlxVDvkfDYbddzvjlLu3oPKbzW1Xs-VYnrPQttiETFByYrlD0cP6lIU-g__"
                 alt=""
                 class="w-1200px h-430px max-sm:w-[200px] max-sm:h-[80px]" >
          </a>
        </div>
        <div class="flex flex-col gap-5">
          <a href="/#/headphones" class="text-right">
            <h3 class="text-7xl font-bold max-sm:text-2xl">Headphones</h3>
            <h4 class="font-bold text-zinc-600 max-sm:text-sm">DIVE IN ALL HEADPHONES PAGE</h4>
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