<template>
  <div class="hello">
    <h1>Welcome to the Flash Card App!</h1>
    <br>
    <p>You currently have 0 decks in your library.</p>
    <p class="displayInline">Please enter the name of your new deck into the textbox:</p>
    <input type="text" v-model="deckInput"/>
    <button v-on:click="submit">submit</button>
    <br> <br>
    <img src="../assets/flash_cards.png" alt="Flash Cards">
    <br>
    <a href="deck_view.html" target="_self">Navigate to the Deck View Page</a>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
  },
  data () {
    return {
      deckInput:""
    }
  },
  methods: {
    submit () {
      console.log(this.deckInput)
    }
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
