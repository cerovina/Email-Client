<template>
  <div class="mainContainer">
    <h1>Welcome to <span class="green">Pear</span>Link</h1>
    <img class="pic" :src="require(`@/assets/images/plb.png`)" :alt="PearLink" />
    <div class="info">
      <p><span class="green">Your Email:</span> {{ $route.query.email }}</p>
      <p><span class="green">Your ID:</span> {{ $route.params.userId }}</p>
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
    background-color: #111;
    padding: 10px;
    width: 800px;
    margin: auto;
    margin-top: -10px;
    margin-bottom: 30px;
    border-radius: 10px;
    border: 10px solid #9b9b9b;
  }
  h1 {
    font-size: 50px;
    color: white;
  }

  p {
    color: white;
  }

  img {
    width: 200px;
    padding: 60px;
    margin-top: -50px;
    margin-bottom: -50px;
  }

  .green {
    color:#689E3B;
  }

  .info {
    font-size: 30px;
    color: white;
  }

  @media screen and (max-width: 767px) {

    h1 {
      font-size: 30px;
      color: white;
    }
      .pink {
      color: #689E3B;
    }

      .mainContainer {
      background-color: #111;
      padding: 10px;
      padding-bottom: 30px;
      width: 80%;
      margin: auto;
      margin-top: -10px;
      margin-bottom: 30px;
    }

    p {
      font-size: 15px;
      color: white;
    }

    img {
    width: 150px;
    padding: none;
    margin-top: -50px;
    margin-bottom: -40px;
  }
  }
</style>
