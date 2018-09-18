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
        <div v-for="(skillList, index) in skills" :key="index" class="tile is-ancestor">
          <div v-for="skill in skillList" :key="skill.id" class="tile is-parent is-4">
            <div class="tile is-child box">
              <p>{{ skill.name }}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="works">
        <h2 class="subtitle">Works</h2>
        <div v-for="(workList, index) in works" :key="index" class="tile is-ancestor">
          <div v-for="work in workList" :key="work.id" class="tile is-parent" :class="changeColumn(index)">
            <div class="tile is-child box">
              <p>
                <img :src="imageSrc(work)">
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
    },
    data: function () {
      return {
        skills: [
          [{id: 1, name: 'Java'}, {id: 2, name: 'Spring Boot'}, {id: 3, name: 'Kotlin'}],
          [{id: 4, name: 'JavaScript'}, {id: 5, name: 'Vue.js'}, {id: 6, name: 'HTML5/CSS3'}],
          [{id: 7, name: 'SQL'}, {id: 8, name: 'AWS'}, {id: 10, name: 'Git'}],
          [{id: 11, name: 'Photo'}, {id: 12, name: 'Video'}, {id: 13, name: 'Editing'}]
        ],
        works: [
          [{id: 1, name: 'v1537242182'}, {id: 2, name: 'v1537242086'}],
          [{id: 3, name: 'v1537242084'}, {id: 4, name: 'v1537242086'}, {id: 5, name: 'v1537242095'}],
          [{id: 6, name: 'v1537242098'}, {id: 7, name: 'v1537242086'}],
        ]
      }
    },
    methods: {
      imageSrc: function (work) {
        return `https://res.cloudinary.com/hx07dfrao/image/upload/${work.name}/kt-portfolio-app/portforio_0${work.id}.jpg`
      },
      changeColumn(index) {
        var column = 'is-6';
        var num = index + 1;

        if(num % 2 === 0) {
          column = 'is-4';
        }
        return column
      }
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

