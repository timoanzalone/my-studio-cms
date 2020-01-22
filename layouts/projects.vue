<template>
  <main id="page">
    <nuxt />
  </main>
</template>

<style scoped>
html {
  font-family: 'pano trial', Helvetica, Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background: black;
}

::-webkit-scrollbar {
  display: none;
}

#page {
  background: black;
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
  color: black;
  background: red;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.navbar-container {
  width: 90%;
  height: 60px;
  margin: 0 auto;
}

.container {
  width: 90%;
  margin: 0 auto;
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
  color: inherit;
}
</style>

<script>
export default {
  data() {
    return {
      isActive: false
    }
  },
  mounted() {
    const math = {
      lerp: (a, b, n) => {
        return (1 - n) * a + n * b
      },
      norm: (value, min, max) => {
        return (value - min) / (max - min)
      }
    }

    const config = {
      height: window.innerHeight,
      width: window.innerWidth
    }

    class Smooth {
      constructor() {
        this.bindMethods()

        this.data = {
          ease: 0.1,
          current: 0,
          last: 0
        }

        this.data.scrollbar = {
          ease: 0.08,
          current: 0,
          last: 0
        }

        this.dom = {
          el: document.querySelector('[data-scroll]'),
          content: document.querySelector('[data-scroll-content]'),
          scrollbar: document.querySelector('.scrollbar')
        }

        this.rAF = null

        this.init()
      }

      bindMethods() {
        ;['scroll', 'run', 'resize'].forEach(
          fn => (this[fn] = this[fn].bind(this))
        )
      }

      setStyles() {
        Object.assign(this.dom.el.style, {
          position: 'fixed',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          overflow: 'hidden'
        })
      }

      setHeight() {
        document.body.style.height = `${this.dom.content.offsetHeight}px`
      }

      resize() {
        this.setHeight()
        this.scroll()
      }

      scroll() {
        this.data.current = window.scrollY
      }

      run() {
        this.data.last = math.lerp(
          this.data.last,
          this.data.current,
          this.data.ease
        )
        if (this.data.last < 0.1) {
          this.data.last = 0
        }
        this.data.scrollbar.last = math.lerp(
          this.data.last,
          this.data.current,
          this.data.ease
        )
        if (this.data.last < 0.1) {
          this.data.last = 0
        }

        const diff = this.data.current - this.data.last
        const acc = diff / config.width
        const velo = +acc

        this.dom.content.style.transform = `translate3d(0, -${this.data.last}px, 0)`

        this.dom.scrollbar.style.transform = `translate3d(0, ${this.data.scrollbar.last}px, 0)`

        this.requestAnimationFrame()
      }

      on() {
        this.setStyles()
        this.setHeight()
        this.addEvents()

        this.requestAnimationFrame()
      }

      off() {
        this.cancelAnimationFrame()

        this.removeEvents()
      }

      requestAnimationFrame() {
        this.rAF = requestAnimationFrame(this.run)
      }

      cancelAnimationFrame() {
        cancelAnimationFrame(this.rAF)
      }

      destroy() {
        document.body.style.height = ''

        this.data = null

        this.removeEvents()
        this.cancelAnimationFrame()
      }

      resize() {
        this.setHeight()
      }

      addEvents() {
        window.addEventListener('resize', this.resize, { passive: true })
        window.addEventListener('scroll', this.scroll, { passive: true })
      }

      removeEvents() {
        window.removeEventListener('resize', this.resize, { passive: true })
        window.removeEventListener('scroll', this.scroll, { passive: true })
      }

      init() {
        this.on()
      }
    }

    new Smooth()
  }
}
</script>