<script>
  import { Navbar, Hero, HowItWorks, Category, Frame, FeaturedJobs, WhyChooseUs, Testimonial, Footer } from './components';
  
  export default {
    name: "App",
    components: {
      Navbar,
      Hero,
      HowItWorks,
      Category,
      Frame,
      FeaturedJobs,
      WhyChooseUs,
      Testimonial,
      Footer
    },
  }
</script>

<template>
  <Navbar />
  <Hero />
  <HowItWorks />
  <Category />
  <Frame />
  <FeaturedJobs />
  <WhyChooseUs />
  <Testimonial />
  <Footer />
</template>

<style scoped>

</style>
