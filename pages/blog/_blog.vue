<template>
  <div>
    <div class="container mx-auto mt-20 pt-10">
      <header>
        <h1>{{blogPost.title}}</h1>
        <div>
          <div class="mt-4 text-lg">{{blogPost.date}}</div>
        </div>
      </header>
    </div>
    <div>
      <img class="w-full object-cover mt-10 featured-image" :src=" blogPost.featured_image " />
    </div>
    <div class="container mx-auto mt-10">
      <article class="mt-10 text-lg">
        <div v-html="$md.render(blogPost.body)" />
      </article>
    </div>
  </div>
</template>
<script>
import Nav from '~/components/nav.vue'
export default {
  components: {
    Nav
  },
  async asyncData({ params, payload }) {
    if (payload) return { blogPost: payload }
    else
      return {
        blogPost: await require(`~/assets/content/blog/${params.blog}.json`)
      }
  }
}
</script>

<style scoped>
h1 {
  font-weight: 700;
  font-size: 5rem;
}

.featured-image {
  height: 30rem;
}
</style>