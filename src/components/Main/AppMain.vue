<script>
import Commence from './Commence.vue';
import WorkCulture from './WorkCulture.vue';
import HowWeWork from './HowWeWork.vue';
import OnlineCourses from './OnlineCourses.vue';
import Testimonials from './Testimonials.vue';
import Transform from './Transform.vue';
import OurBlogs from './OurBlogs.vue';
import Newsletter from './Newsletter.vue';

export default {
  data() {
    return { 
     
    }
  },
  components: {
    Commence,
    WorkCulture,
    HowWeWork,
    OnlineCourses,
    Testimonials,
    Transform,
    OurBlogs,
    Newsletter,


  }
}
</script>

<template>
  <main>
    <Commence />
    <WorkCulture/>
    <HowWeWork />
    <OnlineCourses />
    <Testimonials />
    <Transform />
    <OurBlogs />
    <Newsletter />

  </main>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as *;


</style>
