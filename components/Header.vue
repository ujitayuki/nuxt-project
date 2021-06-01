<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img src="~/assets/img/header.logo.png" alt="ヘッダーロゴ" height="80"></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
      
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="d-flex">
              <input class="form-control me-2" type="search" aria-label="Search" placeholder="フリーワードを入力">　
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#"><i class="fas fa-paw icon"></i>愛犬を掲載する</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><i class="fas fa-heart icon"></i>お気に入り</a>
              </li>
            </ul>
            <div class="test">
              <a href="#" class="btn btn-outline-danger">会員登録</a>
              <a href="#" class="btn btn-outline-info">ログイン</a>
            </div>
          </div>
        </div>
      </nav>
      <nav class="nav-bar">
        <h1>わんちゃん好きと愛犬をつなぐプラットフォーム！まずは無料の会員登録から</h1>
      </nav>  
  </div>
</template>

<style>
.test {
  float: none;
}
</style>