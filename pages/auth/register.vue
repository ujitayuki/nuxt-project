<template>
  <div>
    <form>
      <h1>新規登録</h1>
      <input placeholder="ユーザー名" type="text"/>
      <input placeholder="メールアドレス" type="email"/>
      <input placeholder="バスワード" type="password"/>
      <input placeholder="バスワード(確認)" type="password"/>
      <button class="btn">登録</button>
      <div class="form-footer">
      <p>すでにご登録済みの方は <a href="#">こちら</a></p>
      </div>
      <div>
        <p style="font-weight:bold;">各種サービスで登録</p>
        <a href="#">
        <img src="~/assets/img/google.login.png" alt="" width="50%" height="100%" style="object-fit: cover;">
        </a>
        <br><br><br>
      </div>
    </form>
    
  </div>
</template>

<script>

export default{
  
}
</script>


<style>
input:focus, 
textarea:focus {
    outline: none;
}

label, 
select, 
button, 
input[type="submit"], 
input[type="radio"], 
input[type="checkbox"] 
input[type="button"] {
    cursor: pointer;
}

a, 
a:visited, 
a:active {
    text-decoration: none;
}

a:hover {
    text-decoration: none;
}

::selection {
    background: #ed327b;
    color: #fff;
}

::-moz-selection {
    background: #ed327b;
    color: #fff;
}

* {
    font-size:100%;
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
body {
  background:#63b47a;
}

* {
  font-family:"Helvetica Neue", Helvetica, Arial;
}

h5 {
  text-align:center;
  margin-top:5px;
  color:rgba(0,0,0,.3);
}

h5 > a,a:visited {
  color:#fff;
  text-decoration:underline;
}

h5 > a:hover {
  text-decoration:none;
}

form {
  background:#fff;
  border-radius:6px;
  padding:20px;
  padding-top:30px;
  width:300px;
  margin:50px auto;
  box-shadow:15px 15px 0px rgba(0,0,0,.1);
}

h1 {
  text-align:center;
  font-size:1.4em;
  font-weight:700;
  color:#ccc;
  margin-bottom:24px;
}

span {
  font-weight:200;
}

input {
  width:100%;
  background:#f5f5f5;
  border:0;
  padding:20px;
  border-radius:6px;
  margin-bottom:10px;
  border:1px solid #eee;
}

.btn {
  position:relative;
  width:100%;
  padding:20px;
  border-radius:6px;
  border:0;
  background:#f26964;
  font-size:1.2em;
  color:#fff;
  text-shadow:1px 1px 0px rgba(0,0,0,.1);
  box-shadow:0px 3px 0px #c1524e;
}

.btn:active {
  top:3px;
  box-shadow:none;
}

h6 {
  text-align:center;
  padding:20px;
  padding-top:35px;
  color:#777;
  cursor:pointer;
}

.social {
  display:none;
}

.fb {
  margin-top:15px;
  background:#3b5998;
  box-shadow:0px 3px 0px #2c416e;
}

.tw {
  background:#00acee;
  box-shadow:0px 3px 0px #008dc3;
}

.google {
  background:#db4a39;
  box-shadow:0px 3px 0px #b93f31;
}
</style>

</style>