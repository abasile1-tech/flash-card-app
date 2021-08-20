<template>
    <div>
        <h1>{{deckName}}</h1>
        <div class="card">
            <p >{{cardSide}}</p>
            <p>{{cardPrompt}}</p>
            <button id="flip">Flip Card</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        deckName: {
            type: String,
            required: true
        }
    },
    data () {
        return {
            cardSide:"Front",
            cardPrompt:""
        }
    }
}
</script>

<style scoped>
#flip {
    width: 8em;
    margin: 0em auto;
}
.card {
    border: 0.1em solid rgb(131, 131, 131);
    border-radius: 0.5em;
    padding: 0em 0em 1.5em 0em;
    width: 70%;
    max-width:20em;
    height: 20em;;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>
