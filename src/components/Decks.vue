<template>
    <div>
        <ul>
            <li :key="deck" v-for="deck in this.deckList"> {{deck}} </li>
        </ul>
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

<style scoped>

</style>
