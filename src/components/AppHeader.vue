<script>
export default {
  props: {
    HeaderMenu: Array,
    Logo: String
  }

}
</script>

<template>
  <header class="sticky-top container-fluid">
      <div class="row d-flex justify-content-evenly align-items-center">
        <!-- Colonna con link a tendina che portano ad altri link -->
        <div class="col">
          <ul class="d-flex align-items-center">
            <li v-for="(item, i) in HeaderMenu" :key="i">
             <a href="#">  {{ item.category }} &#x2304; </a>
            </li>
          </ul>
        </div>
        <div class="col-auto">
          <img :src="Logo" alt="">
        </div>
        <div class="col d-flex justify-content-end align-items-center">
          <div>
            <i class="bi bi-cart2"></i>
          </div>
          <div>
            <i class="bi bi-person-circle"></i>
          </div>
          <form class="d-flex" role="search">
            <input class="form-control me-2 d-flex" type="search" placeholder="Search..." aria-label="Search">
            <button class="btn" type="submit">
              <i class="bi bi-search"></i>
            </button>
          </form>

        </div>
      </div>
  </header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

header {
  height: 150px;
  background-color: $White;
  padding: 60px;

  img {
    width: 170px;
  }

  li {
    padding: 0 15px;
    color: $MainBlue;
    font-weight: 500;
  }
}

form {
  background-color: $CoolGrey;
  padding: 2px;
  border-radius: 5px;
  margin-left: 10px;
}

input[type="search"] {
  background: transparent;
  padding: 7px 8px;
  color: inherit;
  border: 1px solid transparent;
  border-radius: inherit;
}

.bi {
  font-size: larger;
  padding: 0 5px;
}


</style>
