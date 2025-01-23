<script setup>
import { UseMyStore } from '../store/StoreAPI';
const store = UseMyStore();
const {items,loading,error} = store;
console.log(items,loading,error);
</script>
<template>
  <div class="container-fluid p-0">
    <!-- carousels -->
    <div class="w-100">
      <div
        id="carouselExampleInterval"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div
            class="carousel-item active bg-info"
            style="height: 80vh"
            data-bs-interval="10000"
          >
            <div
              class="z-3 position-absolute col-10 col-md-7 col-lg-4"
              style="top: 30%; left: 13%"
            >
              <p class="text-primary">Wellcome to My Website</p>
              <h1
                class="text-light fw-bold"
                style="font-size: camp(12px, 3vw, 50px)"
              >
                Interactive learning Experience
              </h1>
              <p class="fs-medium text-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                eveniet dolores quaerat a ea possimus!
              </p>
              <div>
                <button class="btn btn-success px-3 py-3 rounded-0 me-3">
                  Join Now
                </button>
                <button class="btn btn-outline-light px-3 py-3">
                  Read More
                </button>
              </div>
            </div>
            <img
              src="https://www.shutterstock.com/image-photo/teacher-giving-computer-science-lecture-600nw-2102457352.jpg"
              class="d-block w-100 h-100 object-fit-cover"
              style="filter: brightness(70%)"
              alt="..."
            />
          </div>
          <div
            class="carousel-item bg-success"
            style="height: 80vh"
            data-bs-interval="2000"
          >
            <img src="..." class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item bg-secondary" style="height: 80vh">
            <img src="..." class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <!-- Service -->
    <div class="container my-3 font-body">
      <h1 class="text-center text-info mt-3 fw-bold">
        Invest in your professional goals with Secret Coder
      </h1>
      <p class="text-center">
        Get unlimited access to over 90% of courses, Projects, Specializations,
        and Professional Certificates on Coursera, taught by top instructors.
      </p>
      <div class="row m-0 mt-4 my-5">
        <div class="col-12 col-md-6 col-lg-3 px-3 my-2">
          <div class="w-100 text-center py-4 px-3 shadow scale transition">
            <img src="../assets/icone/hat.png" alt="" width="180px" />
            <p class="text-limit">
              <span class="fw-bold fs-5">Greatduate </span> <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
              eligendi, saepe, incidunt voluptates cum, totam voluptatem
              distinctio obcaecati nemo at doloribus! Est nulla eum inventore.
            </p>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3 px-3 my-2">
          <div class="w-100 text-center py-4 px-3 shadow scale transition">
            <img src="../assets/icone/php.png" alt="" width="180px" />
            <p class="text-limit">
              <span class="fw-bold fs-5">Course Learning</span> <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
              eligendi, saepe, incidunt voluptates cum, totam voluptatem
              distinctio obcaecati nemo at doloribus! Est nulla eum inventore.
            </p>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3 px-3 my-2">
          <div class="w-100 text-center py-4 px-3 shadow scale transition">
            <img src="../assets/icone/vue.png" alt="" width="180px" />
            <p class="text-limit">
              <span class="fw-bold fs-5">Course Learning</span> <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
              eligendi, saepe, incidunt voluptates cum, totam voluptatem
            </p>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3 px-3 my-2">
          <div class="w-100 text-center py-4 px-3 shadow scale transition">
            <img src="../assets/icone/js.png" alt="" width="180px" />
            <p class="text-limit">
              <span class="fw-bold fs-5">Course Learning</span> <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
              eligendi, saepe, incidunt voluptates cum, totam voluptatem
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="container p-0 font-body py-4">
      <!-- pic and des 1 -->
      <div class="row mx-0">
        <div class="col-lg-6 col-12 col-md-12">
          <img
            src="https://www.teacheracademy.eu/wp-content/uploads/2021/10/successful-teacher-1-608x405.jpg"
            alt=""
            class="w-100 h-100 object-fit-cover"
          />
        </div>
        <div class="col-12 col-lg-6 col-md-12 shadow py-3">
          <div class="d-flex aling-items-center">
            <h3 class="fw-bold col-4 col-md-2 col-lg-3">About Us</h3>
            <div class="mb-3 col-8 col-md-10 col-lg-9 pt-2">
              <div class="bg-dark" style="height: 2px; width: 10%"></div>
              <div class="bg-dark mt-1" style="height: 4px; width: 20%"></div>
            </div>
          </div>
          <div>
            <h3>E-Learning</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              iusto eum cum, eaque necessitatibus placeat. Quaerat veniam
              inventore atque rem nam reiciendis doloremque nemo nisi distinctio
              magni culpa odio quibusdam officia sequi consequuntur, minima
              ducimus omnis facilis perspiciatis perferendis voluptatibus.
              Voluptatem repudiandae quae harum, ullam aut itaque animi ex dicta
              consequuntur vero facilis, nostrum debitis commodi suscipit iusto
              voluptas expedita neque eum sed. Quo maxime, recusandae eveniet
              eius, iusto accusantium illum facere expedita beatae repellat,
              dolores commodi.
            </p>
            <button class="btn btn-outline-success py-2 px-4">Learn Now</button>
          </div>
        </div>
      </div>
      <!-- pic and des 2 -->
      <div class="row mx-0 mt-3">
        <div class="col-12 col-lg-6 col-md-12 py-3 shadow">
          <div class="d-flex aling-items-center">
            <h3 class="fw-bold col-4 col-md-2 col-lg-3">About Us</h3>
            <div class="mb-3 col-8 col-md-10 col-lg-9 pt-2">
              <div class="bg-dark" style="height: 2px; width: 10%"></div>
              <div class="bg-dark mt-1" style="height: 4px; width: 20%"></div>
            </div>
          </div>
          <div>
            <h3>E-Learning</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              iusto eum cum, eaque necessitatibus placeat. Quaerat veniam
              inventore atque rem nam reiciendis doloremque nemo nisi distinctio
              magni culpa odio quibusdam officia sequi consequuntur, minima
              ducimus omnis facilis perspiciatis perferendis voluptatibus.
              Voluptatem repudiandae quae harum, ullam aut itaque animi ex dicta
              consequuntur vero facilis, nostrum debitis commodi suscipit iusto
              voluptas expedita neque eum sed. Quo maxime, recusandae eveniet
              eius, iusto accusantium illum facere expedita beatae repellat,
              dolores commodi.
            </p>
            <button class="btn btn-outline-success py-2 px-4">Learn Now</button>
          </div>
        </div>
        <div class="col-lg-6 col-12 col-md-12 ">
          <img
            src="https://www.teacheracademy.eu/wp-content/uploads/2021/10/successful-teacher-1-608x405.jpg"
            alt=""
            class="w-100 h-100 object-fit-cover"
          />
        </div>
      </div>
    </div>
  </div>
</template>