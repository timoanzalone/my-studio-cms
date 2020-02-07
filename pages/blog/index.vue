<template>
  <div class="mx-auto pt-20 px-8">
    <div class="flex flex-wrap">
      <div class="px-2 w-1/2" v-for="(blogPost, index) in blogPosts" :key="index">
        <nuxt-link :to="`/blog/${blogPost.slug}/`">
          <img class="w-full object-cover" :src=" blogPost.featured_image " />
          <div class="mt-8 mb-2">{{blogPost.date}}</div>
          <h2 class="text-2xl">{{blogPost.title}}</h2>
          <p>{{blogPost.description}}</p>
        </nuxt-link>
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