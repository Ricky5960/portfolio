<template>
  <section class="container">
    <!-- main -->
    <div id="main">
      <section id="profile">
        <!--<app-logo/>-->
        <img src="img/profile.PNG">
        <h1 class="title">Portfolio</h1>
        <h2 class="subtitle">Kobayashi Tatsuya</h2>
      </section>
      <!--<skills/>-->
      <!--<works/>-->
    </div>
  </section>
</template>

<script>
  import AppLogo from '~/components/AppLogo.vue'
  import Skills from '~/components/Skills.vue'
  import Works from '~/components/works.vue'

  export default {
    components: {
      Skills,
      Works,
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

