<template>
    <div>
        <h1>{{deckName}}</h1>
        <div>
            <p >{{cardSide}}</p>
            <p>{{cardPrompt}}</p>
            <button>Flip Card</button>
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

</style>
