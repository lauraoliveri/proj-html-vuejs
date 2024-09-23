<script>

export default {
  data() {
    return { 
     
    }
  }
}
</script>

<template>
  <section class="d-flex align-items-center justify-content-center">
      <div>
          <h3>
            Commence Business
          </h3>
          <h2>
            Distant Mentoring Program
          </h2>
          <button type="button" class="btn btn-primary">
            Download free guidebook &#8594;
          </button>
      </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as *;

section {
  height: calc(100vh - 150px);
  background-image: url(../../assets/images/home-3-hero-bg.jpg);
  background-size: cover;
  color: white;
  text-align: center;

  h3 {
    font-size: 30px;
  }

  h2 {
    font-size: 60px;
    padding-bottom: 20px;
  }

  .btn-primary {
    background-color: white;
    color: $MainGreen;
    padding: 15px 30px;
    border: 0;
    font-size: 14px;
    font-weight: bold;

    &:hover {
      background-color: $MainGreen;
      color: white;
    }
  }
}
</style>
