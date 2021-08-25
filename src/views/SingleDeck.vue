<template>
    <div>
        <h1>{{deckName}}</h1>
        <button v-on:click="updateCardIndex(-1)">Previous Card</button>
        <button v-on:click="updateCardIndex(1)">Next Card</button>
        <div class="card">
            <p >{{cardSide}}</p>
            <p v-if="!addCardFront&&!addCardBack">{{cardPrompt}}</p>
            <input type="text" placeholder="Type front text" v-model="cardFrontInput" v-if="addCardFront" @keyup.enter="flipCard"/>
            <input type="text" placeholder="Type back text" v-model="cardBackInput" v-if="addCardBack" @keyup.enter="submitCard"/>
            <button class="cardButton" v-on:click="flipCard" v-if="!addCardBack">Flip Card</button>
            <button class="cardButton" v-on:click="submitCard" v-if="addCardBack">Submit Card</button>
        </div>
        <button v-on:click="addCard">Add Card</button>
        <button v-on:click="deleteCard">Delete Card</button>
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
                {cardFront:"Sample Front",cardBack:"Sample Back"}
                ],
            cardFrontInput:"",
            cardBackInput:"",
            addCardFront:false,
            addCardBack:false,
            cardsListIndex:0
        }
    },
    methods: {
        flipCard () {
            if (this.addCardFront) {
                this.cardSide="Back";
                this.addCardBack=true;
                this.addCardFront=false;
                return;
            }
            if (this.cardSide==="Front") {
                this.cardSide="Back";
                this.cardPrompt=this.cardsList[this.cardsListIndex].cardBack;
            } else {
                this.cardSide="Front";
                this.cardPrompt=this.cardsList[this.cardsListIndex].cardFront;
            }   
        },
        addCard () {
            this.addCardFront=true;
        },
        submitCard () {
            this.cardsList.push({cardFront:this.cardFrontInput,cardBack:this.cardBackInput});
            this.addCardFront=false;
            this.addCardBack=false;
            this.cardSide="Front";
            console.log(this.cardsList);
            this.cardFrontInput="";
            this.cardBackInput="";
        },
        updateCardIndex (indexToAdd) {
            console.log(indexToAdd,"here");
            if (indexToAdd + this.cardsListIndex < 0) {
                this.cardsListIndex = this.cardsList.length-1;
            } else if (indexToAdd + this.cardsListIndex > this.cardsList.length-1) {
                this.cardsListIndex = 0;
            } else {
                this.cardsListIndex = indexToAdd + this.cardsListIndex;
            }
            this.cardSide="Front";
            this.cardPrompt=this.cardsList[this.cardsListIndex].cardFront;
        },
        deleteCard () {
            this.cardsList.splice(this.cardsListIndex,1);
        }
    },
    created () {
        this.cardPrompt=this.cardsList[0].cardFront;
    }
}
</script>

<style scoped>
.cardButton {
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
