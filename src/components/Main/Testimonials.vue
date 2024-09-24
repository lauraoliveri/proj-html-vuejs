<script>

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
        <div class="my_container d-flex">
          <!-- Colonna a sinistra -->
          <div class="left_col pe-4">
            <div>
              <!-- Sottotitolo della section -->
              <h6 class="text-uppercase">
                Testimonials
              </h6>

              <!-- Titolo principale della section -->
              <h1>
                Why Do People <br>
                <span>*Hearts*</span> Us?
              </h1>

              <!-- Paragrafo della section -->
              <p>
                Seeking for verbals of our service quality? Find them here. <br>
                Everything is transparent and straightforward for your sense <br>
                of jusitifcation.
              </p>
            </div>

            <!-- Link -->
            <div>
              <a href="#">
                <span class="bold_link text-decoration-underline">
                  View all &#8594;
                </span>
              </a>
            </div>
          </div>

          <!-- Colonna destra con testimonianze -->
          <div class="right_col">
            <div class="ps-4">
              <div>
                <h5 class="text-bold">
                Professional team of specialists and passionate <br>
                mentors at reach
              </h5>
              </div>
              <div>
                <p>
                  I need to get a certification for English proficiency and <br>
                  MaxCoach is my best choice. Their tutors are smart and <br>
                  professional when dealing with students.
                </p>
              </div>

              <!-- Informazioni del testimone -->
              <div class="d-flex testimonial_info">
                <div>
                  <img src="../../assets/images/testimonial-avata-01.jpg" alt="Testimonial pic">
                </div>
                <div>
                  <div class="text-uppercase">
                    Madley Pondor
                  </div>
                  <div>
                    / IT Specialist
                  </div>
                </div>
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
  height: 550px;
  padding: 10px 150px;
}

.my_container {
  @include my_container;
}

// Colonna sinistra

.left_col {
  color: $DarkGrey;
  
  div {
    line-height: 1.20;
    
    h6 {
      @include small_title;
    }

    h1 {
      @include title-bold-black-green;
    }

    p {
      @include p_section;
    }
  }
}

.bold_link {
  font-family: 'Gilroy-Bold', sans-serif;
}

// Colonna destra con testimonials

.right_col {
  width: 700px;
  border-radius: 2px;
  padding: 30px;
  margin-left: 70px;
  box-shadow: 2px 2px 20px rgba(13, 13, 13, 0.3); /* Ombra semplice */

  div {
    line-height: 1.20;
    
    h5 {
      font-family: 'Gilroy-Bold', sans-serif;
      line-height: 1.60;
    }

    p {
      color: $DarkGrey;
      font-size:larger;
      @include p_section;
    }
  }

  // Testimonial pic
  img {
    width: 70px;
    border-radius: 50%;
    margin-right: 40px;
  }

  .testimonial_info {
    padding-top: 30px;
  }
}

</style>
