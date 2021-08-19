<template>
  <div>
    <client-only>
    <Header />
      <div class="dog-setting-wrap">
        <h1><i class="fas fa-paw icon" style="color:#ff7d6e;"></i>愛犬を掲載する</h1>

        <div class="introduce-wrap">
          <div>
            <div class="form-group">
              <p>わんちゃんのお名前</p>
              <input type="text" id="dog_name-field" name="dog_name" class="form-control border-input" placeholder="ポチ" value="">
            </div>
            <div class="form-group">
              <p>年齢</p>
              <input type="text" id="dog_age-field" name="dog_age" class="form-control border-input" placeholder="2才" value="">
            </div>
            <div class="form-group">
              <p>性別</p>
              <p>
              <input type="radio" name="sex" value="1" checked="checked">男の子
              <input type="radio" name="sex" value="2">女の子
              </p>
            </div>
            <div class="form-group">
              <p>犬種</p>
              <input type="text" id="dog_breed-field" name="dog_breed" class="form-control border-input" placeholder="ボストンテリア" value="">
            </div>
            <div class="form-group">
              <p>画像</p>
              <input type="file" id="dog_pic" name="dog_pic" value="">
            </div>
          </div>
          <br>
          <div>
            <div class="form-group">
              <!-- <p>公開・非公開</p> -->
              <p>
              <input type="radio" name="sex" value="1" checked="checked">公開
              <input type="radio" name="sex" value="2">非公開
              </p>
            </div>
          </div>

            
            <br><br>
          

          <div class="nav-tabs-wrapper">
            <ul class="nav nav-tabs" role="tablist">
              <li class="nav-item">
                <a class="nav-link" style="cursor: pointer;" data-toggle="tab" role="tab" @click="currentTab = 0">自己紹介</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" style="cursor: pointer;" data-toggle="tab" role="tab" @click="currentTab = 1">近況報告
                </a>
              </li>
              <br>
            </ul>
          </div>
          <br>

          <div role="tabpanel" v-show="currentTab === 0">
            <div class="introduce">
              <textarea name="introduce" class="m-form-textarea"></textarea>
            </div>
          </div>

          <div role="tabpanel" v-show="currentTab === 1">
            <div class="introduce">
              <textarea name="introduce" class="m-form-textarea"></textarea>
              <div class="send-btn">
              <button type="button" class="btn btn-primary">送信</button>
              </div>
            </div>
          </div>

          <div class="mt-5">
            <a href="/my_page/home_list/">
            <button type="button" class="btn btn-outline-dark">保存</button>
            </a>
            <a href="/welcome">
            <button type="button" class="btn btn-outline-danger">キャンセル</button>
            </a>
          </div>

          <div class="mt-5">
            <p>プロフィール編集は<a href="/my_page/mypage_setting">こちら</a>から</p>
          </div>

        </div>
      </div>
    <Footer />
    <Copylight />
    </client-only>
  </div>
</template>

<script>
import '@/assets/css/dog-detail.css'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import Copylight from '~/components/Copylight.vue'

export default{
  data () {
    return {
      currentTab: 0,
      currentTab: 1,
    }
  },
  
}
</script>