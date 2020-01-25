<template>
  <div class="container mx-auto px-4">
    <ul v-for="(projectPost, index) in projectPosts" :key="index">
      <nuxt-link :to="`/projects/${projectPost.slug}/`">{{projectPost.title}}</nuxt-link>
    </ul>
  </div>
</template>
<script>
import Nav from '~/components/nav.vue'

export default {
  layout: 'projectsLayout',
  components: {
    Nav
  },
  computed: {
    projectPosts() {
      return this.$store.state.projectPosts
    }
  },
  data() {
    return {
      isActive: false,
      isOpen: false
    }
  }
}
</script>