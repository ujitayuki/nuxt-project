<template>
  <div class="container">
    <button @click="submit">送信</button>
  </div>
</template>

<script>
export default {
  methods: {
    submit() {
      const db = this.$firebase.firestore();
      db.collection('user').add({ name: 'hoge' })
        .then(() => {
          console.log('成功');
        })
        .catch((e) => {
          console.log(e.message);
        });
    }
  }
}
</script>