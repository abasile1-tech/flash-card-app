import axios from axios;

const url = 'http://lcoalhost:5000/api/decks/';

class DeckService {
    // Get Decks
    static getDecks() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(deck => ({
                        ...deck,
                        createdAt: new Date(deck.createdAt)
                    }))
                );
            } catch(err){
                reject(err);
            }
        });
    }

    // Create Deck
    static insertDeck(text) {
        return axios.post(url, {
            text
        });
    }

    // Delete Deck
    static deleteDeck(id) {
        return axios.delete(`${url}${id}`);
    }
}

export default DeckService;