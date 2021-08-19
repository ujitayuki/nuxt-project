<template>
  <div>
    <client-only>
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <div class="container-fluid">
          <a class="navbar-brand" href="/welcome"><img src="~/assets/img/header.logo.png" alt="ヘッダーロゴ" height="80"></a>
          <button class="navbar-toggler menu-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
      
          <div class="collapse navbar-collapse sp-menu" id="navbarSupportedContent">
            <form class="d-flex">
              <input class="form-control me-2" type="search" aria-label="Search" placeholder="フリーワードを入力">　
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/my_page/dog_setting"><i class="fas fa-paw icon"></i>愛犬を掲載する</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/favorite"><i class="fas fa-heart icon"></i>お気に入り</a>
              </li>
            </ul>
            <div class="user-button">
            <div class="test">
              <a href="#" class="btn btn-outline-danger" @click="open_register_modal">会員登録</a>
              <a href="#" class="btn btn-outline-info" @click="open_login_modal">ログイン</a>
            </div>
            </div>
          </div>
        </div>
      </nav>
      <nav class="nav-bar">
        <h1>わんちゃん好きと愛犬をつなぐプラットフォーム！まずは無料の会員登録から</h1>
      </nav>  
      <Modal v-show="register_modal">
        <div class="page">
          <div class="form-wrapper">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="close_register_modal">
                <span aria-hidden="true">&times;</span>
            </button>
            <h1 class="modal-title">ユーザー登録</h1>
            <form @submit.prevent>
              <div class="form-item">
                <input type="name" name="name" required="required" placeholder="ユーザー名" v-model="name">
              </div>
              <div class="form-item">
                <input type="email" name="email" required="required" placeholder="メールアドレス" v-model="email">
              </div>
              <div class="form-item">
                <input type="password" name="password" required="required" placeholder="パスワード" v-model="password">
              </div>
              <div class="form-item">
                <input type="password" name="password" required="required" placeholder="パスワード(確認)">
              </div>
              <div class="button-panel">
                <input type="submit" class="button" title="Sign In" value="登録" @click="register">
              </div>
            </form>
            <div class="form-footer">
              <!-- <p><a href="#">Create an account</a></p>
              <p><a href="#">Forgot password?</a></p> -->
              <p>すでにご登録済みの方は <a href="#">こちら</a></p>
            </div>
            <div>
              <p style="font-weight:bold;">各種サービスで登録</p>
              <a href="#">
              <img src="~/assets/img/google.login.png" alt="" width="50%" height="100%" style="object-fit: cover;" @click="googleLogin">
              </a>
              <br><br><br>
            </div>
          </div>
        </div>  
      </Modal>
      <Modal v-show="login_modal">
          <div class="form-wrapper">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="close_login_modal">
                <span aria-hidden="true">&times;</span>
            </button>
            <h1 class="modal-title">ログイン</h1>
            {{ user }}
            <form @submit.prevent>
              <div class="form-item">
                <input v-model="email" type="email" name="email" required="required" placeholder="メールアドレス">
              </div>
              <div class="form-item">
                <input v-model="password" type="password" name="password" required="required" placeholder="パスワード">
              </div>
              <div class="button-panel">
                <input type="submit" class="login-button" title="Sign In" value="ログイン" @click="login">
              </div>
            </form>
            <div class="form-footer">
              <p>新規会員登録がお済みでない方は <a href="#">こちら</a></p>
              <p>パスワードをお忘れの方は <a href="#">こちら</a></p>
            </div>
            <div>
              <p style="font-weight:bold;">各種サービスでログイン</p>
              <img src="~/assets/img/google.login.png" alt="" width="50%" height="100%" style="object-fit: cover;" @click="googleLogin">
              <br><br><br>
            </div>
          </div>
      </Modal>
      </client-only>
  </div>
</template>

<script>
import Modal from './Modal.vue'
import firebase from '@/plugins/firebase'
import 'firebase/firestore'

export default {
  name: 'home',
  components: {
    Modal
  },
  
  data() {
    return {
    //   user: {
    //    name: "",
    //    email: "",
    //    password: ""
    //  },
      register_modal: false,
      login_modal: false,
      class_atached: false,
      name: '',
      email: '',
      password: '',
      isActive: false 
    }
  },

  computed: {
    user () {
      return this.$store.getters['user']
    }
  },

  methods: {
    open_login_modal() {
      this.login_modal = true
    },
    close_login_modal() {
      this.login_modal = false
    },
    open_register_modal() {
      this.register_modal = true
      this.class_atached = true
    },
    close_register_modal() {
      this.register_modal = false
      this.class_atached = false
    },
    register () {
      this.$store.dispatch('register', {name: this.name, email: this.email, password: this.password})
    },
    login (email, password) {
     this.$store.dispatch('login', {email: this.email, password: this.password})
    },
     googleLogin: function() {
      firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    },

  //   register () {
  //    const db = firebase.firestore()
  //    let dbUsers = db.collection('users')
  //    dbUsers
  //      .add({
  //        name: this.user.name,
  //        email: this.user.email,
  //        password: this.user.password
  //      })
  //      .then(ref => {
  //        console.log('Add ID: ', ref.id)
  //      })
  //  },
    
  },

  mounted() {
    $(function(){
      $(".menu-btn").click(function(){
        $(".sp-menu").slideToggle(200);
      });
    });

  } 
}
</script>


<style>
.container-fluid{
  width: auto;
}

.form-wrapper {
  background: #fafafa;
  margin: 3em auto;
  padding: 0 1em;
  width: 500px;
  border-radius: 30px;
}

h1 {
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  padding: 1em 0;
}

/* form {
  padding: 0 1.5em;
} */

.form-item {
  margin-bottom: 0.75em;
  width: 100%;
}

.form-item input {
  background: #fafafa;
  border: none;
  border-bottom: 2px solid #e9e9e9;
  color: #666;
  font-family: 'Open Sans', sans-serif;
  font-size: 1em;
  height: 50px;
  transition: border-color 0.3s;
  width: 100%;
}

.form-item input:focus {
  border-bottom: 2px solid #c0c0c0;
  outline: none;
}

.button-panel {
  margin: 2em 0 0;
  width: 100%;
}

.button-panel .button {
  background: #f16272;
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
}

.button:hover {
  background: #ee3e52;
}

.button-panel .login-button {
  background: #5dd7ec;
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

.login-button:hover {
  background: #439baa;
}

.form-footer {
  font-size: 1em;
  padding: 2em 0;
  text-align: center;
}

.form-footer a {
  color: #8c8c8c;
  text-decoration: none;
  transition: border-color 0.3s;
}

.form-footer a:hover {
  border-bottom: 1px dotted #8c8c8c;
}

.close span{
  padding-top:10px;
}

@media screen and (max-width: 480px) {
.form-wrapper{
  width: 100%;
}

.form-footer{
  font-size:10px;
}
}


@media screen and (max-width: 1024px) {
 .head-bar {
	background: white;
	box-sizing: border-box;
	height: 50px;
	padding: 10px 2.5%;
}


.menu-btn {
	display: block;
	float: right;
	margin: 0 auto;
	position: relative;
	width: 40px;
	height: 30px;
}


.sp-menu {
	display: none;
}

.sp-menu li {
	box-sizing: border-box;
	border-bottom: 1px solid white;
}

.sp-menu li a {
	background: white;
	box-sizing: border-box;
	color: black;
	display: block;
	font-size: 16px;
	line-height: 26px;
	padding: 5px 10px;
	text-decoration: none;
	width: 100%;
}

.navbar-toggler-icon{
  display: inline-block;
}
}
</style>