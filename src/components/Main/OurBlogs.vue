<script>
import AppMain from './AppMain.vue';

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
            <div class="img_card_container">
              <img src="../../assets/images/artist-blog-01-480x325.jpg" class="card-img-top" alt="...">
            </div>
            <div class="card-body">
              <h6>BUSINESS</h6>

              <!-- Titolo corso con link -->
              <a href="#">
                <h5 class="card-title">Ten Benefits Of Rentals That May Change Your Perspective</h5>
              </a>
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
            <div class="img_card_container">
              <img src="../../assets/images/artist-blog-02-480x325.jpg" class="card-img-top" alt="...">              
            </div>

            <div class="card-body">
              <h6>BUSINESS</h6>

               <!-- Titolo corso con link -->
              <a href="https://maxcoach.thememove.com/main/10-things-successful-mompreneurs-do-different/">
                <h5 class="card-title">10 Things Successful Mompreneurs Do Different</h5>
              </a>
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
            <div class="img_card_container">
              <img src="../../assets/images/artist-blog-03-480x325.jpeg" class="card-img-top" alt="...">              
            </div>


            <div class="card-body">
              <h6>BUSINESS</h6>

               <!-- Titolo corso con link -->
              <a href="https://maxcoach.thememove.com/main/how-stay-calm-from-the-first-time/">
                <h5 class="card-title">How Stay Calm from the First Time.</h5>
              </a>
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
  background-color: $WarmGrey;
  height: 680px;
  padding: 25px 150px;
}

.my_container {
  @include my_container;
  padding: 30px 0px;
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

.img_card_container {
  overflow: hidden;
  object-fit: cover;
}

.card:hover img {
  width: 100%;
  height: 100%;
  transform: scale(1.1);
  transition: transform 0.5s ease-in-out; 
}
</style>
