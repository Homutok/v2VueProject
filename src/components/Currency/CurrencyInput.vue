<template>
    <div>
      <v-expansion-panel-header>
        {{currency.Name[0]._text}}
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <div id="input-money">
          1 Российский рубль = {{currency.Value[0]._text}} {{currency.Name[0]._text}}
          <div class = "text-label">Введите Российские рубли</div>
          <v-text-field :rules="rules" @input="intorus(currency.Value[0]._text)" v-model="ruble" ></v-text-field>
          <div class = "text-label">Введите {{currency.Name[0]._text}}</div>
          <v-text-field :rules="rules" @input="intoanother(currency.Value[0]._text) " v-model="valute"></v-text-field>
        </div>
      </v-expansion-panel-content>
    </div>
</template>

<script>
    export default {
        name: "CurrencyInput",
        props:['currency'],
        data(){
            return{
                ruble:null,
                valute:null,
                rules: [
                    value => {
                      const pattern = /^[0-9](.*)+$/
                      console.log(value)
                      return pattern.test(value) || 'Нужно ввести число.'
                  }
                ],
            }
        },
        methods:{
          intorus(Value){
             Value= Value.replace(',','.')
             this.valute=this.ruble*Value;
          },
          intoanother(Value){
              Value= Value.replace(',','.')
              this.ruble=this.valute/Value;
          },
        }
    }
</script>

<style scoped>

</style>