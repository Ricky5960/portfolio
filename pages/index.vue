<template>
  <section class="container">
    <div id="main">
      <my-profile/>
      <my-skills/>
      <my-works/>
      <my-contact/>
    </div>
  </section>
</template>

<script>
  import MyProfile from '~/components/MyProfile.vue'
  import MySkills from '~/components/MySkills.vue'
  import MyWorks from '~/components/MyWorks.vue'
  import MyContact from "~/components/MyContact";

  export default {
    components: {
      MyContact,
      MyProfile,
      MySkills,
      MyWorks
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
    font-size: 40px;
    color: #35495e;
    letter-spacing: 1px;
    margin-bottom: 0 !important;
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

