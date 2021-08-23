 <template>
     <v-container>
            <div v-if="loading">Loading...</div>
            <div v-else
                 class="one-day-quote">
                <p>Цитата дня:</p>
                <div class="quote-body">{{quote.body}}</div>
                <hr>
                <a v-bind:href="'https:en.wikipedia.org/wiki/'">
                    <div class="quote-author">{{quote.author}}</div>
                </a>
            </div>
     </v-container>
    </template>
<script>
    import Vue from 'vue'
    import axios from 'axios'

    Vue.use(axios)

    export default {
        name: "others",
        data(){
            return {
                quote: null,
                loading: true,
            };
        },
        mounted() {
            axios
                .get('https://favqs.com/api/qotd')
                .then(response => (this.quote = response.data.quote))
                .catch(error => console.log(error))
                .finally(() => (this.loading = false));
        }
    }
</script>

<style scoped>
.one-day-quote{
    background-color: aliceblue;
    border: solid 1px;

}
.one-day-quote p{
    font-style: oblique;
    font-weight: bold;
    height: auto;
    font-size: 30px;
}
.quote-author::before{
    content: "Автор: ";
}
.quote-author{
    font-style: italic;
    font-size: 10px;
}
.quote-body{
    font-style: italic;
    font-size: 20px;
}
</style>