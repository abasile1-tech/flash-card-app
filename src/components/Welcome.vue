<template>
  <div>
    <h1>Welcome to the Flash Card App!</h1>
    <br>
    <p class="displayInline"> You currently have {{this.deckList.length}} decks in your library.</p>
    <br><br>
    <p class="displayInline">Please enter the name of your new deck into the textbox:</p>
    <input type="text" v-model="deckInput" @keyup.enter="submit"/>
    <button v-on:click="submit">submit</button>
    <br>
    <p>When you have decks, they show up here. Click the one you want to work on.</p>
    <Decks :deckList="deckList"/>
    <br>
    <img src="../assets/flash_cards.png" alt="Flash Cards">
    <br>
    <!-- <a href="deck_view.html" target="_self">Navigate to the Deck View Page</a> -->
  </div>
</template>

<script>
import Decks from './Decks.vue'
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
    submit () {
      this.deckList.push(this.deckInput);
      this.deckInput = "";
    }
    // ,
    // goToDeck () {
    //   console.log=this.deckList;
    // }
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
