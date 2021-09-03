<template>
  <div>
    <h1>Welcome to the Flash Card App!</h1>
    <br>
    <!-- <p class="displayInline"> You currently have {{this.deckList.length}} decks in your library.</p> -->
    <p class="displayInline"> You currently have an unknown number of decks in your library.</p>
    <br><br>
    <p class="displayInline">Please enter the name of your new deck into the textbox:</p>
    <input type="text" v-model="deckInput" @keyup.enter="submit"/>
    <button v-on:click="submit">submit</button>
    <br>
    <p>When you have decks, they show up here. </p>
    <p>Click on the deck that you want to work on and you will be redirected to that deck's page.</p>
    <Decks :deckList="deckList"/>
    <br>
    <img src="../assets/flash_cards.png" alt="Flash Cards">
    <br>
  </div>
</template>

<script>
import axios from 'axios';
const url = 'http://localhost:5000/api/decks/';
import Decks from '../components/Decks.vue'
export default {
  name: 'Welcome',
  components: {
    Decks
  },
  props: {
  },
  data () {
    return {
      deckInput:"",
      deckList:[]
    }
  },
  methods: {
    async submit () {
      this.deckList.push(this.deckInput);
      const response = await axios.post(url,{deckName:this.deckInput});
      if(response.status!==201){
        console.log("error: ",response);
      }
      this.deckInput = "";
    }
  },
  async created(){
    const response = await (await axios.get(url)).data; 
    console.log(response);
    // this.deckList = response.body;
    this.deckList = response;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}

.displayInline {
  display:inline;
}
</style>
