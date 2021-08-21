<template>
  <div class="container_area">
    <div>
        <button 
          @click="logIn">ログイン</button>
        <button 
          @click="logOut">ログアウト</button>
      </div>
      <div class="btn_area">
        <div>
          <button 
            v-if="!likedFlg"
            @click="addLikeUsr()"
            class="btn like-btn">
              <i class="fa fa-fw fa-thumbs-up"></i> 
          </button>
          <button 
            v-if="likedFlg"
            @click="delLikeUsr()"
            class="btn like-btn">
              <i class="fa fa-fw fa-check"></i> 
          </button>
          <span class="like-count">{{likeSum}}よかね</span>
        </div>
      </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import 'firebase/firestore';
var config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}
var db = firebase.firestore();
export default {
  components: {
  },
  data() {
    return {
      likeSum: 0,
      likedFlg: false,
      loginUser:null,
      documentId: "pQyLZk8DZFE7G38t98Of"  //FirestoreのdocumentIdを指定
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user)=> {
      if (user) {
        this.loginUser = user;
      } else {
      }
    });
    var docRef = db.collection("posts").doc(this.documentId);
    this.getLikeUserByDocumentId(docRef)
  },
  methods: {
    logIn() {
      var provider = new firebase.auth.TwitterAuthProvider();
      firebase.auth().signInWithRedirect(provider);
    },
    logOut(){
      firebase.auth().signOut().then(function() {
        // Sign-out successful.
        console.log("signOut")
      }).catch(function(error) {
        // An error happened.
      });
    },
    addLikeUsr(){
      var docRef = db.collection("posts").doc(this.documentId);
      docRef.update({
            "like_users": firebase.firestore.FieldValue.arrayUnion(this.loginUser.uid),
        })
      this.getLikeUserByDocumentId(docRef)
    },
    delLikeUsr(){
      var docRef = db.collection("posts").doc(this.documentId);
      docRef.update({
            "like_users": firebase.firestore.FieldValue.arrayRemove(this.loginUser.uid),
        })
      this.getLikeUserByDocumentId(docRef)
    },
    getLikeUserByDocumentId(docRef){
      // ドキュメント取得
      docRef.get().then(doc => {
          if (doc.exists) {
            this.posts = doc.data();
            this.likeSum = this.posts.like_users.length
            // すでにいいねされていないか確認用フラグ
            this.likedFlg = this.posts.like_users.includes(this.loginUser.uid)
          } else {
              console.log("No such document!");
          }
      }).catch(function(error) {
          console.log("Error getting document:", error);
      });
    },
  }
}
</script>

<style>
.container_area {
  width: 300px;
  margin-top: 50px;
  padding: 20px;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
}
.btn_area{
  margin-top: 20px;
}
.like-btn{
  font-size: 20px;
  color: #55c500;
  background-color: #fff;
  border: 2px solid #55c500;
  border-radius: 90%;
  outline: none;
}
.like-count{
  color: #55c500;
}
.border-double{
  border:double 10px dimgray;
}
</style>
