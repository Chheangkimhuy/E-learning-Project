<template>
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"
  rel="stylesheet"
/>
  <div class="container-fluid bg-darkblue-800 font-body">
    <div class="container">
      <div class="row m-0">
        <!-- Quick Link Section -->
        <div class="col-12 col-lg-6 py-5 d-flex flex-wrap p-0">
          <div class="col-6 col-md-6 py-lg-6 py-2 font-body text-light">
            <h3 class="fw-bold">Quick Link</h3>
            <ul class="list-unstyled">
              <li class="py-2">
                <a href="#" class="nav-link fs-5 fw-medium">About</a>
              </li>
              <li class="py-2">
                <a href="#" class="nav-link fs-5 fw-medium">Course</a>
              </li>
              <li class="py-2">
                <a href="#" class="nav-link fs-5 fw-medium">Contact</a>
              </li>
            </ul>
          </div>
          <!-- Contact Section -->
          <div class="col-6 col-md-6 py-lg-6 py-2 font-body text-light">
            <h3 class="fw-bold">Contact</h3>
            <ul class="list-unstyled">
              <li class="fw-medium">
                <i class="bi bi-geo-alt-fill fs-4 me-2"></i>
                385 Street, Phnom Penh, Cambodia
              </li>
              <li class="fw-medium">
                <i class="bi bi-telephone-fill fs-4 me-2"></i>
                +855 0884907877
              </li>
              <li class="fw-medium text-light">
                <i class="bi bi-envelope-fill fs-4 me-2"></i>
                chhkimhuy56@gmail.com
              </li>
            </ul>
          </div>
        </div>
        <!-- Newsletter Subscription Section -->
        <div class="col-lg-6 py-lg-5 py-5 text-light">
          <h3>Subscribe to our Newsletter</h3>
          <p class="fw-bold">
            Subscribe now and join our growing community of learners committed to
            lifelong learning.
          </p>
          <form action="">
            <div class="input-group">
              <input
                type="email"
                name="email"
                id="email"
                class="form-control rounded-0 shadow border-0 py-3"
                placeholder="Please Enter your Email Address"
                required
              />
              <button
                type="submit"
                class="btn btn-success border-0 text-light  rounded-0"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <!-- Footer Section -->
        <div class="text-light border-top pt-3 text-start">
          <p>Secret Coder, All rights reserved.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
