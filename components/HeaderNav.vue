<template>
  <header class="hero is-medium">
    <div class="hero-head">
      <nav class="navbar">
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
            <span class="navbar-burger burger" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span>
          </div>
          <div id="navbarMenuHeroA" class="navbar-menu">
            <div class="navbar-end">
              <nuxt-link to="/" class="home navbar-item">Home</nuxt-link>
              <nuxt-link to="/about" class="about navbar-item">About</nuxt-link>
              <nuxt-link to="/works" class="works navbar-item">Works</nuxt-link>
              <nuxt-link to="/contact" class="contact navbar-item">Contact</nuxt-link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
  export default {
    name: "HeaderNav"
  }
</script>

<style>
  .navbar {
    argin-bottom: 20px;
  }
</style>
