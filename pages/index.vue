<template>
  <div>
    <Hero v-on:toggle-active="isActive = !isActive" />
    <Projects />
  </div>
</template>

<script>
import Nav from '~/components/nav.vue'
import Hero from '~/components/home/hero.vue'
import Projects from '~/components/home/projects.vue'

export default {
  components: {
    Nav,
    Hero,
    Projects
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ]
    }
  },
  data() {
    return {
      isActive: false
    }
  },
  mounted() {
    // this.lmS = new this.locomotiveScroll({
    //   el: document.querySelector('#js-scroll'),
    //   smooth: true
    // })
    // console.log('lmS', this.lmS)
  }
}
</script>