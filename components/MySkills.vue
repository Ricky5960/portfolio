<template>
  <section id="skills">
    <h2 class="subtitle">Skills</h2>
    <div class="tile is-ancestor is-multiline is-mobile" style="flex-wrap: wrap;">
      <div v-for="(skill, index) in skills" :key="index" class="tile is-parent is-4">
        <div class="tile is-child box">
          <p>{{ skill.name }}</p>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
  export default {
    name: "MySkills",
    data: function () {
      return {
        skills: [
          {id: 1, name: 'Java'}, {id: 2, name: 'Spring Boot'}, {id: 3, name: 'Kotlin'},
          {id: 4, name: 'JavaScript'}, {id: 5, name: 'Vue.js'}, {id: 6, name: 'HTML5/CSS3'},
          {id: 7, name: 'SQL'}, {id: 8, name: 'AWS'}, {id: 10, name: 'Git'},
          {id: 11, name: 'Photo'}, {id: 12, name: 'Video'}, {id: 13, name: 'Editing'}
        ]
      }
    }
  }
</script>

<style>

</style>


