<template>
  <v-app>
    <v-app-bar
      app
      color="#6f2da8"
      dark
    >
    <router-link to="/" >|VueProject|</router-link>
    <v-spacer></v-spacer>
    <router-link to="/users">allUseres</router-link>
    <v-spacer></v-spacer>
    <router-link to="/others">...</router-link>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>
<style scoped>
a:link {
  color: white;
  background-color: transparent;
  text-decoration: none;
}

a:visited {
  color: pink;
  background-color: transparent;
  text-decoration: none;
}

a:hover {
  color: red;
  background-color: transparent;
  text-decoration: underline;
}

a:active {
  color: yellow;
  background-color: transparent;
  text-decoration: underline;
}
</style>
