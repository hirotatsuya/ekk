<template>
  <div
    id="send-success-modal"
    class="uk-flex-top"
  >
    <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical uk-width-1-1">
      <h2 class="uk-modal-title">EKKに入会ありがとうございます！</h2>
      <div>
        Welcom to EKK !!!!<br>
        入会ありがとうございます。<br>
        入力したメールアドレスに今後のフローをお送りいたします。<br>
        メールが来るまでエセ関西弁の勉強をしてお待ち下さい。<br>
        一緒にEKKを盛り上げていきましょう！<br>
      </div>
      <p class="uk-text-right">
        <button class="uk-button uk-button-default uk-modal-close">閉じる</button>
      </p>
    </div>
  </div>
</template>

<script>
import UIkit from 'uikit'

export default {
  name: 'SendSuccessModal',
  mounted () {
    UIkit.modal('#send-success-modal').hide()
  }
}
</script>
