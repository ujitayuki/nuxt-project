<template>
  <div>
    <client-only>
    <Header />
      <div class="dog-detail-wrap">
        <h1 class="text-danger dog-list-title">〇〇ちゃん</h1>
        <div class="main-img">
          <img src="~/assets/img/dog-img/ボストンテリア.png">
        </div>
        <div>
          <ul class="card-horizontal-list text-center">
              <li>
                <a href="/dog-detail">
                  <img src="~/assets/img/test.jpg">
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="~/assets/img/test6.jpg">
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="~/assets/img/test3.jpg">
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="~/assets/img/test7.jpg">
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="~/assets/img/test4.jpg">
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="~/assets/img/test5.jpg">
                </a>
              </li>
            </ul>
        </div>

        <div class="my_name">
          <p>◯◯ちゃん ♀</p>
          <p>◯◯歳</p>
          <br><br>
        </div>
        <div class="introduce">
          <h2>自己紹介</h2>
          <p>初めまして。◯◯と申します！<br>
        毎日散歩に出かけており、楽しく生活しております。
        同じ犬種の方で、日程がもし合えば、散歩にでも一緒に出かけたいなと思います。
          </p>
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
  
}
</script>