<template>
  <header class="hero is-medium">
    <div class="hero-head">
      <nav id="navbar" class="navbar has-shadow is-spaced is-transparent">
        <div class="container">
          <div class="navbar-brand">
            <h1 class="title">Portfolio</h1>
            <span class="navbar-burger burger" :class="{ 'is-active': menuActive }"
                  @click="menuToggle()" data-target="navbarMenuHeroA">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>

          <div id="navbarMenuHeroA" class="navbar-menu" :class="{ 'is-active': menuActive }">
            <div class="navbar-end">
              <nuxt-link to="/" class="navbar-item"><span>Home</span></nuxt-link>
              <nuxt-link to="/works" class="navbar-item"><span>Works</span></nuxt-link>
              <nuxt-link to="/contact" class="navbar-item"><span>Contact</span></nuxt-link>
              <a href="pdf/resume.pdf" download="20180921職務経歴書.pdf" class="button is-primary">
                <span class="icon">
                  <i class="fas fa-download"></i>
                </span>
                <span>resume</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
  export default {
    name: "HeaderNav",
    data() {
      return {
        menuActive: false,
      }
    },
    methods: {
      menuToggle() {
        this.menuActive = !this.menuActive;
      }
    }
  }
</script>

<style>
  .navbar {
    argin-bottom: 20px;
  }
</style>
