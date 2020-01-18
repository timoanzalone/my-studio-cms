<template>
  <article>
    <h1>{{projectPost.title}}</h1>
    <div v-html="$md.render(projectPost.body)" />
  </article>
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