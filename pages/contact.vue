<template>
  <section class="container">
    <h2 class="subtitle">お問い合わせ</h2>

    <div class="field">
      <label class="label">氏名</label>
      <div class="control has-icons-left has-icons-right">
        <input class="input is-success" type="text" placeholder="名前を入力してください">
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
      </div>
    </div>

    <div class="field">
      <label class="label">メールアドレス</label>
      <div class="control has-icons-left has-icons-right">
        <input class="input is-danger" type="email" placeholder="Email input" value="hello@">
        <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
        <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
      </div>
      <p class="help is-danger">This email is invalid</p>
    </div>

    <div class="field">
      <label class="label">お問い合わせ内容</label>
      <div class="control">
        <textarea class="textarea"></textarea>
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
        <button class="button is-link">送信</button>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "contact"
    }
</script>

<style scoped>

</style>
