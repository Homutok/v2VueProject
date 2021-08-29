<template>
  <v-container>
      <h1>Buttons</h1>
      <div class="button-list">
         <v-col>
            <v-btn-toggle rounded>
              <v-btn color="red">Button 1</v-btn>
              <v-btn color="red">Button 1</v-btn>
            </v-btn-toggle>
         </v-col>
         <v-col>
            <v-btn-toggle rounded>
              <v-btn color="blue">Button 2</v-btn>
              <v-btn color="blue">Button 2</v-btn>
            </v-btn-toggle>
         </v-col>
         <v-col>
           <v-btn-toggle rounded>
             <v-btn>Button 3</v-btn>
             <v-btn>Button 3</v-btn>
           </v-btn-toggle>
         </v-col>
      </div>
      <hr>
      <h1>User list</h1>
      <div class="allUsers" v-for="user in allUsers" :key="user.id">
          <router-link
              :to="{ name: 'ProfileWorld', params: { id: user.id}}">
          {{user.name}}
          </router-link>
      </div>
  </v-container>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex'

  export default {
    name: 'HelloWorld',
    computed:mapGetters(["allUsers"]),
    methods:mapActions(['fetchUsers']),
    async mounted() {
      await this.fetchUsers();
    },
    data: () => ({

    }),
  }
</script>
<style scoped>
.allUsers{
  font-size: 20px;
}
</style>
