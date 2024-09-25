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

          <!-- Ul principali della nav che si vedono -->
          <ul class="d-flex align-items-center">
            <li v-for="(item, i) in HeaderMenu" :key="i" class="dropdown">
              <a href="#" class="dropdown-toggle li_border" data-bs-toggle="dropdown" > {{ item.category }} </a>

              <!-- Submenu (dropdown menu) -->
              <ul class="dropdown-menu">
                <li class="dropdown">
                  <a class="dropdown-item" href="#"  v-for="(link, i) in item.links" :key="i"> {{ link }} </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="col-auto">
          <a href="https://maxcoach.thememove.com/main/">
            <img :src="Logo" alt="Logo-Pagina">
          </a>
        </div>
        <div class="col d-flex justify-content-end align-items-center">
          <div class="cart">
            <a href="#">
              <i class="fa-solid fa-cart-shopping"></i>
            </a>
            <div class="items_number">
              0
            </div>
          </div>
          <div>
            <a href="#">
              <i class="fa-regular fa-circle-user"></i>
            </a>
          </div>
          <form class="d-flex" role="search">
            <input class="form-control me-2 d-flex" type="search" placeholder="Search..." aria-label="Search">
            <button class="btn" type="submit">
              <i class="fa-solid fa-magnifying-glass"></i>
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

  &:focus {
    border-color: $MainGreen;
    box-shadow: none;
    background-color: $White;
  }

}

// Bordo link navbar
.li_border:hover {
  border-bottom: 1px solid $MainGreen;
}


// Icone shopping e profile
.fa-light, .fa-regular {
  font-size: larger;
  padding: 0 16px;
}

// Button search
button {
  cursor: pointer;
  color: $MainGreen;

  &:hover {
  background-color: $MainGreen;
  color: $White;
  }
}

// Icona shopping cart con il bollino
.cart {
  position: relative;


    .items_number {
    position: absolute;
    top: -8px;
    right: -9px;
    padding: 0 4px;
    width: 15px;
    height: 15px;
    border-radius: 15px;
    color: $White;
    background-color: $MainGreen;
    font-size: 10px;
    }

}

// Dropdown navbar header
// Mostra il dropdown solanto in hover
.dropdown:hover .dropdown-menu {
  display: block;
  position: absolute;
  top: 35px;
  left: 0;
}

// Menu
.dropdown-menu {
  width: auto;
  display: none; 
  background-color: $White;
  padding: 12px;
  margin: 0;
  box-shadow: 0 2px 29px rgba(0, 0, 0, 0.05);
  border: none;
  border-bottom: 4px solid $MainGreen;
  border-radius: 2px;
}

.dropdown-item {
  display: block;
  padding: 10px 15px;
  color: $DarkGrey;
  text-decoration: none;

  &:hover {
    color: $MainGreen;
  }
}




</style>
