import Welcome from './views/Welcome.vue';
// import Decks from './components/Decks.vue';
import SingleDeck from './views/SingleDeck.vue';

export default [
    {path:'/',component:Welcome},
    // {path:'/decks',component:Decks}
    {path:'/single-deck/:deckName',component:SingleDeck,props:true}
]