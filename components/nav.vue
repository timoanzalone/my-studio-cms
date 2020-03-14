<template>
  <div>
    <nav class="navbar" v-bind:class="{ open: isOpen }">
      <div class="flex justify-between items-center mx-auto px-10">
        <nuxt-link to="/" class="logo">Human Digital</nuxt-link>
        <div class="logo">Welcome to your favorite studio!</div>
        <div v-on:click="isRotate = !isRotate, isOpen =!isOpen" class="navigation">
          <a to="#">
            <span v-bind:class="{ rotate: isRotate }"></span>
          </a>
        </div>
      </div>
    </nav>

    <div class="navFullWrapper px-8" v-bind:class="{ open: isOpen }">
      <div class="container mt-20 pt-20 px-2">
        <div class="flex flex-wrap">
          <div class="w-1/3 pr-4">
            <h3 class="text-2xl select-none">Navigation</h3>
            <hr class="mt-4" />
            <ul class="mt-8 text-2xl">
              <li>
                <nuxt-link to="/">Home</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/about">About</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/projects">Projects</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/blog">Blog</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/contact">Contact</nuxt-link>
              </li>
            </ul>
          </div>

          <div class="pl-4 w-1/3">
            <h3 class="text-2xl select-none">Latest Blog Posts</h3>
            <hr class="mt-4" />
            <ul class="mt-8">
              <li v-for="(blogPost, index) in blogPosts" :key="index">
                <nuxt-link :to="`/blog/${blogPost.slug}/`">
                  <h2 class="text-2xl">{{blogPost.title}}</h2>
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isRotate: false,
      isOpen: false
    }
  },
  props: {
    isActive: {
      type: String
    }
  },
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts
    }
  }
}
</script>

<style scoped>
.navigation {
  width: 2.5rem;
  height: 1.5rem;
  cursor: pointer;
}

.navbar.open .logo {
  color: #000 !important;
}

.navbar.open .navigation span::before,
.navbar.open .navigation span::after {
  background-color: #000 !important;
}

.navFullWrapper {
  z-index: 0;
  position: fixed;
  opacity: 0;
  transition: all 0.4s ease-in-out;
  height: calc(100vh + 1px);
  max-height: 54.375rem;
  top: 0;
  left: 0;
  position: fixed;
  background: white;
  text-align: left;
  width: 100%;
  color: #000;
  pointer-events: none;
  visibility: hidden;
  transform: translate(0, -100%);
}

.navFullWrapper.open {
  opacity: 1;
  left: 0;
  top: 0;
  z-index: 1;
  background: white;
  color: #000;
  transition: all 0.4s ease-in-out;
  pointer-events: all;
  transform: translate(0, 0);
  visibility: visible;
}

.navFullInner ul {
  list-style: none;
}

.navFullInner li a {
  font-size: 3.375rem;
  margin-top: 0.05rem;
  margin-bottom: 0.05rem;
  color: #000;
  text-decoration: none;
  user-select: none;
  transition: 0.2s ease;
  transform: translate(0);
  display: block;
  font-weight: 500;
}

.navFullInner li a:hover {
  font-size: 3.375rem;
  margin-top: 1.45rem;
  margin-bottom: 1.45rem;
  text-decoration: none;
  user-select: none;
  transition: 0.2s ease;
  transform: translate(20px, 5px);
}

.navFullInner ul li sup {
  font-size: 0.5rem;
  vertical-align: top;
  display: inline-block;
  width: 20px;
  padding-top: 6px;
  margin-right: 1.25rem;
  text-align: right;
  font-weight: light;
  color: #dbdbdb !important;
  -webkit-text-stroke: 0;
}

.logo {
  font-family: 'Labil Grotesk Trial';
  font-size: 2rem;
  font-weight: 700;
  user-select: none;
  cursor: pointer;
  color: #000 !important;
}

.spinner {
  animation: rotation 4s infinite linear;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

span,
span::after,
span::before {
  content: ' ';
  position: absolute;
  top: 50%;
  width: 40px;
  margin-top: 0px;
  height: 2.2px;
  background-color: #000;
  transition: all 0.1s ease-in;
  opacity: 1;
}

span::before {
  margin-top: 8px;
}

span::after {
  margin-top: 16px;
}

span.rotate {
  height: 0;
}

span.rotate::before {
  margin-top: 10px;
  transform: rotate(45deg);
  opacity: 1;
}

span.rotate::after {
  margin-top: 10px;
  transform: rotate(-45deg);
  opacity: 1;
}

strong {
  padding-right: 25px;
  text-transform: uppercase;
}
</style>