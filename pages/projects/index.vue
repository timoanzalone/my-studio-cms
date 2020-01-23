<template>
  <div data-scroll>
    <div class="scrollbar"></div>
    <Nav v-bind:class="{ active: isActive }" />
    <div data-scroll-content>
      <div class="container">
        <ul v-for="(projectPost, index) in projectPosts" :key="index">
          <nuxt-link :to="`/projects/${projectPost.slug}/`">{{projectPost.title}}</nuxt-link>
          <p>{{projectPost.description}}</p>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Nav from '~/components/nav.vue'

export default {
  layout: 'projects',
  computed: {
    projectPosts() {
      return this.$store.state.projectPosts
    }
  },
  data() {
    return {
      isActive: false
    }
  },
  components: {
    Nav
  }
}
</script>

<style scoped>
ul a {
  color: white;
}

ul {
  padding: 0;
}

div.container {
  padding-top: 10rem;
  font-family: 'pano trial';
  padding-bottom: 10rem;
}
</style>