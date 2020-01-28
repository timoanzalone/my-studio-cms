<template>
  <div class="hero" v-bind:class="{ active: isActive }">
    <div>
      <div>
        <h1
          data-scroll
          data-scroll-speed="2"
          data-scroll-direction="horizontal"
          style="font-family: 'Labil Grotesk Trial'; font-weight: 600; line-height: 1.1; font-size: 5rem;"
        >
          Designed to be loved
          <br />and used by millions.
        </h1>
      </div>
      <!-- <a class="toggle" v-on:click="isActive = !isActive" @click="addActive()">Make the magic happen</a> -->
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
  methods: {
    addActive() {
      this.$emit('toggle-active')
    }
  }
}
</script>

<style scoped>
.hero {
  justify-content: center;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  position: relative;
  background-color: #4801ff;
  color: #fff;
}

.hero.active {
  background-color: red;
  color: #fff;
}

.hero p {
  text-align: center;
}

.underline {
  text-decoration: underline;
}

.value-proposition {
  width: 100%;
}

.value-proposition h1 {
  font-size: 60px;
  text-align: center;
}

.toggle {
  position: absolute;
  bottom: 5%;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  user-select: none;
}
</style>