<template>
  <div>
    <client-only>
    <Header />
      <div class="dog-detail-wrap">
        <h1 class="dog-list-title"><i class="fas fa-paw icon" style="color:#ff7d6e;"></i>スポンサー一覧</h1>
        <div>
          <div class="nav-tabs-wrapper">
            <ul class="nav nav-tabs" role="tablist">
              <li class="nav-item">
                <a class="nav-link" style="cursor: pointer;" data-toggle="tab" role="tab" @click="currentTab = 1">SPONSER
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" style="cursor: pointer;" data-toggle="tab" role="tab" @click="currentTab = 2">MY SPONSER
                </a>
              </li>
              <br>
            </ul>
          </div>
          <br>

          <div role="tabpanel" v-show="currentTab === 1">
            <div class="introduce">
              <h2>SPONSER</h2>
               <div>
                <ul class="card-horizontal-list text-center">
                  <li>
                    <a href="/dog-detail">
                      <img src="~/assets/img/test.jpg">
                      <div>
                        <h3>name</h3>
                        <p>dog bread</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="~/assets/img/test6.jpg">
                      <div>
                        <h3>name</h3>
                        <p>dog bread</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="~/assets/img/test3.jpg">
                      <div>
                        <h3>name</h3>
                        <p>dog bread</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <br>
             <div class="total-place">
              <p>管理者：ujita yuki</p>
              <p>支援額総合計：10,000円</p>
              <a href="/payment/payment_detail" class="btn btn-radius-solid" style="font-weight: bold;">明細詳細</a>
            </div>
          </div>

          <div role="tabpanel" v-show="currentTab === 2">
            <div class="introduce">
              <h2>MY SPONSER</h2>
              <div>
                <ul class="card-horizontal-list text-center">
                  <li>
                    <a href="/dog-detail">
                      <img src="~/assets/img/test.jpg">
                      <div>
                        <h3>name</h3>
                        <p>dog bread</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="~/assets/img/test6.jpg">
                      <div>
                        <h3>name</h3>
                        <p>dog bread</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="~/assets/img/test3.jpg">
                      <div>
                        <h3>name</h3>
                        <p>dog bread</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="~/assets/img/test7.jpg">
                      <div>
                        <h3>name</h3>
                        <p>dog bread</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="~/assets/img/test4.jpg">
                      <div>
                        <h3>name</h3>
                        <p>dog bread</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="~/assets/img/test5.jpg">
                      <div>
                        <h3>name</h3>
                        <p>dog bread</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <br>
             <div class="total-place">
              <p>管理者：ujita yuki</p>
              <p>支援額合計：10,000円</p>
              <p>出金可能額：10,000円</p>
              <a href="/payment/payment" class="btn btn-radius-solid" style="font-weight: bold;">出金申請</a>
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

<style>
h2{
  padding:15px;
}
</style>