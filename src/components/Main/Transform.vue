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
      <div class="my_container d-flex">

        <!-- Colonna sinistra con immagini -->
        <div class="left_col">
          <div>
            <img src="../../assets/images/home-3-team-image.png">
          </div>
        </div>

        <!-- Colonna a destra -->
        <div class="d-flex align-items-center">
          <div class="right_col pe-4">
            <div>
              <!-- Sottotitolo della section -->
              <h6 class="text-uppercase">
                Everything in <span>MaxCoach</span>
              </h6>

              <!-- Titolo principale della section -->
              <h1>
                We're Here To <br>
                <span>Transform</span> You!
              </h1>

              <!-- Paragrafo della section -->
              <p>
                As learners, people can enjoy great companionship from <br>
                MaxCoach mentors and educators. We can help you <br>
                develop and grow at your best.
              </p>
            </div>

            <!-- Link della guida -->
            <div>
              <a href="#">
                <button type="button" class="btn btn-primary">
                  Get Free Guide
                </button>
              </a>
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
  padding: 10px 150px;
  height: 650px;
}

.my_container {
  @include my_container;

}

// Colonna sinistra con foto
.left_col {
  div {
    position: relative;
    text-align: center;
  }
}

// Colonna destra
.right_col {
  padding-left: 150px;
  color: $DarkGrey;
  
  div {
    line-height: 1.20;
    
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
}

// Button
.btn-primary {
  background-color: $MainGreen;
  color: $White;
  margin-top: 25px;
  padding: 18px 55px;
  border: 0;
  font-size: 14px;
  font-weight: bold;

  &:hover {
    background-color:$White;
    color: $MainGreen;
  }
}

</style>
