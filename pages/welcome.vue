<template>
  <div>
    <client-only>
    <Header />
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="~/assets/img/slide1.png" alt="First slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="~/assets/img/slide2.png" alt="Second slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="~/assets/img/slide3.png" alt="Third slide">
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

      <!-- スライダー広告 -->
      <div class="slider">
          <div class="slide-track">
            <div class="slide">
              <a href="#">
              <img src="~/assets/img/dog-img/カンガール_ドッグ.png" height="100" width="150" alt="" />
              <p class="dog_name">カンガール_ドッグ</p>
              </a>
            </div>
            <div class="slide">
              <a href="#">
              <img src="~/assets/img/dog-img/トイ_プードル.png" height="100" width="150" alt="" />
              <p class="dog_name">トイ・プードル</p>
              </a>
            </div>
            <div class="slide">
              <a href="#">
              <img src="~/assets/img/dog-img/ミニチュア_ピンシャー.png" height="100" width="150" alt="" />
              <p class="dog_name">ミニチュア_ピンシャー</p>
              </a>
            </div>
            <div class="slide">
              <a href="#">
              <img src="~/assets/img/dog-img/ラブラドゥードル.png" height="100" width="150" alt="" />
              <p class="dog_name">ラブラドゥードル</p>
              </a>    
            </div>
            <div class="slide">
              <a href="#">
              <img src="~/assets/img/dog-img/ボストンテリア.png" height="100" width="150" alt="" />
              <p class="dog_name">ボストンテリア</p>
              </a>    
            </div>
            <div class="slide">
              <a href="#">
              <img src="~/assets/img/dog-img/キャバリア.png" height="100" width="150" alt="" />
              <p class="dog_name">キャバリア</p>
              </a>    
            </div>
            <div class="slide">
              <a href="#">
              <img src="~/assets/img/dog-img/ラブラドールレトリバー.png" height="100" width="150" alt="" />
              <p class="dog_name">ラブラドールレトリバー</p>
              </a>    
            </div>
            <div class="slide">
              <a href="#">
              <img src="~/assets/img/dog-img/チワワ.png" height="100" width="150" alt="" />
              <p class="dog_name">チワワ</p>
              </a>    
            </div>
            <div class="slide">
              <a href="#">
              <img src="~/assets/img/dog-img/ダックスフンド.png" height="100" width="150" alt="" />
              <p class="dog_name">ダックスフンド</p>
              </a>    
            </div>
            <div class="slide">
              <a href="#">
              <img src="~/assets/img/dog-img/スタンダード・プードル.png" height="100" width="150" alt="" />
              <p class="dog_name">スタンダード・プードル</p>
              </a>    
            </div>
            <div class="slide">
              <a href="#">
              <img src="~/assets/img/dog-img/ゴールデンレトリーバー.png" height="100" width="150" alt="" />
              <p class="dog_name">ゴールデンレトリーバー</p>
              </a>    
            </div>
            <div class="slide">
              <a href="#">
              <img src="~/assets/img/dog-img/マルチーズ.png" height="100" width="150" alt="" />
              <p class="dog_name">マルチーズ</p>
              </a>    
            </div>
            <div class="slide">
              <a href="#">
              <img src="~/assets/img/dog-img/コーギー.png" height="100" width="150" alt="" />
              <p class="dog_name">コーギー</p>
              </a>    
            </div>
            <div class="slide">
              <a href="#">
              <img src="~/assets/img/dog-img/ドーベルマン.png" height="100" width="150" alt="" />
              <p class="dog_name">ドーベルマン</p>
              </a>    
            </div>
            <div class="slide">
              <a href="#">
              <img src="~/assets/img/dog-img/ポメラニアン.png" height="100" width="150" alt="" />
              <p class="dog_name">ポメラニアン</p>
              </a>    
            </div>
            <div class="slide">
              <a href="#">
              <img src="~/assets/img/dog-img/シーズー.png" height="100" width="150" alt="" />
              <p class="dog_name">シーズー</p>
              </a>    
            </div>
            <div class="slide">
              <a href="#">
              <img src="~/assets/img/dog-img/フレンチブルドッグ.png" height="100" width="150" alt="" />
              <p class="dog_name">フレンチブルドッグ</p>
              </a>    
            </div>
            <div class="slide">
              <a href="#">
              <img src="~/assets/img/dog-img/グレート・デン.png" height="100" width="150" alt="" />
              <p class="dog_name">グレート・デン</p>
              </a>    
            </div>
          </div>
        </div>

        <!-- 検索ボックス -->
        <div class="section-container">
          <h2 class="text-center text-white pt-5 description-title">好きなわんちゃんを見つけよう</h2>
          <p class="text-center text-white description-subtitle">
            <ワンちゃんの種類ごとに検索できます>
          </p>
          <div class="select-box">
            <label>
              <select name="dog">
                <option>犬種を選択する</option>
                <option>ジャーマンシェパード</option>
                <option>ブルドッグ</option>
                <option>プードル</option>
                <option>ラブラドールレトリバー</option>
                <option>ゴールデンレトリバー</option>
                <option>チワワ</option>
                <option>ダックスフンド</option>
                <option>シベリアンハスキー</option>
                <option>ロットワイラー</option>
                <option>フレンチブルドッグ</option>
                <option>イングリッシュ・グレイハウンド</option>
                <option>グレート・デン</option>
                <option>ポメラニアン</option>
                <option>シーズー</option>
                <option>マルチーズ</option>
                <option>キャバリア</option>
                <option>ドーベルマン</option>
                <option>バーニーズ</option>
                <option>コーギー</option>
                <option>ボストンテリア</option>
                <option>ボーダーコリー</option>
                <option>ニューファンドランド</option>
                <option>セントバーナード</option>
                <option>バセット・ハウンド</option>
                <option>アラスカン・マラミュート</option>
                <option>チャウチャウ</option>
                <option>ビション・フリーゼ</option>
                <option>スタッフォードシャー・ブル・テリア</option>
                <option>チャイニーズ・クレステッド・ドッグ</option>
                <option>ジャック・ラッセル</option>
                <option>ブル・テリア</option>
                <option>アイリッシュ・セッター</option>
                <option>イングリッシュ・スプリンガー・スパニエル</option>
                <option>イングリッシュ・コッカー・スパニエル</option>
                <option>バセンジー</option>
                <option>アメリカン・スタッフォード・シャー</option>
                <option>アイリッシュ・ウルフハウンド</option>
                <option>アフガン・ハウンド</option>
                <option>ジャーマン・ショートヘアード・ポインター</option>
                <option>エアデール・テリア</option>
                <option>イタリアン・グレイハウンド</option>
                <option>イングリッシュ・ポインター</option>
                <option>ピット・ブル</option>
                <option>イタリアン・コルソ・ドッグ</option>
                <option>サモエド</option>
                <option>Sarabi dog</option>
                <option>トイ・プードル</option>
                <option>ピンシャー</option>
                <option>ラブラドゥードル</option>
                <option>カンガール・ドッグ</option>
                <option>その他</option>
              </select>
            </label>
          </div>
          <div class="text-center mt-5">
            <a href="/dog-list" class="btn btn--orange serch-button">検索する</a>
          </div>
          <div class="wave">
          </div>
        </div>

        <!-- newわんちゃん -->
        <div>
          <h2 class="mt-5  text-center description-title">新しいわんちゃん</h2>
          <p class="text-center text-gray mb-5 description-subtitle">
            <気になるワンちゃんを見つけよう>
          </p>
          <h1 class="slider_ttl"><span style="color:red;">NEW</span>わんちゃん</h1>
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

          <a href="/new-dog-list" class="detail">もっと見る</a>
        </div>

        <!-- rannking -->
        <div>
           <h1 class="slider_ttl mt-5"><span style="color: green;">人気</span>わんちゃんランキング</h1>
        <ul class="horizontal_scroll rank">
          <ul class="card-horizontal-list text-center">
            <li>
              <a href="#">
                <img src="~/assets/img/test.jpg">
                <div>
                  <h3>name</h3>
                  <p>dog bread</p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="~/assets/img/test1.png">
                <div>
                  <h3>name</h3>
                  <p>dog bread</p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="~/assets/img/test2.jpg">
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
                <img src="~/assets/img/test7.jpg">
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
            <li>
              <a href="#">
                <img src="~/assets/img/test6.jpg">
                <div>
                  <h3>name</h3>
                  <p>dog bread</p>
                </div>
              </a>
            </li>
          </ul>  
        </ul>

        <a href="/popular-dog" class="detail">もっと見る</a>
        </div>

        <!-- introduce -->
        <div class="section-container2 mt-5">
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
              <h2>愛犬を登録する<br></h2>
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

        <!-- 愛護団体 -->
        <div>
          <h2 class="mt-5  text-center description-title">愛護団体</h2>
          <p class="text-center text-gray mb-5 description-subtitle">
            <愛護団体の方々へ寄付をしよう>
          </p>
          <h1 class="slider_ttl">愛護団体一覧</h1>
          <ul class="card-horizontal-list text-center">
            <li>
              <a href="/dog-detail">
                <img src="~/assets/img/aigo_1.png">
                <div>
                  <h3>name</h3>
                  <p>dog bread</p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="~/assets/img/aigo_2.png">
                <div>
                  <h3>name</h3>
                  <p>dog bread</p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="~/assets/img/aigo_3.png">
                <div>
                  <h3>name</h3>
                  <p>dog bread</p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="~/assets/img/aigo_4.png">
                <div>
                  <h3>name</h3>
                  <p>dog bread</p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="~/assets/img/aigo_1.png">
                <div>
                  <h3>name</h3>
                  <p>dog bread</p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="~/assets/img/aigo_2.png">
                <div>
                  <h3>name</h3>
                  <p>dog bread</p>
                </div>
              </a>
            </li>
          </ul>

          <a href="/protection-group" class="detail">もっと見る</a>
        </div>

        <!-- スライダー広告 -->
        <div class="sponser">
          <div class="slider1">
          <div class="slide-track1">
            <div class="slide1">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
            </div>
            <div class="slide">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
            </div>
            <div class="slide">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
            </div>
            <div class="slide">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
            </div>
            <div class="slide">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
            </div>
            <div class="slide">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
            </div>
            <div class="slide">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
            </div>
            <div class="slide">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
            </div>
            <div class="slide">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
            </div>
            <div class="slide">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
            </div>
            <div class="slide">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
            </div>
            <div class="slide">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
            </div>
            <div class="slide">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
            </div>
            <div class="slide">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
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
export default {}
</script>

<style>

</style>
