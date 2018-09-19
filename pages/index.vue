<template>
  <section class="container">
    <!-- main -->
    <div id="main">
      <section id="profile">
        <!--<app-logo/>-->
        <img src="https://res.cloudinary.com/hx07dfrao/image/upload/v1537370773/kt-portfolio-app/profile.png">
        <h1 class="title">Portfolio</h1>
        <h2 class="subtitle">Kobayashi Tatsuya</h2>
      </section>
      <my-skills/>
      <my-works/>
    </div>
  </section>
</template>

<script>
  import AppLogo from '~/components/AppLogo.vue'
  import MySkills from '~/components/MySkills.vue'
  import MyWorks from '~/components/MyWorks.vue'

  export default {
    components: {
      MySkills,
      MyWorks,
      AppLogo
    }
  }
</script>

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: bold;
    font-size: 80px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: bold;
    font-size: 32px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  #profile img {
    width: 250px;
    height: 250px;
  }

</style>

