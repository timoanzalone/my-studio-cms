<template>
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap">
      <div class="px-2" v-for="(blogPost, index) in blogPosts" :key="index">
        <nuxt-link :to="`/blog/${blogPost.slug}/`">
          <img class="w-full object-cover" :src=" blogPost.featured_image " />
        </nuxt-link>
        <nuxt-link :to="`/blog/${blogPost.slug}/`">
          <h2>{{blogPost.title}}</h2>
        </nuxt-link>
        <p>{{blogPost.description}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import Nav from '~/components/nav.vue'
export default {
  layout: 'blogLayout',
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts
    }
  }
}
</script>