<template>
<div>
<nav class="navbar">
    <div class="navbar-container">
      <div v-on:click="isRotate = !isRotate, isOpen =!isOpen" class="navigation">
        <a to="#">
          <span v-bind:class="{ rotate: isRotate }"></span>
        </a>
      </div>
      <nuxt-link to="/" class="logo">8025 studio
        <svg class="spinner" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 0L4.89806 2.76393H7.80423L5.45308 4.47214L6.35114 7.23607L4 5.52786L1.64886 7.23607L2.54692 4.47214L0.195774 2.76393H3.10194L4 0Z" fill="black"/>
        </svg>
      </nuxt-link>
    </div>
  </nav>
  <div class="navFullWrapper" v-bind:class="{ open: isOpen }">
    <div class="navFullInner">
      <ul>
        <li>
          <nuxt-link to=/>
            <sup>01</sup>Home
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to=/about>
            <sup>02</sup>About
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to=/projects >
            <sup>03</sup>Projects
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to=/blog >
            <sup>04</sup>Blog
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to=/contact >
            <sup>05</sup>Contact
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</div>
  
</template>

<script>
export default {
    data() {
      return {
        isRotate: false,
        isOpen: false,
      }
    },
    props: {
    isActive:{
        type: String
    } 
  },
}
</script>

<style scoped>

.navigation {
  width: 2.5rem;
  height: 1.5rem;
  cursor: pointer;
}

.navFullWrapper {
  z-index: 0;
  position: fixed;
  opacity: 0;
  transition: all .4s ease-in-out;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  background: red;
  text-align: left;
  width: 100%;
  color: #000;
  display: flex;
  align-items: center;
  pointer-events: none;
  visibility: hidden;
  transform: translate(0, -100%);
}

.navFullWrapper.open {
  opacity: 1;
  left: 0;
  top: 0;
  z-index: 1;
  background: red;
  transition: all .4s ease-in-out;
  pointer-events:all;
  transform: translate(0,0);
  visibility: visible;
}

.navFullInner ul{
  list-style: none;
}

.navFullInner li a{
  font-size: 3.375rem;
  text-transform: uppercase;
  margin-top: 1.45rem;
  margin-bottom: 1.45rem;
  color: transparent;
  -webkit-text-stroke: 1.5px #ffffff;
  text-decoration: none;
  user-select: none;
  transition: .2s ease;
  transform: translate(0);
  display: block;
}

.navFullInner li a:hover{
  font-size: 3.375rem;
  text-transform: uppercase;
  margin-top: 1.45rem;
  margin-bottom: 1.45rem;
  color: white;
  -webkit-text-stroke: 1.5px #ffffff;
  text-decoration: none;
  user-select: none;
  transition: .2s ease;
  transform: translate(20px, 5px);
}

.navFullInner ul li sup {
  font-size: .5rem;
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
  font-family: 'Pano trial';
  font-size: 1.5rem;  
  font-weight: 400;
  user-select: none;
  cursor: pointer;
  color: #000 !important;
  position: absolute;
  left: 50%;
  margin-right: -50%;
  transform: translateX(-50%);
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
.navbar-container {
  display: flex;
  align-items: center;
}

.navbar-container a {
  color: inherit;
  text-decoration: none;
}

span, span::after, span::before {
  content: ' ';
  position: absolute;
  top: 50%;
  width: 40px;
  margin-top: 0px;
  height: 2.2px;
  background-color: #000;
  transition: all .1s ease-in;
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