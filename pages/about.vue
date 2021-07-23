<template>
  <div>
    <client-only>
    <Header />
    <div class="section-container2">
      <h2 class="text-center text-white pt-5 description-title">「わんちゃん好き」と「愛犬」をつなげるプラットフォーム
      </h2>
      <div class="mt-5 text-center">
        <ul class="description">
          <li class="border1">
            <h2>お好きなワンちゃんを選ぶ</h2>
            <img src="~/assets/img/description1.png" alt="">
            <p class="text-right">上記の検索BOXからお好きな犬種をさがします。
              その他にも「NEWわんちゃん」や「人気ランキング」からも探せます。</p>
          </li>
          <li class="border2">
            <h2>愛犬を登録する<br>
              <br>
            </h2>
            <img src="~/assets/img/description2.png" alt="">
            <p>ご自身の愛犬も「愛犬を掲載する」から登録してみよう。
              わんちゃん好きの方がいっぱいです。</p>
          </li>
          <li>
            <h2>お互いのスポンサーになる</h2>
            <img src="~/assets/img/description3.png" alt="">
            <p>お互いにスポンサーになろう。
              お好きなわんちゃんを探して、お気に入りの子のスポンサーとして寄付をしよう。
              また、ご自身の愛犬を登録して、たくさんの方にスポンサーになってもらおう。</p>
          </li>
        </ul>
      </div>
      <div class="wave">
      </div>
      
    </div>
    <Footer />
    <Copylight />
    </client-only>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import Copylight from '~/components/Copylight.vue'

export default{
  
}
</script>
