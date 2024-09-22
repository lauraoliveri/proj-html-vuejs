<script>
export default {
  data() {
    return { 
     
    }
  }
}
</script>

<template>
    <footer>
        <div class="container-fluid text-center">
            <div class="row align-items-start">
                <div class="col">
                One of three columns
                </div>
                <div class="col">
                One of three columns
                </div>
            </div>
            <div  class="row align-items-start">
                <div class="col text-center">
                    Copyrights
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

footer {
    height: 300px;
    background-color: $WarmGrey;
}

footer, .row, .col {
    border: 1px solid violet;
}


</style>
