<template>
  <div>
    <div v-for="(blogPost, index) in blogPosts" :key="index">
      <nuxt-link :to="`/blog/${blogPost.slug}/`">{{blogPost.title}}</nuxt-link>
      <img src="{{blogPost.featured_image}}" />
      <p>{{blogPost.description}}</p>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'blog',
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts
    }
  }
}
</script>