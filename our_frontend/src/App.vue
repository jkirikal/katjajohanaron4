<template>
  <nav>
    <router-link to="/">Home</router-link> |
<!--     <router-link to="/signup">SignUp</router-link> | -->
<!--     <router-link to="/login">LogIn</router-link> | -->
    <router-link to="/contact">Contact us</router-link> |
    <router-link to="/login">Login</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  background-color: rgb(73, 79, 76);
  border: 5px solid rgb(97, 183, 155);
  border-radius:20px;
  color:white;
}
a {
  text-decoration: none;
}
nav a {
  font-weight: bold;
  color: white;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
