<template>
  <header>
    <nav>
      <ul class="cf">
        <li class="home"><nuxt-link to="/">Home</nuxt-link></li>
        <li class="about"><nuxt-link to="/about">About</nuxt-link></li>
        <li class="works"><nuxt-link to="/works">Works</nuxt-link></li>
        <li class="contact"><nuxt-link to="/contact">Contact</nuxt-link></li>
      </ul>
    </nav>
    <ul class="socialBtn">
      <li>
        <a href="https://twitter.com/t04_tatsuya" target="_blank">
          <img src="img/sns/Twitter_Logo_Blue.png" alt="Twitter">
        </a>
      </li>
      <li>
        <a href="https://www.wantedly.com/users/18153987" target="_blank">
          <img src="img/sns/wantedly_mark.png" alt="wantedry">
        </a>
      </li>
      <li lass="last">
        <a href="https://github.com/kokokoba" target="_blank">
          <img src="img/sns/GitHub-Mark-32px.png" alt="GitHub"></a>
      </li>
    </ul>
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
