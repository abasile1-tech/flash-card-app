<template>
    <div>
        <div class="flexContainer">
        <button class=deckButtons :key="deck" v-for="deck in this.deckList" v-on:click="goToDeck(deck)">{{deck}}</button>
        <!-- <ul >
            <li :key="deck" v-for="deck in this.deckList"> {{deck}} </li>
        </ul> -->
        </div>
    </div>
</template>

<script>
export default {
  name: 'Decks',
  props: {
      deckList: {
      type: Array,
      required: true
      }
  }
,
  methods: {
      goToDeck(deck) {
        // console.log("hello");
        // console.log(this.deckList);
        console.log(deck);
    }
  }
}
</script>

<style>
.deckButtons {
    color:blue;
    background-color: darkgrey;
    font-size: 24px;
    border: 3px solid black;
    width:fit-content;
    
}

.deckButtons:hover {
    color: black;
    background-color: blueviolet;
    font-size: 24px;
    border: 3px solid white;
    width: fit-content;
}

.flexContainer {
    display: flex;
    justify-content: center;
    row-gap: 20px;
    column-gap: 20px;
    flex-flow: wrap;
    
}

</style>
