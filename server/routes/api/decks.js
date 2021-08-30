const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Decks
router.get('/', async (req, res) => {
    const decks = await loadPostsCollection();
    res.send(await decks.find({}).toArray());
});

// Add Deck

// Delete Deck

async function loadPostsCollection() {
    const client = await mongodb.MongoClient.connect
    ('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false', {
        useNewUrlParser: true
    });

    return client.db('flashcardapp').collection('decks');
}


module.exports = router;