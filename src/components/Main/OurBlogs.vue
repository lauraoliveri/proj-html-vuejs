<script>
import AppMain from './AppMain.vue';
export default {
  data() {
    return { 
     
    }
  }
}
</script>

<template>
  <section>
      <!-- Container di tutto -->
      <div class="my_container">
        <!-- Titoli -->
        <div class="text-center">
              <!-- Sottotitolo della section -->
              <h6 class="text-uppercase">
                Read for more joyment
              </h6>

              <!-- Titolo principale della section -->
              <h1>
                Latest From <span>Our Blogs</span>
              </h1>
        </div>

        <!-- Cards blogs -->
        <div class="d-flex p-5 justify-content-center">
          <!-- Card -->
          <div class="card me-5" style="width: 25rem;">
            <img src="../../assets/images/artist-blog-01-480x325.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h6>BUSINESS</h6>
              <h5 class="card-title">
                Ten Benefits Of Rentals That May Change Your Perspective
              </h5>
              <span class="card-text">
                <i class="bi bi-calendar"></i> Dec 28, 2020
              </span>
              <span class="card-text">
                <i class="bi bi-eye"></i> 3,455 views
              </span>
            </div>
          </div>

          <!-- Card -->
          <div class="card me-5" style="width: 25rem;">
            <img src="../../assets/images/artist-blog-02-480x325.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h6>BUSINESS</h6>
              <h5 class="card-title">10 Things Successful Mompreneurs Do Different</h5>
              <span class="card-text">
                <i class="bi bi-calendar"></i> Dec 28, 2020
              </span>
              <span class="card-text">
                <i class="bi bi-eye"></i> 3,455 views
              </span>
            </div>
          </div>

          <!-- Card -->
          <div class="card" style="width: 25rem;">
            <img src="../../assets/images/artist-blog-03-480x325.jpeg" class="card-img-top" alt="...">
            <div class="card-body">
              <h6>BUSINESS</h6>
              <h5 class="card-title">How Stay Calm from the First Time.</h5>
              <span class="card-text">
                <i class="bi bi-calendar"></i> Dec 28, 2020
              </span>
              <span class="card-text">
                <i class="bi bi-eye"></i> 3,455 views
              </span>
            </div>
          </div>

        </div>
      </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as *;

section {
  @include section;
  height: 600px;
  padding: 10px 150px;
}

.my_container {
  @include my_container;
}

h6 {
  @include small_title;
}

h5 {
  font-family: 'Gilroy-Bold', sans-serif;
  line-height: 1.60;
}


h1 {
  @include title-bold-black-green
}

p {
  @include p_section;
}

span {
  font-size: smaller;
  margin-right: 7px;
  color: $DarkGrey;
}

.card {
  border: 0;
}
</style>
