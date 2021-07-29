<template>
  <div>
    <client-only>
    <Header />
      <div class="dog-detail-wrap">
        <h1 class="text-danger dog-list-title">キャンチョメ</h1>
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

        <div class="introduce-wrap">
          <div class="my_name">
            <p>名前：キャンチョメ ♀</p>
            <p>年齢：6歳</p>
            <div class="like">
              <div class="like_btn">
                <i class="fas fa-heart icon"></i>
              </div>
              <a href="" class="btn btn-radius-solid" style="font-weight: bold;">お気に入りに追加</a>
              <a href="" class="btn btn-radius-solid" style="margin-left:10px; font-weight:bold; color:#ff7d6e;">スポンサーになる</a>
            </div>
            <br>
            
            <br><br>
          </div>
          

          <div class="nav-tabs-wrapper">
            <ul class="nav nav-tabs" role="tablist">
              <li class="nav-item">
                <a class="nav-link" style="cursor: pointer;" data-toggle="tab" role="tab" @click="currentTab = 0">自己紹介</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" style="cursor: pointer;" data-toggle="tab" role="tab" @click="currentTab = 1">近況報告
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" style="cursor: pointer;" data-toggle="tab" role="tab" @click="currentTab = 2">チャット
                </a>
              </li>
              <br>
            </ul>
          </div>
          <br>

          <div role="tabpanel" v-show="currentTab === 0">
            <div class="introduce">
              <h2>自己紹介</h2>
              <p>初めまして。キャンチョメと申します！<br>毎日散歩に出かけており、楽しく生活しております。同じ犬種の方で、日程がもし合えば、散歩にでも一緒に出かけたいなと思います。
              </p>
            </div>
            <div class="introduce">
              <h2>困りごと</h2>
              <p>食いしん坊で困っております。おやつ代がとてもかかるので、どなたか私にご飯ください！笑</p>
            </div>
          </div>

          <div role="tabpanel" v-show="currentTab === 1">
            <div class="introduce">
              <h2>近況報告</h2>
            </div>
          </div>

          <div role="tabpanel" v-show="currentTab === 2">
            <div class="introduce">
              <h2>チャット</h2>
            </div>
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