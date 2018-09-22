<template>
  <section id="works">
    <h2 class="subtitle">Works</h2>
    <div class="tile is-ancestor is-multiline is-mobile wrap is-gapless">
      <div v-for="work in works" :key="work.id" class="tile is-parent" :class="changeColumn(work.orientation)">
        <div class="tile is-child">
          <p>
            <img :src="imageSrc(work)">
          </p>
        </div>
      </div>
    </div>

    <div class="tile is-ancestor is-multiline is-mobile wrap">
      <div class="tile is-parent is-12">
        <div class="tile is-child">
          <iframe src="https://player.vimeo.com/video/133762581" class="videoWidth" frameborder="0"
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
    name: "MyWorks",
    data: function () {
      return {
        works: [
          {id: 1, name: 'v1537358655', orientation: 'landscape'}, {id: 2, name: 'v1537371440', orientation: 'landscape'},
          {id: 3, name: 'v1537360914', orientation: 'portrait'}, {id: 4, name: 'v1537371443', orientation: 'portrait'},
          {id: 5, name: 'v1537359789', orientation: 'portrait'}, {id: 6, name: 'v1537370261', orientation: 'landscape'},
          {id: 7, name: 'v1537360998', orientation: 'landscape'}
        ]
      }
    },
    methods: {
      imageSrc: function (work) {
        return `https://res.cloudinary.com/hx07dfrao/image/upload/${work.name}/kt-portfolio-app/portfolio_0${work.id}.jpg`
      },
      changeColumn(orientation) {
        var column = 'is-4';

        if(orientation === 'landscape') {
          column = 'is-6';
        }
        return column
      }
    }
  }
</script>

<style>

</style>
