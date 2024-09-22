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
      <div>
        <h1>
          TESTO
        </h1>
      </div>
      <div class="container text-center">
        <div class="row">
          <div class="col">
            Column
          </div>
          <div class="col">
            Column
          </div>
          <div class="col">
            Column
          </div>
        </div>
      </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as *;


section {
  height: 700px;
  background-color: chartreuse;
}

div {
  border: 1px solid black;
}
</style>
