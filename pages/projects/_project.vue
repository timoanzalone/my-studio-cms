<template>
  <div>
    <div class="hero" :style="{ backgroundImage: `url('${projectPost.hero}')` }">
      <h1>{{projectPost.title}}</h1>
      <h3>{{projectPost.description}}</h3>
    </div>
    <article>
      <div v-html="$md.render(projectPost.body)" />
    </article>
  </div>
</template>
<script>
import Nav from '~/components/nav.vue'
export default {
  layout: 'projectLayout',
  components: {
    Nav
  },
  async asyncData({ params, payload }) {
    if (payload) return { projectPost: payload }
    else
      return {
        projectPost: await require(`~/assets/content/projects/${params.project}.json`)
      }
  }
}
</script>

<style scoped>
.hero {
  height: 100vh;
  width: 100%;
  color: white;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>