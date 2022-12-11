<template>
  <div class="body">
    <div class="sidebar"></div>
    <div>
      <div class="logout">
        <button v-if = "authResult" @click="Logout" class="button">Logout</button>
      </div>
      <div class="post-list" v-for="post in posts"  :key="post.id">  
        <a class="post" :href="'/#/post/'+post.id">
          <span> {{ post.body }} </span>
        </a>
      </div>
      <div class="footerbtns">
        <a :href="'/#/addpost/'" id="addpost" class="button">Add post</a>
        <button @click="DeleteAll" class="button">Delete all</button>
      </div>
    </div>
    <div class="sidebar"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import auth from "../auth";

export default {
  name: "HomeView",
  components: {
  },
   data: function() {
    return {
    posts:[ ],
    authResult: auth.authenticated()
    }
  },
  methods: {
    Logout() {
      fetch("http://localhost:3000/auth/logout", {
          credentials: 'include', //  Don't forget to specify this if you need cookies
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log('jwt removed');
        //console.log('jwt removed:' + auth.authenticated());
        this.$router.push("/login");
        //location.assign("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("error logout");
      });
    },
    DeleteAll(){
      console.log('yes')
      fetch(`http://localhost:3000/posts/deleteall`, {
          method: "DELETE",
        })
          .then((response) => {
            console.log(response.data);
            window.location.reload()
          })
          .catch((e) => {
            console.log(e);
          });
        
    },
  
    },
    mounted() {
        fetch('http://localhost:3000/posts/getallposts')
        .then((response) => response.json())
        .then(data => this.posts = data)
        .catch(err => console.log(err.message))
    }
};
</script>

<style scoped>
a{
  text-decoration: none;
}
.body{
        display:flex;
        justify-content:space-between;
    }

.post-list{
  display:flex;
  flex-direction:column;
  border: 5px solid rgb(97, 183, 155);
  border-radius:20px;
  background-color: rgb(73, 79, 76);
  color:white;
  margin:10px;
  margin-right:50px;
  margin-left:50px;
}
.post span{
  color:white;
}
.post {
    width: 80%;
    position: relative;
    padding: 10px;
    margin: 10px auto;
    text-align: left;
}
.button{
  color:white;
  border-radius: 36px;
  border:0;
  font-weight: 700;
  font-size: 0.8em;
  display: block;
  padding: 10px 16px;
  letter-spacing: 2px;
  border:5px solid rgb(130, 184, 162);
  background-color: rgb(73, 79, 76);
}
.button:hover{
  background-color: rgb(114, 125, 120);
}
.logout {
  display: flex;
  justify-content: center;
}
.footerbtns {
  display:flex;
  justify-content:space-around;
}
.sidebar{
        border:5px solid rgb(130, 184, 162);
        background-color: rgb(73, 79, 76);
        width:20%;
        border-radius: 20px;
        margin:5px;
    }

</style>

