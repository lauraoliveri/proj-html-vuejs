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
        <div>

        </div>
        <div>
          testo
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

}

</style>
