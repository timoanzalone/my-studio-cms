<template>
  <div data-scroll>
    <div class="scrollbar"></div>
    <Nav v-bind:class="{ active: isActive }" />
    <div data-scroll-content>
      <main id="page">
        <nuxt />
      </main>
    </div>
  </div>
</template>

<style>
html {
  font-family: 'Labil Grotesk Trial', Helvetica, Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background: white;
}

::-webkit-scrollbar {
  display: none;
}

#page {
  background: white;
  transition: 0.3s ease;
  scrollbar-width: none;
}

nav.active {
  color: white !important;
}

nav.active div.navigation span::after {
  background-color: white;
}

nav.active div.navigation span::before {
  background-color: white;
}

nav.active div.navigation span {
  background-color: white;
}

::selection {
  color: #fff;
  background: #4801ff;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.navbar {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  display: block;
  padding-top: 60px;
  padding-bottom: 35px;
  background-color: transparent;
  z-index: 2;
  color: #fff;
}

.hero {
  height: 100vh;
  width: 100%;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-active {
  opacity: 0;
}

div[data-scroll-content] {
  position: relative;
  min-height: 100vh;
}

div.scrollbar {
  position: absolute;
  top: 0%;
  right: 0;
  background: red;
  width: 4px;
  height: 100px;
  z-index: 100;
}

a {
  text-decoration: none;
}
</style>

<script>
import Nav from '~/components/nav.vue'

export default {
  data() {
    return {
      isActive: false
    }
  },
  components: {
    Nav
  },
  mounted() {}
}
</script>