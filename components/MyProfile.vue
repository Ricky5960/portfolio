<template>
  <section id="profile">
    <h2 class="subtitle">Profile</h2>
    <div class="columns">
      <div class="column is-6">
        <img src="https://res.cloudinary.com/hx07dfrao/image/upload/v1537370773/kt-portfolio-app/profile.png">
        <div class="social">
          <ul>
            <li><a href="https://twitter.com/t04_tatsuya" target="_blank"><i class="fab fa-twitter" style="color: #55acee;"></i></a></li>
            <li><a href="https://github.com/kokokoba" target="_blank"><i class="fab fa-github" style="color: #000;"></i></a></li>
          </ul>
        </div>
      </div>
      <div class="column is-6">
        <h2 class="subtitle">@t04_tatsuya</h2>
        <p class="has-text-left">学生時代に地元のWeb会社で半年間のインターンを経験後、新卒で都内のSierに入社。EC業界で販売管理の新規開発を担当</p>
        <p class="has-text-left">現在はWeb系に転職活動中です。</p>
        <p class="has-text-left">東京に在住しているので、気軽に連絡ください！</p>
        <p class="has-text-left">得意言語: Vue.js Kotlin Java Spring Boot</p>
        <br>
        <p class="has-text-left">趣味は写真と映像製作で主にポートレートを撮ります。</p>
        <p class="has-text-left">カメラ:Pentax67 Contax Aria 写ルンです Canon 6D</p>
      </div>
    </div>

    <!--<div class="timeline is-centered">-->
      <!--<div v-for="timeLine in timeLineList" :key="timeLine.id" class="timeline-item pos-left" :class="{'pos-right': timeLine.id % 2 != 0 ? true: false}">-->
        <!--<div class="timeline-marker is-primary"></div>-->
        <!--<div class="timeline-content">-->
          <!--<p class="heading" :class="{'has-text-left': timeLine.id % 2 != 0 ? true: false}">{{ timeLine.day }}</p>-->
          <!--<p class="has-text-weight-bold" :class="{'has-text-left': timeLine.id % 2 != 0 ? true: false}">{{ timeLine.content }}</p>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
    <div class="timeline">
      <div v-for="timeLine in timeLineList" :key="timeLine.id" class="timeline-item pos-right">
        <div class="timeline-marker is-primary"></div>
        <div class="timeline-content">
          <p class="heading has-text-left">{{ timeLine.day }}</p>
          <p class="has-text-weight-bold has-text-left">{{ timeLine.content }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
      name: "MyProfile",
      data() {
        return {
          timeLineList: [
            {id: 1, day: '2017年4月', content: '株式会社オープンストリーム(豆蔵ホールディングスグループ) 入社'},
            {id: 2, day: '2017年3月', content: '大学 法学部 卒業'},
            {id: 3, day: '2017年3月', content: '株式会社アイムービック 退社(インターン)'},
            {id: 4, day: '2016年9月', content: '株式会社アイムービック 入社(インターン)'},
            {id: 5, day: '2012年3月', content: '高校 普通科 卒業'},
          ]
        }
      }
    }
</script>

<style scoped>

</style>
