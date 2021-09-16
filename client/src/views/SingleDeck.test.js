import { shallowMount } from '@vue/test-utils';
import SingleDeck from './SingleDeck.vue'

describe('Testing SingleDeck Component Methods', () => {
    const wrapper = shallowMount(SingleDeck, {
        propsData: {
            emittedObject: {
                
                _id: "10938497987519739874", //fake id
                cards: [{cardFront:"spam",cardBack:"hool"},{cardFront:"neo",cardBack:"goo"}],
                deckName: "Javi"
            }
        }
    });

    it('correctly updates the index by 1 when updateCardIndex is called', () => {

        wrapper.vm.updateCardIndex(1);  
        expect(wrapper.vm.cardsListIndex).toBe(1); 

    })

})