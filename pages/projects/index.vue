<template>
  <div>
    <ul v-for="(projectPost, index) in projectPosts" :key="index">
      <nuxt-link :to="`/projects/${projectPost.slug}`">{{projectPost.title}}</nuxt-link>
      <p>{{projectPost.description}}</p>
    </ul>
  </div>
</template>
<script>
export default {
  layout: 'default',
  computed: {
    projectPosts() {
      return this.$store.state.projectPosts
    }
  }
}
</script>