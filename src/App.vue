<script>
/* 
  Per importare ed utilizzare un componente dentro un altro devo SEMPRE seguire questi 3 passi:
  1) Importazione del componente
  2) Dichiarazione del componente
  3) Utilizzo del componente
*/
// 1) Importazione del componente
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/Main/AppMain.vue';
import AppFooter from './components/AppFooter.vue';


export default {
  data() {
    return { 
      // Menù a tendina header
      HeaderMenu: [ 
        {
          category: 'Home',
          links: [
            "MaxCoach Education",
            "Course Portal",
            "Distant Learning",
            "Multimedia Pedagogy",
            "Modern Schooling",
            "Remote Training",
            "Health Coaching",
            "Gym Coaching",
            "Business",
            "Artist",
            "Kitchen Coach",
            "Motivation",
            "Dancing",
            "Guitar",
            "Yoga",
            "Photography",
            "Personal Finance",
            "Sales Coaching",
            "Mental Therapy"
          ]
        },
        { 
        category: 'Pages',
        links: [
            "Start Here",
            "Success Story",
            "About me",
            "About us 01",
            "About us 02",
            "About us 03",
            "Contact me",
            "Contact us",
            "Purchase Guide",
            "Privacy Policy",
            "Terms of Service"
        ]
        },
        {
          category: 'Courses',
          links: [
            "Courses Grid 01",
            "Courses Grid 02",
            "Courses Grid 03",
            "Membership Levels",
            "Become a Teacher",
            "Profile",
            "Checkout",
            "Single Layout"
          ]
        },
        {
          category: 'Features',
          links: [
            "Events",
            "Zoom Meetings"
          ]
        },
        {
          category: 'Blog',
          links: [
            "Blog Grid",
            "Blog Masonry",
            "Blog Classic",
            "Blog List"
          ]
        },
        {
          category: "Shop",
          links: [
            "Shop Left Sidebar",
            "Shop Right Sidebar",
            "Cart",
            "Wishlist",
            "Single Product"
          ]
        }
        ],
        Logo: 'assets/images/dark-logo.png',
        FooterMenu: [
          {
              category: "Explore",
              items: [
                "Start here",
                "Success story",
                "Blog",
                "Courses",
                "About us",
                "Contact us"
              ]
          },
          {
              category: "Information",
              items: [
                "Membership",
                "Purchase guide",
                "Privacy policy",
                "Terms of services"
              ]
          }
        ],
        FooterContactInfo: [
            "Address",
            "382 NE 191st St # 87394 Miami, FL 33179-3899",
            "+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)",
            "support@maxcoach.com"
        ],
        Copyright: '© 2020 Maxcoach. All Rights Reserved'
    };
  },
  // 2) Dichiarazione del componente
  components: {
    AppHeader,
    AppMain,
    AppFooter
  }
}

</script>

<template>
  <div>
    <!-- 3) Utilizzo del componente -->
    <AppHeader />
    
    <AppMain />

    <AppFooter />
  </div>
</template>

<style lang="scss">
@use 'assets/scss/main' as *;
// Import all of Bootstrap's CSS
@import "bootstrap/scss/bootstrap";
</style>
