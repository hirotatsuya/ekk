<template>
  <div>
    <div class="uk-offcanvas-content">
      <div class="uk-section uk-height-viewport uk-section-secondary uk-light">
        <div class="uk-container">
          <div class="uk-position-center uk-text-center uk-light">
            <h1>EKKの公式サイト</h1>
            <p>
              ほなほなほな、ひろたつやで。<br>
              ここは、エセ関西弁を極めしもののためのサイトや！<br>
              ばり、楽しみなはれや。<br>
            </p>
          </div>
        </div>
      </div>
      <div class="uk-section uk-section-xlarge uk-section-muted">
        <div class="uk-container">
          <div class="uk-text-center">
            <h1>エセ関西弁とは</h1>
            <div>
              <p>
                エセ関西弁とは、関西圏で横行しとる、標準語と敵対しているなまりや。<br>
                大阪府を中心に、兵庫、京都、滋賀、奈良などで使われとる。<br>
                場所により、様々な種類が存在するが、大きく「関西弁」と言われとるんや。<br>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="uk-section uk-section-xlarge uk-section-primary">
        <div class="uk-container">
          <div class="uk-text-center">
            <h1>EKKとは</h1>
            <div>
              <p>
                世の中には、EKKという言葉があるんや。<br>
                EKKは...Ese Kansaiben Kyoukaiの略称や！<br>
                ごっつ、覚えやすいやろ〜？<br>
                ここ、テストに出るから、覚えときーや。<br>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="uk-section uk-section-light">
        <div class="uk-container">
          <div
            class="uk-position-relative uk-light"
            uk-slideshow="animation: fade"
          >
            <ul class="uk-slideshow-items">
              <li><img src="../images/photo1.jpg" alt="" uk-cover></li>
              <li><img src="../images/photo2.jpg" alt="" uk-cover></li>
              <li><img src="../images/photo3.jpg" alt="" uk-cover></li>
              <li><img src="../images/photo4.jpg" alt="" uk-cover></li>
            </ul>
            <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
            <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>
            <div class="uk-position-bottom-center uk-position-small">
              <ul class="uk-dotnav">
                <li uk-slideshow-item="0"><a href="#"></a></li>
                <li uk-slideshow-item="1"><a href="#"></a></li>
                <li uk-slideshow-item="2"><a href="#"></a></li>
                <li uk-slideshow-item="3"><a href="#"></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="uk-section uk-section-xlarge uk-section-primary">
        <div class="uk-container">
          <div class="uk-text-center">
            <h1>EKKの構成</h1>
            <div>
              <table class="uk-table uk-table-divider">
                <tr>
                  <td>会長</td>
                  <td>鋼太朗</td>
                </tr>
                <tr>
                  <td>副会長</td>
                  <td>ひろたつ</td>
                </tr>
                <tr>
                  <td>TEL</td>
                  <td>090-XXXX-XXXX</td>
                </tr>
                <tr>
                  <td>ADDRESS</td>
                  <td>XXX@XXX.XXX</td>
                </tr>
                <tr>
                  <td>資本金</td>
                  <td>6000万円</td>
                </tr>
                <tr>
                  <td>メッセージ</td>
                  <td>よろしくはん</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="uk-section uk-section-xlarge uk-section-muted">
        <div class="uk-container">
          <div class="uk-text-center">
            <h1>入会フォーム</h1>
            <div v-show="messageFlag">
              <span
                v-if="errorFlag"
                style="color: red;"
              >{{ message }}</span>
              <span v-else>{{ message }}</span>
            </div>
            <div>
              <div class="uk-form-stacked">
                <div class="uk-margin">
                  <div class="uk-form-controls">
                    <input
                      class="uk-input uk-width-1-1@s uk-width-1-2@m"
                      type="text"
                      placeholder="name"
                      v-model="name"
                      @input="inputName"
                    >
                  </div>
                </div>
                <div class="uk-margin">
                  <div class="uk-form-controls">
                    <input
                      class="uk-input uk-width-1-1@s uk-width-1-2@m"
                      type="email"
                      placeholder="email"
                      v-model="email"
                      @input="inputEmail"
                    >
                  </div>
                </div>
                <div class="uk-margin">
                  <button
                    class="uk-button uk-button-default uk-width-1-1@s uk-width-1-2@m"
                    @click="enter"
                  >ENTER</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="uk-section uk-section-xlarge uk-section-secondary">
        <div class="uk-container">
          <div class="uk-text-center">
            <h1>今後ともEKKを、よろしくはん</h1>
          </div>
          <div class="uk-text-bottom">
            <a
              id="totop"
              href="#"
              uk-totop
              uk-scroll
            ></a>
          </div>
        </div>
      </div>
      <div class="uk-position-relative">
        <div class="uk-position-bottom uk-text-center uk-margin-small-bottom">
          <span class="uk-text-muted">Copyright 2018 EKK inc.</span>
        </div>
      </div>
    </div>
    <welcome-to-ekk-modal />
    <send-success-modal />
  </div>
</template>

<script>
import UIkit from 'uikit'
import axios from 'axios'
import SendSuccessModal from './SendSuccessModal.vue'
import WelcomeToEkkModal from './WelcomeToEkkModal.vue'
import {
  validateName,
  validateEmail
} from '../utils/validations'
import {
  SEND_FORM_URL
} from '../config/aws-config'

export default {
  name: 'Top',
  components: {
    'send-success-modal': SendSuccessModal,
    'welcome-to-ekk-modal': WelcomeToEkkModal
  },
  data () {
    return {
      name: '',
      email: '',
      message: '',
      messageFlag: false,
      errorFlag: false
    }
  },
  mounted () {
    UIkit.modal('#welcome-to-ekk-modal').show()
  },
  created () {
    this.name = localStorage.getItem('name')
    this.email = localStorage.getItem('email')
  },
  methods: {
    inputName () {
      localStorage.setItem('name', this.name)
      this.messageFlag = false
    },
    inputEmail () {
      localStorage.setItem('email', this.email)
      this.messageFlag = false
    },
    enter () {
      this.errorFlag = validateName(this.name) || validateEmail(this.email)
      const url = SEND_FORM_URL + '?name=' + this.name
      const data = {
        'name': this.name,
        'email': this.email
      }
      const headers = {
        'Content-Type': 'application/json'
      }
      !this.errorFlag ? axios.post(url, { data: data }, { headers: headers}).then().catch(err => {
        console.log(err)
        this.errorFlag = true
      }) : null
      this.message = this.errorFlag ? '送信に失敗しました' : '送信しました'
      !this.errorFlag ? UIkit.modal('#send-success-modal').show() : null
      this.messageFlag = true
      this.errorFlag ? null : this.clear()
    },
    clear () {
      localStorage.clear()
      this.name = ''
      this.email = ''
    }
  }
}
</script>

<style lang="scss" scoped>
#totop {
  float: right;
  margin: 0;
  padding: 0;
  position: fixed;
  right: 10vw;
  bottom: 10vh;
  color: yellow;
}
</style>
