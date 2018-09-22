<template>
  <section class="container">
    <div id="main">
      <section id="about">
        <my-profile/>
      </section>
    </div>
  </section>

</template>

<script>
    import MyProfile from "../components/MyProfile";
    export default {
      name: "about",
      components: {MyProfile},
      data() {
        return {
          timeLineList: [
            {id: 1, day: '2018年4月', content: '株式会社オープンストリーム(豆蔵ホールディングスグループ) 入社'},
            {id: 2, day: '2018年3月', content: '大学 法学部 卒業'},
            {id: 3, day: '2018年3月', content: '株式会社アイムービック 退社(インターン)'},
            {id: 4, day: '2017年9月', content: '株式会社アイムービック 入社(インターン)'},
            {id: 5, day: '2012年3月', content: '高校 普通科 卒業'},
          ]
        }
      }
    }
</script>

<style scoped>

</style>
