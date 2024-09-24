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
    <div class="my_container text-center">
      <div>
        <!-- Titolo principale della section -->
        <h1>
            Subscribe <span>Newsletter</span>
        </h1>
      </div>

      <!-- Descrizione -->
      <div>
        <p>
          Enter your email address to register to our newsletter subscription <br>
          delivered on a regular basis!
        </p>
      </div>
      
      <!-- Form per imettere l'email per l'iscrizione alla newsletter -->
      <div>
        <form>
          <input type="email" class="form-control-lg" placeholder="Enter your email">
          <button class="btn" type="submit">
            Subscribe
          </button>
        </form>
  

      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as *;

section {
  @include section;
  height: 350px;
}

.my_container {
  @include my_container;
  text-align: center;
  color: $DarkGrey;

  div {
    margin-bottom: 20px;

    h1 {
      @include title-bold-black-green
    }

    p {
      @include p_section;
      margin-bottom: 40px;
    }

  }
}

form {
  max-width: 600px;
  text-align: center;
  background-color: $CoolGrey;
  padding: 2px;
  border-radius: 5px;
  margin: 0 auto;


  input[type="email"]  {
    width: calc(100% - 150px);
    background: transparent;
    padding: 15px 8px;
    color: inherit;
    border: 1px solid transparent;
    border-radius: inherit;
    font-size: 15px;
  }

  button {
    width: 150px;
    height: 100%;
    padding: 15px;
    background-color: $MainGreen;
    color: $White;
    font-weight: bold;
    font-size: medium;
    border-radius: inherit;
    cursor: pointer;
  }
}

</style>
