<template>
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
</template>

<script>
  export default {
    name: "Works",
    data: function () {
      return {
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

</style>
