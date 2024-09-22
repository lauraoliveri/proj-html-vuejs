<script>
export default {
  data() {
    return { 
     
    }
  }
}
</script>

<template>
  <header class="sticky-top">
    <div class="container-fluid text-center">
      <div class="row align-items-start">
        <div class="col">
          One of three columns
        </div>
        <div class="col">
          One of three columns
        </div>
        <div class="col">
          One of three columns
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

header {
  height: 250px;
  background-color: $White;
}

header, .col {
  border: 2px solid red;
}

.col {
  padding: 7px;
}
</style>
