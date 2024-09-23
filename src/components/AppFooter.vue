<script>
export default {
    props: {
    FooterMenu: Array,
    FooterContactInfo: Array,
    Copyrights: String
  }
}
</script>

<template>
    <footer>
        <div class="container-fluid text-center">
            <div class="row align-items-start">
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
                    </div>
                </div>
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
                    <div>

                    </div>
                </div>
            </div>
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
    height: 400px;
    background-color: $CoolGrey;
    padding: 90px 300px;

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
    color: $LilacGrey;
}


</style>
