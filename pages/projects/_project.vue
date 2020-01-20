<template>
  <div>
    <div class="hero">
      <img v-lazy="hero" alt />
    </div>
    <article>
      <h1>{{projectPost.title}}</h1>
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