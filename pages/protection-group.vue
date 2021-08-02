<template>
  <div>
    <client-only>
    <Header />
      <div>
        <h1 class="dog-list-title"><i class="fas fa-paw icon" style="color:#ff7d6e;"></i>愛護団体一覧</h1>
        <div class="card-group">
          <div class="card">
            <img src="~/assets/img/aigo_1.png">
            <a href="/dog-detail">
            <div class="card-body">
              <h5 class="card-title">愛護団体</h5>
            </div>
            </a>
          </div>
          <div class="card">
            <img src="~/assets/img/aigo_2.png">
            <a href="#">
            <div class="card-body">
              <h5 class="card-title">愛護団体</h5>
            </div>
            </a>
          </div>
          <div class="card">
            <img src="~/assets/img/aigo_3.png">
            <a href="#">
            <div class="card-body">
              <h5 class="card-title">愛護団体</h5>
            </div>
            </a>
          </div>
          <div class="card">
            <img src="~/assets/img/aigo_4.png">
            <a href="#">
            <div class="card-body">
              <h5 class="card-title">愛護団体</h5>
            </div>
            </a>
          </div>
          <div class="card">
            <img src="~/assets/img/aigo_1.png">
            <a href="#">
            <div class="card-body">
              <h5 class="card-title">愛護団体</h5>
            </div>
            </a>
          </div>
        </div>
        
        <div class="card-group">
          <div class="card">
            <img src="~/assets/img/aigo_1.png">
            <a href="/dog-detail">
            <div class="card-body">
              <h5 class="card-title">愛護団体</h5>
            </div>
            </a>
          </div>
          <div class="card">
            <img src="~/assets/img/aigo_2.png">
            <a href="#">
            <div class="card-body">
              <h5 class="card-title">愛護団体</h5>
            </div>
            </a>
          </div>
          <div class="card">
            <img src="~/assets/img/aigo_3.png">
            <a href="#">
            <div class="card-body">
              <h5 class="card-title">愛護団体</h5>
            </div>
            </a>
          </div>
          <div class="card">
            <img src="~/assets/img/aigo_4.png">
            <a href="#">
            <div class="card-body">
              <h5 class="card-title">愛護団体</h5>
            </div>
            </a>
          </div>
          <div class="card">
            <img src="~/assets/img/aigo_1.png">
            <a href="#">
            <div class="card-body">
              <h5 class="card-title">愛護団体</h5>
            </div>
            </a>
          </div>
        </div>
        
        <!-- ページネーション -->
        <div class="nav-links">
          <a class="prev page-numbers" href="#">«</a><!-- 現在の前のページへのリンク -->
          <a class="page-numbers" href="#">1</a>
          <span class="page-numbers current">2</span><!-- 現在閲覧しているページ -->
          <a class="page-numbers" href="#">3</a>
          <span class="page-numbers dots">…</span>
          <a class="page-numbers" href="#">27</a>
          <a class="next page-numbers" href="#">»</a><!-- 現在の次のページへのリンク -->
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