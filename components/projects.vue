<template>
  <div>
    <div class="container">
      <h2 class="marquee">Selected projects</h2>
      <ul class="projects">
        <li>
          <nuxt-link to="#">Instyle Showroom</nuxt-link>
        </li>
        <li>
          <nuxt-link to="#">Black Coral</nuxt-link>
        </li>

        <li>
          <nuxt-link to="#">Iuri</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    }
  },
  mounted() {}
}
</script>

<style scoped>
div {
  background-color: white;
  color: black;
}

.number {
  color: transparent;
  -webkit-text-stroke: 1px white;
  text-align: right;
}

h2.marquee {
  font-size: 2rem;
  text-transform: capitalize;
  font-weight: 300;
  margin-bottom: 2rem;
}

ul.projects {
  list-style: none;
  font-size: 5rem;
  padding-left: 0;
}
</style>