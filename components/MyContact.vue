<template>
  <section id="contact">
    <h2 class="subtitle">Contact</h2>
    <div class="field">
      <label class="label">氏名</label>
      <div class="control has-icons-left has-icons-right">
        <input class="input" type="text" placeholder="名前を入力してください" required>
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
      </div>
    </div>

    <div class="field">
      <label class="label">メールアドレス</label>
      <div class="control has-icons-left has-icons-right">
        <input class="input" :class="{'is-danger': isEmailValidation}"
               v-on:change="checkEmail(value)" type="email"
               placeholder="メールアドレスを入力してください" value="@gmail.com" required>
        <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
        <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
      </div>
      <p v-if="isEmailValidation" class="help is-danger">メールアドレスの形式が正しくないです</p>
    </div>

    <div class="field">
      <label class="label">お問い合わせ内容</label>
      <div class="control">
        <textarea class="textarea" placeholder="お問合せ内容を入力してください"></textarea>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <label class="checkbox">
          <input id="check" type="checkbox">
          <label for="check"><a href="../privacy.html" target="_blank" class="icOtherW">個人情報の取り扱い</a>に同意します。</label>
        </label>
      </div>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link" @click="sendMail">送信</button>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "MyContact",
        data() {
          return {
            isEmailValidation: false,
          }
        },
        methods: {
          checkEmailAddress: function (str) {
            if (str === '') {
              this.isEmailValidation = !this.isEmailValidation;
            }
          },
          sendMail: function () {
            const sendMail = ff.httpsCallable('sendMail')
            let parent = this;
            sendResults({destination: 'hoge@hoge.com'}).then(function (result) {
              parent.snackbar = true
            })
          }
        }
    }
</script>

<style scoped>

</style>
