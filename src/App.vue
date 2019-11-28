<template>
  <div id="app">
    <div id="nav">
      <router-link to="/menu">Menu</router-link> |
      <router-link to="/search">Search</router-link> |
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import 'normalize.css'

export default {
  name: 'App'
}
</script>

<style lang="scss">
body {
  background: #fff;
  font-family: 'Roboto', 'Noto Sans JP', sans-serif;
  font-weight: normal;
  font-size: 16px;
  color: #212121;
  word-break: break-all;
  text-align: center;
}

label,
input {
  border: none;
  background: none;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }
}

ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

button {
  border: none;
  box-shadow: none;
  outline: none;
  background: none;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
