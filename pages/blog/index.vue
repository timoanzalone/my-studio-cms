<template>
  <div class="container mx-auto px-4">
    <div class="flex">
      <div
        :class="`px-2 blog-item ${blogPost.layout_class}`"
        v-for="(blogPost, index) in blogPosts"
        :key="index"
      >
        <nuxt-link :to="`/blog/${blogPost.slug}/`">{{blogPost.title}}</nuxt-link>
        <nuxt-link :to="`/blog/${blogPost.slug}/`">
          <img class="w-full object-cover" :src=" blogPost.featured_image " />
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