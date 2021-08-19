<template>
  <div>
    <client-only>
    <Header />
    <h1 class="dog-list-title"><i class="fas fa-paw icon" style="color:#ff7d6e;"></i>特定商取引法に基づく表記</h1>
    <div class="container">
      <h2 class="mt-5"></h2>
      <table>
        <tr>
          <th>WEBサービス提供者</th>
          <td>PERRO DONAR株式会社</td>
        </tr>
        <tr>
          <th>サイト代表者名</th>
          <td>氏田 裕樹</td>
        </tr>
        <tr>
          <th>所在地</th>
          <td>〒361-0025<br>埼玉県行田市埼玉5056-1</td>
        </tr>
        <tr>
          <th>電話番号</th>
          <td>000-000-0000</td>
        </tr>
        <tr>
          <th>販売価格</th>
          <td>寄付金の10％を運営費として差し引かせてください</td>
        </tr>
      </table>
    </div>
      
    <Footer />
    <Copylight />
    </client-only>
  </div>
</template>

<script>
import '@/assets/css/commercial.css'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import Copylight from '~/components/Copylight.vue'

export default{
  
}
</script>
