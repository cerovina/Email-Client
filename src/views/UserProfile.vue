<template>
  <div class="mainContainer">
    <h1>WELCOME 🍻</h1>
    <img class="pic" :src="require(`@/assets/images/pinkEmailLogo.png`)" :alt="cat" />
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
    color: white;
  }

  img {
    width: 300px;
    padding: none;
    margin-top: -50px;
    margin-bottom: -50px;
  }

  .pink {
    color: #E93CAC;
  }

  .info {
    font-size: 30px;
    color: white;
  }

  @media screen and (max-width: 767px) {

    h1 {
      font-size: 40px;
      color: white;
    }
      .pink {
      color: #E93CAC;
    }

      .mainContainer {
      background-color: #110c27;
      padding: 10px;
      padding-bottom: 30px;
      width: 80%;
      margin: auto;
      margin-top: -10px;
      margin-bottom: 30px;
    }

    p {
      font-size: 15px;
    }

    img {
    width: 200px;
    padding: none;
    margin-top: -50px;
    margin-bottom: -40px;
  }
  }
</style>
