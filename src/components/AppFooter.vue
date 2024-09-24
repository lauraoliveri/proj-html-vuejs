<script>
export default {

    // Props per passare i dati da App
    props: {
    FooterMenu: Array,
    FooterContactInfo: Array,
    Copyrights: String
  }
}
</script>

<template>
    <footer>
        <div class="my_container text-center">
            <div class="row align-items-center">

                <!-- Colonna a sinistra -->
                <!-- Contatti azienda (numero telefono, email...) -->
                <div class="col-6 text-start footer_info">
                    <div v-for="(contact, i) in FooterContactInfo" :key="i">
                        <ul>
                            <li>
                                <h2>
                                    {{ contact.type }}
                                </h2>
                            </li>
                            <li v-for="(infoItem, i) in contact.info" :key="i">
                                {{ infoItem }}
                            </li>
                        </ul>

                        <span>
                            <a href="#">
                                <i class="bi bi-facebook fs-4"></i>
                            </a>
                        </span>
                        <span>
                            <a href="#">
                                <i class="bi bi-twitter fs-4"></i>
                            </a>
                        </span>
                        <span>
                            <a href="#">
                                <i class="bi bi-instagram fs-4"></i>
                            </a>
                        </span>
                        <span>
                            <a href="#">
                                <i class="bi bi-linkedin fs-4"></i>
                            </a>
                        </span>
                    </div>
                </div>

                <!-- Colonne a destra -->
                <!-- Informazioni dell'azienda sottoforma di link (blog, termini di servizio, privacy ecc) -->
                <div class="col text-start footer_info" v-for="(item, i) in FooterMenu" :key="i">
                    <ul>
                        <li>
                            <h2>
                                {{ item.category }}
                            </h2>
                        </li>
                        <li v-for="(links, i) in FooterMenu[i].items" :key="i">
                           <a href="#">
                                {{ links }}
                           </a>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Copyrights -->
            <div  class="row">
                <div class="col text-center copyrights_footer">
                    {{ Copyrights }}
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

footer {
    @include section;
    height: 400px;
    background-color: $WarmGrey;
}

.my_container {
    @include my_container;
    width: 95%;
    padding-top: 50px;

}

h2 {
    color: black;
    font-size: 18px;
    font-weight: bold;
}


*:not(h2){
    color: $DarkGrey;
    font-size: 14px;   
}

.footer_info {
    ul {
        li {
            line-height: 2.5;     
        }
    }
    
}

.copyrights_footer {
    padding-top: 50px;
    color: $LightGrey;
}

// Icone e hover 
span {
    padding: 10px;

    .bi {
        color:$LightGrey;

        &:hover {
        color: $MainGreen;
        }
    }
}
</style>
