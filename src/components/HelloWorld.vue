<template>
  <v-container>
      <div class="allUsers" v-for="user in allUsers" :key="user.id">
          <router-link to="/" >{{user.name}}</router-link>
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
