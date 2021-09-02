 <template>
        <v-container >
            <div v-if="loading">
                <h1>Loading...</h1>
                <v-text-field
                    color="success"
                    loading
                    disabled
                    >
                </v-text-field>
            </div>

            <div v-else
                 class="one-day-quote">
                <v-btn
                    @click="reFreshData">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-repeat" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M2.854 7.146a.5.5 0 0 0-.708 0l-2 2a.5.5 0 1 0 .708.708L2.5 8.207l1.646 1.647a.5.5 0 0 0 .708-.708l-2-2zm13-1a.5.5 0 0 0-.708 0L13.5 7.793l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0 0-.708z"/>
                        <path fill-rule="evenodd" d="M8 3a4.995 4.995 0 0 0-4.192 2.273.5.5 0 0 1-.837-.546A6 6 0 0 1 14 8a.5.5 0 0 1-1.001 0 5 5 0 0 0-5-5zM2.5 7.5A.5.5 0 0 1 3 8a5 5 0 0 0 9.192 2.727.5.5 0 1 1 .837.546A6 6 0 0 1 2 8a.5.5 0 0 1 .501-.5z"/>
                    </svg>
                </v-btn>
                <v-btn
                    @click="translateQSwitch">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"/>
                    </svg>
                </v-btn>
                <div v-if="translateswitcher">
                <p >Цитата дня:</p>
                <div class="quote-body">{{quote.body}}(рус.)</div>
                <hr>
                <a v-bind:href=gitlink+quote.author target="_blank">
                    <div class="quote-author">{{quote.author}}</div>
                </a>
                </div>
                <div v-else>
                    <p>Quote of the Day:</p>
                    <div class="quote-body">{{quote.body}}(eng.)</div>
                <hr>
                    <a v-bind:href=gitlink+quote.author target="_blank">
                        <div class="quote-author">{{quote.author}}</div>
                    </a>
                </div>
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
                quote_translated:null,
                loading: true,
                translateswitcher:false,
                gitlink:"https:en.wikipedia.org/wiki/"
            };
        },
        methods: {
            reFreshData() {
                return axios
                    .get('https://favqs.com/api/qotd')
                    .then(response => (this.quote = response.data.quote))
                    .catch(error => {
                        console.log(error);
                        this.$router.push('/404')
                    })
                    .finally(() => (this.loading = false));
            },
            translateQSwitch(){
                if(this.translateswitcher) {this.translateswitcher=false; }
                else  {this.translateswitcher=true; }
            },
        },
        mounted() {
            this.reFreshData()
        }
    }
</script>

<style scoped>
.one-day-quote{
   margin-top: 20px;
   width: 600px;
   padding: 0 40px 40px;
   background: rgba(255,169,88,0.64);
   border-radius: 5px;
   color: #2F242C;
}
.one-day-quote p{
   display: block;
   font-size: 2em;
   margin-block-start: 0.67em;
   margin-block-end: 0.67em;
   margin-inline-start: 0px;
   margin-inline-end: 0px;
   font-weight: bold;

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