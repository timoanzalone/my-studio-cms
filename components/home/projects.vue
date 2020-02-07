<template>
  <div>
    <!-- <div class="container mx-auto mt-20 pt-10">
      <h2>Our work</h2>
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
    </div>-->
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

h2 {
  font-size: 5rem;
  font-weight: 600;
}

ul.projects {
  list-style: none;
  font-size: 3.75rem;
  padding-left: 0;
}
</style>