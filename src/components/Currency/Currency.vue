<template>
  <v-container>
    <div v-if="loading">Обновление данных...
      <v-text-field
        color="success"
        loading
        disabled
        >
      </v-text-field>
    </div>
    <div v-else>
      <h1>
          Курс по Центробанку на {{currency_list.ValCurs[0]._attr.Date._value}}
          <v-btn
            @click="load">
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-repeat" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M2.854 7.146a.5.5 0 0 0-.708 0l-2 2a.5.5 0 1 0 .708.708L2.5 8.207l1.646 1.647a.5.5 0 0 0 .708-.708l-2-2zm13-1a.5.5 0 0 0-.708 0L13.5 7.793l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0 0-.708z"/>
              <path fill-rule="evenodd" d="M8 3a4.995 4.995 0 0 0-4.192 2.273.5.5 0 0 1-.837-.546A6 6 0 0 1 14 8a.5.5 0 0 1-1.001 0 5 5 0 0 0-5-5zM2.5 7.5A.5.5 0 0 1 3 8a5 5 0 0 0 9.192 2.727.5.5 0 1 1 .837.546A6 6 0 0 1 2 8a.5.5 0 0 1 .501-.5z"/>
            </svg>
          </v-btn>
      </h1>
      <v-expansion-panels>
        <v-expansion-panel class ="currency"
                           v-for="(currency) in currency_sliced()[this.page-1] " :key="currency._attr.ID._value">
          <CurrencyInput v-bind:currency="currency"/>
        </v-expansion-panel>
      </v-expansion-panels>
      <v-pagination
        v-model="page"
        :total-visible="6"
        :length="Math.ceil(currency_list.ValCurs[0].Valute.length/perpage)"
        circle
      ></v-pagination>
      <v-col id="select-size" cols="1">
        <v-select
                v-model="perpage"
                :items="selected_size"
        ></v-select>
      </v-col>
    </div>
  </v-container>
</template>

<script>
    import Vue from 'vue'
    import axios from 'axios'
    import xmlToJSON from 'xmltojson'
    import CurrencyInput from '@/components/Currency/CurrencyInput.vue'

    Vue.use(axios)


    export default {
        name: "Central-Bank",
        data(){
            return {
                currency_list: null,
                loading: true,
                page:1,
                perpage:10,
                selected_size:[1,5,10,15,20,25],
            };
        },
      components:{
          CurrencyInput,
      },
        methods: {
            load() {
                return axios
                    .get('https://www.cbr-xml-daily.ru/daily.xml')
                    .then(response => {
                      this.currency_list = xmlToJSON.parseString((response.data));
                      console.log(response.data);})
                    .catch(error => {
                        console.log(error);
                        this.$router.push('/404')
                    })
                    .finally(() => {(this.loading = false); });
            },
          currency_sliced(){
              const chunk_size = this.perpage, chunks = [];
              for ( const cols = Object.entries( this.currency_list.ValCurs[0].Valute ); cols.length; )
                chunks.push( cols.splice(0, chunk_size).reduce( (o,[k,v])=>(o[k]=v,o), {}));
              return chunks
          }
        },
        mounted() {
            this.load()
        }
    }
</script>
<style scoped>

</style>