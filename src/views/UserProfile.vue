<template>
  <div class="mainContainer">
    <div class="header">
      <img class="logo" :src="require(`@/assets/images/plb.png`)" :alt="PearLink" />
      <div class="user-info">
        <p class="user"><span class="green">User:</span> {{ $route.query.email }}</p>
        <!--<p><span class="green">Your ID:</span> {{ $route.params.userId }}</p>-->
      </div>
    </div>
    <div class="menu">
      <router-link to="/create">Create new</router-link>
      <router-link to="/inbox">Inbox</router-link>
      <router-link to="/sent">Sent</router-link>
      <router-link to="/trash">Trash</router-link>
    </div>
    <div class="content">
      <p class="noEmails">No emails yet!</p>
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

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  width: 100px;
  margin-top: 20px;
  margin-left: 23px;
}

.user-info {
  text-align: right;
  margin-right: 20px;
}

h1 {
  font-size: 50px;
  color: white;
}

p {
  color: white;
}

.green {
  color: #689E3B
}

.user {
  margin-right: 30px;
  font-size: 20px;
}

.noEmails {
  justify-content: center;
}

.menu {
  display: grid;
  justify-content: space-around;
  margin-right: 650px;
  margin-top: 30px;
}

.menu a {
  text-decoration: none;
  color: white;
  padding: 5px;
  border-radius: 5px;
  background-color: #689E3B;
  margin-bottom: 10px;
}

.menu a:hover {
  background-color: #53762E;
}

.content {
  text-align: center;
  font-size: 20px;
  color: white;
}

@media screen and (max-width: 767px) {
  .mainContainer {
    width: 80%;
    margin-top: -10px;
    margin-bottom: 30px;
  }

  h1 {
    font-size: 30px;
    color: white;
  }

  .logo {
    width: 80px;
    margin-top: 5px;
  }

  .user-info {
    font-size: 15px;
    text-align: right;
  }

  p {
    font-size: 15px;
    color: white;
  }

  .menu {
    display: grid;
    justify-content: space-around;
}

  .menu a {
    margin: 5px 0;
  }

  .content {
    font-size: 16px;
  }
}
</style>
