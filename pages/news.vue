<template>
  <div>
    <client-only>
    <Header />
    <div>
      <h1 class="text-danger text-center mt-5">PET NEWS</h1>
    </div>
    <div class="mt-5"> 
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">お問い合わせ</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="mb-3">
                    <p>お名前</p>
                    <input type="text" class="form-control" id="recipient-name">
                  </div>
                  <div class="mb-3">
                    <p>メールアドレス</p>
                    <input type="text" class="form-control" id="recipient-name">
                  </div>
                  <div class="mb-3">
                    <p>お問い合わせ内容</p>
                    <textarea class="form-control" id="message-text"></textarea>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary text-white" data-bs-dismiss="modal">閉じる</button>
                <button type="button" class="btn btn-primary text-white">送信</button>
              </div>
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
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import Copylight from '~/components/Copylight.vue'

export default{
  
}
</script>
