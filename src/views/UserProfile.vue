<template>
  <div class="mainContainer">
    <div class="header">
      <img class="logo" :src="require(`@/assets/images/plb.png`)" :alt="PearLink" />
      <div class="user-info">
        <div class="user">
          <span class="green">User:</span> {{ $route.query.email }}
        </div>
      </div>
    </div>
    <div class="profile-picture">
      <div v-if="!previewImage" class="preview-placeholder">
        Your picture
      </div>
      <img v-if="previewImage" :src="previewImage" alt="User Picture" class="uploaded-picture" />
      <input type="file" id="fileInput" ref="fileInput" @change="handleFileChange" accept="image/*" style="display: none;" />
      <label for="fileInput" class="upload-label" @click="handleFileUpload">Add a picture</label>
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
  data() {
    return {
      previewImage: null,
    };
  },
  methods: {
    handleFileUpload() {
      // Trigger the file input
      this.$refs.fileInput.click();
    },
    handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        console.log('File uploaded:', file);
        this.previewImage = URL.createObjectURL(file);
      }
    },
  },
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
  margin-top: -5px;
  margin-bottom: 200px;
  border-radius: 10px;
  border: 10px solid #9b9b9b;
  padding-bottom: 100px;
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

.upload-label {
  margin-left: 600px;
}

.user {
  color: white;
}

.user-info {
  text-align: right;
  margin-right: 30px;
  margin-top: -50px;
}

.green {
  color: #689E3B;
}

.noEmails {
  margin-top: 100px;
}

.profile-picture {
  margin-top: -20px;
  margin-right: 10px;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-picture .preview-placeholder {
  width: 150px;
  height: 150px;
  background-color: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #555;
  border-radius: 5px;
  margin-left: 600px;
  margin-top: -15px;
}

.profile-picture .uploaded-picture {
  width: 150px;
  height: 150px;
  object-fit: cover; 
  border-radius: 5px;
  margin-left: 600px;
}

.profile-picture label {
  margin-top: 10px;
  color: #689E3B;
  cursor: pointer;
}

.profile-picture:hover label {
  text-decoration: underline;
}

.menu {
  display: grid;
  justify-content: space-around;
  margin-right: 650px;
  margin-top: -120px;
}

.menu a {
  text-decoration: none;
  color: white;
  padding: 5px;
  border-radius: 5px;
  background-color: #689E3B;
  margin-bottom: 15px;
}

.menu a:hover {
  background-color: #53762E;
}

.content {
  text-align: center;
  font-size: 20px;
  color: white;
}

@media (max-width: 768px) {
  .mainContainer {
    width: 90%;
    margin: auto;
    margin-top: -37px;
    margin-bottom: 100px;
  }

  .header {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .logo {
    margin-top: 30px;
    margin-right: 250px;
  }

  .user-info {
    margin-top: 30px;
    margin-left: -230px;
  }

  .user {
    display: none;
  }

  .upload-label {
    margin-left: 0;
    margin-left: 200px;
  }

  .menu {
    margin-right: 200px;
    margin-top: 50px;
  }

  .menu a {
    max-width: none;
  }

  .profile-picture .preview-placeholder,
  .profile-picture .uploaded-picture {
    height: 100px;
    width: 100px;
    margin-left: 210px;
    margin-top: -115px;
  }
}
</style>
