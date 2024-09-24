<script>
import { store } from '../../store';
import AppMain from './AppMain.vue';

export default {
  data() {
    return {
      store
    }
  },
  methods: {

    numberOfSlides() {
      return Math.ceil(this.store.CourseCards.length / 3);
    },
    
     // Per mostrare nel carosello tre cards alla volta
    getCoursesGroup(index) {
      const start = index * 3; // Ogni slide mostra 3 corsi
      return this.store.CourseCards.slice(start, start + 3); 
    },
    nextSlide() {
      if (this.currentIndex < this.numberOfSlides() - 1) {
        this.currentIndex++; // Passa al prossimo gruppo di corsi
      } else {
        this.currentIndex = 0; 
      }
    },
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--; 
      } else {
        this.currentIndex = this.numberOfSlides() - 1; 
      }
    },
  },
}
</script>

<template>
  <section>
      <div class="my_container">
        <div>
         <!-- Sottotitolo della section -->
         <h6 class="text-uppercase">
            Join MaxCoach at best
          </h6>

          <!-- Titolo principale della section -->
          <h1>
            Latest Online <span>Courses</span>
          </h1>
        </div>


        <!-- Carosello con i corsi online disponibili -->
        <!-- Container carosello:class="{ active: i === 0 }" -->
        <div class="carousel slide"> 

          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>


          <!-- Dentro il carosello -->
            <div class="carousel-inner">
              
              <!-- Singolo elemento dentro il carosello -->
              <div class="carousel-item" >

                <!-- Tre corsi visibili in pagina -->
                <div class="row">
                  <div class="col-md-4">

                    <!-- Card del singolo corso -->
                    <div class="card" v-for="(course, i) in store.CourseCards" :key="i">
                      <!-- Immagine della card -->
                      <img :src="course.image" class="d-block w-100" alt="course image">

                      <!-- Corpo della card -->
                      <div class="card-body">
                        <div>
                          {{ course.price }}
                        </div>
                        <div>
                          <h5>
                            {{ course.course_name }}
                          </h5>
                        </div>
                        <span>
                          {{ course.lessons }}
                        </span>
                        <span>
                          {{ course.students }}
                        </span>

                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </div>
        </div>
        <div class="bottom_text">
          <h6>
            Control your personal reference settings to get notified about <br>
            appropriate courses. 
            <span>
              <a href="#">
                View all courses &#8594;
              </a>
            </span>
          </h6>
        </div>
      </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as *;

section {
  @include section;
  height: 800px
}

.my_container {
  @include my_container;
  text-align: center;

  div {

    h6 {
      @include small_title;
    }
    h1 {
      @include title-bold-black-green
    }

    p {
      @include p_section;
    }
  }

  .active {
    display: inline-block;
  }
}

// Indicatori carosello
.carousel-indicators {


  button {
  width: 10px;
  height: 10px;
  border-radius: 50%;   
  }

}

.bottom_text {
  padding: 10px;
  color: $DarkGrey;

  span {
    font-family: 'Gilroy-Bold', sans-serif;
    color: black;
  }
}
</style>
