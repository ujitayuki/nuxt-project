<template>
  <div>
    <div class="footer-bg">
      <div class="container pt-4 pt-md-5">
          <div id="footer-sns" class="row align-items-center border-bottom">
            <div class="col-6 col-lg-3 pb-4 sns-title">
              <a href="#" target="_blank" rel="nofollow" class="d-flex align-items-center"><img src="~/assets/img/facebook.png"
                  alt="Official Facebook Page"><span>Official Facebook </span></a>
            </div>
            <div class="col-6 col-lg-3 pb-4 sns-title">
              <a href="#" target="_blank" rel="nofollow" class="d-flex align-items-center"><img
                  src="~/assets/img/titter.png" alt="Official Twitter"><span>Official Twitter</span></a>
            </div>
            <div class="col-6 col-lg-3 pb-4 sns-title">
              <a href="#" target="_blank" rel="nofollow" class="d-flex align-items-center"><img src="~/assets/img/youtube.png"
                  alt="Official LINE"><span>Official Youtube</span></a>
            </div>
            <div class="col-6 col-lg-3 pb-4 sns-title">
              <a href="#" target="_blank" rel="nofollow" class="d-flex align-items-center"><img src="~/assets/img/instagulam.png"
                  alt="Official Instagram"><span>Official Instagram</span></a>
            </div>
      
          </div><!-- .row -->
      
          <div id="footer-index" class="row pt-4">
            <ul class="col list-unstyled">
              <li>
              <li><a href="#">MENU</a></li>
              <ul class="list-unstyled">
                <li><a href="#">ぺろドナとは？</a></li>
                <li><a href="#" @click="open_contact_modal">お問い合わせ</a></li>
                <li><a href="#">ペットニュース</a></li>
                <li><a href="#">ご利用ガイド</a></li>
              </ul>
              </li>
            </ul>
      
            <ul class="col list-unstyled">
              <li>
              <li><a href="#">MENU</a></li>
              <ul class="list-unstyled">
                <li><a href="#">愛犬を掲載する</a></li>
                <li><a href="#">お気に入り</a></li>
                <!-- <li><a href="#">SUBMENU</a></li> -->
              </ul>
              </li>
            </ul>
      
            <ul class="col list-unstyled">
              <li>
                <li><a href="#">MENU</a></li>
                <ul class="list-unstyled">
                  <li><a href="#">利用規約</a></li>
                  <li><a href="#">特定商取引に基ずく表記</a></li>
                  <li><a href="#">プライバシーポリシー</a></li>
                </ul>
              </li>
            </ul>
          </div><!-- /.footer-index -->
      
          <div id="footer-logo" class="mt-2 mt-sm-4">
            <div class="text-center d-sm-flex align-items-sm-center">
              <a class="mr-4" href="#"><img src="~/assets/img/header.logo1.png" alt="ぺろドナ" height="50"></a>
              <p class="mb-0">好きなわんちゃんのスポンサーになろう</p>
            </div>
            <div style="text-align:right">
              <img src="~/assets/img/dog-img/ボストンテリア.png" width="300" height="200" alt="ボストンテリア">
            </div>
          </div><!-- .row -->
        </div><!-- .container -->
    </div>
    <Modal v-show="contact_modal">
          <div class="form-wrapper">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="close_contact_modal">
                <span aria-hidden="true">&times;</span>
            </button>
            <h1>お問い合わせ</h1>
            <form>      
              <input name="name" type="text" class="feedback-input" placeholder="お名前" />   
              <input name="email" type="text" class="feedback-input" placeholder="メールアドレス" />
              <textarea name="text" class="feedback-input" placeholder="お問合せ内容"></textarea>
              <div class="button-panel">
                <input type="submit" class="button" title="Sign In" value="送信"></input>
              </div>
            </form>
            <div class="form-footer">
              <!-- <p>新規会員登録がお済みでない方は <a href="#">こちら</a></p>
              <p>パスワードをお忘れの方は <a href="#">こちら</a></p> -->
            </div>
          </div>
      </Modal>
  </div>
</template>

<script>
import Modal from './Modal.vue'


export default {
  components: {
    Modal
  },
  
  data() {
    return {
      contact_modal: false,
    }
  },
  methods: {
    open_contact_modal() {
      this.contact_modal = true
    },
    close_contact_modal() {
      this.contact_modal = false
    },
   
    register () {
      this.$store.dispatch('register', {name: this.name, email: this.email, password: this.password})
    }
  },
  
}
</script>

<style>
h1 {
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  padding: 1em 0;
}

.feedback-input {
  color:black;
  font-family: Helvetica, Arial, sans-serif;
  font-weight:500;
  font-size: 18px;
  border-radius: 5px;
  line-height: 22px;
  background-color: transparent;
  border:2px solid #ff7d6e;
  transition: all 0.3s;
  padding: 13px;
  margin-bottom: 15px;
  width:100%;
  box-sizing: border-box;
  outline:0;
}

.feedback-input:focus { border:2px solid #CC4949; }

textarea {
  height: 150px;
  line-height: 150%;
  resize:vertical;
}

.button-panel .button {
  background: #ff7d6e;
  border: none;
  color: #fff;
  cursor: pointer;
  height: 50px;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.2em;
  letter-spacing: 0.05em;
  text-align: center;
  text-transform: uppercase;
  transition: background 0.3s ease-in-out;
  width: 100%;
  border-radius: 30px;
}

.button:hover {
  background: #ee3e52;
}


@media screen and (max-width: 460px) {
.list-unstyled li a{
  font-size: 2px;
}

.sns-title a {
  font-size: 2px;
}

}


</style>