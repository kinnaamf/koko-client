<template>
  <LRView></LRView>
  <div class="flex justify-center items-center w-full h-screen">
    <section class="py-3 py-md-5 py-xl-8">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="mb-5">
              <h2 class="display-3 fw-semibold text-center">Sign In</h2>
              <p class="text-center m-0 fw-medium text-gray-400 mt-5">Don't have an account? <a href="/#/register" class="text-blue-700 underline">Sign Up</a></p>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-12 col-lg-10 col-xl-8">
            <div class="row gy-5 justify-content-center">
              <div class="col-12 col-lg-5">
                <form @submit.prevent="login">
                  <div class="row gy-3 overflow-hidden">
                    <div class="col-32 w-screen">
                      <div class="form-floating mb-3">
                        <input type="text" class="form-control border-0 border-bottom rounded-0" v-model="username" name="username" id="username" required>
                        <label for="username" class="form-label">Username</label>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-floating mb-3">
                        <input type="password" class="form-control border-0 border-bottom rounded-0" v-model="password" name="password" id="password" required>
                        <label for="password" class="form-label">Password</label>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="d-grid">
                        <button class="btn btn-lg btn-dark rounded-0 fs-6" type="submit">Log In</button>
                      </div>
                    </div>
                  </div>
                </form>
                <div v-if="errorMessage" class="text-danger mt-2">{{ errorMessage }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HeaderC from "@/components/HeaderC.vue";
import LRView from "@/components/LRView.vue";

import { useRouter } from "vue-router"; // Для редиректа

export default {
  components: { LRView, HeaderC },
  data() {
    return {
      username: '',
      password: '',
      errorMessage: '',
    };
  },
  methods: {

  },
};
</script>

<style scoped>
</style>
