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

      <section id="skills">
        <h2 class="subtitle">Skills</h2>
        <div class="tile is-ancestor">
          <div class="tile is-parent is-4">
            <div class="tile is-child box">
              <p>Java</p>
            </div>
          </div>
          <div class="tile is-parent is-4">
            <div class="tile is-child box">
              <p>Spring Boot</p>
            </div>
          </div>
          <div class="tile is-parent is-4">
            <div class="tile is-child box">
              <p>Kotlin</p>
            </div>
          </div>
        </div>
        <div class="tile is-ancestor">
          <div class="tile is-parent is-4">
            <div class="tile is-child box">
              <p>JavaScript</p>
            </div>
          </div>
          <div class="tile is-parent is-4">
            <div class="tile is-child box">
              <p>Vue.js</p>
            </div>
          </div>
          <div class="tile is-parent is-4">
            <div class="tile is-child box">
              <p>HTML5/CSS3</p>
            </div>
          </div>
        </div>
        <div class="tile is-ancestor">
          <div class="tile is-parent is-4">
            <div class="tile is-child box">
              <p>SQL</p>
            </div>
          </div>
          <div class="tile is-parent is-4">
            <div class="tile is-child box">
              <p>AWS</p>
            </div>
          </div>
          <div class="tile is-parent is-4">
            <div class="tile is-child box">
              <p>Git</p>
            </div>
          </div>
        </div>

        <div class="tile is-ancestor">
          <div class="tile is-parent is-4">
            <div class="tile is-child box">
              <p>Photo</p>
            </div>
          </div>
          <div class="tile is-parent is-4">
            <div class="tile is-child box">
              <p>Video</p>
            </div>
          </div>
          <div class="tile is-parent is-4">
            <div class="tile is-child box">
              <p>Editing</p>
            </div>
          </div>
        </div>
      </section>

      <section id="works">
        <h2 class="subtitle">Works</h2>
        <div class="tile is-ancestor">
          <div class="tile is-parent is-6">
            <div class="tile is-child box">
              <p>
                <img src="img/portfolio/portforio_01.jpg">
              </p>
            </div>
          </div>
          <div class="tile is-parent is-6">
            <div class="tile is-child box">
              <p>
                <img src="img/portfolio/portforio_02.jpg">
              </p>
            </div>
          </div>
        </div>
        <div class="tile is-ancestor">
          <div class="tile is-parent is-4">
            <div class="tile is-child box">
              <p>
                <img src="img/portfolio/portforio_03.jpg">
              </p>
            </div>
          </div>
          <div class="tile is-parent is-4">
            <div class="tile is-child box">
              <p>
                <img src="img/portfolio/portforio_04.jpg">
              </p>
            </div>
          </div>
          <div class="tile is-parent is-4">
            <div class="tile is-child box">
              <p>
                <img src="img/portfolio/portforio_05.jpg">
              </p>
            </div>
          </div>
        </div>
        <div class="tile is-ancestor">
          <div class="tile is-parent is-6">
            <div class="tile is-child box">
              <p>
                <img src="img/portfolio/portforio_06.jpg">
              </p>
            </div>
          </div>
          <div class="tile is-parent is-6">
            <div class="tile is-child box">
              <p>
                <img src="img/portfolio/portforio_07.jpg">
              </p>
            </div>
          </div>
        </div>
        <div class="tile is-ancestor">
          <div class="tile is-parent is-12">
            <div class="tile is-child box">
              <iframe src="https://player.vimeo.com/video/133762581" width="640" height="360" frameborder="0"
                      webkitallowfullscreen mozallowfullscreen allowfullscreen>
              </iframe>
              <p><a href="https://vimeo.com/133762581"></a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
  import AppLogo from '~/components/AppLogo.vue'

  export default {
    components: {
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

