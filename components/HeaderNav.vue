<template>
  <header class="hero is-medium">
    <div class="hero-head">
      <nav class="navbar is-transparent">
        <div class="container">
          <div class="navbar-brand">
            <a href="https://twitter.com/t04_tatsuya" target="_blank" class="navbar-item">
              <img src="img/sns/Twitter_Logo_Blue.png" alt="Twitter">
            </a>
            <a href="https://www.wantedly.com/users/18153987" target="_blank" class="navbar-item">
              <img src="img/sns/wantedly_mark.png" alt="wantedry">
            </a>
            <a href="https://github.com/kokokoba" target="_blank" class="navbar-item">
              <img src="img/sns/GitHub-Mark-32px.png" alt="GitHub">
            </a>

            <span class="navbar-burger burger" :class="{ 'is-active': menuActive }"
                  @click="menuToggle()" data-target="navbarMenuHeroA">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>

          <div id="navbarMenuHeroA" class="navbar-menu" :class="{ 'is-active': menuActive }">
            <div class="navbar-end">
              <nuxt-link to="/" class="navbar-item">Home</nuxt-link>
              <nuxt-link to="/about" class="navbar-item">About</nuxt-link>
              <nuxt-link to="/works" class="navbar-item">Works</nuxt-link>
              <nuxt-link to="/contact" class="navbar-item">Contact</nuxt-link>
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
        // menuPosition: false
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
