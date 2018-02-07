<template>
  <div
    id="welcome-to-ekk-modal"
    class="uk-flex-top"
  >
    <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical uk-width-1-1">
      <h2 class="uk-modal-title">Welcom to EKK</h2>
      <div>
        EKKのホームページへようこそ！<br>
        ぜひ楽しんで行って下さい！<br>
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
  name: 'WelcomeToEkkModal',
  mounted () {
    UIkit.modal('#welcome-to-ekk-modal').hide()
  }
}
</script>
