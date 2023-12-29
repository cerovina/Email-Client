<template>
  <div class="mainContainer">
    <h1>WELCOME 🍻</h1>
    <img class="pic" :src="require(`@/assets/images/cat.png`)" :alt="cat" />
    <div class="info">
      <p><span class="pink">Your Email:</span> {{ $route.query.email }}</p>
      <p><span class="pink">Your fancy ID:</span> {{ $route.params.userId }}</p>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    console.log('UserProfile created with route params:', this.$route.params);
    console.log('User email from query:', this.$route.query.email);
  },
};
</script>

<style scoped>
  .mainContainer {
    background-color: #110c27;
    padding: 10px;
    width: 800px;
    margin: auto;
    margin-top: -10px;
    margin-bottom: 30px;
  }
  h1 {
    font-size: 50px;
    margin-bottom: 100px;
    color: white;
  }

  img {
    width: 300px;
    padding: none;
    margin-top: -80px;
  }

  .pink {
    color: #E93CAC;
  }

  .info {
    font-size: 30px;
    color: white;
  }

  @media screen and (max-width: 767px) {
      .pink {
      color: #E93CAC;
      margin-right: 47px;
    }
  }
</style>
