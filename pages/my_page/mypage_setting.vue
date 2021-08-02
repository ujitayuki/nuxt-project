<template>
  <div>
    <client-only>
    <Header />
    <div class="dog-setting-wrap">
        <h1><i class="fas fa-paw icon" style="color:#ff7d6e;"></i>プロフィール設定</h1>
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
  data () {
    return {
      currentTab: 0,
      currentTab: 1,
    }
  },
  
}
</script>