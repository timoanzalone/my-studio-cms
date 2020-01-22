<template>
  <div class="hero" v-bind:class="{ active: isActive }">
    <div class="container">
      <div class="value-proposition">
      <h1 style="font-family: 'Pano trial';">
        Make your<br>
          <span class="rw rw-1">business</span>
        happen
      </h1>
      <p>Let's create beautiful digital experiences and awesome brand identities together.</p>
      </div>
      <a class="toggle" v-on:click="isActive = !isActive" @click="addActive()">Make the magic happen</a>
    </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        isActive: false,
      }
    },
    methods: {
      addActive() {
        this.$emit('toggle-active');
      }
    }
}
</script>

<style scoped>
  .hero {
    justify-content: center;
    display: flex;
    align-items: center;
    transition: all .3s ease;
    position: relative;
    background-color: #000;
    color: #fff
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