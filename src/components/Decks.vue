<template>
    <div>
        <button class=deckButtons :key="deck" v-for="deck in this.deckList">{{deck}}</button>
        <!-- <ul >
            <li :key="deck" v-for="deck in this.deckList"> {{deck}} </li>
        </ul> -->
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
  },
}
</script>

<style>
.deckButtons {
    color:blue;
    background-color: darkgrey;
    font-size: 24px;
    border: 3px solid black;
}

.deckButtons:hover {
    color: black;
    background-color: blueviolet;
    font-size: 24px;
    border: 3px solid white;
}

</style>
