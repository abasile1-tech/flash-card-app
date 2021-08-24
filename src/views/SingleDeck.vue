<template>
    <div>
        <h1>{{deckName}}</h1>
        <div class="card">
            <p >{{cardSide}}</p>
            <p>{{cardPrompt}}</p>
            <button id="flip" v-on:click="flipCard">Flip Card</button>
        </div>
        <button>Add Card</button>
        <button>Delete Card</button>
        <button>Edit Card</button>
        
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
            cardPrompt:"",
            cardsList:[
                {cardFront:"sampleFront",cardBack:"sampleBack"}
                ]
        }
    },
    methods: {
        flipCard () {
            if (this.cardSide==="Front") {
                this.cardSide="Back";
                this.cardPrompt=this.cardsList[0].cardBack;
            } else {
                this.cardSide="Front";
                this.cardPrompt=this.cardsList[0].cardFront;
            }
            
        }
    },
    created () {
        this.cardPrompt=this.cardsList[0].cardFront;
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
