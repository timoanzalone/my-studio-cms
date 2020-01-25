<template>
  <div>
    <Hero v-on:toggle-active="isActive = !isActive" />
    <Projects />
  </div>
</template>

<script>
import Nav from '~/components/nav.vue'
import Hero from '~/components/hero.vue'
import Projects from '~/components/projects.vue'

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
  }
}
</script>