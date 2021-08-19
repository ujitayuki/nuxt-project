<template>
  <div>
    <client-only>
    <Header />
    <div class="dog-setting-wrap">
        <h1><i class="fas fa-paw icon" style="color:#ff7d6e;"></i>プロフィール設定</h1>
    </div>

    <div class="mypage-wrap">
        <div class="form-group">
          <p>ユーザー名</p>
          <input type="text" id="dog_name-field" name="dog_name" class="form-control border-input" placeholder="ujita yuki" value="">
        </div>
        <div class="form-group">
          <p>メールアドレス</p>
          <input type="text" id="dog_age-field" name="dog_age" class="form-control border-input" placeholder="test@test.com" value="">
        </div>
        <div class="form-group">
          <p>郵便番号(ハイフンなし半角英数)</p>
          <input type="text" id="dog_age-field" name="dog_age" class="form-control border-input" placeholder="1234567" value="">
        </div>
        <div class="form-group">
          <p>住所</p>
          <input type="text" id="dog_age-field" name="dog_age" class="form-control border-input" placeholder="東京都千代田区1-1-1" value="">
        </div>
        <div class="form-group">
          <p>銀行名</p>
          <input type="text" id="dog_age-field" name="dog_age" class="form-control border-input" placeholder="三井住友銀行" value="">
        </div>
        <div class="form-group">
          <p>支店名</p>
          <input type="text" id="dog_age-field" name="dog_age" class="form-control border-input" placeholder="東京支店" value="">
        </div>
        <div class="form-group">
          <p>口座番号(7桁)</p>
          <input type="text" id="dog_age-field" name="dog_age" class="form-control border-input" placeholder="1234567" value="">
        </div>
        <div class="form-group">
          <p>口座種別</p>
          <input type="text" id="dog_age-field" name="dog_age" class="form-control border-input" placeholder="普通" value="">
        </div>
        <div class="form-group">
          <p>口座名義カナ(全角)</p>
          <input type="text" id="dog_age-field" name="dog_age" class="form-control border-input" placeholder="ウジタ ユウキ" value="">
        </div>
        
        <br>
      
      <div class="mt-5">
        <a href="/welcome">
        <button type="button" class="btn btn-outline-dark">保存</button>
        </a>
        <a href="/welcome">
        <button type="button" class="btn btn-outline-danger">キャンセル</button>
        </a>
      </div>
      <div class="mt-5">
        <p>愛犬を掲載するは<a href="/my_page/dog_setting">こちら</a>から</p>
      </div>
    </div>
      
    <Footer />
    <Copylight />
    </client-only>
  </div>
</template>

<script>
import '@/assets/css/mypage.css'
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