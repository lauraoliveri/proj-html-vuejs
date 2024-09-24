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
              Everything in <span>MaxCoach</span>
            </h6>

            <!-- Titolo principale della section -->
            <h1>
              Learn about our <br>
              <span>Work Culture</span> at <br>
              MaxCoach
            </h1>

            <!-- Paragrafo della section -->
            <p>
              Spend some time to visit our website or head office and <br>
              discover our current courses, enrollment procedure, and <br>
              registration deadline. We're opening new classes every <br>
              beginning of each month. 
            </p>
          </div>

          <!-- Link della guida -->
          <div>
            <a href="#">
              <span>
                Have questions?
              </span>
              <span class="bold_link">
                Get Free Guide &#8594;
              </span>
            </a>
          </div>
        </div>

        <!-- Colonna destra con immagini -->
        <div class="right_col">
          <div class="ps-4">
            <img src="../../assets/images/stock-full-hd-10-ohki1ayywq3cqutettrncduujpoaorifqu4relt2ts.jpg">
          </div>
        </div>

      </div>

      <!-- Numeri e statistiche sotto al centro -->
      <div class="container text-center">
          <div class="row my_row">
            <div class="col">
              <div class="bold_text_green">
                3.092+
              </div>
              <div class="text-uppercase under_uppercase">
                Enrolled Learners
              </div>
            </div>
            <div class="col">
              <div class="bold_text_green">
                1.926 
              </div>
              <div class="text-uppercase under_uppercase">
                Finished Sessions
              </div>
            </div>
            <div class="col">
              <div  class="bold_text_green">
                100% 
              </div>
              <div class="text-uppercase under_uppercase">
                Satisfaction rate
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
  height: 800px;
  padding: 150px;
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

// Colonna destra

.right_col {
  padding-left: 200px;

  div {
    text-align: center;

    img {
      border-radius: 5px;
    }
  }
}

// Statistiche e numeri 

.my_row {
  margin-top: 100px;


  .bold_text_green {
    color: $MainGreen;
    font-family: 'Gilroy-Bold', sans-serif;
    font-size: 50px;
  }

  .under_uppercase {
    color: $DarkGrey;
    font-weight: bolder;
    letter-spacing: 2px;
  }
}

</style>
