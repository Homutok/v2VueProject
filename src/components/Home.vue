 <template>
     <v-container>
        <div class="home">
          <H1>Домашняя страница</H1>
          <h2>Справка по ссылочкам:</h2>
          <ul>
            <li><h3><router-link to="/users">Vue,Vuetify and Vuex training</router-link> - Просто тренировался</h3></li>
            <li><h3><router-link to="/others">axios training</router-link> - Тренировался с axios</h3></li>
            <li><h3><router-link to="/currency">Центробанк</router-link>- Работа с API Центробанка</h3></li>
            </ul>
        </div>
     </v-container>
    </template>
<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>

</style>