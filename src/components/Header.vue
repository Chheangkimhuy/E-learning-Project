<template>
  <nav class="container-fluid p-0 navbar shadow font-navbar fixed-top bg-light">
    <div class="container py-2">
      <a href="" class="fs-2 text-dark text-decoration-none fw-bold">Logo</a>
      <button
        class="d-lg-none d-block border-0 btn"
        data-bs-toggle="offcanvas"
        data-bs-target="#sideBar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="d-lg-block d-none">
        <ul class="nav align-items-center">
          <li class="px-3">
            <router-link to="/" class="text-dark text-decoration-none">
              HOME</router-link
            >
          </li>
          <li class="px-3">
            <a href="" class="text-dark text-decoration-none"> ABOUT</a>
          </li>
          <li class="px-3">
            <router-link
              to="/course/:id"
              class="text-dark text-decoration-none"
            >
              COURSES</router-link
            >
          </li>
          <li class="px-3">
            <a href="" class="text-dark text-decoration-none"> CONTACT</a>
          </li>
          <li v-if="isloggin">
            <a href="" class="text-dark text-decoration-none">
              <div
                class="bg-danger rounded-circle overflow-hidden"
                style="width: 50px; height: 50px"
              >
                <img src="" alt="" class="w-100 h-100 object-fit-cover" />
              </div>
            </a>
          </li>
          <li v-else>
            <button class="btn text-light bg-darkblue-700 rounded-0 border">
              Register
            </button>
            <button class="btn rounded-0 border">Login</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="offcanvas offcanvas-start" id="sideBar">
    <div class="offcanvas-header shadow p-2 px-3">
      <a href="" class="fs-2 text-dark text-decoration-none fw-bold">Logo</a>
      <button
        class="btn-close shadow-none"
        data-bs-dismiss="offcanvas"
      ></button>
    </div>
    <div class="offcanvas-body">
      <ul class="list-unstyled align-items-center">
        <li class="py-2 border-bottom pb-3">
          <a href="" class="text-dark text-decoration-none"> HOME</a>
        </li>
        <li class="py-2 border-bottom pb-3">
          <a href="" class="text-dark text-decoration-none"> ABOUT</a>
        </li>
        <li class="py-2 border-bottom pb-3">
          <router-link to="/course/:id" class="text-dark text-decoration-none">
            COURSES</router-link
          >
        </li>
        <li class="py-2 border-bottom pb-3">
          <a href="" class="text-dark text-decoration-none"> CONTACT</a>
        </li>
        <li v-if="isloggin">
          <a href="" class="text-dark text-decoration-none">
            <div
              class="bg-danger rounded-circle overflow-hidden"
              style="width: 50px; height: 50px"
            >
              <img src="" alt="" class="w-100 h-100 object-fit-cover" />
            </div>
          </a>
        </li>
        <li v-else class="py-3">
          <button class="btn text-light bg-darkblue-700 rounded-0 border">
            Register
          </button>
          <button class="btn rounded-0 border">Login</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
const isloggin = ref(false);
</script>

<style lang="scss" scoped>
</style>