<template>
  <v-container>
    <div class="Profile">
      <h1>{{user[$route.params.id-1].name}}</h1>
      <hr>
      <hr>
      <ul>
        <li><h2><i>Username:</i> {{user[$route.params.id-1].username}}</h2></li>
        <li><h2><i>Email:</i> {{user[$route.params.id-1].email}}</h2></li>
        <li><h2><i>Phone:</i> {{user[$route.params.id-1].phone}}</h2></li>
      </ul>
    </div>
  </v-container>
</template>

<script>
import users from '../store/modules/userModules'
export default {
  name: 'Profile',
  data(){
    return{user:users.state.users}
  },
};
</script>

<style scoped>

</style>