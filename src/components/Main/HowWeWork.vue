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

      <!-- Colonna sinistra con immagini -->
      <div class="left_col">
        <div>
          <a href="#">
            <img src="../../assets/images/stock-full-hd-11-670x450.jpg">
            <!-- PNG Youtube -->
            <img src="../../assets/images/icon-youtube-play.png" class="png_centered">
          </a>
        </div>
      </div>

      <!-- Colonna a destra -->
      <div class="right_col pe-4">
        <div>
          <!-- Sottotitolo della section -->
          <h6 class="text-uppercase">
            how we work
          </h6>

          <!-- Titolo principale della section -->
          <h1>
            Upgrade Your <br>
            Skills <span>Upgrade <br>
            Your Life</span>
          </h1>

          <!-- Paragrafo della section -->
          <p>
           Opening up more opportunities in front of you to get the <br>
           ticket to more enjoyable door in life. Getting equipped with <br>
           new skills for new sets of insights into your career. <br>
           MaxCoach accompany learners in every stage of learning. 
          </p>
        </div>

        <!-- Link della guida -->
        <div>
          <a href="#">
            <span class="bold_link">
              Download Free Guidebook &#8594;
            </span>
          </a>
        </div>
      </div>

      

    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as *;

section {
  width: 100vw;
  height: 700px;
  background-color: $White;
  padding: 50px 150px;
}

.my_container {
  width: 90%;
  margin: 0 auto;
  text-align: left;
}

// Colonna sinistra

.left_col {

  div {
    position: relative;
    text-align: center;
    padding-right: 200px;

    // position relative per centrare il png
    a {
      position: relative;

      img {
        border-radius: 5px;
      }
    }

  }

  .png_centered {

    // position absolute per centrare il png
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

}


// Colonna destra

.right_col {
  color: $DarkGrey;
  
  div {
    line-height: 1.20;
    
    h6 {

      span {
        font-weight: bolder;
      }
    }

    h1 {
      font-family: 'Gilroy-Bold', sans-serif;
      font-size: 50px;
      color: black;

      span {
        color: $MainGreen;
        font-family: 'Gilroy-Regular', sans-serif;
      }
    }

    p {
      line-height: 1.60;
    }
  }
}

.bold_link {
  font-family: 'Gilroy-Bold', sans-serif;
}

</style>
