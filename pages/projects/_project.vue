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
export default {
  async asyncData({ params, payload }) {
    if (payload) return { projectPost: payload }
    else
      return {
        projectPost: await require(`~/assets/content/projects/${params.project}.json`)
      }
  }
}
</script>